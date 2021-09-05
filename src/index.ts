import express, { Application, Request, Response } from "express";
import redis, { RedisClient } from "redis";

const app: Application = express();
const port = process.env.PORT || 8081;
const client: RedisClient = redis.createClient({
  host: "redis-server",
  port: 6379,
});
client.set("visits", "0");

app.get("/", (req: Request, res: Response) => {
  client.get("visits", (err, visits) => {
    res.send("Number of visits is " + visits);
    client.set("visits", (parseInt(visits!) + 1).toString());
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
