import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import Post from './type'; // Ajusta la ruta según tu estructura de carpetas

interface PostCardProps {
    post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
    return (
        <div className="bg-white border border-gray-300 rounded-md p-4 overflow-hidden">
            <img src={post.image} alt={post.caption} className="w-full" />
            <div className="p-4">
                <div className="flex items-center mb-2">
                    <span className="font-semibold mr-2">{post.username}</span>
                </div>
                <div className="flex items-center">
                    <button className="flex items-center space-x-1 text-red-500 hover:text-red-300">
                        <FavoriteIcon />
                        <span>{post.likes}</span>
                    </button>
                    <button className="ml-4 flex items-center space-x-1 text-gray-500 hover:text-green-500">
                        <MapsUgcIcon />
                        <span>{post.comments}</span>
                    </button>
                    {/* Agregar más funcionalidad, como botones de comentarios, compartir, etc. */}
                </div>
            </div>
        </div>
    );
};

export default PostCard;
