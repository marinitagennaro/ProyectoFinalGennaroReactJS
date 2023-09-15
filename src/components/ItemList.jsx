import Item from "./Item";


export default function ItemList({productos}) {
    return (
        <div style={{display: "flex", flexWrap:"wrap", gap: 20 }} className="item-list">
            {productos.map((productos) => (
                <Item key={productos.id} producto={productos} />               
            ))}
        </div>
    );

}