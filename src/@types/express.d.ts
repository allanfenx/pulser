declare namespace Express {
    export interface Request {
        email: string,
        userID: string,
        name: string,
        role: role
    }
}