import React from 'react'

export function Paciente() {
  return (
    <div className="m-3 bg-white shadow-md  px-5 py-10 rounded-md">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Mascota: {""}
          <span className="font-normal normal-case">Oancho</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario: {""}
          <span className="font-normal normal-case">Juany</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email: {""}
          <span className="font-normal normal-case">juany@gmail.com</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha Alta: {""}
          <span className="font-normal normal-case">
            10 de diciembre del 2023
          </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Sintomas: {""}
          <span className="font-normal normal-case">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet,
            et ratione magnam voluptatibus quos iure ipsum placeat eum
            recusandae nisi. Veniam, consequatur voluptatum! Vero suscipit
            dolore, totam enim dolores reprehenderit.
          </span>
        </p>
      </div>
  )
}

