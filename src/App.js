import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import MiOrg from "./components/MiOrg/MiOrg";

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  //Ternario --> condicion ? seMuestra : noSeMuestra;

  return (
    <div className="App">
      <Header />
      {mostrarFormulario ? <Form /> : <></>};
      <MiOrg cambiarMostrar={cambiarMostrar} />
    </div>
  );
}

export default App;
