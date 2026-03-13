import React from "react";
import Navbar from "../components/Navbar";
import OfferBar from "../components/OfferBar";

function Cart(){
    return(
        <>
        <Navbar />
        <OfferBar />
        <div>
            <h1 className="text-2xl font-semibold text-center mt-10">Your Cart is Empty</h1>
        </div>
        
        
        </>
    )
}

export default Cart;