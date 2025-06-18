import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {

  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select 
      onChange={evento => props.aoAlterado(evento.target.value)} //função que recebe o valor digitado
      required={props.obrigatorio} 
      value={props.valor}>
        <option value="">Selecione um time da lista</option>
        {props.itens.map((item, index) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
