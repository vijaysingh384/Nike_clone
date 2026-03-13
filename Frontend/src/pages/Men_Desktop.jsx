import React from "react";
import Navbar from "../components/Navbar";
import OfferBar from "../components/OfferBar";
import Footer from "../components/Footer";

function Men_Desktop() {
    return(
 <>
    <Navbar />
      <OfferBar />
      <div className="">
        <div className="mt-10 px-10 text-2xl font-semibold ">
          <h1>Men</h1>
        </div>
        <div className="flex-1 text-center ">
          <ul className="flex gap-4 justify-center  text-lg  mb-5 ">
            <li>Shoes</li>
            <li>Clothing</li>
            <li>Accessories</li>
            <li>Shop All</li>
          </ul>
        </div>
        <div>
          <img
            src="https://prod-assets.nike.in/NIKE/nes-nike-reloaded-svc/static/assets/images/Desktop%20MLP%20P1.png"
            alt=""
          />
        </div>
        <div className=" items-center justify-center text-center ">
          <h1 className="mt-5 text-lg">Nike Air Force 1</h1>
          <h1 className="mt-5 font-bold text-6xl">UNMISTAKABLE.</h1>
          <h1 className="mt-5">For those who beat the odds.</h1>
          <button className="mt-5 bg-black text-white py-2 px-4 rounded-xl">
            Shop
          </button>
        </div>
        <h1 className="px-5">Shop by Sport</h1>
        <div className="px-5 grid grid-cols-6 grid-rows-5 gap-4 mt-8">
        
          <div className="col-span-2 row-span-5"><img src="https://images-static.nykaa.com/uploads/443ae215-434f-49a6-b51a-01762a4ea207.png?tr=cm-pad_resize,w-750" alt="" /></div>
          <div className="col-span-2 row-span-5 col-start-3"><img src="https://images-static.nykaa.com/uploads/9bb64081-7a35-4900-b107-64ca3f2fe2b4.png?tr=cm-pad_resize,w-750" alt="" /></div>
          <div className="col-span-2 row-span-5 col-start-5"><img src="https://images-static.nykaa.com/uploads/8f9ca06e-355c-4301-8287-7c5d1c0ba02f.png?tr=cm-pad_resize,w-750" alt="" /></div>
        </div>
        <div className="grid grid-cols-4 grid-rows-8 gap-1 mt-40">
        
        <img className="col-span-2 row-span-4" src="https://images-static.nykaa.com/uploads/104dbcf5-1137-4653-a427-43bfa23b12fb.png?tr=cm-pad_resize,w-900" alt="" />
        <img className="col-span-2 row-span-4" src="https://images-static.nykaa.com/uploads/b751fd59-1fbc-4ae5-87a7-12332b5a1f7c.png?tr=cm-pad_resize,w-900" alt="" />
     
    </div>
      </div>

      <div>
        <h1>More to Explore</h1>
         <div className="px-5 grid grid-cols-6 grid-rows-5 gap-4 mt-2">
        
          <div className="col-span-2 row-span-5"><img src="https://images-static.nykaa.com/uploads/b34e3d48-a178-4ee9-9ece-18b7eb17dea3.png?tr=cm-pad_resize,w-750" alt="" /></div>
          <div className="col-span-2 row-span-5 col-start-3"><img src="https://images-static.nykaa.com/uploads/d18dfb96-651f-49a4-92ee-9926f7c218c8.png?tr=cm-pad_resize,w-750" alt="" /></div>
          <div className="col-span-2 row-span-5 col-start-5"><img src="https://images-static.nykaa.com/uploads/9e99d8e4-de39-4fed-97e1-f45f3dab4513.png?tr=cm-pad_resize,w-750" alt="" /></div>
        </div>

      </div>
      <Footer />
    </>

    )
   
}

export default Men_Desktop;