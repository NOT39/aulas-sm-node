import { Router } from "express";
import { PrismaUsuariosRepository } from "../repositories/prisma-usuarios-repository";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { login } from "../controllers/auth/login";

export const authRouter = Router({})

authRouter.post("/login", login)

authRouter.patch("/refresh", )