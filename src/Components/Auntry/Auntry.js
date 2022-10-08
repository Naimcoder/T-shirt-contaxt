import React from 'react';
import Cousin from '../Cousin/Cousin';

const Auntry = ({house,ring}) => {
    return (
        <div className='grandpa'>
            <h2>Auntry</h2>
              <p>House: {house}</p>
            <section className='flex'>
                <Cousin ring={ring} house={house}></Cousin>
                <Cousin ring={ring} house={house}></Cousin>
            </section>
        </div>
    );
};

export default Auntry;