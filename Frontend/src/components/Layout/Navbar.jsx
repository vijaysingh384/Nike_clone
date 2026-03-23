import { useState } from "react";
import { Link } from "react-router-dom";
import OfferBar from "./OfferBar";
function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);

  const menuData = {
    NewFeatured: [
      {
        title: "Featured",
        items: ["New Arrivals", "Best Sellers", "Top Picks Under ₹4999"],
      },
      {
        title: "Trending",
        items: [
          "Just Do The Work",
          "Retro Running",
          "AFI Unimistakeable",
          "Domain 3",
        ],
      },
      {
        title: "Shop Icon",
        items: ["Air Force 1", "Air Max", "Blazer", "Cortez", "Dunk"],
      },
      {
        title: "Sports",
        items: [
          "Football",
          "Running",
          "Basketball",
          "Gym & Training",
          "Skateboarding",
        ],
      },
    ],

    Men: [
      {
        title: "Shoes",
        items: [
          "All Shoes",
          "Lifestyle",
          "Running",
          "Basketball",
          "Gym & Training",
          "Football",
          "Skateboarding",
        ],
      },
      {
        title: "Clothing",
        items: [
          "All Clothing",
          "T-Shirts & Tanks",
          "Hoodies & Sweatshirts",
          "Jackets & Vests",
          "Pants & Tights",
        ],
      },
      {
        title: "Accessories",
        items: [
          "All Accessories",
          "Bags & Backpacks",
          "Socks",
          "Hats & Caps",
          "Sport Equipment",
        ],
      },
      {
        title: "Shop Icon",
        items: ["Air Force 1", "Air Max", "Blazer", "Cortez", "Dunk"],
      },
    ],
    Women: [
      {
        title: "Shoes",
        items: [
          "All Shoes",
          "Lifestyle",
          "Running",
          "Basketball",
          "Gym & Training",
          "Football",
          "Skateboarding",
        ],
      },
      {
        title: "Clothing",
        items: [
          "All Clothing",
          "T-Shirts & Tanks",
          "Hoodies & Sweatshirts",
          "Jackets & Vests",
          "Pants & Tights",
        ],
      },
      {
        title: "Accessories",
        items: [
          "All Accessories",
          "Bags & Backpacks",
          "Socks",
          "Hats & Caps",
          "Sport Equipment",
        ],
      },
      {
        title: "Shop Icon",
        items: ["Air Force 1", "Air Max", "Blazer", "Cortez", "Dunk"],
      },
    ],
    Kids: [
      {
        title: "Shoes",
        items: [
          "All Shoes",
          "Lifestyle",
          "Running",
          "Basketball",
          "Gym & Training",
          "Football",
          "Skateboarding",
        ],
      },
      {
        title: "Clothing",
        items: [
          "All Clothing",
          "T-Shirts & Tanks",
          "Hoodies & Sweatshirts",
          "Jackets & Vests",
          "Pants & Tights",
        ],
      },
      {
        title: "Accessories",
        items: [
          "All Accessories",
          "Bags & Backpacks",
          "Socks",
          "Hats & Caps",
          "Sport Equipment",
        ],
      },
      {
        title: "Shop Icon",
        items: ["Air Force 1", "Air Max", "Blazer", "Cortez", "Dunk"],
      },
    ],
        Jordan: [
      {
        title: "Shoes",
        items: [
          "All Shoes",
          "Lifestyle",
          "Running",
          "Basketball",
          "Gym & Training",
          "Football",
          "Skateboarding",
        ],
      },
      {
        title: "Clothing",
        items: [
          "All Clothing",
          "T-Shirts & Tanks",
          "Hoodies & Sweatshirts",
          "Jackets & Vests",
          "Pants & Tights",
        ],
      },
      {
        title: "Accessories",
        items: [
          "All Accessories",
          "Bags & Backpacks",
          "Socks",
          "Hats & Caps",
          "Sport Equipment",
        ],
      },
      {
        title: "Shop Icon",
        items: ["Air Force 1", "Air Max", "Blazer", "Cortez", "Dunk"],
      },
    ],
  };

  return (
    <>
    <div className="flex w-full top-0 bg-zinc-100 ">
        <Link to="/Register_Desktop">Register </Link>

        <Link onClick={() => setOpen(true)}> Login</Link>
    </div>
      <nav className="bg-white items-center justify-between py-4 flex px-10 shadow-md sticky top-0   left-0 right-0 z-80">
        <div>
          <Link to="/Home">
          <img 
            className="h-6 w-auto"
            src="https://imgs.search.brave.com/Wg8fpF11Si1JDzBhYeqashrwF51ti2DJkc_y0B5VXlI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9hL2E2L0xv/Z29fTklLRS5zdmcv/MTI4MHB4LUxvZ29f/TklLRS5zdmcucG5n"
            alt=""
          />
          </Link>
        </div>
        <div className="flex-1  text-center">
          <ul className="flex gap-8  justify-center">
            <li
              onMouseEnter={() => setActiveMenu("NewFeatured")}
              className="cursor-pointer hover:underline"
            >
              <Link to="/Home">New & Featured</Link>
            </li>

            <li
              onMouseEnter={() => setActiveMenu("Men")}
              className="cursor-pointer hover:underline"
            >
              <Link to="/Men_Desktop">Men</Link>
            </li>

            <li
              onMouseEnter={() => setActiveMenu("Women")}
              className="cursor-pointer hover:underline"
            >
              <Link to="/Women_Desktop">Women</Link>
            </li>

            <li
              onMouseEnter={() => setActiveMenu("Kids")}
              className="cursor-pointer hover:underline"
            >
              <Link to="/Kids_Desktop">Kids</Link>
            </li>

            <li
              onMouseEnter={() => setActiveMenu("Jordan")}
              className="cursor-pointer hover:underline"
            >
              <Link to="/Jordan_Desktop">Jordan</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-4  items-center ">
          <div className="flex items-center bg-zinc-100 rounded-xl px-2">
            <img
              className="h-5 w-auto"
              src="https://cdn-icons-png.flaticon.com/128/1076/1076744.png"
              alt=""
            />
            <input
              className="bg-transparent outline-none px-2 py-2  hover:bg-zinc-100 "
              type="text"
              name=""
              id=""
              placeholder="Search"
            />
          </div>
          <div className="flex gap-4 items-center cursor-pointer  ">
           <Link to="/Wishlist">
            <img
              className="h-6 w-auto px-2"
              src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
              alt="wishlist"
            />
           </Link>
            <Link to="/cart">
            <img
              className="h-6 w-auto px-2 cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/128/5337/5337564.png"
    
              alt="cart"
            />
            </Link>
            
          </div>
        </div>
      </nav>
      <OfferBar />

      <div
  onMouseLeave={() => setActiveMenu(null)}
  className={`left-0  w-full bg-white border-t z-10
  transition-all duration-200 ease-out
  ${
    activeMenu
      ? "opacity-100 translate-y-0 visible"
      : "opacity-0 -translate-y-4 invisible h-0 overflow-hidden"
  }`}
>
  <div className="max-w-3xl mx-auto px-12 py-12 ">
    <div className="grid grid-cols-4 gap-12 text-left">
      {menuData[activeMenu]?.map((section, index) => (
        <div key={index}>
          <h4 className="font-semibold mb-4">{section.title}</h4>
          <ul className="space-y-2  text-gray-500">
            {section.items.map((item, i) => (
              <li
                key={i}
                className="hover:text-black cursor-pointer text-sm transition-colors duration-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</div>
    </>
  );
}

export default Navbar;
