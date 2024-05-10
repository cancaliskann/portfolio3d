"use client"
import React, { useEffect } from 'react'
import { useState } from 'react'


const createFirefly= () => ({
    id: Math.random(),
    top: `${Math.random()*100}%`,
    left: `${Math.random()*100}%`,
    animationDuration:`${Math.random()*5 + 5}s`,


})

const FireFliesBackground = () => {

    const [fireflies, setFireflies] = useState([]);

    useEffect(() => {

        const addFireflyPeriodically = () => {
            const newFirefly = createFirefly();
            setFireflies(currentFireFlies => [ 
                ...currentFireFlies,
                newFirefly
            ]);
        };

        const interval = setInterval(addFireflyPeriodically, 1000);

        return () => clearInterval(interval);

    }, [])


  return (
    <div className='fixed top-0 w-full h-full -z-10 overflow-hidden'> <h1> test </h1>
    {
        fireflies.map((firefly) => {
            return <div key={firefly.id}
            className='absolute rounded-full bg-accent w-[20px] h-[20px]'
            style={{
                top: firefly.top,
                left: firefly.top,
                animation: `move ${firefly.animationDuration} infinite alternate `



                
            }}
            > 

            </div>
        })

        

    }
    </div>
  )
}

export default FireFliesBackground