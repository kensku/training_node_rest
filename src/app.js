import express from "express";

const app = express();
app.use(express.json());

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
//GET == READ -->
app.get('/professores',(req, res) =>{
    res.status(200).json(professores)
});

//POST == CREATE NEW PROFESSOR
app.post('/professores', (req, res) =>{
    //include a new professor to the body
    professores.push(req.body);
    res.status(201).send('Professor incluido na lista com sucesso.');
});

export default app;
