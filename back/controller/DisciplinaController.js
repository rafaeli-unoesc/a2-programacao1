import Disciplina from "../model/DisciplinaModel.js";

async function listar(req, res) {
    const respostaBanco = await Disciplina.findAll();
    res.json(respostaBanco);
}

async function selecionar(req, res) {
    const id = req.params.id;
    const respostaBanco = await Disciplina.findByPk(id);
    res.json(respostaBanco);
}

async function inserir(req, res) {
    const nomedisciplina = req.body.nomedisciplina;
    const fase = req.body.fase;
    const respostaBanco = await Disciplina.create({ nomedisciplina, fase });
    res.json(respostaBanco);
}

async function alterar(req, res) {
    const iddisciplina = req.params.id;

    const nomedisciplina = req.body.nomedisciplina;
    const fase = req.body.fase;

    const respostaBanco = await Disciplina.update(
        { nomedisciplina, fase },
        { where: { iddisciplina } });
    res.json(respostaBanco);
}

async function excluir(req, res) {
    const iddisciplina = req.params.id;

    const respostaBanco = await Disciplina.destroy({ where: { iddisciplina } });
    res.json(respostaBanco);
}

export default { listar, selecionar, inserir, alterar, excluir };