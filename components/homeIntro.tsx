import Link from 'next/link'
import React from 'react'
import { FcBusinessContact } from "react-icons/fc";
import {Image} from "@nextui-org/react";

const HomeIntro = () => {
  return (
    <div className='  flex  w-screen p-20 gap-8 items-center justify-center ' >
        <div className=' sm:w-2/5 text-gray gap-5 pr-5 flex flex-col text-white ' >
        <h1 className=' font-semibold  text-5xl  ' >Forma Parte</h1>
        <p>Forma parte de nuestra bolsa de trabajo y accede a un mundo de nuevas oportunidades laborales. Únete a nuestra comunidad y descubre un amplio abanico de posibilidades para avanzar en tu carrera profesional.</p>
        <Link className=' bg-orange-500 text-white p-2 w-fit rounded ' href={'/'} >Descubre Mas</Link>
        </div>
        <div className=' sm:w-2/5 relative ' > 
        <Image
              isBlurred
              width={540}
              alt="NextUI Album Cover"
               className='m-5 ' 
               src='https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' >
        </Image>      
        <FcBusinessContact className=' text-5xl absolute bg-white rounded top-[-20px] left-[-20px] ' />
        </div>
    </div>
  )
}

export default HomeIntro