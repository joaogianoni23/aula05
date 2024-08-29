import { config } from 'dotenv'
import express from 'express'

config()

const  serverPort = process.env.PORT || 4000

const app = express()

app.use(express.json())

const emocoes = [
    {
        id: 1,
        nome: "Nojinho",
        cor: "Verde"
    },
    {
        id: 2,
        nome: "Raiva",
        cor: "Vermelho"
    },
    {
        id: 3,
        nome: "Tristeza",
        cor: "Azul"
    },
]

const personagens = [
    {
        id: 100,
        nome: "Batman",
        studio: "DC comics",
        vivo: true
    },
    {
        id: 101,
        nome: "Deadpool",
        studio: Disney,
        vivo: true
    },
    {
        id: 102,
        nome: "Kevin Garvey",
        studio: "HBO",
        vivo: true
    },
]
app.get("/2tds2", (req, res) => {
    return res .status(200)
    .send( emocoes )
})
app.get("/emocoes", (req, res) => {
    return res .status(200)
    .send( emocoes )
})
app.get("/personagens", (req, res) => {
    return res .status(200)
    .send( personagens )
})

app.listen(serverPort, () => {
    console.log(`🤑 Server started on http://localhost:${serverPort}`)
})