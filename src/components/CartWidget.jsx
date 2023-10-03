import { Link } from "react-router-dom";
import carrito from "../assets/carrito/cartW.svg"
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

const Carrito = () =>{

    const {totalQuantity} = useContext(CartContext);
    
    return (
    <>
        <Link to={`/cart`}>
        <img style= {{width: 35}} src={carrito} alt="carrito" />
        <span style={{paddingRight: 15}}>{totalQuantity}</span>
        </Link>
    </>
)
};
export default Carrito