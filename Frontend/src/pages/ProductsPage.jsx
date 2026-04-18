import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSidebar";
import Navbar from "../components/Layout/Navbar";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  async function fetchProducts(pageNum) {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:3001/products/all?page=${pageNum}`);
      const data = await res.json();
      if (pageNum === 1) {
        setProducts(data.products);
      } else {
        setProducts(prev => [...prev, ...data.products]);
      }
      setHasMore(data.hasMore);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts(1);
  }, []);

  function loadMore() {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchProducts(nextPage);
  }

  return (
<section>
  <Navbar />
    <div className="min-h-screen px-6 lg:px-16 py-10">

      <div className="flex justify-between items-center mb-8">
        <div className="flex gap-6 text-sm">
          <button>Hide Filters</button>
          <button>Sort By ▾</button>
        </div>
      </div>

      <div className="flex gap-10">
        <FilterSidebar />

        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.length === 0 && !loading ? (
              <p className="text-gray-400">No products found.</p>
            ) : (
              products.map(product => (
                <ProductCard key={product._id} product={product} />
              ))
            )}
          </div>

          {/* Load More */}
          {hasMore && (
            <div className="flex justify-center mt-10">
              <button
                onClick={loadMore}
                disabled={loading}
                className="px-8 py-3 border border-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition disabled:opacity-50"
              >
                {loading ? "Loading..." : "Load More"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
    </section>
  );
}

export default ProductsPage;
