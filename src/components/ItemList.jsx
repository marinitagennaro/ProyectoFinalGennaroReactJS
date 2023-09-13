import React, {useEffect, useState} from "react";
import productosJson from "../productos.json";
import Item from "./Item";
import { Link, NavLink } from "react-router-dom";


function getProductos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productosJson);
        }, 2000)
    })
}
export default function ItemList({productos}) {
    return (
        <NavLink style={{display: "flex", flexWrap:"wrap", gap: 20 }} className="item-list">
            {productos.map((productos) => (
                <Item key={productos.id} producto={productos} />               
            ))}
        </NavLink>
    );

}