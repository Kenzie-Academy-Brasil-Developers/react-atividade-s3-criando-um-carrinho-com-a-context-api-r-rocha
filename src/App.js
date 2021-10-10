import { CatalogueProvider } from "./providers/catalogue";
import { CartProvider } from "./providers/cart";
import ProductList from "./components/product-list";

function App() {
  return (
    <div className="App">
      <CatalogueProvider>
        <CartProvider>
          <ProductList type="catalogue" />
          <ProductList type="cart" />
        </CartProvider>
      </CatalogueProvider>
      
    </div>
  );
}

export default App;
