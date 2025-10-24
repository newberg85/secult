'use client'

import React, { useState } from 'react'
import { assets } from '@/Assets/assets'
import Image from 'next/image'

const page = () => {

    const [image, setImage] = useState(false)

  return (
    <>
    <form className='pt-5 px-5 sm:pt-12 sm:pl-16'>
        <p className='text-xl'>Adicionar Imagem</p>
        <label htmlFor="image">
            <Image className='mt-4' src={!image?assets.upload_area:URL.createObjectURL(image)} width={140} height={70} alt=''/>
        </label>
        <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
        <p className='text-xl mt-4'>Titulo da Edital</p>
        <input className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type="text" placeholder='Escreva aqui' required />
        <p className='text-xl mt-4'>Descrição do Edital</p>
        <textarea className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type="text" placeholder='Escreva o conteudo' rows={6} required />
        <p className='text-xl mt-4'>Categoria</p>
        <select name="category" className='w-40 mt-4 px-4 py-3 border text-gray-500'>
          <option value="Cultura">Cultura</option>
          <option value="Turismo">Turismo</option>
          <option value="Evento">Evento</option>
        </select>
        <br />
        <button type='submit' className='mt-8 w-40 h-12 bg-black text-white'>Adicionar</button>
    </form>
    </>
  )
}

export default page