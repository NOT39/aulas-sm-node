import { Router } from "express";
import { listarProjetos } from "../controllers/projetos/listar-projetos";
import { cadastrarProjeto } from "../controllers/projetos/cadastrar-projeto";
import { atualizarProjeto } from "../controllers/projetos/atualizar-projeto";
import { alterarProjetoFixado } from "../controllers/projetos/alternar-projeto-fixado";
import { deletarProjeto } from "../controllers/projetos/deletar-projeto";

export const projetosRouter = Router({})

projetosRouter.get('/', listarProjetos)

projetosRouter.post('/', cadastrarProjeto)

projetosRouter.put('/:id', atualizarProjeto)

projetosRouter.patch("/:id/fixado", alterarProjetoFixado)

projetosRouter.delete('/:id', deletarProjeto)