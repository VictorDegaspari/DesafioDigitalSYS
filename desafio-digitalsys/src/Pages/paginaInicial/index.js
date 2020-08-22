import React from "react";
import "./styles.css";
import PageHeader from "../../components/PageHeader";
import PacientePendente from "../../components/Pacientes/Pendente";
import PacienteAtivo from "../../components/Pacientes/Ativo";
import Chat from "../../components/chat/chat1";
import Chat2 from "../../components/chat/chat2";
import On from '../../Icons/toggle_on-24px.svg'


function PaginaInicial() {
  return (
    <div className="pagina-inicial">
      <PageHeader />
      <div className="float-button">
          <form>
            <p>Trombólise Ativa</p>
          </form>
        <img className="toggle-button" src={On} alt="Toggle" />
      </div>

      <div className="menu-lateral">
        <div className="borda-link"></div>
        <div className="pacientes-p">
          <p>Pacientes</p>
        </div>
        <PacienteAtivo />
        <PacientePendente />
      </div>
    
      <footer>
        <Chat />
        <Chat2 />
      </footer>
    </div>
  );
}
export default PaginaInicial;
