# PokéFinder

Le projet est organisé en monorepo avec un backend Node.js, un frontend Vite/TypeScript et une base de données MongoDB, le tout via Docker Compose.

## Sommaire

- [Stack technique](#stack-technique)
- [Architecture](#architecture)
- [Prérequis](#prérequis)
- [Variables d'environnement](#variables-denvironnement)
- [Installation & lancement](#installation--lancement)
- [Structure du projet](#structure-du-projet)
- [Ports utilisés](#ports-utilisés)

## Stack technique

| Couche | Technologie |
|--------|-------------|
| Frontend | Vite + TypeScript (SCSS) |
| Backend | Node.js (TypeScript) avec gestion de session |
| Base de données | MongoDB |
| Conteneurisation | Docker / Docker Compose |

## Architecture

Le projet suit une architecture découplée en trois services :

- **`pf-frontend`** : interface utilisateur servie par Vite, qui communique avec le backend via l'URL définie dans `VITE_API_URL`.
- **`pf-backend`** : API qui expose les routes consommées par le frontend, gère les sessions (`SESSION_SECRET`) et se connecte à MongoDB.
- **`mongodb`** : base de données persistante (les données sont conservées dans le volume Docker `mongo_data`).

## Prérequis

- [Docker](https://www.docker.com/) et Docker Compose (méthode recommandée)
- Ou, pour un lancement manuel : [Node.js](https://nodejs.org/) et une instance MongoDB accessible

## Variables d'environnement

Créez un fichier `.env` à la racine du projet avec les variables suivantes :

```env
# Base de données MongoDB
DB_USER=votre_utilisateur
DB_PASSWORD=votre_mot_de_passe
MONGODB_URI=mongodb://votre_utilisateur:votre_mot_de_passe@mongodb:27017/pokefinder?authSource=admin

# Backend
SESSION_SECRET=une_chaine_secrete_aleatoire

# Frontend
VITE_API_URL=http://localhost:3000
```


## Installation & lancement

### Avec Docker (recommandé)

À la racine du projet :

```bash
docker compose up --build
```

Les services démarrent automatiquement :

- Frontend : http://localhost:5173
- Backend : http://localhost:3000
- MongoDB : `localhost:27017`

Pour arrêter les conteneurs :

### Lancement manuel

**Backend :**

```bash
cd pf-backend
npm install
npm run dev
```

**Frontend :**

```bash
cd pf-frontend
npm install
npm run dev
```

> Assurez-vous qu'une instance MongoDB est accessible et que les variables d'environnement sont correctement définies.

## Structure du projet

```
pokefinder/
├── pf-backend/          # API Node.js (TypeScript)
├── pf-frontend/         # Application Vite + TypeScript (SCSS)
├── docker-compose.yml   # Orchestration des services
├── package.json         # Dépendances racine (Sass)
└── .gitignore
```

## Ports utilisés

| Service | Port |
|---------|------|
| Frontend (Vite) | `5173` |
| Backend (API) | `3000` |
| MongoDB | `27017` |

---

Projet réalisé par [Filipe Da Silva ](https://github.com/Dricjord) et [Luan Cortes Zuka ](https://github.com/Luan-CortesZ)