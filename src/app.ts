import express from "express";
import "reflect-metadata";
import "./database/connection";

import UserRoutes from "./routes/UserRoutes";

const app = express();
const Port = 8787;

app.use(express.json());
app.use(UserRoutes);

app.listen(Port, () => {
    console.log("Aplication running!");
});