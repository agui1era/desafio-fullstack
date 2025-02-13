# Usa una imagen de Node.js optimizada para producción
FROM node:18-alpine as build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos del proyecto
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Segunda etapa: Servidor en Node.js con Express para producción
FROM node:18-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Instalar solo las dependencias de producción
RUN npm install -g serve

# Copiar archivos de la compilación
COPY --from=build /app/dist /app/dist

# Exponer el puerto 3005
EXPOSE 3005

# Comando de inicio: Servir la aplicación en el puerto 3005
CMD ["serve", "-s", "dist", "-l", "3005"]
