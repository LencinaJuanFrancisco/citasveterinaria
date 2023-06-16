import React from 'react'

export function Paciente({paciente}) {
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
          <span className="font-normal normal-case">
           {paciente.fecha}
          </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Sintomas: {""}
          <span className="font-normal normal-case">
            {paciente.sintomas}
          </span>
        </p>
      </div>
  )
}

