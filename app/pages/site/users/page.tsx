'use client';
import React, { useState } from 'react';
import SearchBarDos from '../../../components/ui/Seguidores/searchBar';
import FollowButton from '@/app/components/ui/Seguidores/seguir';
import User from '@/app/components/ui/Seguidores/type';

const SearchResults: React.FC = () => {


    const [results, setResults] = useState<User[]>([]);

    return (
        <div className="container mx-auto p-4">
            <SearchBarDos setResults={setResults} />
            {/* <h1 className="text-2xl font-bold my-4 text-center">Search Results</h1>
            <ul className="list-none space-y-4">
                {results.map(user => (
                    <li key={user.id} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md">
                        <span className="text-lg font-medium">{user.name}</span>
                        <FollowButton userId={user.id} />
                    </li>
                ))}
            </ul> */}
        </div>
    );
};

export default SearchResults;
