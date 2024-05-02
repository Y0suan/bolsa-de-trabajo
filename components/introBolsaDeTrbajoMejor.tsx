import React from 'react'
import { FcBriefcase } from 'react-icons/fc'
import { FaCheck } from "react-icons/fa";
import {Button} from "@nextui-org/react";

export const IntroBolsaDeTrabajoMejor = () => {
  return (
    <div className='w-screem py-28 px-20' >
         <h2 className=' text-gray-900 font-semibold text-4xl' > Bolsa de Trabajo</h2>

         <div className='flex gap-4 justify-center py-5' >

            <div className=' w-1/3 flex flex-col gap-4 p-10 border-1 border-white shadow hover:border-blue-500 rounded'>
                <h3 className='text-xl font-semibold uppercase ' >Profesionales</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus</p>
                <ul className='flex flex-col gap-2 ' >
                  <li className='flex gap-2' ><FaCheck className='text-blue-500'/> Profecionales de Oficio</li>
                  <li className='flex gap-2' ><FaCheck className='text-blue-500'/>  Profecionales Matriculados</li>
                  <li className='flex gap-2' ><FaCheck className='text-blue-500'/>  Personal Especilizado</li>
                </ul>
                <Button color="primary" >Forma Parte</Button>
            </div>

            <div className=' w-1/3 flex flex-col gap-4 p-10 border-1 border-white shadow hover:border-blue-500 rounded'>
                <h3 className='text-xl font-semibold uppercase ' >Busqueda Laboral</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus</p>
                <ul className='flex flex-col gap-2 ' >
                  <li className='flex gap-2' ><FaCheck className='text-blue-500'/> Profecionales de Oficio</li>
                  <li className='flex gap-2' ><FaCheck className='text-blue-500'/>  Profecionales Matriculados</li>
                  <li className='flex gap-2' ><FaCheck className='text-blue-500'/>  Personal Especilizado</li>
                </ul>
                <Button color="primary" >Forma Parte</Button>
            </div>


            <div className=' w-1/3 flex flex-col gap-4 p-10 border-1 border-white shadow hover:border-blue-500 rounded'>
                <h3 className='text-xl font-semibold uppercase ' >Oferta Laboral</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus</p>
                <ul className='flex flex-col gap-2 ' >
                  <li className='flex gap-2' ><FaCheck className='text-blue-500'/> Profecionales de Oficio</li>
                  <li className='flex gap-2' ><FaCheck className='text-blue-500'/>  Profecionales Matriculados</li>
                  <li className='flex gap-2' ><FaCheck className='text-blue-500'/>  Personal Especilizado</li>
                </ul>
                <Button color="primary" >Forma Parte</Button>
            </div>




         </div>

    </div>
  )
}
