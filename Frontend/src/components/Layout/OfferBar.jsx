import { useEffect, useState } from "react";

function OfferBar() {
  const messages = [
    "Get Free Delivery in 2-4 days. Easy Returns & Size Exchanges",
    "For orders placed before 30 January 2026, you can track and manage them"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  
  return (
    <div className=" bg-gray-100 ">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {messages.map((msg, i) => (
          <div key={i} className="min-w-full text-center text-[12px]  text-gray-500">
            {msg}
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfferBar;