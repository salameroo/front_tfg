import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import Pica from 'pica';
import Cookies from 'js-cookie';

interface ProfileUpdateProps { }

const ProfileUpdate: React.FC<ProfileUpdateProps> = () => {
    const [profilePhoto, setProfilePhoto] = useState<File | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setProfilePhoto(event.target.files[0]);
        }
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        if (profilePhoto) {
            try {
                const resizedPhoto = await resizeImage(profilePhoto, 100, 100);
                const formData = new FormData();
                formData.append('profile_photo', resizedPhoto, 'profile_photo.jpg');

                const response = await axios.post(`${process.env.LARAVEL}/api/profile-photo`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${Cookies.get('auth_token')}`
                    },
                });

                console.log(response.data);
            } catch (error) {
                console.error('Error uploading profile photo', error);
            }
        }
    };

    const resizeImage = (file: File, width: number, height: number): Promise<Blob> => {
        return new Promise((resolve, reject) => {
            const img = document.createElement('img');
            const reader = new FileReader();

            reader.onload = (e) => {
                if (e.target && e.target.result) {
                    img.src = e.target.result as string;

                    img.onload = () => {
                        const canvas = document.createElement('canvas');
                        canvas.width = width;
                        canvas.height = height;

                        const pica = Pica();

                        pica.resize(img, canvas)
                            .then(() => pica.toBlob(canvas, 'image/jpeg', 0.90))
                            .then((blob) => {
                                resolve(blob);
                            })
                            .catch((error) => {
                                reject(error);
                            });
                    };
                }
            };

            reader.onerror = (error) => {
                reject(error);
            };

            reader.readAsDataURL(file);
        });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
                <label htmlFor="profile_photo" className="block text-sm font-medium text-gray-700">
                    Profile Photo
                </label>
                <input
                    type="file"
                    id="profile_photo"
                    name="profile_photo"
                    onChange={handleFileChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Update Profile
            </button>
        </form>
    );
};

export default ProfileUpdate;
