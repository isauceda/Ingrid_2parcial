import { Express } from "express";
const app = Express();

app.use (Express.json());

app.listen(4000, ()=>{

    console.log("Escuchando en el puerto 4000");
});