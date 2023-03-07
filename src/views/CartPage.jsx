import React from "react";
import CartItems from "../components/CartItems";
import StripeCheckout from "react-stripe-checkout";
import { useProductsProvider } from "../utils/ProductProvider";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Message,
  Header,
  Button,
  Segment,
  Dimmer,
  Loader,
} from "semantic-ui-react";
import {
  handleQuantityUpdate,
  handleRemoveProduct,
} from "../utils/AdminOperations";
import "./CartPage.css";

const CartPage = (props) => {
  const { inventory, cartItems, reloadData, setCartItems } =
    useProductsProvider();
  // stripe api key
  const publishableKey = "pk_test_sLUqHXtqXOkwSdPosC8ZikQ800snMatYMb";

  let navigate = useNavigate();
  //get total price of items in the cart
  const total = cartItems.reduce((acc, obj) => {
    return acc + obj.price * obj.cartQuantity;
  }, 0);

  // what happens when order is submitted successfully.
  const onSubmit = (token) => {
    placeOrder().then(() => {
      reloadData();
    });
    setCartItems([]);

    setTimeout(() => {
      let loadingView = document.querySelector(".loading-page");
      loadingView.classList.add("active");
      setTimeout(() => {
        navigate("/confirmation", { state: { token } });
      }, 2000);
    }, 1000);
  };

  const placeOrder = async () => {
    cartItems.forEach((item) => {
      const decreasedQuantity = item.quantity - item.cartQuantity;
      if (decreasedQuantity > 0) {
        handleQuantityUpdate(item.id, decreasedQuantity);
      }
      if (decreasedQuantity === 0) {
        handleRemoveProduct(item.id);
      }
    });

    return new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });
  };

  if (cartItems.length === 0) {
    return (
      <div className="shopping-cart-page-container">
        <Segment className="cart-page">
          <Dimmer className="loading-page">
            <Loader size="large">Loading</Loader>
          </Dimmer>
          <div className="empty-cart-container">
            <div className="empty-cart-image-and-message-container">
              <img
                className="harry-gif"
                src="images/harrypotterinvisible.gif"
              ></img>

              <div className="ui negative message">
                <p className="header">Your cart is empty!</p>
                <p>Visit our product page to see our options.</p>
              </div>
            </div>
          </div>
        </Segment>
      </div>
    );
  }

  if (cartItems.length > 0) {
    return (
      <div className="cart-page-container">
        <CartItems />
        <div className="stripe-checkout-container">
          <StripeCheckout
            label="Pay Now"
            name="Wands and Dragons"
            billingAddress
            shippingAddress
            image="/images/logo.png"
            description={`Your total is $${total}`}
            amount={total * 100}
            panelLabel="Submit Order"
            token={onSubmit}
            stripeKey={publishableKey}
          />
        </div>
      </div>
    );
  }
};

export default CartPage;
