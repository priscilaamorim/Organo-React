import "./CampoTexto.css";

const CampoTexto = (props) => {
  const aoDigitado = (evento) => { //função que recebe o evento de digitação
    props.aoAlterado(evento.target.value);  //função que recebe o valor digitado
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.valor} //  valor digitado
        onChange={aoDigitado} //função que recebe o valor digitado
        required={props.obrigatorio} // campo obrigatorio
        placeholder={props.placeholder} 
      />
    </div>
  );
};

export default CampoTexto;
