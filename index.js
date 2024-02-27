import Express from "express";
const app = Express();
import { usuario } from "./routes/routesUser.js";

app.use (Express.json());

app.use('/api/usuario', usuario);

app.listen(4000, ()=>{

    console.log("Escuchando en el puerto 4000");
});