const add = (first, second) =>{
    return first + second;
}


const maltply = (first, second) =>{
    return first * second;
}

// const product = [
//     {id: 1, name: 'iphone', price: 1200},
//     {id: 2, name: 'iphone', price: 1200},
//     {id: 3, name: 'iphone', price: 1200},
//     {id: 4, name: 'iphone', price: 1200},
//     {id: 5, name: 'iphone', price: 1200},
//     {id: 6, name: 'iphone', price: 1200},
// ]

const getTotalPrice = product =>{
    const reducer = (previous, current) => previous + current.price;
    const total = product.reduce(reducer, 0);
    return total;
}
// export default add;
export {add,
     maltply, 
     getTotalPrice as getTotal
    };