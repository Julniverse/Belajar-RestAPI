import express, { Application, Request, Response } from "express";

const app: Application = express();
const port: number = 8080;

app.use("/health", (req: Request, res: Response) => {
  res.status(200).send({ status: "200" });
});

app.listen(port, () => console.log("Server is listening on port 8080"));
