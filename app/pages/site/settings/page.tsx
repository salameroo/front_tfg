'use client';
import dynamic from 'next/dynamic';
import LoadingSpinner from '@/components/loading/spinner';

// Cargar los componentes dinámicamente
const Logout = dynamic(
    () => import('@/components/Login_Logout/LogoutButton'),
    { ssr: false, loading: () => <LoadingSpinner /> }
);

const Ajustes = dynamic(
    () => import('@/components/settings/settings'),
    { ssr: false, loading: () => <LoadingSpinner /> }
);

const PageAjustes = () => {
    return (
        <div className="bg-gray-400 dark:bg-dark-bg min-h-screen flex flex-col m-0 p-0 justify-center align-center">
            <Ajustes />
            <div className='md:hidden'>
                <Logout />
            </div>
        </div>
    )
}
export default PageAjustes
