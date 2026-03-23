import React from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import Product_section from "../components/UI/Product_section";

const bestSellers = [
  { id: 1, name: "Air Jordan 1 Mid", category: "Shoes", price: "₹11,495", image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-FQ8249-104_1.jpg?tr=cm-pad_resize,w-500,h-500" },
  { id: 2, name: "Nike Dunk Low Retro SE", category: "Men's Shoes", price: "₹10,795", image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-FZ5486-101_1.jpg?tr=cm-pad_resize,w-500,h-500" },
  { id: 3, name: "Nike Air Max Excee", category: "Men's Shoes", price: "₹8,695", image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-FJ9509-111_1.jpg?tr=cm-pad_resize,w-500,h-500" },
  { id: 4, name: "Nike Air Force 1 '07" , category: "Men's Shoes", price: "₹9,295", image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-CN9675-005_1.jpg?tr=cm-pad_resize,w-500,h-500" },
  { id: 5, name: "Nike Air Force 1 '07" , category: "Men's Shoes", price: "₹9,295", image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-FN0228-001_1.jpg?tr=cm-pad_resize,w-500,h-500" }
];



function Men_Desktop() {
    const handleCardClick = (product) => {
    console.log("Clicked:", product);
    // navigate(`/product/${product.id}`) — with React Router
  };
    return(
 <>
    <Navbar />
    
      <div >
         <div className="flex items-center px-10 py-4">
          <h1 className="text-2xl font-semibold w-32">Men</h1>

          <ul className="flex-1 flex gap-6 justify-center text-lg">
            <li className="cursor-pointer hover:underline">Shoes</li>
            <li className="cursor-pointer hover:underline">Clothing</li>
            <li className="cursor-pointer hover:underline">Accessories</li>
            <li className="cursor-pointer hover:underline">Shop All</li>
          </ul>

          <div className="w-32" />
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
        <div className="grid grid-cols-4 grid-rows-4 gap-1 mt-40">
        
        <img className="col-span-2 row-span-4" src="https://images-static.nykaa.com/uploads/104dbcf5-1137-4653-a427-43bfa23b12fb.png?tr=cm-pad_resize,w-900" alt="" />
        <img className="col-span-2 row-span-4" src="https://images-static.nykaa.com/uploads/b751fd59-1fbc-4ae5-87a7-12332b5a1f7c.png?tr=cm-pad_resize,w-900" alt="" />
     
    </div>
      </div>
      <Product_section
      label="Featured"
        title="Best Sellers"
        products={bestSellers}
        onCardClick={handleCardClick}
      />




      
      

      <div>


        <h1 className="mt-2">More to Explore</h1>
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