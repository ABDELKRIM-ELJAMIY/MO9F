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

## Avancement du Backend (Résumé en français)

### 1. Mise en place de la structure de base
- Serveur Express configuré avec connexion à MongoDB.
- Activation de CORS et gestion des requêtes JSON.
- Organisation du projet en dossiers (controllers, models, routes, config).

### 2. Authentification
- Inscription et connexion sécurisées pour les utilisateurs (ouvriers/clients) avec JWT et bcrypt.
- Hachage des mots de passe lors de l'inscription.
- Vérification des identifiants et génération de token JWT à la connexion.
- Gestion multi-rôles (ouvrier, client) avec un schéma utilisateur flexible.

### 3. Gestion des ouvriers
- Création et mise à jour du profil professionnel (nom, photo, métier, expérience, description, localisation, disponibilité, tarifs).
- Mise à jour en temps réel de la disponibilité (disponible/occupé).
- Consultation des demandes reçues de la part des clients et possibilité d'y répondre (accepter/refuser).
- Endpoint pour consulter les avis (actuellement stub/vide).

### 4. Gestion des clients
- Possibilité d'envoyer une demande de contact à un ouvrier spécifique, avec type de service et niveau d'urgence.
- Les demandes sont enregistrées en base de données et liées à l'ouvrier et au client.

### 5. Modèle de demande (DemandeContact)
- Chaque demande contient : contenu, date d'envoi, statut (en attente/acceptée/refusée), type de service, urgence, références vers l'ouvrier et le client.

### 6. Organisation des routes
- Séparation claire des endpoints pour l'authentification, les ouvriers et les clients dans des fichiers routes distincts.