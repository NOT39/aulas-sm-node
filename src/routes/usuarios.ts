import { Router } from "express";
import { jwtVerify } from "../middlewares/jwt-verify";
import { registrarUsuario } from "../controllers/usuarios/registrar-usuario";
import { listarUsuarios } from "../controllers/usuarios/listar-usuarios";
import { atualizarUsuario } from "../controllers/usuarios/atualizar-usuario";
import { deletarUsuario } from "../controllers/usuarios/deletar-usuario";

export const usuariosRouter = Router({})

usuariosRouter.get('/', jwtVerify, listarUsuarios)

usuariosRouter.post('/', registrarUsuario)

usuariosRouter.put('/:id', jwtVerify, atualizarUsuario)

usuariosRouter.delete('/:id', jwtVerify, deletarUsuario)