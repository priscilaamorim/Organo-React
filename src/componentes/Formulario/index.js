import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";
import Botao from "./../Botao/index";
import { useState } from "react";

const Formulario = (props) => {
 


  // useState retorna um array com dois valores
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  // função que recebe os dados do formulario e envia para o App.js
  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      //objeto que recebe os dados do formulario
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
        <CampoTexto
          obrigatorio={true} //campo obrigatorio
          label="Nome" //label do campo
          placeholder="Digite seu nome" //placeholder do campo
          valor={nome} //valor digitado
          aoAlterado={(valor) => setNome(valor)} //função que recebe o valor digitado
        />

        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />

        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />

        <ListaSuspensa
          obrigatorio={true}
          label="Time"
          itens={props.times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
