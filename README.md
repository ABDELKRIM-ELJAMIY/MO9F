# Mo9f Digital

Mo9f Digital est une application web full-stack conçue pour moderniser le point de rencontre traditionnel des travailleurs journaliers en les mettant en relation avec des clients (particuliers ou professionnels) qui recherchent des services dans divers corps de métiers.

## Stack Technique

- **Frontend**: React (à venir)
- **Backend**: Node.js, Express.js
- **Base de données**: MongoDB

## Démarrage Rapide

Suivez ces instructions pour mettre en place et lancer le projet sur votre machine locale.

### Prérequis

- [Node.js](https://nodejs.org/en/) (version 14 ou supérieure)
- [MongoDB](https://www.mongodb.com/try/download/community) installé et en cours d'exécution

### Installation & Lancement

1.  **Clonez le dépôt**
    ```sh
    git clone <URL_DU_REPO>
    cd MO9F
    ```

2.  **Installez les dépendances du backend**
    ```sh
    cd backend
    npm install
    ```

3.  **Configurez les variables d'environnement**
    -   Créez un fichier `.env` à la racine du dossier `backend`.
    -   Copiez le contenu du fichier `.env.example` (s'il existe) ou ajoutez les variables suivantes :
        ```env
        PORT=5000
        DB_URL=mongodb://localhost:27017/mo9f_digital
        JWT_SECRET=votre_secret_jwt_super_long_et_aleatoire
        ```

4.  **Lancez le serveur backend**
    Le serveur démarrera sur `http://localhost:5000`.
    ```sh
    npm run dev
    ```

## Endpoints API

Les endpoints d'authentification sont disponibles sur la route `/api/auth`:

-   `POST /api/auth/register` : Enregistrer un nouvel utilisateur.
-   `POST /api/auth/login` : Connecter un utilisateur existant. 