// import Product_section from "../UI/Product_section";const bestSellers = [
//   {
//     id: 1,
  
//     category: "Shoes",

//     image:
//       "https://images-static.nykaa.com/uploads/4db69a3a-ecd6-4dcd-9ecc-79bd252f4ea8.png?tr=cm-pad_resize,w-750",
//   },
//   {
//     id: 2,
//     name: "Nike Dunk Low Retro SE",
//     category: "Men's Shoes",
//     price: "₹10,795",
//     image:
//       "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-FD6034-001_1.jpg?tr=cm-pad_resize,w-500,h-500",
//   },
//   {
//     id: 3,
//     name: "Nike Air Max Excee",
//     category: "Men's Shoes",
//     price: "₹8,695",
//     image:
//       "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-IO4244-101_1.jpg?tr=cm-pad_resize,w-500,h-500",
//   },
//   {
//     id: 4,
//     name: "Nike Air Force 1 '07",
//     category: "Men's Shoes",
//     price: "₹9,295",
//     image:
//       "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-HJ8485-500_1.jpg?tr=cm-pad_resize,w-500,h-500",
//   },
//   {
//     id: 5,
//     name: "Nike Air Force 1 '07",
//     category: "Men's Shoes",
//     price: "₹9,295",
//     image:
//       "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-IB6642-001_1.jpg?tr=cm-pad_resize,w-500,h-500",
//   },
// ];

function Feature() {  const handleCardClick = (product) => {
    console.log("Clicked:", product);
    // navigate(`/product/${product.id}`) — with React Router
  };
  return (
    <div>
        <div className="">
            <h1 className="mt-20 text-3xl font-semibold">Featured </h1>
        </div>
    
    <div className="grid grid-cols-4 grid-rows-8 gap-1">
        
        <img className="col-span-2 row-span-4" src="https://images-static.nykaa.com/uploads/41fa8db8-de03-418a-8e9a-e76a8ad86242.png?tr=cm-pad_resize,w-900" alt="" />
        <img className="col-span-2 row-span-4" src="https://images-static.nykaa.com/uploads/cc513cb1-cff8-4044-9280-f08c3a881aba.png?tr=cm-pad_resize,w-900" alt="" />
        <img className="col-span-2 row-span-4" src="https://images-static.nykaa.com/uploads/331c12f9-3ef0-45d9-9e1f-d89ca807326e.png?tr=cm-pad_resize,w-900" alt="" />
        <img className="col-span-2 row-span-4" src="https://images-static.nykaa.com/uploads/74cd87a4-e957-4e5b-956b-3e19da33475a.png?tr=cm-pad_resize,w-900" alt="" />
     
    </div>
    {/* <Product_section
    label="Featured"
        title="Best Sellers"
        products={bestSellers}
        onCardClick={handleCardClick}
    /> */}
    </div>
  );
}

export default Feature;
