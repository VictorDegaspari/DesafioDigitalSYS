import React from "react";
import "./styles.css";
import Gpsus from "../../Icons/GPSUS.svg";
import { Link } from "react-router-dom";
import notifications from "../../Icons/notifications-24px.svg";
import exit from "../../Icons/exit_to_app-24px.svg";

function PageHeader() {
  return (
    <div className="page-header">
      <header className="top-bar-container">
        <div className="espacamento-logos">
          <img className="logo" src={Gpsus} alt="Logo" />
          <div className="circle">
            <p>RS</p>
          </div>
          <div className="nome">
            <p>
              <span>Regina Santos</span>
              <br></br>
              São Paulo, SP, Br
            </p>
          </div>
        </div>
        <div className="espacamento-icons">
          <img className="sino" src={notifications} alt="Notificacoes" />
          <img src={exit} alt="Sair" />
        </div>
      </header>

      <section>
        <div className="page-header-baixo">

          <Link to="/"><span>Página inicial</span></Link>
          <Link to="/nova-ocorrencia">Nova ocorrência</Link>
          <Link to="/historico">Histórico</Link>
         

        </div>
      </section>
    </div>
  );
}

export default PageHeader;
