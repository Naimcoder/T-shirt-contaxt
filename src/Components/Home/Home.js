import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';
import Tshirt from '../Tshirt/Tshirt';
import "./Home.css";

const Home = () => {
const tShrits=useLoaderData();
const [cart,setCart]=useState([]);
const handleAddCard=tshirt=>{
    const exists= cart.find(ts=>ts._id===tshirt._id)
    if(exists){
     alert('t-shirt already added')
    }else{
         const newCard=[...cart,tshirt];
         setCart(newCard)
        //  alert('successfully added')
    }
 
}
const hendleItemRemove=tshirt=>{
        const remaining=cart.filter(Ts=>Ts._id !==tshirt._id);
        setCart(remaining);
    }

   
    return (
        <div className='card-container'> 
        <div className='tshirt-container'>
            {
                tShrits.map(Pd=>
                <Tshirt 
                key={Pd._id} 
                Tshirt={Pd}
                handleAddCard={handleAddCard}
                >
                </Tshirt>)
            }
        </div>
        <div className='order-container'>
               <Card hendleItemRemove={hendleItemRemove}  cart={cart}></Card>
              
        </div>
           
        </div>
    );
};

export default Home;

