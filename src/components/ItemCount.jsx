import { useContext, useState } from "react"
import { CartContext } from "../context/cartContext";
import "./ItemDetail.css"

export default function ItemCount({ stock, onAdd }) {
    const [count, setCount] = useState(1);
    const { addItem } = useContext(CartContext);

    function onIncrease() {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    function onDecrease() {
        if(count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <button onClick={onDecrease}> - </button>
            <span>{count}</span>
            <button onClick={onIncrease}> + </button>
            <button className="boton-agregar" onClick={() => onAdd(count)}>Agregar a la compra</button> 
        </div>
    )
}