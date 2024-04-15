import Link from 'next/link'
import React from 'react'
import { FcBusinessContact } from "react-icons/fc";
import {Image} from "@nextui-org/react";


export const HomeSimple = () => {
  return (
    <div className=' overflow-x-hidden w-screen h-auto flex  justify-center items-center  ' >
        <div className=' w-[90%] h-auto bg-blue-50 rounded-xl my-10  py-16 flex flex-col sm:flex-row gap-8 items-center justify-center' >

        <div className=' sm:w-2/5 relative ' > 
        <Image
              isBlurred
              width={540}
              alt="NextUI Album Cover"
               className='m-5 w-[90%] ' 
               src='https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' >
        </Image>      
      
        </div>
        <div className=' sm:w-2/5 text-gray gap-5 p-5 sm:pl-5 flex flex-col text-gray-900 ' >
        <h1 className=' font-semibold  text-5xl  ' >Bolsa de Trabajo</h1>
        <p>Forma parte y accede a un mundo de nuevas oportunidades laborales. Únete a nuestra comunidad y descubre un amplio abanico de posibilidades para avanzar en tu carrera profesional.</p>
        <Link className=' bg-blue-500 text-white p-2 w-fit rounded ' href={'/'} >Descubre Mas</Link>
        </div>
        </div>
    </div>
  )
}
