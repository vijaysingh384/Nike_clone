import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSidebar";
import Navbar from "../components/Layout/Navbar";

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products/all")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
    <Navbar />
    <div className="min-h-screen px-6 lg:px-16 py-10">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex gap-6 text-sm">
          <button>Hide Filters</button>
          <button>Sort By ▾</button>
        </div>
      </div>

      <div className="flex gap-10">

        {/* Sidebar */}
        <FilterSidebar />

        {/* Products Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.length === 0 ? (
            <p className="text-gray-400">No products found.</p>
          ) : (
            products.map(product => (
              <ProductCard key={product._id} product={product} />
            ))
          )}
        </div>

      </div>
    </div>
    </>
  );
}

export default ProductsPage;
