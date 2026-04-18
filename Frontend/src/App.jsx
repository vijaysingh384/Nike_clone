import React, { Suspense , lazy  } from "react";
import { Route, Routes } from "react-router-dom";
const Register_Desktop = lazy (() => import ("./pages/Register_Desktop"));
const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));
const Women_Desktop = lazy(() => import("./pages/Women_Desktop"));
const Men_Desktop = lazy(() => import("./pages/Men_Desktop"));
const Kids_Desktop = lazy(() => import("./pages/Kids_Desktop"));
const Jordan_Desktop = lazy(() => import("./pages/Jordan_Desktop"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const AdminPage = lazy(() => import("./pages/AdminPage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
function App() {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/register_desktop" element={<Register_Desktop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/Women_Desktop" element={<Women_Desktop />} />
        <Route path="/Men_Desktop" element={<Men_Desktop />} />
        <Route path="/Kids_Desktop" element={<Kids_Desktop />} />
        <Route  path="/Jordan_Desktop" element={<Jordan_Desktop />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/products" element={<ProductsPage />} />
 
  
      </Routes>
      </Suspense>
    </>
  );
}

export default App;
