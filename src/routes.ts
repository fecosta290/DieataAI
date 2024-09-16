import{
    FastifyInstance,
    FastifyPluginOptions,
    FastifyRequest,
    FastifyReply
} from 'fastify'
import { CreateNutricionController } from './controllers/createNutricionController'
import { CreateNutricionService } from './services/createNutricionService'



export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/teste", (Request: FastifyRequest, reply: FastifyReply) => {

        let responseText = "```json\n{\n  \"nome\": \"Andre\",\n  \"sexo\": \"Masculino\",\n  \"idade\": 20,\n  \"altura\": 180,\n  \"peso\": 100,\n  \"objetivo\": \"Hipertrofia\",\n  \"refeicoes\": [\n    {\n      \"horario\": \"08:00\",\n      \"nome\": \"Café da Manhã\",\n      \"alimentos\": [\n        \"2 fatias de pão integral\",\n        \"2 ovos mexidos\",\n        \"1 banana\",\n        \"200ml de leite desnatado\",\n        \"1 colher de sopa de azeite de oliva\"\n      ]\n    },\n    {\n      \"horario\": \"10:00\",\n      \"nome\": \"Lanche da Manhã\",\n        \"alimentos\": [\n          \"1 iogurte grego natural\",\n          \"1 scoop de whey protein\",\n          \"1 colher de sopa de granola\"\n        ]\n    },\n    {\n      \"horario\": \"13:00\",\n      \"nome\": \"Almoço\",\n      \"alimentos\": [\n        \"150g de frango grelhado\",\n        \"1 xícara de arroz integral\",\n        \"1 xícara de brócolis\",\n        \"Salada de folhas verdes com tomate e azeite de oliva\"\n      ]\n    },\n    {\n      \"horario\": \"15:00\",\n      \"nome\": \"Lanche da Tarde\",\n        \"alimentos\": [\n          \"1 batata doce média\",\n          \"1 scoop de whey protein\"\n        ]\n    },\n    {\n      \"horario\": \"19:00\",\n      \"nome\": \"Jantar\",\n      \"alimentos\": [\n        \"150g de peixe assado\",\n        \"1 xícara de batata doce cozida\",\n        \"1 xícara de espinafre\"\n      ]\n    },\n    {\n      \"horario\": \"21:00\",\n      \"nome\": \"Lanche da Noite\",\n        \"alimentos\": [\n          \"1 scoop de caseína\"\n        ]\n    }\n  ],\n  \"suplementos\": [\n    \"Whey Protein\",\n    \"Creatina\",\n    \"BCAA\",\n    \"Glutamina\"\n  ]\n}\n```"

        try{
            //EXTRAIR O JSON
            let jsonString = responseText.replace(/```\w*\n/g, '').replace(/\n```/g, '').trim();
            let jsonObject = JSON.parse(jsonString)


            return reply.send({data: jsonObject});

        }catch(err){
            console.log(err)
        }

        reply.send({ok: true})
    })

    fastify.post("/create", async(Request: FastifyRequest, reply: FastifyReply) => {
        return new CreateNutricionController().handle(Request, reply)
    })
    
}