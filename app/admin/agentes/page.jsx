'use client'
import { FilterList } from '@mui/icons-material'
import {  Delete, DeleteIcon, Edit, Edit2, EllipsisVertical, LucideEdit2, Trash } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { useState, useRef } from 'react'
import { FaSearch } from "react-icons/fa";
import { updateDoc, deleteDoc, doc } from 'firebase/firestore'
import { set } from 'mongoose'


export default function Home({placeholder = "Pesquisar..."}) {

    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [allData, setAllData] = useState([]);
    const inputRef = useRef(null);

      
    const [user, setUser] = React.useState([]);


    const [editUser, setEditUser] = useState(null);
    const [editNome, setEditNome] = useState("");
    const [editEmail, setEditEmail] = useState("");
    const [editTipo, setEditTipo] = useState("");
    
      
    useEffect(() => {
      const fetchData = async () => {
        const snap = await getDocs(collection(db, "users"));
        const data = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setAllData(data);
      };
      fetchData();
    }, []);
  
    
    useEffect(() => {
      if (open) inputRef.current?.focus();
      const onKey = (e) => e.key === "Escape" && setOpen(false);
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }, [open]);
  
    
    useEffect(() => {
      if (query.trim() === "") {
        setResults([]);
        return;
      }
  
      const filtered = allData.filter((item) =>
        Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(query.toLowerCase())
      );
  
      setResults(filtered);
    }, [query, allData]);
  
    const handleSearch = () => {
      if (query.trim() === "") return;
      console.log("Buscando:", query);
    };
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const quarySnapshot = await getDocs(collection(db, "users"));
        const usersList = quarySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUser(usersList);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      } finally {
      }
    };

    fetchUser();
  }, []);


  const userFiltered = user.filter((user) =>
     {
      const nome = user.nome ? user.nome.toLowerCase() : "";
      const email = user.email ? user.email.toLowerCase() : "";

      return nome.includes(query.toLowerCase()) || email.includes(query.toLowerCase());
     });


  
  async function handleDelete(userId) {
    try{
      await deleteDoc(doc(db, "users", userId));
      setUser((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    }catch (error) {
      console.error("Erro ao deletar usuário:", error);
    }
  }



  function handleOpenEdit(user) {
    setEditUser(user);
    setEditNome(user.nome);
    setEditEmail(user.email);
    setEditTipo(user.tipo);
  }

  async function handleSaveEdit() {
    try{
      await updateDoc(doc(db, "users", editUser.id), {
        nome: editNome,
        email: editEmail,
        tipo: editTipo,
      });

      setUser((prevUsers) =>
        prevUsers.map((user) =>
          user.id === editUser.id
            ? { ...user, nome: editNome, email: editEmail, tipo: editTipo }
            : user
        )
      );

      setEditUser(null);
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
    }
  }

  return (
    <div  className="relative min-h-screen font-[Montserrat] bg-gradient-to-br from-gray-200 via-gray-400 to-gray-700 overflow-hidden">
        <div className='relative sm:ml-15'>
          <header className='p-6 bg-white/10 rounded-lg shadow-lg justify-arounded-2xl border border-white/30 flex justify-between items-center mb-6'>
            <h1 className='text-3xl font-bold'>Usuários</h1> 
            <button className='p-4 rounded-2xl font-black text-lg text-white bg-gradient-to-r from-green-700 to-green-900 
                         shadow-lg hover:shadow-green-500/40 
                         hover:from-green-600 hover:to-green-800 transition-all 
                         min-w-[220px] h-[60px]'>
            Adicionar usuário             
            </button>
          </header>

    <div role="search" className="ml-3 flex flex-col items-start relative">
        <div className="flex items-center w-full">
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="h-10 border-solid border-[2px] border-[#1B7E44] border-r-0 rounded-l-md py-1 px-3 focus:outline-none text-gray-700"
            type="text"
            placeholder={placeholder}
            aria-label="Campo de pesquisa"
          />
          <button
            onClick={handleSearch}
            className="h-10 bg-[#1B7E44] p-2 rounded-r-md border-solid border-[2px] border-l-0 border-[#1B7E44]"
            aria-label="Executar busca"
          >
            <FaSearch size={15} color="#FAFBFC" />
          </button>
        </div>

        {/* RESULTADOS */}
        {results.length > 0 && query.trim() !== "" && (
          <div className="absolute top-10 left-0 w-[260px] bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
            {results.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setQuery(item.nome || item.email || "");
                  setResults([]);
                }}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
              >
                {item.nome || item.email || "Sem nome"}
              </div>
            ))}
          </div>
        )}
      </div>


          <div className='p-4 flex justify-safe'>
            <button className='flex items-center'>
             <FilterList className='h-5 w-5 text-gray-600'/>
             <span className='text-gray-600 text-xl ml-3'>Filtrar</span>
             </button>
          </div>


          <div className='overflow-x-auto'>
            <table className='text-lg w-[99%] mx-auto bg-white/10 shadow-lg p-6 border-l-t-b border-white/30'>
              <thead>
                <tr className='border-b border-white/30'>
                  <th className='px-5 py-3 text-left tracking-wider'>Usuário</th>
                  <th className='px-4 py-3 text-left tracking-wider border border-white/30'>Email</th>
                  <th className='px-5 py-3 text-left tracking-wider border border-white/30'>Tipo usuário</th>
                  <th className='px-2 text-center border-t border-white/30'></th>
                </tr>
              </thead>
              <tbody> 
                {userFiltered.map((user) => (
                  <tr key={user.id} className='border-b border-white/30'>
                  <td className='px-5 py-3 text-left'>
                      {user.nome}
                  </td>
                  <td className='px-4 py-3 text-left border border-white/30'>
                      {user.email}
                  </td>
                  <td className='px-5 py-3 text-left border border-white/30'>{user.tipo}</td>
                  <td className=' text-center gap-4 space-x-3'>
                      <button  onClick={() => handleOpenEdit(user)} className=''>
                        <Edit className='h-7 w-7 text-green-900'/>
                      </button>
                      <button  onClick={() => handleDelete(user.id)} className=''>
                        <Trash className='h-7 w-7 text-red-900'/>
                      </button>
                  </td>
                </tr>
              ))}
                
              </tbody>
            </table>
          </div>
              {editUser && (
                  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                    <div className="bg-white/50 p-6 rounded-xl shadow-lg w-[450px]">
                      <h2 className="text-3xl text-center text-green-800 font-bold mb-4">Editar Usuário</h2>

                      <label className="font-bold block mb-2 text-xl">Nome</label>
                      <input
                        className="w-full text-lg border border-gray-600 p-2 rounded mb-3 focus:outline-none focus:border-gray-950" 
                        value={editNome}
                        onChange={(e) => setEditNome(e.target.value)}
                      />

                      <label className="block mb-2 font-bold text-xl">Email</label>
                      <input
                        className="w-full text-lg border border-gray-600 focus:outline-none focus:border-gray-950 p-2 rounded mb-3"
                        value={editEmail}
                        onChange={(e) => setEditEmail(e.target.value)}
                      />

                      <label className="block mb-2 font-bold text-xl">Tipo</label>
                      <input
                        className="w-full text-lg border focus:outline-none focus:border-gray-950    border-gray-600 p-2 rounded mb-3"
                        value={editTipo}
                        onChange={(e) => setEditTipo(e.target.value)}
                      />

                      <div className="flex justify-between mt-4">
                        <button
                          className=" text-white bg-red-900 px-4 py-2 rounded"
                          onClick={() => setEditUser(null)}
                        >
                          Cancelar
                        </button>

                        <button
                          className="bg-green-900 text-white px-4 py-2 rounded"
                          onClick={handleSaveEdit}
                        >
                          Salvar
                        </button>
                      </div>
                    </div>
                  </div>
                )}

        </div>
    </div>

    
  )
}
