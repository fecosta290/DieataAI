import fastify from "fastify";
import cors from '@fastify/cors';
import  dotenv from "dotenv";
import { routes } from "./routes";
const app = fastify({logger: true})


dotenv.config();

app.setErrorHandler((error, request, reply) =>{
    reply.code(400).send({message: error.message})
})


const porta = process.env.PORT || 3333

const start = async() => {
    app.register(cors);
    app.register(routes)

    try{
        await app.listen({port: porta, host:"0.0.0.0"})
        console.log(`servidor rodando em http://26.171.198.149:3333/teste`)
    }catch(err){
        console.log(err)
    }
}

start();