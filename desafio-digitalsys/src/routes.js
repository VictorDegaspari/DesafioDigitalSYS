import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import PaginaInicial from "./Pages/paginaInicial";
import NovaOcorrencia from "./Pages/NovaOcorrencia";
import Historico from "./Pages/Historico";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={PaginaInicial} />
      <Route path="/nova-ocorrencia" component={NovaOcorrencia} />
      <Route path="/historico" component={Historico} />
    </BrowserRouter>
  );
}

export default Routes;
