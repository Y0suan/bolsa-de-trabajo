import React from 'react'
import ModalOfico from './Modal/modalOficio'
import ModalProfecionales from './Modal/modalProdecionales'
import ModalBusquedaLaboral from './Modal/modalBusquedaLaboral'
import ModalOfertaLaboral from './Modal/modalOfertaLaboral'
import {Image} from "@nextui-org/react";


export const IntroBolsaDeTrabajo = () => {
  return (
    <div className=' w-screen h-auto px-10 sm:px-20 sm:py-10  pt-10 flex flex-col sm:flex-row gap-5 ' >
        <div className='sm:w-2/4 flex flex-col justify-center '>
        <Image width={300} alt='logo-Municipal' className=" w-56 " src="https://res.cloudinary.com/dzqdjsrez/image/upload/v1704793637/agenda-next-panel/qwds1dfaepxputm1ln8q.jpg" ></Image>
        <h2 className=' text-gray-900 font-semibold text-4xl' > Bolsa de Trabajo</h2>
        <p>Descubre todo lo que tenemos para ofrecerte en el mercado laboral local, con una amplia oferta . <br/> Haciendo clic en cualquira de los temas y descubre más.</p>
        </div>
        <div className=' sm:w-2/4 flex  gap-3 justify-center items-center ' >
            <div className='flex  flex-col gap-2' >           
            {/* <ModalOfico/> */}
            <ModalProfecionales/>
            </div>
            <div className=' flex  flex-col gap-2'>
            <ModalBusquedaLaboral/>
            <ModalOfertaLaboral/>
            </div>
        </div>
    </div>
  )
}
