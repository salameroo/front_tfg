# Usa una imagen base oficial de Node.js
FROM node:18

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Instala PM2 globalmente
RUN npm install pm2 -g

# Copia el resto de la aplicación
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Expone el puerto en el que Next.js se ejecutará
EXPOSE 3000

# Comando para iniciar la aplicación usando PM2
CMD ["pm2-runtime", "start", "npm", "--name", "nextjs-app", "--", "start", "-p", "3000"]
