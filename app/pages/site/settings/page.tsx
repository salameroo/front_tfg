'use client';
import dynamic from 'next/dynamic';
import LoadingSpinner from '@/components/loading/spinner';

// Cargar los componentes dinámicamente
const Settings = dynamic(
    () => import('@/components/Perfil/settings'),
    { ssr: false, loading: () => <LoadingSpinner /> }
);

const Logout = dynamic(
    () => import('@/components/Login_Logout/LogoutButton'),
    { ssr: false, loading: () => <LoadingSpinner /> }
);

const ProfileUpdate = dynamic(
    () => import('@/components/Perfil/updateProfile'),
    { ssr: false, loading: () => <LoadingSpinner /> }
);

const Ajustes = dynamic(
    () => import('@/components/settings/settings'),
    { ssr: false, loading: () => <LoadingSpinner /> }
);

const PageAjustes = () => {
    return (
        <div className="bg-gray-600 min-h-screen flex flex-col m-0 p-0">
            {/* <Settings /> */}
            <Ajustes />
            <br />
            <Logout />
            {/* <ProfileUpdate /> */}
            <br />
        </div>
    )
}
export default PageAjustes
