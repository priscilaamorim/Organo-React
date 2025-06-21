import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";
import Botao from "./../Botao/index";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Formulario = ({ aoColaboradorCadastrado, times, aoCriarTime }) => {
  // useState retorna um array com dois valores
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");

  // função que recebe os dados do formulario e envia para o App.js
  const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log("form enviado", nome, cargo, imagem, time);
    aoColaboradorCadastrado({
      //objeto que recebe os dados do formulario
      id: uuidv4(),
      nome,
      cargo,
      imagem,
      time,
    });
    //limpa os campos do formulario
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Campo
          obrigatorio={true} //campo obrigatorio
          label="Nome" //label do campo
          placeholder="Digite seu nome" //placeholder do campo
          valor={nome} //valor digitado
          aoAlterado={(valor) => setNome(valor)} //função que recebe o valor digitado
        />

        <Campo
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />

        <Campo
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />

        <ListaSuspensa
          obrigatorio={true}
          label="Time"
          itens={times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>

      <form
        onSubmit={(evento) => {
          evento.preventDefault();
          aoCriarTime({ nome: nomeTime, cor: corTime });
          setNomeTime("");
          setCorTime("");
        }}
      >
        <h2>Preencha os dados para criar um novo time.</h2>
        <Campo
          obrigatorio //campo obrigatorio
          label="Nome" //label do campo
          placeholder="Digite o nome do time" //placeholder do campo
          valor={nomeTime} //valor digitado
          aoAlterado={(valor) => setNomeTime(valor)} //função que recebe o valor digitado
        />

        <Campo
          obrigatorio
          type="color"
          label="Cor"
          placeholder="Digite a cor do time"
          valor={corTime}
          aoAlterado={(valor) => setCorTime(valor)}
        />

        <Botao>Criar um novo time</Botao>
      </form>
    </section>
  );
};

export default Formulario;
