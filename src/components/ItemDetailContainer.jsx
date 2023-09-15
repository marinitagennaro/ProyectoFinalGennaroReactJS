import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
import productos from "../productos.json";
import { Hearts } from "react-loader-spinner";

const mockAPI = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    });
}
// const ItemDetailContainer = () => {
//     const[productos, setProductos] = useState(null);

//     useEffect(() => {})
// }
export default function ItemDetailContainer () {
    const[productos, setProductos] = useState();
    const { id } = useParams();

    useEffect(() => {
        if(!id) {
            mockAPI().then((data) => setProductos(data));
        }else{
            mockAPI().then((data) => {
                const productoEncontrado = data.find(item => item.id === Number(id))
                setProductos(productoEncontrado)
            });  
        }
    
    }, [id]);



if(!productos) return (<Hearts height="180" width="180" color="#9e6595" ariaLabel="hearts-loading" wrapperStyle={{}} wrapperClass="null" visible={true}/>);


    return (
        <div className="item-detail-container">
            {
                productos ? (
                    <ItemDetail producto={productos} />
                ) : (Hearts)               
            }
        </div>
    );
}

