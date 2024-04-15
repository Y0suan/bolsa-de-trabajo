import React from 'react';
import OficioCard from './Card/OficioCard';

export const Profecionales = () => {
  return (
    <div className='flex flex-wrap gap-4 w-screen px-20 py-10 justify-center '>
    <OficioCard
      imagen="https://images.unsplash.com/photo-1610088441520-4352457e7095?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      nombre="Juan González"
      oficio="Electricista"
      presentacion="Especializado en instalaciones eléctricas residenciales y mantenimiento de sistemas eléctricos."
      descripcion="Juan González es un electricista con amplia experiencia en el campo, ofreciendo servicios de calidad."
    />
    <OficioCard
      imagen="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      nombre="María López"
      oficio="Plomera"
      presentacion="Con experiencia en reparación de tuberías, instalación de sistemas de agua caliente y fría."
      descripcion="María López es una plomera comprometida con solucionar cualquier problema relacionado con plomería en hogares y negocios."
    />
    <OficioCard
      imagen="https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=1378&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      nombre="Carlos Martínez"
      oficio="Carpintero"
      presentacion="Experto en diseño y fabricación de muebles a medida, así como en reparaciones y remodelaciones de carpintería."
      descripcion="Carlos Martínez es un carpintero creativo y habilidoso que transforma la madera en obras de arte funcionales."
    />
    <OficioCard
      imagen="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      nombre="Laura García"
      oficio="Diseñadora de Interiores"
      presentacion="Con habilidades para crear espacios funcionales y estéticamente agradables, adaptados a las necesidades y gustos de sus clientes."
      descripcion="Laura García es una diseñadora de interiores apasionada por crear ambientes acogedores y personalizados para sus clientes."
    />
    <OficioCard
      imagen="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      nombre="Roberto Fernández"
      oficio="Pintor"
      presentacion="Experto en pintura interior y exterior, con atención al detalle y acabados de alta calidad."
      descripcion="Roberto Fernández es un pintor profesional con años de experiencia embelleciendo hogares y espacios comerciales con sus pinceles."
    />
    <OficioCard
      imagen="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      nombre="Ana Martínez"
      oficio="Jardinera"
      presentacion="Especializada en diseño, mantenimiento y paisajismo de jardines, terrazas y espacios verdes."
      descripcion="Ana Martínez es una jardinera dedicada a crear oasis naturales en entornos urbanos, combinando plantas y elementos decorativos."
    />
    <OficioCard
      imagen="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      nombre="Pedro Rodríguez"
      oficio="Fontanero"
      presentacion="Con amplios conocimientos en instalación y reparación de sistemas de fontanería en hogares y edificios comerciales."
      descripcion="Pedro Rodríguez es un fontanero confiable y eficiente que resuelve problemas de fontanería de manera rápida y efectiva."
    />
    <OficioCard
      imagen="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      nombre="Marcela Pérez"
      oficio="Albañil"
      presentacion="Con experiencia en construcción, reparación y remodelación de estructuras de concreto, ladrillo y otros materiales."
      descripcion="Marcela Pérez es una albañil comprometida con la calidad y la seguridad en cada proyecto de construcción o renovación en el que participa."
    />
    <OficioCard
      imagen="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      nombre="David Sánchez"
      oficio="Instalador de Aire Acondicionado"
      presentacion="Con conocimientos en instalación, mantenimiento y reparación de sistemas de aire acondicionado residenciales y comerciales."
      descripcion="David Sánchez es un instalador de aire acondicionado con la habilidad de mantener el ambiente fresco y confortable en cualquier espacio."
    />
  </div>
  );
};
