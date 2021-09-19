import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
require("dotenv").config;
const main = async () => {
  const orm = MikroORM.init({
    entities: [],
    host: process.env.host,
    dbName: process.env.dbName,
    user: process.env.dbUser,
    password: process.env.dbPassword,
    debug: !__prod__
  });
};

main();

console.log("apples");
