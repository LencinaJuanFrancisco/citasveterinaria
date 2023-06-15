import React,{useState,useEffect} from 'react'

export function Formulario() {
  return (
    <div className='w-1/2 md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
      <p className='text-lg mt-5 text-center mb-10'>Añadir Paciente y {""}
        <span className='text-indigo-600 font-bold '>Administralos</span>
      </p>

      <form className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
        <div className='mb-5'>
          <label htmlFor='nombre' 
                 className='block text-gray-700 uppercase font-bold'  >Nombre mascota</label>
          <input type="text" 
                  id='nombre'
                 placeholder='Nombre de la mascota'
                 className='border-2 w-full rounded-md p-2 mt-2 placeholder-gray-400' />
        </div>
        <div className='mb-5'>
          <label htmlFor='propietario' 
                 className='block text-gray-700 uppercase font-bold'  >Nombre propietario</label>
          <input type="text" 
                  id='propietario'
                 placeholder='Propietario'
                 className='border-2 w-full rounded-md p-2 mt-2 placeholder-gray-400' />
        </div>
        <div className='mb-5'>
          <label htmlFor='email' 
                 className='block text-gray-700 uppercase font-bold'  >Email</label>
          <input type="email" 
                  id='email'
                 placeholder='Email'
                 className='border-2 w-full rounded-md p-2 mt-2 placeholder-gray-400' />
        </div>
        <div className='mb-5'>
          <label htmlFor='alta' 
                 className='block text-gray-700 uppercase font-bold'  >Alta</label>
          <input type="date" 
                  id='alta'
                 
                 className='border-2 w-full rounded-md p-2 mt-2 placeholder-gray-400' />
        </div>
        <div className='mb-5'>
          <label htmlFor='sintomas' 
                 className='block text-gray-700 uppercase font-bold'  >Síntomas</label>
          <textarea name="sintomas"
                    className='border-2 w-full rounded-md p-2 mt-2 placeholder-gray-400' 
                    id="sintomas" 
                    cols="30" 
                    rows="10"></textarea>
        </div>
       <input type="submit" 
              className='bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-700 cursor-pointer transition-all' 
              value="Agregar paciente" />
      </form>
    </div>

  )
}

 


