import React from 'react'
import { FaSearch } from 'react-icons/fa' 

export const Pesquisar = () => {
  return (
    <div className="flex items-center">
                <input
                  className="h-8 border-solid border-[2px] border-[#1B7E44] border-r-0 rounded-l-md py-1 px-3 focus:outline-none text-gray-700"
                  type="text"
                  placeholder="Pesquisar..."
                />
                <button className="h-8 bg-[#1B7E44] p-2 rounded-r-md border-solid border-[2px] border-l-0 border-[#1B7E44]">
                  <FaSearch size={15} color="#FAFBFC" />
                </button>
    </div>
  )
}
