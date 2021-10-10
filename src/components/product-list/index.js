import Button from "../button";

import { useContext } from "react";

import { CatalogueContext } from "../../providers/catalogue";
import  { CartContext } from "../../providers/cart";


const ProductList = ({ type }) => {
    const { catalogue } = useContext(CatalogueContext);
    const { cart } = useContext(CartContext);

    return (
        <ul>
            {type === "catalogue" && catalogue.map((item, index) => (
                <li key={index}>
                    {item.name} <Button type={type} item={item} />
                </li>
            ))}

            {type === "cart" && cart.map((item, index) => (
                <li key={index}>
                    {item.name} <Button type={type} item={item} />
                </li>
            ))}
        </ul>
    )
}

export default ProductList;
