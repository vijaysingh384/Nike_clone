// components/ProductCarousel.jsx

import { useRef } from "react";

function ProductCard({ product }) {
  return (
    <div className="flex-none w-full min-w-[400px] group cursor-pointer">
      <div className="bg-zinc-400 rounded-lg aspect-square flex items-center justify-center overflow-hidden mb-3 transition-colors group-hover:bg-[#e8e8e8]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <p className="text-xs text-gray-500 mb-0.5">{product.category}</p>
      <p className="text-sm font-bold text-gray-900 mb-1">{product.name}</p>
      <p className="text-sm font-medium text-gray-900">{product.price}</p>
    </div>
  );
}

export default function Product_section({
  title = "Best Sellers",
  label,
  products = [],
  onCardClick,
}) {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const card = trackRef.current?.children[0];
    const amount = (card?.offsetWidth ?? 220) + 16;
    trackRef.current?.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="py-6 px-4 font-sans">
      {label && (
        <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-1">
          {label}
        </p>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-5">
        {title}
      </h2>

      <div className="relative">
        <button
          onClick={() => scroll(-1)}
          className="absolute left-[-18px] top-1/2 -translate-y-3/4 z-10 w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-1"
          style={{ scrollbarWidth: "none" }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => onCardClick?.(product)}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll(1)}
          className="absolute right-[-18px] top-1/2 -translate-y-3/4 z-10 w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </section>
  );
}