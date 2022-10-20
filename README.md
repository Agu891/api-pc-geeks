# API PC GEEKS
# Una api desarrollada para el proyecto final backend de Nucba

Base de datos de arquitectura hexagonal deployada en Heroku. Desarrollada con Express,  Node.js, Prisma,  Typescript, Postgresql,  Docker y testeada con Postman

# Usuarios de prueba para mercadopago

```javascript
//Tener enn cuenta que estos usuarios son solos para testing y seran eliminados si quedan sin uso por 60 dias
//Vendedor

{
    "usuario": "TESTSCTOKIAS",
    "contraseña": "7KFb9zOgGZ"
}

//Comprador

{
    "usuario": "TESTOIJCFBDN",
    "contraseña" : "5fekQXuR3Y"
}

{
    //tarjetas de prueba
    "visa" : {
        "nombre" : "APRO",
        "documento":  12345678,
        "numero":  4509 9535 6623 3704,
        "codigo de seguridad" : 123,
        "fecha de caducidad" : 11/25,

    }

}
```

#Deploy Heroku

- Instalar heroku CLI
- Sincronizar prissma con el postgres de heroku
  -no se puede usar prisma migrate usar :

  ```javascript
  npx prisma  db push
  ```

  - Correr el seed

    ```javascript
       npm run seed
    ```

  ```
  -Realizar el build de typescript
  -Modificar el entrypoint de la app(./dist/src/server.js)
  -Agregar los scripts "start" y "build"
  -Tener en cuenta los rootDirs y out dir en tsconfig.json

  ```

- Crear el archivo Procfile en el root del proyecto ("web: node dist/src/server.js")
