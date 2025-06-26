import express from "express";
import morgan from "morgan"; // Monitorear solicitud http
import cors from "cors";
import routerUsers from "./routers/routerUsers.js";

const servidor = express(); // Para realizar la conexión con la constante servidor.
servidor.use(cors());
servidor.use(morgan("dev")); // Para que se actualice conforme vamos realizando cambios.
servidor.use(express.json()); // Para que la conexión que realicemos nos reciba un formato json.
servidor.use('/users', routerUsers);

servidor.get('/',(sol, res)=>{
    res.status(404).send("No encontrado"); // Por si no encuentra la conexión me enviara esta respuesta.
});

export default servidor;