import React from 'react'
import Link from 'next/link'
import  Form  from 'next/form'

const Ouvidoria = () => {
  return (
    <div className='w-full items-center p-10 mb-[80px]'>
      <div className='flex flex-col justify-center items-center p-7'>
        <h1 className='text-5xl  font-bold text-[#10783B] text-center mb-7'>Ouvidoria</h1>
         <h3 className='font-bold font[Montserrat] text-3xl mb-2 text-left'>O que é ouvidoria?</h3>
         <p className='text-justify font-normal mb-4 text-lg'>
          A Ouvidoria é o canal oficial de diálogo entre você e a Secretaria. Aqui você pode registrar sugestões,<br/> 
          elogios, solicitações, denúncias e reclamações. Nosso compromisso é ouvir, acompanhar cada manifestação<br/>
          e buscar soluções, garantindo transparência e melhoria contínua dos serviços públicos.
          </p>

         <div className="mt-3">
            <Link href="">
              <button className="bg-[#1B7E44] p-3 text-white rounded-sm font-base px-14">
                {" "}
                Registrar manisfestação 
              </button>
            </Link>
          </div>
      </div>
      <div className='mx-[90px] mt-[100]'>
        <Form action="" className='border-3 border-gray-400 p-6 px-[100px] flex flex-col gap-4 rounded-lg items-center'>
            <h2 className='text-2xl text-center text-[#fc8a0e] font-semibold mb-10'>Registre aqui sua manisfestação</h2>
            <input type='email' placeholder='E-mail' className='p-3 border-2 border-gray-300 rounded-lg w-full focus:outiline-2 focus:outline-[#fc8a0e]' required/>
            <input type='text' placeholder='Descreva o problema' className='p-3 border-2 border-gray-300 rounded-lg mt-2 pt-7 pb-[210px] mb-5 w-full focus:outiline-2 focus:outline-[#fc8a0e]' required/>
            <input type="submit" name='Enviar' className='bg-[#10783b] text-white rounded-md p-3 w-[260px] hover:bg-[#045023] items-center'/>
        </Form>
      </div>
    </div>
  )
}

export default Ouvidoria
