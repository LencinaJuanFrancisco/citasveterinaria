import { Header } from "./components/Header";
import { ListadoPaciente } from "./components/ListadoPaciente";
import { Formulario } from "./components/Formulario";
import { useState } from "react";

function App() {

  const [pacientes,setPacientes] = useState([])
  const [unPaciente, setUnPaciente]= useState({})

  return (
    <div className="container mx-auto mt-20">
      <Header></Header>
      <div className="mt-12 md:flex">
        <Formulario
            unPaciente={unPaciente}
            pacientes={pacientes}
            setPacientes={setPacientes}
        />
        <ListadoPaciente 
        setUnPaciente={setUnPaciente} 
        pacientes={pacientes}/>
      </div>
    </div>
  );
}

export default App;
