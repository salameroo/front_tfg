'use client';
import { useState, useEffect, useMemo, useCallback } from 'react';
import AnimatedSection from './components/ui/Bienvenida/ScrollInicio';
import Cookies from 'js-cookie';

const Home = () => {
  const images = useMemo(() => [
    "https://i.imgur.com/1i2fcbF.png",
    "https://i.imgur.com/RhmVZOP.png",
    "https://i.imgur.com/LdlWsq9.png",
    "https://i.imgur.com/pH4Y4Qi.png",
    "https://i.imgur.com/nMvaByE.png",
    "https://i.imgur.com/yrd0llF.png",
    "https://i.imgur.com/7U82yRY.png",
    "https://i.imgur.com/616SQcF.png",
    "https://i.imgur.com/w97Z5WL.png",
    "https://i.imgur.com/D53aAkG.png",
    "https://i.imgur.com/8N1CixB.png",
    "https://i.imgur.com/jrBO9Pl.png",
    "https://i.imgur.com/txQGv0j.png",
    "https://i.imgur.com/u3z97MA.png",
    "https://i.imgur.com/1m99MAV.png",
    "https://i.imgur.com/iiKbkIE.png",
    "https://i.imgur.com/B4EPVKt.png",
    "https://i.imgur.com/5zCpetB.png",
    "https://i.imgur.com/2ipG7u6.png"
  ], []);

  const getUniqueRandomImages = useCallback((imageArray: string[], count: number): string[] => {
    const shuffled = [...imageArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }, []);

  const [bgImages, setBgImages] = useState<string[]>([]);

  useEffect(() => {
    setBgImages(getUniqueRandomImages(images, 4));
  }, [getUniqueRandomImages, images]);

  const deleteCookies = async () => {
    Cookies.remove('XSRF-TOKEN', { path: '/' });
    Cookies.remove('auth_token', { path: '/' });
    Cookies.remove('auth__token', { path: '/' });
    Cookies.remove('laravel_session', { path: '/' });
  };

  return (
    <div>
      <div className="text-black">
        <AnimatedSection
          title="Bienvenido a CarGram"
          content="En el mundo de hoy, donde el estrés y la rutina son moneda corriente, es más importante que nunca encontrar momentos de escape y disfrute."
          bgImage={bgImages[0]}
          showJoinNow={true}
        />
      </div>
      <div className="text-black">
        <AnimatedSection
          title="¿Qué es CarGram?"
          content="CarGram no es solo una red social de coches, es una comunidad que te anima a salir, explorar nuevos lugares y compartir tus experiencias con otros entusiastas."
          bgImage={bgImages[1]}
        />
      </div>
      <div className="text-black">
        <AnimatedSection
          title="¿Qué encontrarás aquí?"
          content="Conecta con personas que comparten tu pasión, descubre eventos y rutas emocionantes, y crea recuerdos que durarán toda la vida."
          bgImage={bgImages[2]}
        />
      </div>
      <div className="text-black">
        <AnimatedSection
          title="¿Entonces qué?"
          content="¿Te animas a probar? 😉"
          bgImage={bgImages[3]}
          showBackToTop={true}
          showJoinNow={true}
        />
      </div>
      {/* Botón para borrar las cookies */}
      <button onClick={deleteCookies} className="mt-4 p-2 bg-red-500 text-white rounded">Borrar Cookies</button>
    </div>
  );
};

export default Home;
