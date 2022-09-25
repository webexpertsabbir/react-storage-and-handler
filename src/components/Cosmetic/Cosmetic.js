import React from 'react';
import { addTobd, deleteShoppingCart, removeFromDB } from '../../utilities/fakedb';
import './Cosmetic.css';

const Cosmetic = (props) => {

    const {name, address, _id} = props.cosmetic;

    const addToCart = (_id) =>[
        // console.log('item added', _id)
        // localStorage.setItem(_id, 1)
        addTobd(_id)
    ]

    const removeFromCart = _id =>{
        removeFromDB(_id);
    }

    const deleteFromCart = _id =>{
        deleteShoppingCart(_id);
    }
    const addToCartWithPram = () => addToCart(_id);
    return (
        <div className='design'>
            <h1>Name: {name}</h1>
            <h2>Address: {address}</h2>
            <h2>Id : {_id}</h2>
            <button onClick={addToCartWithPram}>Parches</button>
            <button onClick={() => removeFromCart(_id)}>Remove</button>
            <button onClick={() => deleteFromCart(_id)}>Delete</button>
        </div>
    );
};

export default Cosmetic;