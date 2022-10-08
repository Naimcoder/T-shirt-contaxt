import React from 'react';
import "./Card.css"

const Card = ({cart,hendleItemRemove}) => {
      let massage;
    if (cart.length===0) {
        massage =<p>Please buy at least on items...</p>
    }
    else if (cart.length===1) {
        massage=<div>
            <p>amer jonnoh akhta now</p>
            <p>tumi nhila amioh neboh</p>
        </div>
    }
    else{
        massage=<p>Thanks for buying..!</p>
    }
    return (
        <div>
            <h2 className={cart.length===2 ? `teal`:`blue`}>Order card summary</h2>
            <h4 className={`blod ${cart.length===2?'teal':'blue'}`}>Order Quantity Items: {cart.length}</h4>
            {
                cart.map(tshirt=> <p key={tshirt._id}>
                    {tshirt.name}
                    <button onClick={()=>hendleItemRemove(tshirt)}>X</button>
                </p>)
            }
            {
                massage
            }
            {
                cart.length===3 ? <p>3rd Friend ka gift korboh</p>:<p>Kino kino</p>
            }
            <p>And operation</p>
            {
                cart.length===2 &&<h2>Dubole items</h2>
            }
            <p>OR Operation</p>
            {
                Card.length===4 || <p>4tah item na</p>
            }
        </div>
    );
};

export default Card;
/*
1 conditional rendering
1.use element in variabel and then use if-else for set the value
2.ternanry operation condition ? true : flase
3.&& operation(if conditional true,i want to display something)
4.|| operator (if conditioanl is flase,i want to display something)
*/ 