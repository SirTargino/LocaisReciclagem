import { Router } from "express";
import { createLocal, deleteLocalByID, editLocalByID, getAllLocals, getLocalByCity } from "../controllers/local.controller.js";

const localRouter = Router();

localRouter.post('/criarlocal', createLocal);
localRouter.get('/todoslocais', getAllLocals);
localRouter.get('/locaisporcidade', getLocalByCity);
localRouter.put('/editarlocal/:id', editLocalByID);
localRouter.delete('/excluirlocal/:id', deleteLocalByID);

export {localRouter};