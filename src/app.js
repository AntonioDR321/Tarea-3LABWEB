import express from 'express';
import pedidosRouter from './routes/pedidos.route.js';
import productosRouter from './routes/productos.route.js'; 
import usuariosRouter from './routes/usuarios.route.js'; 

const app = express();

app.use(pedidosRouter);
app.use(productosRouter);
app.use(usuariosRouter);

export default app;