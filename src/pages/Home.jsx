import React, { useState } from 'react'
import { useNavigate } from 'react-router'

export default function Home() {
    const navigate = useNavigate()
    const contraseña = "Antequera1836"
    const correos = "historyFamilyAntequera@gmail.com"

    const handleCorreo = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const body = {
          email: formData.get('email'),
          password: formData.get('password')
        }
        if (body.email === correos && body.password === contraseña) {
            navigate('/family')
            return;
        }
        else{
            navigate('/')
            alert('Correo y/o Contraseña no valido')
            return;
        }
    }


    return (
        <div className='w-full min-h-screen flex flex-col md:flex-row md:justify-center items-center bg-black md:mx-auto'>
            <div>
                <img className='hidden md:flex h-[300px]' 
                src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmg2MTYwOWI4emV3Z25heGhkd2w0NTE5eHNteGg4MWt3am9ib3NsOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/Gu8bT8ppVPEc9PKPiS/giphy.gif" alt="Family Book" />
            </div>
            <form onSubmit={handleCorreo}  className="w-full md:max-w-md flex flex-col bg-black px-4">
            <div className="mb-5 mt-10">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Correo: </label>
                <input type="email" id="email" name='email' 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                   dark:focus:border-blue-500" placeholder="historyFamilyAntequera@gmail.com" autoComplete='on' required />
            </div>
            <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Contraseña:</label>
                <input type="password" id="password" name='password' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='**************' required />
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
        <div>
            <img className='bg-black mt-5 md:h-[300px]' src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnQxMnNpamFrdXk1amQwNjVlNWc1M2Y2b3RyY2NkZGZ2ZHNwcjUyZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/CpSAYzkbwukNvvsSDG/giphy.gif" alt="Family Tree" />
        </div>
        </div>
    )
}
