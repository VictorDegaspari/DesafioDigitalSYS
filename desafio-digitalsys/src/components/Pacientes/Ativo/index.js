import React from "react";
import Check from "../../../Icons/check_circle-24px.svg";
import Car from "../../../Icons/car-24px.svg";
import "./styles.css";
import Arrow from "../../../Icons/chevron_right-24px.svg";

const PacienteAtivo = () => {
  const [ativar, SetAtivar] = React.useState(false);

  return (
    <div className="paciente-container">
      <div >
        <div className="chamados">
          <img className="car" src={Car} alt="Carro" />
          <p> Chamado 1 </p>
        </div>
        <div className="buttons">
          <div className="grid-icons">
            <img className="check" src={Check} alt="Chamado" />

            <p>Ativo</p>

            <img
              onClick={() => SetAtivar(!ativar)}
              className="seta-click"
              src={Arrow}
              alt="SetaBaixo"
            />
          </div>

          {ativar && (
            <div className="buttons-hidden">
              <div className="animeDown">
                <button className="pessoa">Paciente: Regina Santos</button>
                <button className="ficha">Ficha do Paciente</button>
                <button className="encaminhar" type="submit">
                  Encaminhar Paciente
                </button>
                <button className="chat">Chat</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PacienteAtivo;
