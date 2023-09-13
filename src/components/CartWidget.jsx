import carrito from "../assets/carrito/cartW.svg"

const Carrito = () =>{
    return (
    <>
        <img style= {{width: 35}} src={carrito} alt="carrito" />
        <span style={{paddingRight: 15}}>10</span>
    </>
)
};
export default Carrito