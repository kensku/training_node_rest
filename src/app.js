import express from "express";

const app = express();

const professores = [
  {
    id: 1,
    Nome: "Mauro da Silva",
    Email: "mauroMath@gmail.com",
    Telefone: "(11) 94837-4930",
    Disciplina: "Matematica",
  },
  {
    id: 2,
    Nome: "Alexandra Goncalves",
    Email: "aleIngles@gmail.com",
    Telefone: "(12) 94537-4983",
    Disciplina: "Ingles",
  },
];

//GET nomes do professores em forma de lista JSON
app.get('/professores',(req, res) =>{
    res.status(200).json(professores)
});

export default app;
