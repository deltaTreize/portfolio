# Étape 1: Construire l'image de l'application React
FROM node:18-alpine as build

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json (ou yarn.lock) dans le conteneur
COPY package*.json ./

# Installer les dépendances du projet
RUN npm install

# Copier le reste du code source dans le conteneur
COPY . .

# Construire l'application pour la production
RUN npm run build

# Étape 2: Servir l'application avec un serveur web (Nginx)
FROM nginx:alpine

# Copier les fichiers construits depuis l'étape précédente dans le répertoire où Nginx les attend
COPY --from=build /app/build /usr/share/nginx/html

# Exposer le port 80 pour accéder à l'application
EXPOSE 80

# Démarrer Nginx en mode non-détaché
CMD ["nginx", "-g", "daemon off;"]
