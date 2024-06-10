module.exports = {
  darkMode: 'class', // Habilitar el modo oscuro usando la clase 'dark'
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#111827', // Color de fondo personalizado para modo oscuro
        'dark-text': '#e0e0e0', // Color de texto personalizado para modo oscuro
        'light-bg': '#f8f9fa', // Color de fondo personalizado para modo claro
        'light-text': '#333333', // Color de texto personalizado para modo claro
      },
    },
  },
  plugins: [],
};
