import { Router } from 'express';
import { getUsuarios, getUsuarioById, postUsuario, putUsuario, deleteUsuario } from '../controllers/usuarios.controllers.js';

const usuariosRouter = Router();

usuariosRouter.get('/Usuarios', getUsuarios);

usuariosRouter.get('/Usuarios/:id', getUsuarioById);

usuariosRouter.post('/Usuarios', postUsuario);

usuariosRouter.put('/Usuarios/:id', putUsuario);

usuariosRouter.delete('/Usuarios/:id', deleteUsuario);

export default usuariosRouter;
