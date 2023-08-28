"use client"
import React, { useEffect, useState } from 'react';
import db from './../firebase/firebase'; // Asegúrate de que la ruta sea correcta
import { collection, getDocs } from 'firebase/firestore'; // Importa las funciones necesarias
import CalcoCard from './calcoCard';
import CalcoCardEmpty from './calcoCardEmpty';

const StickerGrid = () => {
    const [calcos, setCalcos] = useState([]);
    
    useEffect(() => {
        const calcosRef = collection(db, 'calcos'); // Usa la función collection con la instancia de Firestore

        getDocs(calcosRef).then((querySnapshot) => {
            const data = querySnapshot.docs.map((doc) => doc.data());
            setCalcos(data);
            console.log(data); // Muestra los datos en la consola
        });
    }, []);
    


    return (
        <div className='w-full grid grid-cols-7 px-20 gap-x-5 h-full'>
            {calcos.map((calco)=>(
                <CalcoCard calco={calco} key={calco.id}/>
            ))}
            <CalcoCardEmpty/>
        </div>
    );
}

export default StickerGrid;

        // {
        //     id:1,
        //     nombre:"Escudo NOB",
        //     image: 'https://firebasestorage.googleapis.com/v0/b/blessed-calcos.appspot.com/o/row-1-column-1.jpg?alt=media&token=91ce7cfe-d048-48b8-a543-64bdc17c1596'
        // },
        // {
        //     id:2,
        //     nombre:"Escudo NOB",
        //     image: 'https://firebasestorage.googleapis.com/v0/b/blessed-calcos.appspot.com/o/row-1-column-1.jpg?alt=media&token=91ce7cfe-d048-48b8-a543-64bdc17c1596'
        // },
        // {
        //     id:3,
        //     nombre:"Escudo NOB",
        //     image: 'https://firebasestorage.googleapis.com/v0/b/blessed-calcos.appspot.com/o/row-1-column-1.jpg?alt=media&token=91ce7cfe-d048-48b8-a543-64bdc17c1596'
        // },
        // {
        //     id:4,
        //     nombre:"Escudo NOB",
        //     image: 'https://firebasestorage.googleapis.com/v0/b/blessed-calcos.appspot.com/o/row-1-column-1.jpg?alt=media&token=91ce7cfe-d048-48b8-a543-64bdc17c1596'
        // },
        // {
        //     id:5,
        //     nombre:"Escudo NOB",
        //     image: 'https://firebasestorage.googleapis.com/v0/b/blessed-calcos.appspot.com/o/row-1-column-1.jpg?alt=media&token=91ce7cfe-d048-48b8-a543-64bdc17c1596'
        // }