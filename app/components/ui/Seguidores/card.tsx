// UserCard.tsx
import React from 'react';
import { Button } from '@mui/material';
import User from './type'; // Ajusta la ruta según tu estructura de archivos

interface UserCardProps {
    user: User;
    onFollowToggle: (userId: number, isFollowing: boolean) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onFollowToggle }) => {
    return (
        <div className="border p-4 rounded-lg shadow-md flex justify-between items-center">
            <div>
                <h3 className="text-lg font-bold">{user.name}</h3>
                <p className="text-gray-600">{user.email}</p>
            </div>
            <Button
                onClick={() => onFollowToggle(user.id, user.is_following)}
                variant="contained"
                color={user.is_following ? 'secondary' : 'primary'}
            >
                {user.is_following ? 'Dejar de seguir' : 'Seguir'}
            </Button>
        </div>
    );
};

export default UserCard;




// import React, { useState } from 'react';
// import { Avatar, Button } from '@mui/material';
// import Image from 'next/image';

// function UserCard({ nombre, seguidores, imagen }) {
//     const [isFollowing, setIsFollowing] = useState(false);

//     const handleFollow = () => {
//         setIsFollowing(!isFollowing);
//     };

//     return (
//         <div className="text-black bg-white rounded-md p-4 mb-4 flex items-center shadow-md">
//             {imagen ? (
//                 <div className='w-10 h-10 rounded-full mr-4 overflow-hidden'>
//                     <Image
//                         src={imagen}
//                         alt={nombre}
//                         width={40}
//                         height={40}
//                         layout="responsive"
//                         objectFit="cover" // Asegura que la imagen cubra el contenedor
//                     />
//                 </div>
//             ) : (
//                 <Avatar className="w-10 h-10 rounded-full mr-4">{nombre.charAt(0)}</Avatar>
//             )}
//             <div className="flex-1">
//                 <h3 className="text-md font-semibold">{nombre}</h3>
//                 <p className='text-sm'>Seguidores: {seguidores}</p>
//             </div>
//             <Button
//                 variant="contained"
//                 color={isFollowing ? "secondary" : "primary"}
//                 onClick={handleFollow}
//             >
//                 {isFollowing ? "Siguiendo" : "Seguir"}
//             </Button>
//         </div>
//     );
// }

// export default UserCard;
