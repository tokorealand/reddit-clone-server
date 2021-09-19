import { __prod__ } from "./constants";
import { Post } from "./entites/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/ // regex pattern for the migration files
  },
  driverOptions: {
    connection: { ssl: true }
  },
  entities: [Post],
  type: "postgresql",
  host: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  debug: !__prod__
} as Parameters<typeof MikroORM.init>[0];
