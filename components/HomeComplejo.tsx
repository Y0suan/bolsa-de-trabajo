"use client"
import React from 'react'
import { Link } from 'react-router-dom'

export const HomeComplejo = () => {
  return (
    <div className=' overflow-x-hidden w-[100%] h-[100vh] flex relative justify-end ' >
        <div className=' flex justify-center items-center left-0 bg-gradient-to-r from-blue-600 to-blue-500 absolute w-2/4 h-[85%]  borde-inferior-derecho' >
        <div className='flex flex-col w-96 gap-8 text-white ' >
        <h1 className=' font-bold  text-7xl  ' >Bolsa de Trabajo</h1>
        <p>Forma parte y accede a un mundo de nuevas oportunidades laborales. Únete a nuestra comunidad y descubre un amplio abanico de posibilidades para avanzar en tu carrera profesional.</p>
       
        </div>
        </div>
        <img className='borde-inferior-izquierdo' src='https://images.unsplash.com/photo-1616587226157-48e49175ee20?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ></img>
    </div>
  )
}
