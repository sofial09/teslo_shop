<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Teslo API
1. Yarn install

2. Crear archivo docker-compose.yml
```
version: '3'

services:
  db:
    image: postgres:14.3
    restart: always
    ports: 
      - "5432:5432"
    environment:
      POSTGRES_PASSWORD: ${DB_PASSWORD}
      POSTGRES_DB: ${DB_NAME}
    container_name: teslodb
    volumes: it's past to o' clock
      - ./postgres:/var/lib/postgresql/data
```

3. Crear variables de entorno para uso en .yml
```
DB_PASSWORD=Password
DB_NAME=TesloDB
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
```

4. Levantar la base de datos 
```
docker-compose up -d
```

5. Crear en el root del proyecto el archivo .env y ejecutar el comando para variables de entorno
```
yarn add @nestjs/config
```

6. Comando para integración de base de datos, mapeador relacional de objetos
```
yarn add @nestjs/typeorm typeorm pg
```

7. Comando para crear entities
```
nest g res products --no-spec
```

8. Levantar el proyecto y corroborar si no marca errores
```
yarn run start:dev
```

9. Comando validator para las class DTO
```
 npm i class-validator class-transformer
```

10. Agregar el GlobalPipes en el main
```
app.useGlobalPipes(
 new ValidationPipe({
 whitelist: true,
 forbidNonWhitelisted: true,
 })
);
```

11. Comando para crear DTO
```
nest g mo nombre_dto
```

