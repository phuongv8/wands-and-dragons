import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./views/HomePage";
import ProductsPage from "./views/ProductsPage";
import CartPage from "./views/CartPage";
import ProductDetailPage from "./views/ProductDetailPage";
import AdminPage from "./views/AdminPage";
import OrderHistoryPage from "./views/OrderHistoryPage";
import { AuthProvider } from "./components/Auth";
import { Login } from "./views/Login";
import { RequireAuth } from "./components/RequireAuth";
import { AboutPage } from "./views/AboutPage";
import { ProductsProvider } from "./utils/ProductProvider";
import { ConfirmationPage } from "./views/ConfirmationPage.jsx";
function App() {
  return (
    <AuthProvider>
      <ProductsProvider>
        <React.Fragment>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/productspage" element={<ProductsPage />} />
            <Route path="category/:type" element={<ProductsPage />} />
            <Route path="productdetail" element={<ProductDetailPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="loginauth" element={<Login />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="orders" element={<OrderHistoryPage />} />
            <Route path="confirmation" element={<ConfirmationPage />} />
            <Route
              path="inventory"
              element={
                <RequireAuth>
                  <AdminPage />
                </RequireAuth>
              }
            />
          </Routes>
          <Footer />
        </React.Fragment>
      </ProductsProvider>
    </AuthProvider>
  );
}

export default App;
