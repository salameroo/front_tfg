// services/newsService.ts
import axios from 'axios';
import fs from 'fs';
import path from 'path';

const NEWS_API_KEY = `${process.env.NEWS_API_KEY}`; // Reemplaza con tu clave de API de NewsAPI
const NEWS_API_URL = `https://newsapi.org/v2/everything?q=car&language=es&apiKey=${NEWS_API_KEY}`;
const CACHE_DIR = path.resolve(process.cwd(), 'cache');
const CACHE_FILE_PATH = path.join(CACHE_DIR, 'newsCache.json');
const CACHE_EXPIRY_TIME = 24 * 60 * 60 * 1000; // 24 horas en milisegundos

const fetchNewsFromApi = async () => {
    const response = await axios.get(NEWS_API_URL);
    const news = response.data.articles;
    return news;
};

const isCacheExpired = (timestamp: number) => {
    const currentTime = new Date().getTime();
    return currentTime - timestamp > CACHE_EXPIRY_TIME;
};

const ensureCacheDirExists = () => {
    if (!fs.existsSync(CACHE_DIR)) {
        fs.mkdirSync(CACHE_DIR);
    }
};

export const getNews = async () => {
    try {
        ensureCacheDirExists();

        if (fs.existsSync(CACHE_FILE_PATH)) {
            const cacheData = JSON.parse(fs.readFileSync(CACHE_FILE_PATH, 'utf8'));
            if (!isCacheExpired(cacheData.timestamp)) {
                return cacheData.news;
            }
        }

        const news = await fetchNewsFromApi();
        fs.writeFileSync(CACHE_FILE_PATH, JSON.stringify({ timestamp: new Date().getTime(), news }, null, 2));
        return news;
    } catch (error) {
        console.error('Error fetching news:', error);
        throw error;
    }
};
