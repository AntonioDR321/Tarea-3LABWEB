
export const getProductos = (req, res) => {
    res.send('Obteniendo productos');
};

export const getProductosById = (req, res) => {
    res.send('Obteniendo un solo producto');
}

export const postProductos = (req, res) => {
    res.send('Creando un producto');
}

export const putProductos = (req, res) => {
    res.send('Actualizando un producto');
}

export const deleteProductos = (req, res) => {
    res.send('Eliminando un producto');
}