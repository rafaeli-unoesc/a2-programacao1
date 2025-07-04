import TituloLista from "../componentes/TituloLista";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ListaDisciplina() {
    //Declarando uma variável useState
    const [dados, setDados] = useState([]);

    const listar = async () => {
        let { data } = await axios.get(`http://localhost:4000/disciplina`);
        setDados(data);
    }

    useEffect(() => {
        listar();
    }, []);

    return (
        <>
            <TituloLista titulo="Disciplinas"
                descricao="Gerencie aqui as disciplinas do curso"
                rota="/cadastrodisciplina" />


            <div className="row">
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Código</th>
                                <th scope="col">Disciplina</th>
                                <th scope="col">Fase</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dados.map((d, i) => (
                                <tr>
                                    <td>
                                        <a className="btn btn-primary"
                                            href={`/cadastrodisciplina/${d.iddisciplina}`}>Alterar</a>
                                    </td>
                                    <td>{d.iddisciplina}</td>
                                    <td>{d.nomedisciplina}</td>
                                    <td>{d.fase}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
};