import React, { useState, useEffect } from "react";
import { Error } from "./Error";

export function Formulario({ unPaciente, pacientes, setPacientes }) {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setfecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(unPaciente).length > 0) {
      setNombre(unPaciente.nombre);
      setPropietario(unPaciente.propietario);
      setEmail(unPaciente.email);
      setfecha(unPaciente.fecha);
      setSintomas(unPaciente.sintomas);
    }
  }, [unPaciente]);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      console.log("No debe haber ningun campo vacio");
      setError(true);
    } else {
      setError(false);

      const objetoPasiente = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas,
      };

      if (unPaciente.id) {
        // Editando Registro
        objetoPasiente.id = unPaciente.id;

        const pacientesActualizados = pacientes.map((pte) =>
          pte.id === unPaciente.id ? objetoPasiente : pte
        );
        setPacientes(pacientesActualizados)
      } else {
        // Creando Registro
        objetoPasiente.id = generarId(); // generamos el id para agragar nuevo registro
        setPacientes([...pacientes, objetoPasiente]);
      }
      //reinicio de formulario
      setNombre("");
      setPropietario("");
      setEmail("");
      setfecha("");
      setSintomas("");
    }
  };

  return (
    <div className="w-1/2 md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añadir Paciente y {""}
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>

      <form
        onSubmit={handelSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5"
      >
        {error && <Error msg="todos los campos son obligatorio" />}

        <div className="mb-5">
          <label
            htmlFor="nombre"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre mascota
          </label>
          <input
            type="text"
            id="nombre"
            placeholder="Nombre de la mascota"
            className="border-2 w-full rounded-md p-2 mt-2 placeholder-gray-400"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre propietario
          </label>
          <input
            type="text"
            id="propietario"
            placeholder="Propietario"
            className="border-2 w-full rounded-md p-2 mt-2 placeholder-gray-400"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="border-2 w-full rounded-md p-2 mt-2 placeholder-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            type="date"
            id="alta"
            className="border-2 w-full rounded-md p-2 mt-2 placeholder-gray-400"
            value={fecha}
            onChange={(e) => setfecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Síntomas
          </label>
          <textarea
            name="sintomas"
            className="border-2 w-full rounded-md p-2 mt-2 placeholder-gray-400"
            id="sintomas"
            cols="30"
            rows="10"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          ></textarea>
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-700 cursor-pointer transition-all"
          value={unPaciente.id ? "Editar paciente" : "Agregar paciente"}
        />
      </form>
    </div>
  );
}
