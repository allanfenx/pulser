import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

type TokenPayload = {
    id: string;
    name: string;
    iat: number;
    exp: number;
    role: string;
    email: string;
}

export default (request: Request, response: Response, next: NextFunction) => {

    const { authorization } = request.headers;

    if (!authorization) return response.status(404).json({ erro: "No token provider" });

    const enviroment = String(process.env.SECRET);

    try {

        const decode = verify(authorization, enviroment);

        const { exp, name, iat, id, role, email } = decode as TokenPayload;

        request.name = name;
        request.userID = id;
        request.role = role;
        request.email = email;

        return next();

    } catch (error) {
        return response.status(401).json({ erro: "Invalid token" });
    }
}