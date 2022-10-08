import React from 'react';
import Friend from '../Friend/Friend';

const Cousin = ({house,ring}) => {
    return (
        <div>
            <h2>Cousin</h2>
             <p>House: {house}</p>
             <section>
                <Friend ring={ring}></Friend>
             </section>
        </div>
    );
};

export default Cousin;