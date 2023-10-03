import ItemList from './ItemList';
import './ItemListContainer.css';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { Hearts } from "react-loader-spinner";
import { ThemeContext } from './ThemeContext';


export default function ItemListContainer({ greeting, children }) {
    const [productos, setProductos] = useState();
    const { id } = useParams();
    const { isDarkMode } = useContext(ThemeContext);

    useEffect(() => {
        const db = getFirestore();

        const productosRef = id ? query(collection(db, "productos"), where("categoria", "==", id)) : collection(db, "productos");
        getDocs(productosRef).then((snapshot) => {
            if(snapshot.size !== 0) {
                setProductos(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
            };
        })
    }, [id]);

        if(!productos) return (<div className="hearts"><Hearts height="180" width="180" color="#9e6595" ariaLabel="hearts-loading" wrapperStyle={{}} wrapperClass="null" visible={true}/></div>);
    
        return (
        
        <div className= "item-list-container" style={
            isDarkMode ? {backgroundColor:"rgb(58, 55, 55)"} : {backgroundColor:"whitesmoke"} 
        }>
            {children}
                <h1>{greeting}</h1>
                <ItemList productos={productos}/>
        </div>
);
}



















