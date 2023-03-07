import React, { createContext, useContext, useEffect, useState } from "react";


const ProductsContext = createContext(null);

export const ProductsProvider = ({ children }) => {
  const [inventory, setInventory] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [reload, setReload] = useState(true);


  useEffect(() => {
    fetch("http://localhost:5000/wndapi/product/")
      .then((response) => response.json())
      .then((data) => setInventory(data));
    setIsLoading(false);
  }, [reload]);

  const handleAddItems = (addedItem) => {
    const checkIfExist = cartItems.find((item) => item.id === addedItem.id);

    if (checkIfExist) {
      if (checkIfExist.cartQuantity < checkIfExist.quantity) {
        setCartItems(
          cartItems.map((itemInCart) =>
            itemInCart.id === addedItem.id
              ? { ...checkIfExist, cartQuantity: checkIfExist.cartQuantity + 1 }
              : itemInCart
          )
        );
      } else {
        alert('this item is out of stock')
      }
    } else {
      setCartItems([...cartItems, { ...addedItem, cartQuantity: 1 }]);
    }
  };

  const handleRemoveItems = (removedItem) => {
    const checkIfExist = cartItems.find((item) => item.id === removedItem.id);

    if (checkIfExist.cartQuantity === 1) {
      setCartItems(
        cartItems.filter((filterItem) => filterItem.id !== removedItem.id)
      );
    } else {
      setCartItems(
        cartItems.map((itemInCart) =>
          itemInCart.id === removedItem.id
            ? { ...checkIfExist, cartQuantity: checkIfExist.cartQuantity - 1 }
            : itemInCart
        )
      );
    }
  };

  const reloadData = () => {
    fetch("http://localhost:5000/wndapi/product/")
      .then((response) => response.json())
      .then((data) => setInventory(data));
  };

  return (
    <ProductsContext.Provider
      value={{
        inventory,
        setInventory,
        cartItems,
        setCartItems,
        handleAddItems,
        handleRemoveItems,
        categories,
        isLoading,
        reloadData,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsProvider = () => {
  return useContext(ProductsContext);
};
