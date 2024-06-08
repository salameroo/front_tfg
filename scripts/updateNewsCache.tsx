// scripts/updateNewsCache.ts
import { fetchNewsFromApi } from '@/services/news';
import fs from 'fs';
import path from 'path';

const updateNewsCache = async () => {
    try {
        const newsData = await fetchNewsFromApi();
        const cachePath = path.resolve(__dirname, '../cache/newsCache.json');
        fs.writeFileSync(cachePath, JSON.stringify(newsData.articles, null, 2));
        console.log('News cache updated successfully.');
    } catch (error) {
        console.error('Error updating news cache:', error);
    }
};

updateNewsCache();
