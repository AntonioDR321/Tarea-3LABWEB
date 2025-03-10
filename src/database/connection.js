import sql from 'mssql';

const dbSettings = {
    user: "sa",
    password: "yourStrong#Password",
    server: "DESKTOP-HVTVG66\\SQLEXPRESS", // Asegúrate de que la barra invertida esté escapada
    database: "TestDB",
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

export const getConnection = async () => {
    try {
        console.log('Intentando conectar a la base de datos...');
        const pool = await sql.connect(dbSettings);
        console.log('Conexión a la base de datos exitosa');
        return pool;
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        throw new Error('Error al conectar a la base de datos');
    }
};