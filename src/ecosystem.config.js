/**  EDITAR ESTE ARCHIVO PARA SER UTILIZADO EN EL DESPLIEGUE DE AMBIENTES EN GITLAB MAG */
module.exports = {
  apps: [
    {
      name: 'micro_interoperabilidad',
      exec_mode: 'cluster',
      instances: '2',
      script: './main.js',
      args: 'start',
      /**TODO: AMBIENTE DE DESARROLLO */
      env_des: {
        NODE_ENV: 'des',
        PORT_DEFAULT: 3055,
        NAME_PROYECT: 'micro_interoperabilidad',
        DETAIL_PROYECT:
          'Microservicio para conectarse a la base de datos PostgreSQL y CRUD',
        VERSION: 1.5,
        HOST_DATABASE: '10.10.1.37',
        PORT_DATABASE: 5432,
        USER_DATABASE: 'cburgos',
        PASS_DATABASE: 'cburgos',
        NAME_DATABASE: 'dvdrental',
        SCHEMA_DATABASE: 'pruebaMicro',
        RETRYDELAY_DATABASE: 3000,
        RETRYATTEMPTS_DATABASE: 10,
        HOST_SWAGGER: 'http://10.10.1.243:3055',
        DETAIL_SWAGGER: 'Servidor de desarrollo',
        API_KEY: '6PxFc1GiLz8i2EWuJkj9qrJOrqjTNW4h',
      },
      /**TODO: AMBIENTE DE PRUEBAS */
      env_test: {
        NODE_ENV: 'test',
        PORT_DEFAULT: 3055,
        NAME_PROYECT: 'micro_interoperabilidad',
        DETAIL_PROYECT:
          'Microservicio para conectarse a la base de datos PostgreSQL y CRUD',
        VERSION: 1.5,
        HOST_DATABASE: '10.10.1.32',
        PORT_DATABASE: 5432,
        USER_DATABASE: 'cburgos',
        PASS_DATABASE: 'cburgos',
        NAME_DATABASE: 'dvdrental',
        SCHEMA_DATABASE: 'pruebaMicro',
        RETRYDELAY_DATABASE: 3000,
        RETRYATTEMPTS_DATABASE: 10,
        HOST_SWAGGER: 'http://10.10.1.105:3055',
        DETAIL_SWAGGER: 'Servidor de pruebas',
        API_KEY: '6PxFc1GiLz8i2EWuJkj9qrJOrqjTNW4h',
      },
      /**AMBIENTE DE PRODUCCIÓN */
      env_prod: {
        NODE_ENV: 'prod',
        PORT_DEFAULT: 3055,
        NAME_PROYECT: 'micro_interoperabilidad',
        DETAIL_PROYECT:
          'Microservicio para conectarse a la base de datos PostgreSQL y CRUD',
        VERSION: 1.5,
        HOST_DATABASE: '10.10.1.37',
        PORT_DATABASE: 5432,
        USER_DATABASE: 'cburgos',
        PASS_DATABASE: 'cburgos',
        NAME_DATABASE: 'dvdrental',
        SCHEMA_DATABASE: 'pruebaMicro',
        RETRYDELAY_DATABASE: 3000,
        RETRYATTEMPTS_DATABASE: 10,
        HOST_SWAGGER: 'http://10.10.1.243:3055',
        DETAIL_SWAGGER: 'Servidor de desarrollo',
        API_KEY: '6PxFc1GiLz8i2EWuJkj9qrJOrqjTNW4h',
      },
    },
  ],
};
