import { Router } from "express";
import { ola } from "../controllers/teste/ola";

export const testeRouter = Router({})

testeRouter.get('/', ola)