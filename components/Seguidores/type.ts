// app/types.ts
export default interface User {
    id: number;
    name: string;
    email: string;
    is_following: boolean;
    profile_photo?: string;
    // Hacer que la imagen de perfil sea opcional
}

export interface UserDos {
    id: number;
    name: string;
    email: string;
}

export interface Message {
    id: number;
    sender_id: number;
    receiver_id: number;
    message: string;
    created_at: string;
    updated_at: string;
    sender: User;
    receiver: User;
    sender_name?: string;
}