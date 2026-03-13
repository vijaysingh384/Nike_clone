import Navbar from "../components/Navbar";
import OfferBar from "../components/OfferBar";
import Footer from "../components/Footer";
function Women_Desktop() {
  return (
    <>
      <Navbar />
      <OfferBar />
      <div className="">
        <div className="mt-10 px-10 text-2xl font-semibold ">
          <h1>Women</h1>
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
            src="https://prod-assets.nike.in/NIKE/nes-nike-reloaded-svc/static/assets/images/Desktop%20WLP%20P1.png"
            alt=""
          />
        </div>
        <div className=" items-center justify-center text-center ">
          <h1 className="mt-5 font-bold text-6xl">RACE THE NIGHT AWAY</h1>
          <h1 className="mt-5">The After Dark Tour is back. Built for women, powered by Nike.</h1>
          <button className="mt-5 bg-black text-white py-2 px-4 rounded-xl">
            Shop
          </button>
        </div>
        <h1 className="px-5">Shop by Sport</h1>
        <div className="px-5 grid grid-cols-6 grid-rows-5 gap-4 mt-8">
        
          <div className="col-span-2 row-span-5"><img src="https://images-static.nykaa.com/uploads/b6595a43-1731-4da9-bbe6-6c599fdd1c79.png?tr=cm-pad_resize,w-750" alt="" /></div>
          <div className="col-span-2 row-span-5 col-start-3"><img src="https://images-static.nykaa.com/uploads/4d6cd237-7f42-4e75-b562-829f51ca0051.png?tr=cm-pad_resize,w-750" alt="" /></div>
          <div className="col-span-2 row-span-5 col-start-5"><img src="https://images-static.nykaa.com/uploads/8cc36def-4e6c-4420-b2aa-0ad22573b8f7.png?tr=cm-pad_resize,w-750" alt="" /></div>
        </div>
        <div className="grid grid-cols-4 grid-rows-8 gap-1 mt-40">
        
        <img className="col-span-2 row-span-4" src="https://images-static.nykaa.com/uploads/11ceab7f-10a9-495d-9ec4-ec98914d20d9.png?tr=cm-pad_resize,w-900https://images-static.nykaa.com/uploads/41fa8db8-de03-418a-8e9a-e76a8ad86242.png?tr=cm-pad_resize,w-900" alt="" />
        <img className="col-span-2 row-span-4" src="https://images-static.nykaa.com/uploads/69c0a3dd-ae95-4a91-b119-fc27a2460c7c.png?tr=cm-pad_resize,w-900" alt="" />
        <img className="col-span-2 row-span-4" src="https://images-static.nykaa.com/uploads/3d0dd401-cc7f-49ab-8dcf-b08a3015b536.png?tr=cm-pad_resize,w-900" alt="" />
        <img className="col-span-2 row-span-4" src="https://images-static.nykaa.com/uploads/ebabbfea-81ab-4aa0-bb7e-6bab0f9a4621.png?tr=cm-pad_resize,w-900" alt="" />
     
    </div>
      </div>

      <div>
        <h1>More to Explore</h1>
         <div className="px-5 grid grid-cols-6 grid-rows-5 gap-4 mt-8">
        
          <div className="col-span-2 row-span-5"><img src="https://images-static.nykaa.com/uploads/bbd1367d-9825-4851-9692-9e2a5574f257.png?tr=cm-pad_resize,w-750" alt="" /></div>
          <div className="col-span-2 row-span-5 col-start-3"><img src="https://images-static.nykaa.com/uploads/3944e96e-fde5-4d00-bca2-5dce951281d7.png?tr=cm-pad_resize,w-750" alt="" /></div>
          <div className="col-span-2 row-span-5 col-start-5"><img src="https://images-static.nykaa.com/uploads/f4e289af-e5d1-403a-9856-f3cd41e5e659.png?tr=cm-pad_resize,w-750" alt="" /></div>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default Women_Desktop;
