
import { Paciente } from "./Paciente";

export function ListadoPaciente({ setUnPaciente, pacientes }) {
 
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll ">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pasiente</h2>
          <p className="text-lg mt-5 text-center mb-10">
            Adminitra tus Paciente y {""}
            <span className="text-indigo-600 font-bold ">Citas</span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              setUnPaciente={setUnPaciente}
              paciente={paciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pasiente</h2>
          <p className="text-lg mt-5 text-center mb-10">
            Ahún NO hay Paciente y {""}
            <span className="text-indigo-600 font-bold ">Citas</span>
          </p>
        </>
      )}
    </div>
  );
}
