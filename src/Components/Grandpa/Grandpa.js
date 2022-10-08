import React, { createContext, useState } from 'react';
import Auntry from '../Auntry/Auntry';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

export const RingContext = createContext('Matri ring')
export const MoneyContex= createContext(555)


const Grandpa = () => {
    //   const house=7;
      const ring='digamond ring'
      const [house,setHouse]=useState(1)
      const [money,setMoney]=useState(555)

    return (
<RingContext.Provider value={[house,setHouse]}>
    <MoneyContex.Provider value={[money,setMoney]}>
        <div className='grandpa'>
            <h2>grandpa</h2>
            <section className='flex'>
                <Father house={house} ring={ring}></Father>
                <Uncle house={house}></Uncle>
                <Auntry ring={ring} house={house}></Auntry>
            </section>
        </div>
            </MoneyContex.Provider>
        </RingContext.Provider>
    );
};

export default Grandpa;