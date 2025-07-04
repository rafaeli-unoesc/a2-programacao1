import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import TituloCadastro from "../componentes/TituloCadastro";

export default function FormDisciplina() {
    const navegacao = useNavigate();
    const { id } = useParams();

    //Declarar um useState para cada campo da tabela
    const [nomedisciplina, setNomeDisciplina] = useState('');
    const [fase, setFase] = useState('');

    const voltar = () => {
        navegacao('/listardisciplina');
    };

    const selecionar = async () => {
        let { data } = await axios.get(`http://localhost:4000/disciplina/${id}`);
        //carregar cada campo na sua respectiva variável
        setNomeDisciplina(data.nomedisciplina);
        setFase(data.fase);
    }

    const alterar = async () => {
        //montar o json do body com todos os campos que precisam ser enviados
        let body = {
            "nomedisciplina": nomedisciplina,
            "fase": fase
        };

        await axios.put(`http://localhost:4000/disciplina/${id}`, body);
        voltar();
    }

    const inserir = async () => {
        let body = {
            "nomedisciplina": nomedisciplina,
            "fase": fase
        };

        await axios.post(`http://localhost:4000/disciplina`, body);
        voltar();
    }

    const salvar = async () => {
        if (id) {
            alterar();
        }
        else {
            inserir();
        }
    }

    const excluir = async () => {
        await axios.delete(`http://localhost:4000/disciplina/${id}`);
        voltar();
    }

    useEffect(() => {
        if (id) {
            selecionar();
        }
    }, []);

    return (
        <>
            <TituloCadastro id={id} titulo="disciplina" />

            <form>
                {id && (
                    <div className="mb-3">
                        <label className="form-label">
                            Código
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            value={id}
                        />
                    </div>
                )}

                <div className="mb-3">
                    <label className="form-label">
                        Nome da disciplina
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={nomedisciplina}
                        onChange={(evento) => setNomeDisciplina(evento.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Fase
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={fase}
                        onChange={(evento) => setFase(evento.target.value)}
                    />
                </div>

                <button type="button" className="btn btn-primary"
                    onClick={() => salvar()}>
                    Salvar
                </button>
                <button type="button"
                    className="btn btn-secondary"
                    onClick={() => voltar()}>
                    Cancelar
                </button>
                {id && (
                    <button type="button"
                        className="btn btn-danger"
                        onClick={() => excluir()}>
                        Excluir
                    </button>
                )}
            </form>
        </>
    );
};