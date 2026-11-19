## Microservicio

```bash
Definciión: Esta API permite conectarse a una base de datos PostgreSQL y crear CRUD's de cada tabla.
* Nota: No incluir en este componente lógica de negocio.
```

## Nombre del proyecto

```bash
Nombre: micro_interoperabilidad (Siempre incluir guión inferior ' _ ' para nombrar el proyecto)
```

```bash
ANTES DE INCIIAR: busca micro_interoperabilidad y reemplaza con el nombre de tu proyect, por ejemplo micro_productor
```

## Información técnica

```bash
Puerto: 2020 {PUERTO_DEFINIDO}
NodeJS: 22.11.0 LTS ¡Importante trabajar con esta versión!
NestJS: 11.4.4 o superior
Versión 1.7
npm: 11.0.0
Seguridad: API KEY
```

## Nomenclatura

```bash
Nombre endpoints: findByIdAppAndIdPer
@Controller('') : Siempre incluir nombres con guion central (@Controller('micro-productor'))
Variables globales: Definirlas en Mayusculas con guión bajo (NAME_DATABASE)
Nombre del proyecto: Definirlas con guión bajo (micro_interoperabilidad)
Nombre de funciones y variables utilizar lowerCamelCase.
```

## Status Code

```bash
200: Use para respuestas exitosas de consultas (GET)
201: Use para respuestas exitosas de creación (POST)
400: Use para errores de validación del cliente
401: Use cuando faltan credenciales o son inválidas
403: Use cuando hay credenciales válidas pero sin permisos
404: Use cuando el recurso solicitado no existe
409: Use cuando hay conflictos de datos (ej: duplicados)
500: Use para errores internos inesperados
502: Use para errores de comunicación entre servicios
503: Use cuando el servicio está temporalmente caído
```

## Iniciar un proyecto

```bash
$ npm install
```

## Correr servicios en local

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

## run in Production PM2
$ npm run build

## Test

# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Archivos importantes

```bash
.gitlab-ci.yml : Archivos para el despliegue automatico en los servidores ministeriales.
.des.env : Variables globales para desarrollar localmente.
ecosystem.config.js : Variables globales para servidores de pruebas y producción MAG.
micro/health : Controla el estatus del micro y de su base de datos.
```

## Deploy in the server MAG PM2

```bash
# Editar el archivo de variables de entorno para cada ambiente (despliegue automático)
Editar el archivo:  ecosystem.config.js

# desarrollo
pm2 startOrRestart ecosystem.config.js --env des
# pruebas
pm2 startOrRestart ecosystem.config.js --env test
# producción
pm2 startOrRestart ecosystem.config.js --env prod
```

## Abrir Swagger en el explorador web local

```bash
http://localhost:{PUERTO_DEFINIDO}/micro_interoperabilidad/

```

## Abrir Swagger en el explorador web server (Desarrollo)

```bash
http://10.10.1.243:{PUERTO_DEFINIDO}/micro_interoperabilidad/

```

## Token para probar este servicio

```bash
API_KEY='6PxFc1GiLz8i2EWuJkj9qrJOrqjTNW4h'
```

## Procedimiento para poner el servicios en producción

```bash
1.- Verificar y llenar el archivo ecosystem.config.js en el aparto "env_production".
2.- Verificar que exista un puerta entre 3010-3099.
3.- Realizar merge a la rama master.
```

## Support

- Plantilla desarrollada para el Ministerio de Agricultura basada en Typscript con el framewrok Nestjs 11.

## Author

- [Carlos Burgos C.]

## License

- Ministerio de Agricultura - 2025
