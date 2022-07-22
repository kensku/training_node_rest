//Arquivo que cria o servidor inicial

const http = require('http');
const port = 3000;


const rotas = {
    '/idProf': 'id do professor',
    '/nomeProf': 'nome do professor',
    '/emailProf': 'email do professor',
    '/teleProf': 'telefone do professor',
    '/disciplina': 'disciplina do professor'
}


const server = http.createServer((req, res)=> {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(rotas[req.url]);
    
});

server.listen(port, ()=>{
    console.log(`Servidor escutando em http://localhost:${port}`);
})


