import cors from "cors";
import express from "express";
import banco from "./banco.js";
import disciplina from "./controller/DisciplinaController.js";

try {
    await banco.authenticate();
    console.log('Conexão com o banco de dados realizada com sucesso.');
} catch (error) {
    console.error('Erro ao conectar com o banco de dados:', error);
}

const app = express();
app.use(express.json());
app.use(cors());

app.get('/teste', (req, res) => {
    res.send('Teste ok.');
});

//rotas crud da tabela disciplina
app.get('/disciplina', disciplina.listar);
app.get('/disciplina/:id', disciplina.selecionar);
app.post('/disciplina', disciplina.inserir);
app.put('/disciplina/:id', disciplina.alterar);
app.delete('/disciplina/:id', disciplina.excluir);

app.listen(4000, () => { console.log(`Servidor rodando.`) });