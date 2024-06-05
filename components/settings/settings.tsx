import { useState, useEffect, JSX, SVGProps } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import SinglePost from '../posts/PostMaloneMap';

export default function Ajustes() {
    interface User {
        id: number;
        name: string;
        followers_count: number;
        following_count: number;
    }

    interface Like {
        id: number;
        user_id: number;
        created_at: string;
        updated_at: string;
    }

    interface Comment {
        id: number;
        user?: User;
        text: string;
        created_at: string;
    }

    interface Image {
        id: number;
        post_id: number;
        url: string;
        created_at: string;
        updated_at: string;
    }

    interface Post {
        id: number;
        title: string;
        content: string;
        images: Image[];
        user_id: number;
        user: User;
        created_at: string;
        likes: Like[];
        comments: Comment[];
    }

    interface SinglePostProps {
        post: Post;
        postId: number;
        isOpen: boolean;
        onClose: () => void;
    }

    const [user, setUser] = useState<User | null>(null);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [profilePhoto, setProfilePhoto] = useState('');
    const [password, setPassword] = useState('********');
    const [posts, setPosts] = useState<Post[]>([]);
    const [privacySettings, setPrivacySettings] = useState('public');
    const [notifications, setNotifications] = useState({
        newPosts: true,
        mentions: true,
        messages: true,
    });

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
                setPosts(data.posts); // Asegúrate de que la respuesta contenga un array de posts
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

    const handlePostClose = () => {
        setSelectedPostId(null);
    };

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div className="w-full max-w-5xl mx-auto p-4">
            <div className="hidden md:grid grid-cols-3 gap-4">
                <div className="col-span-3 md:col-span-1 flex flex-col gap-4">
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
                            <div className="text-lg font-medium">{username}</div>
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
                            Edit Profile
                        </label>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 grid grid-cols-3 gap-4">
                        <div className="flex flex-col items-center">
                            <div className="text-2xl font-bold">{posts.length}</div>
                            <div className="text-gray-500 dark:text-gray-400 text-sm">Posts</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-2xl font-bold">{user.followers_count}</div>
                            <div className="text-gray-500 dark:text-gray-400 text-sm">Followers</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-2xl font-bold">{user.following_count}</div>
                            <div className="text-gray-500 dark:text-gray-400 text-sm">Following</div>
                        </div>
                    </div>
                </div>
                <div className="col-span-3 md:col-span-2 space-y-6">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className="text-lg font-medium">Username</div>
                        <div className="text-sm text-gray-500">Update your username to be displayed on your profile.</div>
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
                            Save
                        </button>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className="text-lg font-medium">Password</div>
                        <div className="text-sm text-gray-500">Update your password to secure your account.</div>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">Current Password</label>
                                <input
                                    id="current-password"
                                    type="password"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">New Password</label>
                                <input
                                    id="new-password"
                                    type="password"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
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
                            Save
                        </button>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className="text-lg font-medium">Email</div>
                        <div className="text-sm text-gray-500">Update your email address to receive notifications.</div>
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
                            Save
                        </button>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className="text-lg font-medium">Posts</div>
                        <div className="grid grid-cols-3 gap-4 mt-4">
                            {posts.map((post) => (
                                <SinglePost
                                    key={post.id}
                                    postId={post.id}
                                    isOpen={selectedPostId === post.id}
                                    onClose={handlePostClose}
                                    post={post}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:hidden p-4 mt-8">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 space-y-4">
                    <div className="text-lg font-medium">Settings</div>
                    <div className="space-y-2">
                        <Link href="#" className="flex items-center justify-between text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50">
                            <span>Username</span>
                            <ChevronRightIcon className="w-4 h-4" />
                        </Link>
                        <Link href="#" className="flex items-center justify-between text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50">
                            <span>Password</span>
                            <ChevronRightIcon className="w-4 h-4" />
                        </Link>
                        <Link href="#" className="flex items-center justify-between text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50">
                            <span>Email</span>
                            <ChevronRightIcon className="w-4 h-4" />
                        </Link>
                        <Link href="#" className="flex items-center justify-between text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50">
                            <span>Privacy</span>
                            <ChevronRightIcon className="w-4 h-4" />
                        </Link>
                        <Link href="#" className="flex items-center justify-between text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50">
                            <span>Notifications</span>
                            <ChevronRightIcon className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ChevronRightIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m9 18 6-6-6-6" />
        </svg>
    );
}
