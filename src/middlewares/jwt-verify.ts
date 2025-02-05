import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'


export function jwtVerify(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers

    const token = authorization?.split(' ')[1]

    if (!token) {
        return res.status(401).json({
            message: "Usuário não autenticado."
        })
    }

    const { sub } = jwt.verify(token, process.env.JWT_SECRET!)

    if (!sub) {
        return res.status(401).json({
            message: "Usuário não autenticado."
        })
    }

    return next()
}