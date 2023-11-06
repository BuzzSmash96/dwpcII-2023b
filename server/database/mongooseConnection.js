import mongoose from 'mongoose';
import log from '../config/winston';
// creando funcion de conexion //

export default async function connectWithRetry(mongoUrl) {
  try {
    await mongoose.connect(mongoUrl);
    log.info('✅ Conectado a MongoDB');
  } catch (error) {
    log.error(`💔 No se logro la conecion a db 💔: ${error.message}`);
    log.error('intentando la conexión en 20 segundos');
    setTimeout(() => connectWithRetry(mongoUrl), 20000);
  }
}
