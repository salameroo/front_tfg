'use client';
import dynamic from 'next/dynamic';
import LoadingSpinner from '@/components/loading/spinner';

// Cargar el componente `MapView` dinámicamente
const MapView = dynamic(
    () => import('@/components/posts/locations'),
    { ssr: false, loading: () => <LoadingSpinner /> }
);

const Page: React.FC = () => (
    <div>
        {/* El componente `MapView` no será pre-renderizado */}
        <MapView />
    </div>
);

export default Page;
