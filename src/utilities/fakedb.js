//use loacal storage to manage cart data
const addTobd = id =>{

    let shoppingCart = {};

    const storeCart = localStorage.getItem('shopping-cart');
    if(storeCart){
        shoppingCart = JSON.parse(storeCart);
    }
    else{
        shoppingCart = {};
    }
    
    
    const quantity = shoppingCart[id];
    
    if(quantity){
        
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
        // localStorage.setItem(id, newQuantity)
    }
    else{
        shoppingCart[id] = 1;
        
        // console.log('new item')
        // localStorage.setItem(id, 1);
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
    
}

const removeFromDB = id =>{
    // console.log('Hello')
    const storeCart = localStorage.getItem('shopping-cart');
    if(storeCart){
        const shoppingCart = JSON.parse(storeCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }
    }
}

const deleteShoppingCart = id =>{
    localStorage.removeItem('shopping-cart');
}
export {addTobd,
     removeFromDB,
     deleteShoppingCart
    };