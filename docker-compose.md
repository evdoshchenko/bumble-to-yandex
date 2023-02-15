Содержание файла docker compose на ВМ в YC

version: "3.9"

services:
    postgres:
      image: postgres:14     
      ports:
        - "5432:5432"
      environment:
        POSTGRES_PASSWORD: postgres
        POSTGRES_USER: postgres
        POSTGRES_DB: postgres
      volumes:
        - ./tmp/pgdata:/var/lib/postgresql/data
    server:
      container_name: practicum-server
      image: cr.yandex/crpr86nohje7jd3nt11h/practicum-server:latest
      restart: always
      ports:
          - "5000:5000"
      environment:
        SERVER_PORT: 5000
    client:
      container_name: practicum-client
      image: cr.yandex/crpr86nohje7jd3nt11h/practicum-client:latest
      restart: always
      tty: true
      ports:
        - "80:80"
        - "443:443"
      volumes:
        - /ssl/1:/var/www/ssl/
      environment:
        SERVER_NAME: wordrunners-bumble-20.ya-praktikum.tech
      depends_on:
        - server
