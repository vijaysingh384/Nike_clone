function Hero() {
  return (
    <div className="relative w-full">
      <img
        src="https://images-static.nykaa.com/uploads/92f35786-54ca-4154-b8e5-b75612668c18.webp?"
        alt=""
      />
      <div className="absolute inset-0 mt-30 ">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl md:text-7xl text-white font-semibold tracking-tight">
            UNBEATABLE
          </h1>

          <p className="mt-2 mb-2 text-white">Dominate every move at any moment in Nike Domain </p>
          <button className="bg-white px-4 py-2 rounded-2xl font-semibold" ><a href="/Features">Explore</a></button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
