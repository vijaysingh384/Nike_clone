import Navbar from "../components/Layout/Navbar";
import OfferBar from "../components/Layout/OfferBar";
import Footer from "../components/Layout/Footer";
import Product_section from "../components/UI/Product_section";
const bestSellers = [
  { id: 1, name: "Air Jordan 1 Mid", category: "Shoes", price: "₹11,495", image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-FZ0016-005_1.jpg?tr=cm-pad_resize,w-500,h-500" },
  { id: 2, name: "Nike Dunk Low Retro SE", category: "Men's Shoes", price: "₹10,795", image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-IQ2726-100_1.jpg?tr=cm-pad_resize,w-500,h-500" },
  { id: 3, name: "Nike Air Max Excee", category: "Men's Shoes", price: "₹8,695", image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-FN4446-007_1.jpg?tr=cm-pad_resize,w-500,h-500" },
  { id: 4, name: "Nike Air Force 1 '07" , category: "Men's Shoes", price: "₹9,295", image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-HQ2157-009_1.jpg?tr=cm-pad_resize,w-500,h-500" },
  { id: 5, name: "Nike Air Force 1 '07" , category: "Men's Shoes", price: "₹9,295", image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-DH2920-001_1.jpg?tr=cm-pad_resize,w-500,h-500" }
];

function Kids_Desktop() {
    const handleCardClick = (product) => {
    console.log("Clicked:", product);
    // navigate(`/product/${product.id}`) — with React Router
  };
    return(
        <>
        <Navbar />
      
      <div className="">
         <div className="flex items-center px-10 py-4">
          <h1 className="text-2xl font-semibold w-32">Kids</h1>

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
            src="https://prod-assets.nike.in/NIKE/nes-nike-reloaded-svc/static/assets/images/P1_DT_Classics_for_Kids.png"
            alt=""
            loading="lazy"
          />
        </div>
        <div className=" items-center justify-center text-center ">
  
          <h1 className="mt-5 font-bold text-6xl">ELEVATE THEIR STYLE</h1>
          <h1 className="mt-5">Classic kicks for the next generation</h1>
          <button className="mt-5 bg-black text-white py-2 px-4 rounded-xl">
            Shop
          </button>
        </div>
        <h1 className="px-5">More to Explore</h1>
        <div className="px-5 grid grid-cols-6 grid-rows-5 gap-4 mt-8">
        
          <div className="col-span-2 row-span-5"><img src="https://images-static.nykaa.com/uploads/98e966c5-d1ce-4c7d-bff0-1b57c86a79c8.png?tr=cm-pad_resize,w-750" alt="" loading="lazy" /></div>
          <div className="col-span-2 row-span-5 col-start-3"><img src="https://images-static.nykaa.com/uploads/43b73f7f-0359-4e66-a1a7-eccbc45401d2.png?tr=cm-pad_resize,w-750" alt="" loading="lazy" /></div>
          <div className="col-span-2 row-span-5 col-start-5"><img src="https://images-static.nykaa.com/uploads/6743bfcb-ed29-4023-bb96-c61f28981fa0.png?tr=cm-pad_resize,w-750" alt="" loading="lazy" /></div>
        </div>

        <Product_section
        label="Featured"
        title="Best Sellers"
        products={bestSellers}
        onCardClick={handleCardClick}
        />
        
      </div>
      <Footer />
        </>
    )
}

export default Kids_Desktop;