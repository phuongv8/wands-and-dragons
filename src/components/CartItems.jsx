import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useProductsProvider } from "../utils/ProductProvider";


const CartItems = () => {
  const { cartItems, handleAddItems, handleRemoveItems } =
    useProductsProvider();

  return (
    
    

    cartItems.map((item) => (
      <div className='individual-cart-item-container'key={item.id}>
        <p className="product-name-cart-page">{item.name}</p>
        <div className="cart-image-container">
        <img className="cart-image" src={item.imageUrl} alt={item.name} />
        </div>
        <div className="cart-item-details-container">
        <p className="cart-item-details">${item.price * item.cartQuantity}</p>
        <p className="cart-item-details">Quantity: {item.cartQuantity}</p>
        <div className="cart-page-icons">
        <AddCircleIcon className="cart-page-add-button" onClick={() => handleAddItems(item)} />
        <RemoveCircleIcon className="cart-page-remove-button"onClick={() => handleRemoveItems(item)} />
        </div>
        </div>
      </div>
    ))

)}

export default CartItems;
