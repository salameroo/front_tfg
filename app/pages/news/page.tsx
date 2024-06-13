import React from 'react';
import { getNews } from '@/services/news';
import CarIcon from '@/components/ui/CarIcon';
import Link from 'next/link';
import Image from 'next/image';

interface NewsItem {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
}

const NewsPage: React.FC<{ news: NewsItem[] }> = ({ news }) => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <header className="bg-gray-900 text-white py-4 px-6 md:px-8 flex items-center justify-between">
                <Link href="/" className="flex items-center ">
                    <CarIcon className="h-6 w-6" />
                </Link>

                <div>
                    <Link href="/pages/site/home">
                        <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                            Acceso al sitio
                        </button>
                    </Link>
                </div>
            </header>
            <main className="flex-grow">
                <section className="bg-gray-900 text-white md:py-24 lg:py-32 flex items-center justify-center">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                                Lo último en noticias automotivas
                            </h1>
                            <p className="mt-4 text-lg text-gray-400">
                                ¿Quieres estar al día con las ultimas noticias, reseñas y modificaciones del mundo?
                            </p>
                            <div className="mt-8 mb-4 text-xl flex justify-center gap-4">
                                Bienvenido a la pagina de noticias de CarGram
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="max-w-8xl mx-auto p-4">
                        <h1 className="text-3xl font-bold mb-6 text-center">Últimas entradas</h1>
                        <div id='news' className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {news.map((article, index) => (
                                <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                                    {article.urlToImage && (
                                        <img
                                            src={article.urlToImage}
                                            alt={article.title}
                                            className="mb-4 rounded-lg object-cover w-full"
                                            style={{ maxHeight: '450px' }}
                                        />
                                    )}
                                    <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                                    <p className="text-gray-600 mb-4">{article.description}</p>
                                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                        Leer más
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <footer className="bg-gray-900 text-white py-6 px-6 text-center">
                <p>&copy; 2024 Cargram. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

const Page = async () => {
    const news = await getNews();
    return <NewsPage news={news} />;
};

export default Page;
