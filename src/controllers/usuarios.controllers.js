
export const getUsuarios = (req, res) => {
    res.send('Obteniendo usuarios');
};

export const getUsuarioById = (req, res) => {
    res.send('Obteniendo un solo usuario');
}

export const postUsuario = (req, res) => {
    res.send('Creando un usuario');
}

export const putUsuario = (req, res) => {
    res.send('Actualizando un usuario');
}

export const deleteUsuario = (req, res) => {
    res.send('Eliminando un usuario');
}