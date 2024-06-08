
## Getting Started

Primero, ejecuta el servidor de desarrollo:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

Puedes comenzar a editar la página modificando `app/page.tsx`. La página se actualiza automáticamente a medida que editas el archivo.

Este proyecto utiliza [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) para optimizar y cargar automáticamente Inter, una fuente personalizada de Google.

## Aprender Más

Para aprender más sobre Next.js, consulta los siguientes recursos:

* [Documentación de Next.js](https://nextjs.org/docs): Aprende sobre las características y la API de Next.js.
* [Aprende Next.js](https://nextjs.org/learn): Un tutorial interactivo de Next.js.

Puedes visitar [el repositorio de Next.js en GitHub](https://github.com/vercel/next.js/): tus comentarios y contribuciones son bienvenidos.

## Despliegue en Vercel

La forma más fácil de desplegar tu aplicación Next.js es usar la [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) de los creadores de Next.js.

Consulta nuestra [documentación de despliegue de Next.js](https://nextjs.org/docs/deployment) para más detalles.

## Adicional

### Estructura del Proyecto

Este proyecto sigue una estructura básica típica de un proyecto Next.js. Aquí hay un breve resumen de los directorios y archivos principales:

* `/pages`: Contiene las rutas de tu aplicación. Cada archivo en este directorio se convierte en una ruta.
* `/pages/site`: Contiene las rutas protegidas de autenticacion. Cada archivo en este directorio se convierte en una página.
* `/components`: Contiene los componentes reutilizables de la UI.
* `/public`: Archivos estáticos como imágenes, archivos JSON, etc. que se servirán directamente.
* `next.config.js`: Archivo de configuración de Next.js.

### Scripts Disponibles

En el directorio del proyecto, puedes ejecutar los siguientes scripts:

* `npm run dev`: Inicia el servidor de desarrollo.
* `npm run build`: Construye la aplicación para producción.
* `npm start`: Inicia un servidor Node.js para servir tu aplicación en producción.
* `npm run lint`: Ejecuta linter en los archivos del proyecto.

### Consideraciones de Despliegue

Antes de desplegar tu aplicación, asegúrate de:

1. Configurar las variables de entorno necesarias en tu entorno de producción.
2. Ejecutar `npm run build` para crear la versión optimizada de tu aplicación.
3. Verificar que todas las dependencias estén correctamente instaladas y configuradas.

Para más detalles sobre las mejores prácticas y configuraciones de despliegue, consulta la [documentación de despliegue de Next.js](https://nextjs.org/docs/deployment).
