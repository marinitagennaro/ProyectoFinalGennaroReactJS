import { useContext, useState } from 'react'
import { CartContext } from '../context/cartContext'
import { Link } from 'react-router-dom'
import CartItem from './CartItem';
import './ItemListContainer.css';

const Cart = () => {
    const { removeItem, total } = useState()
    const { cart } = useContext(CartContext)

return (
    <div>
        {
            cart.length === 0 ? (
                <div>
                <h1>El carrito aún está vacio</h1>
                <Link className='boton-de-volver' to="/">Volver</Link>
                </div>
            ) :     
                <div className="item-cart">
                    {
                        cart.map(item => (
                            <CartItem key={item.id} item={item}/>
                        ))
                    }
                </div>
        }
    </div>
)
}

export default Cart
