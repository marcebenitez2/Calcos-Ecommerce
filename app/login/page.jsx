"use client"
import login from '@/components/loginLogic';
import React, { useEffect, useState } from 'react';

const Page = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        login()
    }

    return (
        <div className='w-full h-full flex items-center justify-center'>
            <div className='bg-[#ffde59]  h-80 rounded-xl flex flex-col py-5 gap-8 md:w-2/6 w-3/6'>
                <h1 className='text-center text-3xl font-semibold text-[#1f1f1f]'>LOGIN</h1>
                <form className='flex flex-col w-full items-center gap-4'>
                    <input className='bg-[#1f1f1f] w-3/5 h-8 px-3 rounded-md' placeholder='Nombre de usuario' required onChange={(e)=>setUsername(e.target.value)}/>
                    <input className='bg-[#1f1f1f] w-3/5 h-8 px-3 rounded-md' placeholder='Contraseña' required onChange={(e)=>setPassword(e.target.value)}/>
                    <button className='w-1/3 bg-[#1f1f1f] h-16 rounded-md' onClick={(e)=>handleSubmit(e)}>Iniciar sesion</button>
                </form>
            </div>
        </div>
    );
}

export default Page;
