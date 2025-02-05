import { Router } from "express";
import { listarProjetos } from "../controllers/projetos/listar-projetos";
import { cadastrarProjeto } from "../controllers/projetos/cadastrar-projeto";
import { atualizarProjeto } from "../controllers/projetos/atualizar-projeto";
import { alterarProjetoFixado } from "../controllers/projetos/alternar-projeto-fixado";
import { deletarProjeto } from "../controllers/projetos/deletar-projeto";
import { jwtVerify } from "../middlewares/jwt-verify";

export const projetosRouter = Router({})

projetosRouter.get('/', listarProjetos)

projetosRouter.post('/', jwtVerify, cadastrarProjeto)

projetosRouter.put('/:id', jwtVerify, atualizarProjeto)

projetosRouter.patch("/:id/fixado", jwtVerify, alterarProjetoFixado)

projetosRouter.delete('/:id', jwtVerify, deletarProjeto)