import React from 'react';
import Special from '../Special/Special';

const Myself = ({house,ring}) => {
    return (
        <div>
            <h2>MySelf </h2>
            <p>House: {house}</p>
            <section>
               <Special ring={ring}></Special>
            </section>
        </div>
    );
};

export default Myself;