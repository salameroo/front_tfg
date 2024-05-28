// next.config.js
require('dotenv').config();

module.exports = {
    env: {
        LARAVEL: process.env.LARAVEL,
        NEXT: process.env.NEXT,
        AUTH_URL: process.env.AUTH_URL,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    },
    images: {
        domains: ['i.blogs.es', 'i.imgur.com', 'localhost'], // Reemplaza 'example.com' con el dominio de tus imágenes externas
    },
};
