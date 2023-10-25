import dotenv from 'dotenv';

// invocacion a la funcion config de la intancia dotenv//
dotenv.config();

console.log(process.env.PORT);

// CREANDO OBJETOS DE CONFIGURACIÓN //
const defaultConfig = {
  PORT: process.env.PORT || 3000,
  IP: process.env.IP || '0.0.0.0',
};

const devConfig = {
  DEV_VALUE: 100,
};

const testConfig = {
  TEST_VALUE: 200,
};

const prodConfig = {
  PROD_VALUE: 300,
};

// creando funcion selectora //
function getEnvConfig(env) {
  switch (env) {
    case 'production':
      return prodConfig;
    case 'development':
      return devConfig;
    case 'test':
      return testConfig;
    default:
      return devConfig;
  }
}

// exportar el obejeto de configuracion //

export default {
  ...defaultConfig,
};
