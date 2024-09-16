import { FastifyRequest, FastifyReply } from "fastify";
import { CreateNutricionService } from "../services/createNutricionService";



export interface DataProps{
    name: string,
    weight: string,
    height: string, 
    age: string, 
    gender: string, 
    objective: string, 
    level: string
}

class CreateNutricionController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const{ name, weight, height, age, gender, objective, level} = request.body as DataProps;
        const createNutricion = new CreateNutricionService()

        const nutricion = await createNutricion.execute({
            name,
            weight,
            height,
            age,
            gender,
            objective,
            level,
        });


        reply.send(nutricion)
    }
}

export {CreateNutricionController}