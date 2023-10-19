
import { useContext, useState } from "react"
import { CartContext } from "../context/cartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";


export default function Checkout() {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const { cart, total, clearCart } = useContext(CartContext);
    const [ordenId, setOrdenId] = useState();

    function crearOrden() {
        const db = getFirestore();
        const orden = {
            buyer:{
                nombre,
                email,
                telefono
            },
            items: cart,
            total
        } 
        const ordenesRef = collection(db, "ordenes");
        addDoc(ordenesRef, orden).then((result) => setOrdenId(result.id))

        clearCart()
    };

    if(ordenId) {
        return <h3>{`Muchas gracias por tu compra, tu pedido tiene este id: ${ordenId}`}</h3>
    }
    
    return (
        <form onSubmit={(e) => e.preventDefault()} style={{display:"flex", flexDirection: "column", gap:"30px", margin: "100px"}}>
            <label>Nombre y Apellido</label>
            <input type="text" required value={nombre} onChange={(event) => setNombre(event.target.value)} />
            <label>Email</label>
            <input type="email" id= "email" pattern="@,.com" required value={email} onChange={(event) => setEmail(event.target.value)} />
            <label>Telefono</label>
            <input type="number" required value={telefono} onChange={(event) => setTelefono(event.target.value)} />
            <button onClick={crearOrden}>Finalizar compraa</button>
        </form>
    )
}

