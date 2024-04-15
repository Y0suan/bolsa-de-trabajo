import React from 'react';
import { BusquedaLaboralCard } from './Card/BusquedaLaboralCard';


export const BusquedaLaboral = () => {
  return (
    <div className='flex gap-4 w-screen  px-20 py-20 ' >
          <BusquedaLaboralCard
        logo="https://arauco.com/argentina/wp-content/uploads/sites/15/2017/07/logo-arauco-1.png"
        nombre="Arauco"
        direccion="Calle Falsa 123"
        localidad="Eldorado"
        telefono="123-456-7890"
        rubro="Tecnología"
        rubroEspecifico="Desarrollo de software"
        descripcion="Se busca desarrollador web para trabajar en proyectos emocionantes y colaborativos. Requisitos: experiencia en HTML, CSS y JavaScript."
        archivo="Curriculum Vitae"
      />

      <BusquedaLaboralCard
        logo="https://scontent.fcnq2-2.fna.fbcdn.net/v/t39.30808-6/326787535_892202791815202_2045471283374148784_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHJq3grjVWqtUwZhycXEwPsVv22tlvEWUNW_ba2W8RZQzV4-x0f-hj5xNQhhxGP27yZcvM80shWq_GzDFB-YAQ-&_nc_ohc=ZWUlx2ceQ_EAb7Zftby&_nc_ht=scontent.fcnq2-2.fna&oh=00_AfA-WQtyaS6_SvPe6XAYajx33f7dYaMCwpiCoYhV7ig_7w&oe=661AE097"
        nombre="Lobato"
        direccion="Avenida Principal 456"
        localidad="Eldorado"
        telefono="987-654-3210"
        rubro="Marketing"
        rubroEspecifico="Redes Sociales"
        descripcion="Estamos buscando un experto en marketing digital para gestionar nuestras redes sociales y aumentar la presencia en línea de nuestra empresa."
        archivo="Portafolio de trabajo"
      />

      <BusquedaLaboralCard
        logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT31SA3knRu8NP2-2OEYhIarrgelpDjcAn7jX8v_pTbcdKGfxqI6MavedFDtjHi2irUy9s&usqp=CAU"
        nombre="Instituto Hindenburg"
        direccion="Plaza Mayor 789"
        localidad="Eldorado"
        telefono="456-789-0123"
        rubro="Educación"
        rubroEspecifico="Enseñanza Virtual"
        descripcion="Se requiere un tutor en línea para impartir clases de matemáticas a estudiantes de secundaria. Flexibilidad de horario y experiencia previa deseada."
        archivo="Certificados de formación"
      />

    </div>
  )
}

