// next.config.js

require('dotenv').config();

/*
* Este archivo es para hacer accesibles las variables del .env
* Y para configurar los dominios de las imagenes
*/


module.exports = {
    env: {
        LARAVEL: process.env.LARAVEL,
        NEXT: process.env.NEXT,
        NEWS_API_KEY: process.env.NEWS_API_KEY,
    },
    images: {
        domains: ['i.blogs.es', 'i.imgur.com', 'localhost', 'e00-expansion.uecdn.es'],
    },
};
