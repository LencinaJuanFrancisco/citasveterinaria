import { Header } from "./components/Header"
import {ListadoPaciente} from './components/ListadoPaciente'
import {Formulario} from './components/Formulario'
function App() {
  

  return (
    <div className="container mx-auto mt-20">
    <Header></Header>
    <div className="mt-12 md:flex">
        <Formulario></Formulario>
        <ListadoPaciente></ListadoPaciente>

    </div>
    </div>
  )
}

export default App
