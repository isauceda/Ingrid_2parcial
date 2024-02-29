import Express from "express";
const app = Express();
import { usuario } from "./routes/routesUser.js";
import cors from 'cors';

app.use (Express.json());
const corsOptions={
    origin : 'http://localhost:5173',
    credentials : true,
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']

}
app.use (cors(corsOptions));
app.use('/api/usuario', usuario);

app.listen(4000, ()=>{

    console.log("Escuchando en el puerto 4000");
});