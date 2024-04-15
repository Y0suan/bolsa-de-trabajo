import React from 'react'
import CursosCard from './Card/CursosCard'

export const Cursos = () => {
  return (
    <div className=' w-screen h-auto px-10 sm:px-20 py-32 '>
        <h2 className='sm:w-3/5 text-gray-900 font-semibold text-4xl' >Potencia tu Carrera : Cursos y Capacitaciones</h2>
        <h3 className='text-blue-700 text-xl' >Amplía tus Conocimientos</h3>
        <div className='w-[100%] flex  flex-col sm:flex-row  py-10 gap-4'>
        <CursosCard
           titulo="Introducción a la Programación Web"
           fecha="10 de mayo de 2024"
           arancel="Gratis"
           imagen="https://images.unsplash.com/photo-1555066932-e78dd8fb77bb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <CursosCard
           titulo="Marketing Digital Avanzado"
           fecha="15 de junio de 2024"
           arancel="Arancelado"
           imagen="https://images.unsplash.com/photo-1587614313085-5da51cebd8ac?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <CursosCard
           titulo="Gestión Efectiva del Tiempo"
           fecha="25 de abril de 2024"
           arancel="Arancelado"
           imagen="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <CursosCard
           titulo="Gestión Efectiva del Tiempo"
           fecha="25 de abril de 2024"
           arancel="Arancelado"
           imagen="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        {/* <CursosCard
           titulo="Introducción a la Programación Web"
           fecha="10 de mayo de 2024"
           arancel="Gratis"
           imagen="https://images.unsplash.com/photo-1555066932-e78dd8fb77bb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <CursosCard
           titulo="Marketing Digital Avanzado"
           fecha="15 de junio de 2024"
           arancel="Arancelado"
           imagen="https://images.unsplash.com/photo-1587614313085-5da51cebd8ac?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <CursosCard
           titulo="Gestión Efectiva del Tiempo"
           fecha="25 de abril de 2024"
           arancel="Arancelado"
           imagen="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        /> */}


        </div>
    </div>
  )
}
