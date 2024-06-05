'use client';
import dynamic from 'next/dynamic';
// import Feed from "@/app/components/ui/Seguidores/feed";
const Feed = dynamic(
  // Utiliza una función anónima que retorna una promesa con el componente importado.
  () => import('@/app/components/ui/Seguidores/feed'),
  // Establece la opción 'ssr' en 'false' para deshabilitar el pre-renderizado en el lado del servidor.
  { ssr: false }
);

// Define un componente funcional 'Page' que renderiza contenido y el componente dinámico 'MiComponenteDificil'.
const Page = () => (
  <div className='container mx-auto p-4'>
    <Feed />
  </div>
);

// Exporta el componente 'Page' como el componente predeterminado.
export default Page;
