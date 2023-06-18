import React from "react";

export function Paciente({setUnPaciente, paciente,eliminarPaciente}) {

  const handelEliminar=()=>{
    const respuesta =  confirm("desea eliminar el paciente?")
    if(respuesta){
      eliminarPaciente(paciente.id)
    }

  }

  return (
    <div className="mx-5 mb-10 bg-white shadow-md  px-5 py-10 rounded-md">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Mascota: {""}
        <span className="font-normal normal-case">{paciente.nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{paciente.propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{paciente.email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case">{paciente.fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">{paciente.sintomas}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg transition-all"
          onClick={()=>setUnPaciente(paciente)}
          >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-500 hover:bg-red-600 text-white font-bold uppercase rounded-lg transition-all"
          onClick={handelEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
