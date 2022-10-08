import React from 'react';
import './Tshirt.css'

const Tshirt = ({Tshirt,handleAddCard}) => {
    console.log(Tshirt)
    const {picture,name,price,gender,index,_id}=Tshirt;
    return (
        <div className='tshirt-card-container'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h4>Price: ${price}</h4>
            <button onClick={()=>handleAddCard(Tshirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;