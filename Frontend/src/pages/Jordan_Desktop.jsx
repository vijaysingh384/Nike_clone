import Navbar from "../components/Navbar";
import OfferBar from "../components/OfferBar";
import Footer from "../components/Footer";

function Jordan_Desktop() {
    return(
        <>
        <Navbar />
      <OfferBar />
      <div className="">
        <div className="mt-10 px-10 text-2xl font-semibold ">
          <h1>Jordan</h1>
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
            src="https://prod-assets.nike.in/NIKE/nes-nike-reloaded-svc/static/assets/images/P1_DT_AJ1.png"
            alt=""
          />
        </div>
        <div className=" items-center justify-center text-center ">
          <h1 className="mt-5 text-lg">Air Jordan 1</h1>
          <h1 className="mt-5 font-bold text-6xl">HERITAGE ON YOUR FEET</h1>
          <button className="mt-5 bg-black text-white py-2 px-4 rounded-xl">
            Shop
          </button>
          <div className="grid grid-cols-4 grid-rows-8 gap-0 mt-40">
        
        <img className="col-span-2 row-span-4" src="https://images-static.nykaa.com/uploads/04a491d3-a8eb-4f49-a48e-9610933f4610.png?tr=cm-pad_resize,w-900" alt="" />
        <img className="col-span-2 row-span-4" src="https://images-static.nykaa.com/uploads/f8edf252-3627-40b4-9d92-6a70ef10add4.png?tr=cm-pad_resize,w-900" alt="" />
        <img className="col-span-2 row-span-4" src="https://images-static.nykaa.com/uploads/15485339-9e3c-44fb-931d-3c20fa6f204b.png?tr=cm-pad_resize,w-900" alt="" />
        <img className="col-span-2 row-span-4" src="https://images-static.nykaa.com/uploads/03a852f2-ce8d-438e-851f-5043c3eeff22.png?tr=cm-pad_resize,w-900" alt="" />
     
    </div>
        </div>
        <h1 className="px-5 mt-10 font-bold text-2xl">More to Explore</h1>
        <div className="px-5 grid grid-cols-6 grid-rows-5 gap-4 mt-4">
        
          <div className="col-span-2 row-span-5"><img src="https://images-static.nykaa.com/uploads/cbb6b3d0-9ebd-445e-8eb7-8f5c05d23910.png?tr=cm-pad_resize,w-750" alt="" /></div>
          <div className="col-span-2 row-span-5 col-start-3"><img src="https://images-static.nykaa.com/uploads/d1351a8e-80d1-44f4-af44-32bf5777afd5.png?tr=cm-pad_resize,w-750" alt="" /></div>
          <div className="col-span-2 row-span-5 col-start-5"><img src="https://images-static.nykaa.com/uploads/c3c93953-e770-473d-9a91-24b341267c82.png?tr=cm-pad_resize,w-750" alt="" /></div>
        </div>
       
      </div>
      <Footer />
        </>
    )
}

export default Jordan_Desktop;