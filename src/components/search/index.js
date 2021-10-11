import { useContext } from "react";

import { CartContext } from "../../providers/cart";
import { CatalogueContext } from "../../providers/catalogue";
import { Button } from "@material-ui/core";

const SearchButton = ({type, item}) => {
    const { cart, addToCart, removeFromCart } = useContext(CartContext);
    const { catalogue, addToCatalogue, removeFromCatalogue } =useContext(CatalogueContext);

    const text = type === "catalogue" ? "Add to cart" : "Remove from cart";

    const handleClick = () => {
        if (type === "catalogue") {
            removeFromCatalogue(item);
            addToCart(item);
        } else {
            removeFromCart(item);
            addToCatalogue(item);
        }
    }

    return <Button variant="contained" color="primary" onClick={handleClick}>{text}</Button>;
}

export default SearchButton;