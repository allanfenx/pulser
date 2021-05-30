import express from "express";
import "reflect-metadata";
import "./database/connection";

import UserRoutes from "./routes/UserRoutes";
import AuthRoutes from "./routes/AuthRoutes";

const app = express();
const Port = 8787;

app.use(express.json());
app.use(UserRoutes);
app.use(AuthRoutes);

app.listen(Port, () => {
    console.log("Aplication running!");
});