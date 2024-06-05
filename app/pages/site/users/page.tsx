'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import SearchBarDos from '../../../../components/Seguidores/searchBar';
import FollowButton from '@/components/Seguidores/seguir';
import User from '@/components/Seguidores/type';
import LoadingSpinner from '@/components/loading/spinner';

// Cargar el componente `RandomPostsGrid` dinámicamente
const DynamicRandomPostsGrid = dynamic(() => import('@/components/posts/randomPostGrid'), {
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
