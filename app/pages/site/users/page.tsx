'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import SearchBarDos from '../../../components/ui/Seguidores/searchBar';
import FollowButton from '@/app/components/ui/Seguidores/seguir';
import User from '@/app/components/ui/Seguidores/type';
import LoadingSpinner from '@/app/components/ui/loading/spinner';

// Cargar el componente `RandomPostsGrid` dinámicamente
const DynamicRandomPostsGrid = dynamic(() => import('@/app/components/ui/posts/randomPostGrid'), {
    ssr: false,
    loading: () => <LoadingSpinner />, // Usar el componente de carga personalizado
});

const SearchResults: React.FC = () => {
    const [results, setResults] = useState<User[]>([]);

    return (
        <div className="container mx-auto p-4">
            <SearchBarDos setResults={setResults} />
            <DynamicRandomPostsGrid />
        </div>
    );
};

export default SearchResults;
