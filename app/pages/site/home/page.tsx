'use client';
import Feed from "@/app/components/ui/Seguidores/feed";
function feed() {
  return (
    <div>
      <Feed />
    </div>
  )
}

export default feed;

// 'use client';

// import React, { useState } from 'react';
// import PostCard from './components/postCard';
// import { Aside } from '../../../components/ui/Global/aside';

// function InstagramGrid() {
//   // Estado para controlar si el aside está abierto o cerrado
//   const [isAsideOpen, setIsAsideOpen] = useState(true);

//   // Función para cerrar el aside
//   const closeAside = () => {
//     setIsAsideOpen(false);
//   };

//   // Datos de ejemplo para los posts
//   const posts = [
//     { id: 1, image: 'https://i.blogs.es/0ca9a6/aa/1366_2000.jpeg', caption: 'Descripción de la imagen 1', likes: 20, comments: 10 },
//     { id: 2, image: 'https://media.es.wired.com/photos/6501e7429fa9000811a95fe8/16:9/w_2560%2Cc_limit/Adobe%2520Firefly.jpeg ', caption: 'Descripción de la imagen 2', likes: 15, comments: 10 },
//     { id: 3, image: 'https://ethic.es/wp-content/uploads/2023/03/imagen-1280x768.jpg', caption: 'Descripción de la imagen 3', likes: 30, comments: 10 },
//     // Puedes agregar más objetos de post según sea necesario
//   ];

//   return (
//     <div className="grid grid-cols-1 gap-4 mx-auto my-auto md:w-1/2 w-full">

//       <Aside />
//       {isAsideOpen && <Aside onClose={closeAside} />} {/* Renderiza el aside solo si está abierto */}
//       {posts.map((post) => (
//         <PostCard key={post.id} post={post} />
//       ))}
//     </div>
//   );
// }

// export default InstagramGrid;
