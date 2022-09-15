import React , {createContext, useState} from 'react';

const CartContext = createContext();

const CartProvider = (props) => {

    const [cart, setCart] = useState([]);

    const agregarProductoCarrito = (producto,cant) => {  
        if(isInCart(producto.id)){
            console.log("El producto seleccionado ya existe en el carrito")
            setCart(cart.map(product=>{
                return producto.id === product.id ? {...product, cant: product.cant + 1, stock: product.stock - cant} : product
            })); 
        }else{
            console.log("No existe en el carrito")
            setCart([...cart, {...producto, cant}]) 
        }
    }
    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;
    
    const quitarProductoCarrito = (producto) => {
        setCart(cart.slice(cart.filter(item => item.id !== producto.id)));
    }
    const limpiar = () =>{
        setCart([]);
    }
    return (
        <>
           <CartContext.Provider value={{cart, agregarProductoCarrito, quitarProductoCarrito, limpiar}}>
                {props.children}
           </CartContext.Provider> 
        </>
    );
}

export {CartContext, CartProvider};
