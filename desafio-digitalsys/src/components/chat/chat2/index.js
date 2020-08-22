import React from "react";
import Car from "../../../Icons/car-24px.svg";
import X from "../../../Icons/clear-24px.svg";
import "./styles.css";

const Chat = () => {
  return (
    <div className="chat2" id="chamado2">
      <img className="car" src={Car} alt="Carro" />
      <p>Chamado 1</p>
      <img className="close" src={X} alt="Close" />
    </div>
  );
};

export default Chat;
