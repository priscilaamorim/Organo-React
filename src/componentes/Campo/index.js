import "./Campo.css";

const Campo = ({
  type = "text",
  label,
  placeholder,
  valor,
  aoAlterado,
  obrigatorio = false,
}) => {
  const aoDigitado = (evento) => {
    //função que recebe o evento de digitação
    aoAlterado(evento.target.value); //função que recebe o valor digitado
  };

  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input
        type={type} // tipo do campo
        value={valor} //  valor digitado
        onChange={aoDigitado} //função que recebe o valor digitado
        required={obrigatorio} // campo obrigatorio
        placeholder={placeholder}
      />
    </div>
  );
};

export default Campo;
