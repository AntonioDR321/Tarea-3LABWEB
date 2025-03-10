import {getConnection} from '../database/connection.js';

export const getPedidos = async (req, res) => {
    try {
        const pool = await getConnection();
        if (!pool) {
            throw new Error('La conexión a la base de datos es indefinida');
        }
        const result = await pool.request().query('SELECT * FROM Pedidos');
        res.json(result.recordset); // Enviar el resultado como JSON
    } catch (error) {
        console.error('Error al recuperar los pedidos:', error);
        res.status(500).send('Error al recuperar los pedidos');
    }
};

export const getPedidosById = (req, res) => {
    res.send('Obteniendo un solo pedido');
}

export const postPedidos = (req, res) => {
    res.send('Creando un pedido');
}

export const putPedidos = (req, res) => {
    res.send('Actualizando un pedido');
}

export const deletePedidos = (req, res) => {
    res.send('Eliminando un pedido');
}