# Folder Structure

Open [docker-compose.yml](./dockercompose.yml) to see all services.

`/.db-data`/ : MongoDB local content

`/back/` : Strapi API ([open docs](https://strapi.io/documentation/v3.x/))

`/front`/ : NextJS ([open docs](https://nextjs.org/docs))

# Local setup

## Environment variables

````
cp .env.dist .env
````
Complete DataBase information with a mongo URI (or use docker MongoDB).

## Start project in development mode

````shell
docker-compose up
````

## Back-end

Useful links :

- [Strapi File Structure (with redirection to each file documentation)](https://strapi.io/documentation/v3.x/concepts/file-structure.html)
- [Customize Strapi Controller](https://strapi.io/documentation/v3.x/concepts/controllers.html)
- [Customize Strapi Services](https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
