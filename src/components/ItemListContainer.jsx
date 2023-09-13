import ItemList from './ItemList';
import './ItemListContainer.css';
import { Link } from 'react-router-dom';
import productos from "../productos.json";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const mockAPI = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    });
}
export default function ItemListContainer({ greeting }) {
    const [productos, setProductos] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        if(!id) {
            mockAPI().then((data) => setProductos(data));
        }else{
            mockAPI().then((data) => {
                const productoFiltrado = data.filter(item => item.categoria === id)
                setProductos(productoFiltrado)
            });  
        }
    
    }, [id]);

    return (
        
        <div className= "item-list-container">
                <h1>{greeting}</h1>
                <ItemList productos={productos}/>
        </div>
);
}

