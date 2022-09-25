import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { add, getTotal, maltply } from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';
// import add from '../../utilities/calculate';

const Cosmetics = () => {
    const [cosmetics, setCosmetic] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmetic(data))
    }, [])

    const total2 = getTotal(cosmetics)

    const frist = 10;
    const second = 20;
    const total = add(frist, second);
    const maltply1 = maltply(frist,second);
    return (
        <div>
            <h1>Hello World</h1>
            <h2>Total: {total}</h2>
            <p>Total price: {total2}</p>
            <h3>Maltiply: {maltply1}</h3>
            <div>
                {
                    cosmetics.map(cosmetic => <Cosmetic 
                        cosmetic={cosmetic}
                        key ={cosmetic._id}
                    ></Cosmetic>)
                }
            </div>
        </div>
    );
};

export default Cosmetics;