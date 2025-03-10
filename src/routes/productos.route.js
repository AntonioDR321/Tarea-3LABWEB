import { Router } from 'express';
import { getProductos, getProductosById, postProductos, putProductos, deleteProductos } from '../controllers/productos.controllers.js';

const productosRouter = Router();

productosRouter.get('/Productos', getProductos);

productosRouter.get('/Productos/:id', getProductosById);

productosRouter.post('/Productos', postProductos);

productosRouter.put('/Productos/:id', putProductos);

productosRouter.delete('/Productos/:id', deleteProductos);

export default productosRouter;
