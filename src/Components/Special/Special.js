import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const [house,setHouse]= useContext(RingContext)
    return (
        <div>
            <h2>Special</h2>
            <p><small>gift: {house}</small></p>
            <button onClick={()=>setHouse(house+1)}>increase</button>
        </div>
    );
};

export default Special;