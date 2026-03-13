import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";

function CategorySlider({ title, images }) {

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <section className="px-12 py-12 relative">

        <h2 className="text-3xl font-semibold mb-8">{title}</h2>

        
        <button
          ref={prevRef}
          className="absolute left-0 top-[45%] z-10 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100"
        >
          ←
        </button>

        <button
          ref={nextRef}
          className="absolute right-0 top-[45%] z-10 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100"
        >
          →
        </button>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 },
          }}
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="w-full">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-[500px] object-cover"
                />
                <h3 className="mt-3 text-lg font-medium">
                  {img.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </section>


       <div className="mt-12">
      <img src="https://images-static.nykaa.com/uploads/99731bee-cb3b-402b-8d09-946fcf479fce.png?tr=cm-pad_resize,w-1800" alt="" />
    </div>
    <div className="mt-12">
      <img src="https://images-static.nykaa.com/uploads/0f9657fe-749f-4a61-937c-c7aa0721e1b4.png?tr=cm-pad_resize,w-1800" alt="" />
    </div>

<div className="grid grid-cols-8 grid-rows-2 gap-4 px-70 mt-15">
    <div ><img src="https://images-static.nykaa.com/uploads/70703269-64eb-4db2-8aaf-1903753bab5b.png?tr=cm-pad_resize,w-225" alt="" /></div>
    <div ><img src="https://images-static.nykaa.com/uploads/0d7f9cba-1d25-4e68-a880-42926a45276d.png?tr=cm-pad_resize,w-225" alt="" /></div>
    <div ><img src="https://images-static.nykaa.com/uploads/2065d81f-6dca-41a7-a3b9-8033928b0bc5.png?tr=cm-pad_resize,w-225" alt="" /></div>
    <div ><img src="https://images-static.nykaa.com/uploads/cea497f0-0300-4b42-8800-815912e151e5.png?tr=cm-pad_resize,w-225" alt="" /></div>
    <div ><img src="https://images-static.nykaa.com/uploads/5cd340f4-c8bc-4c55-8fed-49a4fdd31414.png?tr=cm-pad_resize,w-225" alt="" /></div>
    <div ><img src="https://images-static.nykaa.com/uploads/29c73962-0dc0-4b75-9eac-3d10cf90ea43.png?tr=cm-pad_resize,w-225" alt="" /></div>
    <div ><img src="https://images-static.nykaa.com/uploads/2951dbc2-e2af-4d0b-bda2-9065aa7d7282.png?tr=cm-pad_resize,w-225" alt="" /></div>
    <div ><img src="https://images-static.nykaa.com/uploads/86dee53b-ebec-4520-bf53-0b0503bf9707.png?tr=cm-pad_resize,w-225" alt="" /></div>
    <div ><img src="https://images-static.nykaa.com/uploads/09cb6dcc-89ca-47ff-897d-4e4e485285e5.png?tr=cm-pad_resize,w-225" alt="" /></div>
    <div ><img src="https://images-static.nykaa.com/uploads/b82593a5-dd23-4500-8a94-a561b8204c59.png?tr=cm-pad_resize,w-225" alt="" /></div>
    <div ><img src="https://images-static.nykaa.com/uploads/417a569f-a915-4a76-b9d1-6cd4e47c5cfe.png?tr=cm-pad_resize,w-225" alt="" /></div>
    <div ><img src="https://images-static.nykaa.com/uploads/9695d31a-08eb-4cc7-9456-76d2e609e987.png?tr=cm-pad_resize,w-225" alt="" /></div>
    <div ><img src="https://images-static.nykaa.com/uploads/982e278e-7de1-446d-8a69-b040a3d451c3.png?tr=cm-pad_resize,w-225" alt="" /></div>
    <div ><img src="https://images-static.nykaa.com/uploads/a88d4bb2-1c3c-48a0-b0e1-d4f137a98484.png?tr=cm-pad_resize,w-225" alt="" /></div>
    <div ><img src="https://images-static.nykaa.com/uploads/cd867f04-eb2a-4022-920a-e63583e32477.png?tr=cm-pad_resize,w-225" alt="" /></div>
    <div ><img src="https://images-static.nykaa.com/uploads/6a59d536-6a77-485f-a6a3-492ac3e37c69.png?tr=cm-pad_resize,w-225" alt="" /></div>
</div>


    </>
  );
}

export default CategorySlider;



