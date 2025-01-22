import { Request, Response } from "express"

export function ola(_req: Request, res: Response) {
    console.log("Rota / acessado")

    return res.send("Olá")
}