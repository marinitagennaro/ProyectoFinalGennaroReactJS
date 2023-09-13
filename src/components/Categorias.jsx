import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import productos from "../productos.json"

function asyncMock(tipo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!tipo) {
                resolve(productos)
            }else{
                const resultado = productos.filter((valor) => {
                    return valor.categoria === tipo
                })
                resolve(resultado)
            }
        }, 2000)
    })
}

export default function Categorias() {
    const [categoria, setCategoria] = useState();
    const [loading, setLoading] = useState(true);
    const { tipo } = useParams()

    useEffect(() => {
        asyncMock(tipo).then(res => setCategoria(res) )
    }, [tipo]);

    if(loading) {
        return <h1 style={{textAlign: "initial"}}>Esa categoria no esta disponible</h1>;
    }

    return (
        <main>
            <h1 style={{marginBottom: "2em"}}>{categoria.productos.nombre}</h1>
            <section style={{display: "flex", flexWrap: "wrap", gap:20 }}>
                {categoria.productos.map((item) => (
                    <Link to={`/categorias/${item.productos.nombre}`}>
                        <h2 style={{textTransform:"capitalize"}}>{item.productos.nombre}</h2>
                    </Link>
                ))}
            </section>
        </main>
    )
}