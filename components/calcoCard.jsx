import React from 'react';
import {FiEdit2} from './../node_modules/react-icons/fi'

const CalcoCard = ({ calco }) => {
    return (
        <div className='h-96 flex flex-col bg-white'>
            <img src={calco.imagen} alt={`Imagen de ${calco.nombre}`} className='h-4/5' />
            <div className='flex w-full h-1/5 justify-between items-end pb-2 px-2 bg-gradient-to-b from-white via-black to-black'>
                <h1 className='text-white text-xl font-semibold'>{calco.nombre}</h1>
                <FiEdit2 fill='white' size={'25px'}/>
            </div>
        </div>
    );
}

export default CalcoCard;
