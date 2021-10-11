import SearchButton from "../search";

import { useContext } from "react";

import { CatalogueContext } from "../../providers/catalogue";
import { CartContext } from "../../providers/cart";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";

const ProductList = ({ type }) => {
  const { catalogue } = useContext(CatalogueContext);
  const { cart } = useContext(CartContext);

  return (
    <>
      <Grid container justifyContent="center" spacing={3}>
        {type === "catalogue" &&
          catalogue.map((item, index) => (
            <Grid item key={index}>
              <Card sx={{ width: 275 }}>
                <CardMedia
                  component="img"
                  height="221"
                  src={item.image}
                  alt={item.name}
                />
                <CardContent>{item.name}</CardContent>
                <SearchButton type={type} item={item} />
              </Card>
            </Grid>
          ))}
      </Grid>
      <Grid container justifyContent="center" spacing={3}>
        {type === "cart" &&
          cart.map((item, index) => (
            <Grid item key={index}>
              <Card sx={{ width: 375 }}>
                <CardMedia
                  component="img"
                  height="275"
                  src={item.image}
                  alt={item.name}
                />
                <CardContent>{item.name}</CardContent>
                <SearchButton type={type} item={item} />
              </Card>
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default ProductList;
