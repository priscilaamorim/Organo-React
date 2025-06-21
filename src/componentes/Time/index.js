import hexToRgba from "hex-to-rgba";
import Colaborador from "../Colaborador";
import "./Time.css";

const Time = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar }) => {
  const corFundo = { backgroundColor: hexToRgba(time.cor, "0.6") };
  const border = { borderColor: time.cor };
  const imagemDeFundo = { backgroundImage: "url(/img/fundo.png)" };

  return colaboradores.length > 0 ? (
    <section className="time" style={{ ...corFundo, ...imagemDeFundo }}>
      <input
        onChange={(evento) => mudarCor(evento.target.value, time.id)}
        value={time.cor}
        type="color"
        className="input-cor"
      />
      <h3 style={border}>{time.nome}</h3>
      <div className="colaboradores">
        {colaboradores.map((colaborador) => {
          return (
            <Colaborador
              key={colaborador.id}
              colaborador={colaborador}
              corDeFundo={time.cor}
              aoDeletar={aoDeletar}
              aoFavoritar={aoFavoritar}
            />
          );
        })}
      </div>
    </section>
  ) : null;
};
export default Time;
