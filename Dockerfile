# aca se ponen los comandos para que al ejecutar el comando docker build se construya la imagen de la aplicación
# Dockerfile para una aplicación Node.js con Nginx

# Etapa 1: build de la aplicación
FROM node:18-alpine AS builder

# Establecer el directorio de trabajo
WORKDIR /app 
# Copiar los archivos de configuración y dependencias
COPY package*.json ./ 
# Instalar las dependencias
RUN npm install
# Copiar el resto de la aplicación
COPY . .
# Construir la aplicación
RUN npm run build

# Etapa 2: servir con Nginx 
FROM nginx:alpine

# Copiar el build al contenido público de nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer el puerto
EXPOSE 80

# Comando por defecto de Nginx
CMD ["nginx", "-g", "daemon off;"]
