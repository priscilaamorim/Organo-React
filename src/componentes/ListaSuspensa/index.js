import "./ListaSuspensa.css";

const ListaSuspensa = ({
  label,
  valor,
  itens,
  aoAlterado,
  obrigatorio = false,
}) => {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select
        onChange={(evento) => aoAlterado(evento.target.value)} //função que recebe o valor digitado
        required={obrigatorio}
        value={valor}
      >
        <option value="">Selecione um time da lista</option>
        {itens.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
