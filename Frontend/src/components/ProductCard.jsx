function ProductCard({ product }) {
  return (
    <div className="group cursor-pointer rounded-xl overflow-hidden">

      {/* Image Container */}
      <div className="relative bg-white flex items-center justify-center h-[260px] overflow-hidden">

        {/* Product Image */}
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full object-contain transition duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="text-gray-400 text-sm">No Image</div>
        )}

        {/* Wishlist Button */}
        <div className="absolute top-3 left-3 bg-white rounded-full p-2 shadow cursor-pointer">
          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            fill="none"
            stroke="#111"
            strokeWidth="1.5"
          >
            <path d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451" />
          </svg>
        </div>

        {/* Cart Button */}
        <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow cursor-pointer">
          <img
            src="https://cdn-icons-png.flaticon.com/128/13646/13646655.png"
            alt="cart"
            className="h-5 w-5"
          />
        </div>

      </div>

      {/* Product Info */}
      <div className="p-3">
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-zinc-400 text-sm">
          {product.description}
        </p>
        <p className="mt-1 font-medium">₹{product.price}</p>
      </div>

    </div>
  );
}

export default ProductCard;