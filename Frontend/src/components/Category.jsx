import CategorySlider from "../components/CategorySlider";

function Category() {

  const sports = [
    { src: "https://images-static.nykaa.com/uploads/00a6c246-c5d0-47dd-a453-8f416ff21b4b.png?tr=cm-pad_resize,w-750", title: "Running" },
    { src: "https://images-static.nykaa.com/uploads/4db69a3a-ecd6-4dcd-9ecc-79bd252f4ea8.png?tr=cm-pad_resize,w-750", title: "Cricket" },
    { src: "https://images-static.nykaa.com/uploads/26bd7a04-9f96-4ea4-aa56-0613eb384872.png?tr=cm-pad_resize,w-750", title: "Training" },
    { src: "https://images-static.nykaa.com/uploads/1afff54a-c992-4ece-8b78-6aa6a54c9bba.png?tr=cm-pad_resize,w-750", title: "Sportswear" },
  ];

  return (
    <>
      <CategorySlider
        title="Shop by Sport"
        images={sports}
      />
    </>
  );
}

export default Category;