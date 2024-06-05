// components/ui/Bienvenida/ScrollInicio.js
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

interface AnimatedSectionProps {
  title: string;
  content: string;
  bgImage: string;
  showBackToTop?: boolean;
  showJoinNow?: boolean;
}

const AnimatedSection = ({ title, content, bgImage, showBackToTop, showJoinNow }: AnimatedSectionProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="text-center bg-white bg-opacity-70 p-6 rounded-lg w-3/4 md:w-1/2 shadow-2xl">
        <h1 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-blue-500 to-blue-800">
          {title}
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          {content}
        </p>
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="mt-6 mr-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Volver arriba
          </button>
        )}
        {showJoinNow && (
          <Link href="/pages/site/home">
            <p className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl inline-block">
              Entrar
            </p>
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default AnimatedSection;
