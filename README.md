# proyectoFullStackBit

1. npm nit --yes // Inicializa el proyecto

2. Instalar Dependencias:
    # npm i express 
    Es el framework mas popular ya que proporciona la estructura, es nuestra puesta de enlace para que funcione, nos permite definir rutas, manejar solicitudes http.
    # npm i nodemon
    Automatiza el reinicio del servidor, cada vez que se guardan cambios.
    # npm i mongodb
    Es una base de datos noSQL (usada para almacenar datos).
    # npm i mongoose 
    Es un hijo de mongodb que proporciona una interfax .
    # npm i fs-extra
    Amplía las funcionalidades del módulo de nodeJs (trabajar con archivos).
    # npm i bcryptjs
    hashea o encripta la contraseña, la convierte en otra contrasea diferente y por debajo de ese código esta nuestra contraseña real.
    # npm i jsonwebtoken
    Genera token en se usa para generar autorización y autenticación en las aplicaciones web.
    # npm i cors
    Lo que nos ayuda es que las apps de diferentes origines se comuniquen entre si, cuando queremos interactuar con front desde diferentes origenes.
    # npm i dotenv
    Guardamos una información sensible, sirve como variable de entorno para guardar cosas sensibles.
    # npm i multer
    Se usa para implementar funcionalidades de carga de imagenes, de archivos, se usa para el manejo de archivos.
    # npm i morgan
    Registra las solicitudes del http que llegan a ee servior y es util para monitoriar el trafico de la operación, es un midleware.

3. Sobre la misma linea de mi package.json creamos una carpeta que sera nuestro source "src", vamos a crear los 3 archivos mas importantes
    # index.js, conexion.js, servidor.js
    Despues vamos a importar las dependencias con:
    - # import express from "express"; 
        Sirve para realizar la conexión con el servidor
    - # import morgan from "morgan";
        Monitorea y depura

4. En el package.js:
    - Cambiamos el main por:
    # "src/index.js"
    - Creamos  
    # "start": "node src/index.js",
    # "dev": "nodemon src/index.js"
    # "type": "module",

5. Corremos el programa con: 
    # npm run dev

6. Dentro de la consola me debe aparecer lo siguiente:

    > back@1.0.0 dev
    > nodemon src/index.js

    [nodemon] 3.1.10
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching path(s): *.*
    [nodemon] watching extensions: js,mjs,cjs,json
    [nodemon] starting `node src/index.js`
    El servidor esta escuchando en el link http://localhoust:3000
    está conectado a la base de datos

7. Creamos un archivo .env a la altura del package.json
    # .env

8. Dentro del archivo .env creo una variable de entorno que va a contener la ruta que copie en mongoDB en este caso mi variable de entorno se llama MONGODB (puede ser cualquier nombre)

9. En la conexion importo mongoose llamo a el metodo connect y dentor del metodo llamo a al proceso y le digo que revise la variable de entorno que esta dentro del archivo .env

10. luego modifico mi archivo index.js en sus primeras lineas agregando las importanciondes de dotenv import "dotenv/config"; para que podamos leer la ruta de nuestra variable de entorno y luego importo la conexion a la v=base de datos que esta en mi archivo llamado conexion.js