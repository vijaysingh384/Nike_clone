import React from "react";
import { Route, Routes } from "react-router-dom";
import Register_Desktop from "./pages/Register_Desktop";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Women_Desktop from "./pages/Women_Desktop";
import Men_Desktop from "./pages/Men_Desktop";
import Kids_Desktop from "./pages/Kids_Desktop";
import Jordan_Desktop from "./pages/Jordan_Desktop";
function App() {
  return (
    <>
      <Routes>
        <Route path="/register_desktop" element={<Register_Desktop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Women_Desktop" element={<Women_Desktop />} />
        <Route path="/Men_Desktop" element={<Men_Desktop />} />
        <Route path="/Kids_Desktop" element={<Kids_Desktop />} />
        <Route  path="/Jordan_Desktop" element={<Jordan_Desktop />} />
 
  
      </Routes>
    </>
  );
}

export default App;
