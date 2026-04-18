import Navbar from "../components/Layout/Navbar";
import OfferBar from "../components/Layout/OfferBar";
import Footer from "../components/Layout/Footer";
import Product_section from "../components/UI/Product_section";
const bestSellers = [
  {
    id: 1,
    name: "Air Jordan 1 Mid",
    category: "Shoes",
    price: "₹11,495",
    image:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-DD8959-103_1.jpg?tr=cm-pad_resize,w-500,h-500",
  },
  {
    id: 2,
    name: "Nike Dunk Low Retro SE",
    category: "Men's Shoes",
    price: "₹10,795",
    image:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-FD6034-001_1.jpg?tr=cm-pad_resize,w-500,h-500",
  },
  {
    id: 3,
    name: "Nike Air Max Excee",
    category: "Men's Shoes",
    price: "₹8,695",
    image:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-IO4244-101_1.jpg?tr=cm-pad_resize,w-500,h-500",
  },
  {
    id: 4,
    name: "Nike Air Force 1 '07",
    category: "Men's Shoes",
    price: "₹9,295",
    image:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-HJ8485-500_1.jpg?tr=cm-pad_resize,w-500,h-500",
  },
  {
    id: 5,
    name: "Nike Air Force 1 '07",
    category: "Men's Shoes",
    price: "₹9,295",
    image:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-IB6642-001_1.jpg?tr=cm-pad_resize,w-500,h-500",
  },
];

function Women_Desktop() {
  const handleCardClick = (product) => {
    console.log("Clicked:", product);
    // navigate(`/product/${product.id}`) — with React Router
  };
  return (
    <>
      <Navbar />

      <div>
        <div className="flex items-center px-10 py-4">
          <h1 className="text-2xl font-semibold w-32">Women</h1>

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
            src="https://prod-assets.nike.in/NIKE/nes-nike-reloaded-svc/static/assets/images/Desktop%20WLP%20P1.png"
            alt=""
            loading="lazy"
          />
        </div>
        <div className=" items-center justify-center text-center ">
          <h1 className="mt-5 font-bold text-6xl">RACE THE NIGHT AWAY</h1>
          <h1 className="mt-5">
            The After Dark Tour is back. Built for women, powered by Nike.
          </h1>
          <button className="mt-5 bg-black text-white py-2 px-4 rounded-xl">
            Shop
          </button>
        </div>
        <h1 className="px-5">Shop by Sport</h1>
        <div className="px-5 grid grid-cols-6 grid-rows-5 gap-4 mt-8">
          <div className="col-span-2 row-span-5">
            <img
              src="https://images-static.nykaa.com/uploads/b6595a43-1731-4da9-bbe6-6c599fdd1c79.png?tr=cm-pad_resize,w-750"
              alt=""
              loading="lazy"
            />
          </div>
          <div className="col-span-2 row-span-5 col-start-3">
            <img
              src="https://images-static.nykaa.com/uploads/4d6cd237-7f42-4e75-b562-829f51ca0051.png?tr=cm-pad_resize,w-750"
              alt=""
              loading="lazy"
            />
          </div>
          <div className="col-span-2 row-span-5 col-start-5">
            <img
              src="https://images-static.nykaa.com/uploads/8cc36def-4e6c-4420-b2aa-0ad22573b8f7.png?tr=cm-pad_resize,w-750"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
        <div className="grid grid-cols-4 grid-rows-8 gap-1 mt-40">
          <img
            className="col-span-2 row-span-4"
            src="https://images-static.nykaa.com/uploads/11ceab7f-10a9-495d-9ec4-ec98914d20d9.png?tr=cm-pad_resize,w-900https://images-static.nykaa.com/uploads/41fa8db8-de03-418a-8e9a-e76a8ad86242.png?tr=cm-pad_resize,w-900"
            alt=""
            loading="lazy"
          />
          <img
            className="col-span-2 row-span-4"
            src="https://images-static.nykaa.com/uploads/69c0a3dd-ae95-4a91-b119-fc27a2460c7c.png?tr=cm-pad_resize,w-900"
            alt=""
            loading="lazy"
          />
          <img
            className="col-span-2 row-span-4"
            src="https://images-static.nykaa.com/uploads/3d0dd401-cc7f-49ab-8dcf-b08a3015b536.png?tr=cm-pad_resize,w-900"
            alt=""
            loading="lazy"
          />
          <img
            className="col-span-2 row-span-4"
            src="https://images-static.nykaa.com/uploads/ebabbfea-81ab-4aa0-bb7e-6bab0f9a4621.png?tr=cm-pad_resize,w-900"
            alt=""
            loading="lazy"
          />
        </div>
      </div>
      <Product_section
        label="Featured"
        title="Best Sellers"
        products={bestSellers}
        onCardClick={handleCardClick}
      />

      <div>
        <h1>More to Explore</h1>
        <div className="px-5 grid grid-cols-6 grid-rows-5 gap-4 mt-8">
          <div className="col-span-2 row-span-5">
            <img
              src="https://images-static.nykaa.com/uploads/bbd1367d-9825-4851-9692-9e2a5574f257.png?tr=cm-pad_resize,w-750"
              alt=""
              loading="lazy"
            />
          </div>
          <div className="col-span-2 row-span-5 col-start-3">
            <img
              src="https://images-static.nykaa.com/uploads/3944e96e-fde5-4d00-bca2-5dce951281d7.png?tr=cm-pad_resize,w-750"
              alt=""
              loading="lazy"
            />
          </div>
          <div className="col-span-2 row-span-5 col-start-5">
            <img
              src="https://images-static.nykaa.com/uploads/f4e289af-e5d1-403a-9856-f3cd41e5e659.png?tr=cm-pad_resize,w-750"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Women_Desktop;
