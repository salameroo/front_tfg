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
        <div className="border p-4 m-2 rounded-lg shadow-md flex justify-between items-center">
            <div className="flex items-center">
                {user.profile_photo && (
                    <img
                        src={user.profile_photo}
                        alt={`${user.name}'s profile`}
                        className="w-10 h-10 rounded-full mr-4"
                    />
                )}
                <h3 className="text-lg font-bold">{user.name}</h3>
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