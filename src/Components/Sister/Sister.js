import React, { useContext } from 'react';
import { MoneyContex } from '../Grandpa/Grandpa';

const Sister = ({house}) => {
    const [money,setMoney]= useContext(MoneyContex);
    return (
        <div>
            <h2>Sister</h2>
             <p>House: {money}</p>
             <button onClick={()=>setMoney(money+100)}>add to 1000</button>
        </div>
    );
};

export default Sister;