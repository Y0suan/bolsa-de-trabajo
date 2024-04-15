import React from 'react';
import OficioCard from './Card/OficioCard';

export const Oficio = () => {
  return (
    <div className='flex gap-4 w-screen  px-20 py-20 ' >
      <OficioCard
        imagen="https://images.unsplash.com/photo-1610088441520-4352457e7095?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        nombre="Juan González"
        oficio="Electricista"
        presentacion="Especializado en instalaciones eléctricas residenciales y mantenimiento de sistemas eléctricos."
        descripcion="Juan González es un electricista con amplia experiencia en el campo, ofreciendo servicios de calidad."
      />
      <OficioCard
        imagen="https://images.unsplash.com/photo-1541823709867-1b206113eafd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        nombre="María López"
        oficio="Fontanera"
        presentacion="Con experiencia en reparación de tuberías, instalación de sanitarios y sistemas de calefacción."
        descripcion="María López es una fontanera comprometida con ofrecer soluciones eficientes a sus clientes."
      />
        <OficioCard
        imagen="https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        nombre="María López"
        oficio="Fontanera"
        presentacion="Con experiencia en reparación de tuberías, instalación de sanitarios y sistemas de calefacción."
        descripcion="María López es una fontanera comprometida con ofrecer soluciones eficientes a sus clientes."
      />
    </div>
  );
};
