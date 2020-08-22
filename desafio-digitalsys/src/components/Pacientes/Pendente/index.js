import React from 'react';
import Pendente from '../../../Icons/error-24px.svg'
import Car from '../../../Icons/car-24px.svg'
import './styles.css'
import Arrow from '../../../Icons/chevron_right-24px.svg'

const PacientePendente = () => {
    const[ativar, SetAtivar] = React.useState(false)
  
    return (
        <div className="paciente-container">
            <div>
                <div className="chamados">
                    <img className="car" src={Car} alt="Carro" />
                    <p> Chamado 2 </p>
                </div>
                <div className="buttons">

                    <div className="grid-icons">
                    
                        <img className="check" src={Pendente} alt="Chamado" />
                        
                        <p>Pendente</p>
                        <img onClick={() => SetAtivar(!ativar)} className="seta-click" src={Arrow} alt="SetaBaixo" />
                    </div>
                
                    {ativar && <div className="buttons-hidden">
                    <div className="animeDown">
                        <button className="pessoa">Paciente: Maria da Silva</button>
                        <button className="ficha">Ficha do Paciente</button>
                        <button className="encaminhar" type="submit">Encaminhar Paciente</button>
                        <button className="chat">Chat</button>
                    </div>

                    </div>}
                    </div>
                </div>
            </div>

        
    );
}

export default PacientePendente;