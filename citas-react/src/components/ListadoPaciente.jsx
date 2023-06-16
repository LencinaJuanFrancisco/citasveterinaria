
import {Paciente} from './Paciente'

export function ListadoPaciente({pacientes}) {
  return (
    <div className="md:w-1/2 lg:w-3/5  ">
      <h2 className="font-black text-3xl text-center">Listado Pasiente</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Adminitra tus Paciente y {""}
        <span className="text-indigo-600 font-bold ">Citas</span>
      </p>
      <div className='md:h-screen overflow-y-scroll'>
        {
        pacientes.map(paciente => <Paciente key={paciente.id} paciente={paciente} />)
        }          
                                
          
        
       

      </div>
    </div>
  );
}
