import { Router } from "express"

const rapperRoutes = Router()

let rapper = [
    {
        id: Number(Math.floor(Math.random() * 99999999999) + 1),
        nome: "Jay-Z",
        idade: 54,
        descricaoFisica: "Dread no cabelo, sem barba, tom de pele: negro, altura: 1.88",
        envolvimento: true
    },

    {
        id: Number(Math.floor(Math.random() * 99999999999) + 1),
        nome: "P. Diddy ",
        idade: 54,
        descricaoFisica: "Cabelo crespo, barba pequena/media, tom de pele: negro, altura: 1.78",
        envolvimento: true
    },

    {
        id: Number(Math.floor(Math.random() * 99999999999) + 1),
        nome: "Justin Bieber",
        idade: 30,
        descricaoFisica: "Cabelo liso e grande, sem barba, tom de pele: branco, altura: 1.75",
        envolvimento: true
    },
]

rapperRoutes.get("/", (req, res) => {
    return res.status(200).send(rapper)
})

// Rota para cadastrar um novo suspeito
rapperRoutes.post("/", (req, res) => {
    const { nome, idade, envolvimento, descricaoFisica } = req.body
    

    const novoRapper = {
        id: Number(Math.floor(Math.random() * 99999999999) + 1),
        nome,
        idade,
        envolvimento,
        descricaoFisica
    }
    rapper.push(novoRapper);
    return res.status(201).send({Message: "Rapper cadastrado!",
        novoRapper,
});
})

//Rota para buscar um elemento especifico do array rapper
rapperRoutes.get("/:id", (req, res) => {
    const { id } = req.params
    //console.log(id)

    const rappers = rapper.find((rapper) => rapper.id === Number(id))

    console.log(rappers)

    if (!rappers) {
        return res.status(404).send({ message: "Rapper não encontrada!" })
    }
    return res.status(200).send(rappers)
})

//Rota para editar rapper
rapperRoutes.put("/:id", (req, res) => {
    const { id } = req.params

    const rappers = rapper.find((rapper) => rapper.id === Number(id))

    //console.log(rappers);
    if (!rappers) {
        return res.status(404).send({ message: "Rapper não encontrado!" })
    }

    const { nome, idade, envolvimento, descricaoFisica} = req.body
    console.log(nome)

    rappers.nome = nome
    rappers.idade = idade
    rappers.envolvimento = envolvimento
    rappers.descricaoFisica = descricaoFisica

    return res.status(200).send({
        massage: "Rapper atualizado!",
        rappers
    })
})

// Rota para deletar uma rappers
rapperRoutes.delete("/:id", (req, res) => {
    const { id } = req.params

    const rappers = rapper.find((rapper) => rapper.id === Number(id))

    if (!rappers) {
        return res.status(404).send({ message: "Rapper não encontrado!" })
    }

    rapper = rapper.filter((rapper) => rapper.id !== Number(id))

    return res.status(200).send({
        massage: "Rapper deletado!",
        rappers
    })
})

export default rapperRoutes