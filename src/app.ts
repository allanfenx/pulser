import express from "express";
import "reflect-metadata";
import "./database/connection";

import UserRoutes from "./routes/UserRoutes";
import AuthRoutes from "./routes/AuthRoutes";
import CategoryRoutes from "./routes/CategoryRoutes";
import ProductRoutes from "./routes/ProductRoutes";
import AndressRoutes from "./routes/AndressRoutes";
import ProductStockRoutes from "./routes/ProductStockRoutes";
import ProductImageRoutes from "./routes/ProductImageRoutes";

const app = express();
const Port = 8080;

app.use(express.json());
app.use(UserRoutes);
app.use(AuthRoutes);
app.use(CategoryRoutes);
app.use(ProductRoutes);
app.use(AndressRoutes);
app.use(ProductStockRoutes);
app.use(ProductImageRoutes)

app.listen(Port, () => {
    console.log("Aplication running!");
});