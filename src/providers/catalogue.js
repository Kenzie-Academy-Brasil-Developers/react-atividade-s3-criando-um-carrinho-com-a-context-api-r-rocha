import { createContext, useState } from "react";

export const CatalogueContext = createContext([]);

export const CatalogueProvider = ({ children }) => {
  const [catalogue, setCatalogue] = useState([
    { name: "Book", price: 20, image: "https://cdn.pixabay.com/photo/2021/02/18/20/15/book-6028303_960_720.jpg" },
    { name: "T-shirt", price: 50, image: "https://cdn.pixabay.com/photo/2020/12/01/16/58/t-shirt-5794922_960_720.png" },
    { name: "Banana", price: 3, image: "https://cdn.pixabay.com/photo/2014/04/03/11/07/bananas-311788_960_720.png" },
  ]);

  const addToCatalogue = (item) => {
    setCatalogue([...catalogue, item]);
  }

  const removeFromCatalogue = (item) => {
    const newCatalogue = catalogue.filter(
      (itemCatalogue) => itemCatalogue.name !== item.name
    );
    setCatalogue(newCatalogue);
  }

  return (
      <CatalogueContext.Provider value={{ catalogue, addToCatalogue, removeFromCatalogue }}>
          {children}
      </CatalogueContext.Provider>
  )
}