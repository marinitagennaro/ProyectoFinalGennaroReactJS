import logo from "../assets/carrito/logoPrincipal.jpg"
import { Link } from "react-router-dom"
const Logo = () => {
    return (
        <>
        <Link to="/">
            <img style={{width:55, marginLeft: 5, marginTop: 3, marginRight: 5}} src={logo} alt="logo-ovillo" />
        </Link>
        </>
    )
}

export default Logo