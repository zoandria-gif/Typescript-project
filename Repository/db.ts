import { Pool } from "pg";//pool: gère les connections vers Postgres/fournie par le module pg
import "dotenv/config";//import pour effet de bord, dotenv va lire le fichier .env et charger les variables d'environnement dans process.env
                        // toutes les variables de .env sont accessibles via "process.env.VARIABLE_NAME"

export const pool = new Pool({ //variable exporter
  host: process.env.DB_HOST,//host: l'adresse du serveur de base de données
  port: Number(process.env.DB_PORT),//port: le port sur lequel le serveur de base de données écoute
  database: process.env.DB_NAME,//database: le nom de la base de données à laquelle se connecter
  user: process.env.DB_USER,//user: le nom d'utilisateur pour se connecter à la base de données
  password: process.env.DB_PASSWORD,//password: le mot de passe pour se connecter à la base de données
});