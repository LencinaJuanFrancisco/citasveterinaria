import { Header } from "./components/Header";
import { ListadoPaciente } from "./components/ListadoPaciente";
import { Formulario } from "./components/Formulario";
import { useEffect, useState } from "react";

function App() {

  const [pacientes,setPacientes] = useState([])
  const [unPaciente, setUnPaciente]= useState({})

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []; // si no hay nada crea un array vacio
      setPacientes(pacientesLS)
    }
    obtenerLS();
  }, []);
  
  useEffect(()=>{
    localStorage.setItem('pacientes',JSON.stringify(pacientes))
  },[pacientes])
  
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
