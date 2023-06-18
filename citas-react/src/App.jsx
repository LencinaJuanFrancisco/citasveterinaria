import { Header } from "./components/Header";
import { ListadoPaciente } from "./components/ListadoPaciente";
import { Formulario } from "./components/Formulario";
import { useState } from "react";

function App() {

  const [pacientes,setPacientes] = useState([])
  const [unPaciente, setUnPaciente]= useState({})

  const eliminarPaciente=(id)=>{
    const actualisarPaciente = pacientes.filter(pte=> pte.id !== id)
    setPacientes(actualisarPaciente)

  }

  return (
    <div className="container mx-auto mt-20">
      <Header></Header>
      <div className="mt-12 md:flex">
        <Formulario
            unPaciente={unPaciente}
            pacientes={pacientes}
            setPacientes={setPacientes}
            setUnPaciente={setUnPaciente}
        />
        <ListadoPaciente 
        setUnPaciente={setUnPaciente} 
        pacientes={pacientes}
        eliminarPaciente={eliminarPaciente}/>
        
      </div>
    </div>
  );
}

export default App;
