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

//GET lista todos professores
//GET == READ -->
app.get("/professores", (req, res) => {
  res.status(200).json(professores);
});

//GET professores por ID
//GET == READ -->
app.get("/professores/:id", (req, res) => {
  let index = findTeacher(req.params.id);
  res.status(200).json(professores[index]);
});

//POST == CREATE NEW PROFESSOR
app.post("/professores", (req, res) => {
  //include a new professor to the body
  professores.push(req.body);
  res.status(201).send("Professor incluido na lista com sucesso.");
});

//PUT == UPDATE
app.put("/professores/:id", (req, res) => {
  let index = findTeacher(req.params.id);
  professores[index].Disciplina = req.body.Disciplina;
  res.status(200).json(professores);
});

//DELETE
app.delete("/professores/:id", (req, res) => {
  let { id } = req.params;
  let index = findTeacher(id);
  professores.splice(index, 1);
  res.send(`Professor ${id} removido com sucess`);
});

//funcao para localizar um professor por ID
function findTeacher(id) {
  //checa se o ID do professor é igual ao do parametro passado
  return professores.findIndex((professor) => professor.id == id);
}

export default app;
