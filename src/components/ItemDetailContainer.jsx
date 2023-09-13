import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
import productos from "../productos.json";

const mockAPI = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    });
}

export default function ItemDetailContainer () {
    const[productos, getProductos] = useState(data);
    const { nombre } = useParams();

    useEffect(() => {
        if(!nombre) {
            mockAPI().then((data) => getProductos(data));
        }else{
            mockAPI().then((data) => {
                const productoEncontrado = data.find(item => item.nombre === nombre)
                getProductos(productoEncontrado)
            });  
        }
    
    }, [nombre]);




   // if(!producto) return null;


    return (
        <div className="item-detail-container">
            <ItemDetail producto={productos} />
        </div>
    );
}