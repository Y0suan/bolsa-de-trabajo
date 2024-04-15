import React from 'react';
import NoticiasCard from './Card/NoticiasCard';

export const UltimasNoticias = () => {
  // Noticias de ejemplo
  const noticias = [
    {
      fecha: "05/04/2024",
      tema: "Empleo",
      titulo: "Nuevas oportunidades laborales en la industria tecnológica",
      imagen: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      fecha: "06/04/2024",
      tema: "Cursos",
      titulo: "Curso gratuito de programación web comienza el próximo mes",
      imagen: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      fecha: "07/04/2024",
      tema: "Empleo",
      titulo: "Compañía X busca contratar desarrolladores de software",
      imagen: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      fecha: "08/04/2024",
      tema: "Cursos",
      titulo: "Aprende diseño gráfico con nuestro nuevo curso en línea",
      imagen: "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=1547&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className=' w-[100%] flex flex-col  px-10 sm:px-20 pb-20  gap-8'>
        <div>
        <h2 className='sm:w-3/5 text-gray-900 font-semibold text-4xl' >Ultimas Noticias</h2>
        <h3 className='text-blue-700 text-xl' >Mantenete al tanto de todo</h3>
        </div>
      <div className=' w-[100%] flex gap-4 flex-col sm:flex-row '>
      {noticias.map((noticia, index) => (
        <NoticiasCard
          key={index} 
          fecha={noticia.fecha}
          tema={noticia.tema}
          titulo={noticia.titulo}
          imagen={noticia.imagen}
        />
      ))}
      </div>
    </div>
  );
};
