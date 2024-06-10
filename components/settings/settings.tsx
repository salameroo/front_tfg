import { useState, useEffect } from 'react';
import { AvatarImage, AvatarFallback, Avatar } from "@/components/vercel/ui/avatar";
import { Input } from "@/components/vercel/ui/input";
import { Button } from "@/components/vercel/ui/button";
import Cookies from 'js-cookie';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import SinglePostMalone from '../posts/postAlone'; // Import your SinglePostMalone component
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LoadingSpinner from '../loading/spinner';
import LogoutIcon from '@mui/icons-material/Logout';
import Logout from '@/components/Login_Logout/LogoutButton';

interface User {
    id: number;
    name: string;
    avatar?: string;
    profile_image?: string;
    followers_count?: string;
    following_count?: string;
}

interface Post {
    id: number;
    content: string;
    created_at: string;
}

interface Follower {
    id: number;
    name: string;
    avatar?: string;
}

export default function SettingsPage() {
    const [user, setUser] = useState<User | null>(null);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [profilePhoto, setProfilePhoto] = useState('');
    const [posts, setPosts] = useState<Post[]>([]);
    const [followers, setFollowers] = useState<Follower[]>([]);
    const [following, setFollowing] = useState<Follower[]>([]);
    const [showFollowersModal, setShowFollowersModal] = useState(false);
    const [showFollowingModal, setShowFollowingModal] = useState(false);
    const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

    useEffect(() => {
        axios.get(`${process.env.LARAVEL}/api/settings`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Cookies.get('auth_token')}`
            },
        })
            .then(response => {
                const data = response.data;
                setUser(data);
                setUsername(data.name);
                setEmail(data.email);
                setProfilePhoto(data.profile_photo);
                setPosts(data.posts);
            })
            .catch(error => {
                console.error('Error loading user data:', error);
            });
    }, []);

    const handleSaveChanges = () => {
        axios.put(`${process.env.LARAVEL}/api/settings`, {
            name: username,
            email,
            profile_photo: profilePhoto,
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Cookies.get('auth_token')}`
            },
        })
            .then(response => {
                alert('Changes saved successfully!');
            })
            .catch(error => {
                console.error('Error saving changes:', error);
                alert('Error saving changes. Please try again.');
            });
    };

    const handleProfilePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const formData = new FormData();
            formData.append('profile_photo', file);

            axios.post(`${process.env.LARAVEL}/api/upload-profile-photo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${Cookies.get('auth_token')}`
                },
            })
                .then(response => {
                    setProfilePhoto(response.data.profile_photo);
                    alert('Profile photo updated successfully!');
                })
                .catch(error => {
                    console.error('Error uploading profile photo:', error);
                    alert('Error uploading profile photo. Please try again.');
                });
        }
    };

    const handleDeleteAccount = () => {
        if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
            axios.delete(`${process.env.LARAVEL}/api/delete-account`, {
                headers: {
                    'Authorization': `Bearer ${Cookies.get('auth_token')}`
                }
            })
                .then(response => {
                    alert('Account deleted successfully.');
                })
                .catch(error => {
                    console.error('Error deleting account:', error);
                    alert('Error deleting account. Please try again.');
                });
        }
    };

    const handleShowFollowers = () => {
        axios.get(`${process.env.LARAVEL}/api/followers`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Cookies.get('auth_token')}`
            },
        })
            .then(response => {
                setFollowers(response.data.followers);
                setShowFollowersModal(true);
            })
            .catch(error => {
                console.error('Error fetching followers:', error);
                alert('Error fetching followers. Please try again.');
            });
    };

    const handleShowFollowing = () => {
        axios.get(`${process.env.LARAVEL}/api/following`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Cookies.get('auth_token')}`
            },
        })
            .then(response => {
                setFollowing(response.data.following);
                setShowFollowingModal(true);
            })
            .catch(error => {
                console.error('Error fetching following:', error);
                alert('Error fetching following. Please try again.');
            });
    };

    const handleUnfollow = (userId: number) => {
        axios.post(`${process.env.LARAVEL}/api/unfollow`, { user_id: userId }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Cookies.get('auth_token')}`
            },
        })
            .then(response => {
                setFollowing(following.filter(user => user.id !== userId));
                alert('Unfollowed successfully.');
            })
            .catch(error => {
                console.error('Error unfollowing user:', error);
                alert('Error unfollowing user. Please try again.');
            });
    };

    const handleRemoveFollower = (followerId: number) => {
        axios.post(`${process.env.LARAVEL}/api/unfollow`, { follower_id: followerId }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Cookies.get('auth_token')}`
            },
        })
            .then(response => {
                setFollowers(followers.filter(follower => follower.id !== followerId));
                alert('Follower removed successfully.');
            })
            .catch(error => {
                console.error('Error removing follower:', error);
                alert('Error removing follower. Please try again.');
            });
    };

    const handlePostClose = () => {
        setSelectedPostId(null);
    };

    if (!user) {
        return <LoadingSpinner></LoadingSpinner>;
    }

    return (
        <div className="w-full max-w-5xl mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 w-full mx-auto">
                <div className="flex flex-col gap-4">
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex items-center gap-4">
                        <div className="w-16 h-16 relative rounded-full overflow-hidden">
                            <Image
                                src={profilePhoto || '/placeholder.svg'}
                                alt={username}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="flex-1 grid gap-1">
                            <div className="text-lg font-medium text-gray-900 dark:text-white">{username}</div>
                            <div className="text-gray-500 dark:text-gray-400 text-sm">{email}</div>
                        </div>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleProfilePhotoChange}
                            className="hidden"
                            id="profile-photo-upload"
                        />
                        <label htmlFor="profile-photo-upload" className="cursor-pointer inline-block px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800">
                            Cambiar
                        </label>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 grid grid-cols-3 gap-4">
                        <div className="flex flex-col items-center">
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">{posts.length}</div>
                            <div className="text-gray-500 dark:text-gray-400 text-sm">Posts</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">{user.followers_count}</div>
                            <div className="text-gray-500 dark:text-gray-400 text-sm">Seguidores</div>
                            <button
                                className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600"
                                onClick={handleShowFollowers}
                            >
                                Seguidores
                            </button>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">{user.following_count}</div>
                            <div className="text-gray-500 dark:text-gray-400 text-sm">Siguiendo</div>
                            <button
                                className="mt-2 inline-flex items-center mx-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600"
                                onClick={handleShowFollowing}
                            >
                                Siguiendo
                            </button>
                        </div>
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                        <div className="text-lg font-medium text-gray-900 dark:text-white">Nombre de usuario</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Actualiza el nombre de usuario que será mostrado en tu perfil.</div>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="mt-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        <button
                            type="button"
                            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800"
                            onClick={handleSaveChanges}
                        >
                            Guardar
                        </button>
                    </div>
                    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                        <div className="text-lg font-medium text-gray-900 dark:text-white">Contraseña</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Actualiza tu contraseña para mantener segura tu cuenta.</div>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="current-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Contraseña actual</label>
                                <input
                                    id="current-password"
                                    type="password"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nueva Contraseña</label>
                                <input
                                    id="new-password"
                                    type="password"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Confirmar Contraseña</label>
                                <input
                                    id="confirm-password"
                                    type="password"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>
                        <button
                            type="button"
                            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800"
                            onClick={handleSaveChanges}
                        >
                            Guardar
                        </button>
                    </div>
                    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                        <div className="text-lg font-medium text-gray-900 dark:text-white">Email</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Actualiza tu email para estar sincronizado.</div>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        <button
                            type="button"
                            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800"
                            onClick={handleSaveChanges}
                        >
                            Guardar
                        </button>
                    </div>
                    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                        <div className="text-lg font-medium text-gray-900 dark:text-white">Posts</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                            {posts.map((post) => (
                                <SinglePostMalone
                                    key={post.id}
                                    postId={post.id}
                                    isOpen={selectedPostId === post.id}
                                    onClose={handlePostClose}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Followers Modal */}
            {showFollowersModal && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg">
                        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Seguidores</h2>
                        <ul>
                            {followers.map(follower => (
                                <li
                                    key={follower.id}
                                    className="flex items-center justify-between p-2 border-b border-gray-300 dark:border-gray-700"
                                >
                                    <div className="flex items-center gap-4">
                                        <Avatar className="w-8 h-8">
                                            <AvatarImage alt={`@${follower.name}`} src={follower.avatar || "/placeholder-user.jpg"} />
                                            <AvatarFallback>{follower.name[0]}</AvatarFallback>
                                        </Avatar>
                                        <span className="text-gray-900 dark:text-white">{follower.name}</span>
                                    </div>
                                    <Button size="sm" variant="ghost" className='bg-red-500 ml-2 hover:bg-red-700' onClick={() => handleRemoveFollower(follower.id)}>
                                        Quitar
                                    </Button>
                                </li>
                            ))}
                        </ul>
                        <Button className="mt-4 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" onClick={() => setShowFollowersModal(false)}>
                            Cerrar
                        </Button>
                    </div>
                </div>
            )}

            {/* Following Modal */}
            {showFollowingModal && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg">
                        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Siguiendo</h2>
                        <ul>
                            {following.map(user => (
                                <li
                                    key={user.id}
                                    className="flex items-center justify-between p-2 border-b border-gray-300 dark:border-gray-700"
                                >
                                    <div className="flex items-center gap-4">
                                        <Avatar className="w-8 h-8">
                                            <AvatarImage alt={`@${user.name}`} src={user.avatar || "/placeholder-user.jpg"} />
                                            <AvatarFallback>{user.name[0]}</AvatarFallback>
                                        </Avatar>
                                        <span className="text-gray-900 dark:text-white">{user.name}</span>
                                    </div>
                                    <Button size="sm" variant="ghost" className='bg-red-500 ml-2 hover:bg-red-700' onClick={() => handleUnfollow(user.id)}>
                                        Dejar de seguir
                                    </Button>
                                </li>
                            ))}
                        </ul>
                        <Button className="mt-4 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" onClick={() => setShowFollowingModal(false)}>
                            Cerrar
                        </Button>
                    </div>
                </div>
            )}
            <div className='flex justify-center'>
                <Logout></Logout>
            </div>
        </div>
    );



}
