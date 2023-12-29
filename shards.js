const { ShardingManager } = require("discord.js");
const config = require("./config.json");

const manager = new ShardingManager("./index.js", { token: config.bot.token });

manager.on("shardCreate", (shard) => console.log(`Launched shard ${shard.id}`));

manager.spawn();
