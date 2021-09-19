import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entites/Post";
import microConfig from "./mikro-orm.config";
require("dotenv").config;

const main = async () => {
  const orm = await MikroORM.init(microConfig);

  const post = orm.em.create(Post, { title: "sdad" });
  await orm.em.persistAndFlush(post);
};

main();

console.log("apples");
