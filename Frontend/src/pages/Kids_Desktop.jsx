import Navbar from "../components/Navbar";
import OfferBar from "../components/OfferBar";
import Footer from "../components/Footer";

function Kids_Desktop() {
    return(
        <>
        <Navbar />
      <OfferBar />
      <div className="">
        <div className="mt-10 px-10 text-2xl font-semibold ">
          <h1>Kids</h1>
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
            src="https://prod-assets.nike.in/NIKE/nes-nike-reloaded-svc/static/assets/images/P1_DT_Classics_for_Kids.png"
            alt=""
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
        
          <div className="col-span-2 row-span-5"><img src="https://images-static.nykaa.com/uploads/98e966c5-d1ce-4c7d-bff0-1b57c86a79c8.png?tr=cm-pad_resize,w-750" alt="" /></div>
          <div className="col-span-2 row-span-5 col-start-3"><img src="https://images-static.nykaa.com/uploads/43b73f7f-0359-4e66-a1a7-eccbc45401d2.png?tr=cm-pad_resize,w-750" alt="" /></div>
          <div className="col-span-2 row-span-5 col-start-5"><img src="https://images-static.nykaa.com/uploads/6743bfcb-ed29-4023-bb96-c61f28981fa0.png?tr=cm-pad_resize,w-750" alt="" /></div>
        </div>
        
      </div>
      <Footer />
        </>
    )
}

export default Kids_Desktop;