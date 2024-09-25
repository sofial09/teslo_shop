<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Teslo API
1. Crear archivo docker-compose.yml
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
    volumes:
      - ./postgres:/var/lib/postgresql/data
```

2. Crear variables de entorno para uso en .yml
```
DB_PASSWORD=PassBD@postgres
DB_NAME=TesloDB
```

3. Levantar la base de datos 
```
docker-compose up -d
```