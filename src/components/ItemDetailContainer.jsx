import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
import { Hearts } from "react-loader-spinner";
import "./ItemDetail.css"
import { getDoc, doc, getFirestore } from "firebase/firestore";

export default function ItemDetailContainer () {
    const[producto, setProducto] = useState();
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const docRef = doc(db, "productos", id);

        getDoc(docRef).then((snapshot) => {
                setProducto({...snapshot.data(), id});
            
        });
    }, [id])


if(!producto) return (<div className="hearts"><Hearts height="180" width="180" color="#9e6595" ariaLabel="hearts-loading" wrapperStyle={{}} wrapperClass="null" visible={true}/></div>);


    return (
        <div className="item-detail-container">
            {
                producto ? (
                    <ItemDetail producto={producto} />
                ) : (Hearts)               
            }
        </div>
    );
}

