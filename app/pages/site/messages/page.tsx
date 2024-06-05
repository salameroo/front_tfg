'use client';
import dynamic from 'next/dynamic';
import LoadingSpinner from '@/components/loading/spinner';

// Cargar los componentes dinámicamente
// const Messages = dynamic(
//   () => import('@/components/messages/messages'),
//   { ssr: false, loading: () => <LoadingSpinner /> }
// );

const MessagesDos = dynamic(
  () => import('@/components/vercel/component/messages'),
  { ssr: false, loading: () => <LoadingSpinner /> }
);

export default function Mensajeria() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Tus Mensajes</h1>
      {/* <Messages /> */}
      <MessagesDos />
    </div>
  );
}
