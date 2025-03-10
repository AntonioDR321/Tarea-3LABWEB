import { Router } from 'express';
import { getPedidos, getPedidosById, postPedidos, putPedidos, deletePedidos } from '../controllers/pedidos.controllers.js';

const pedidosRouter = Router();

pedidosRouter.get('/Pedidos', getPedidos);

pedidosRouter.get('/Pedidos/:id', getPedidosById);

pedidosRouter.post('/Pedidos', postPedidos);

pedidosRouter.put('/Pedidos/:id', putPedidos);

pedidosRouter.delete('/Pedidos/:id', deletePedidos);

export default pedidosRouter;