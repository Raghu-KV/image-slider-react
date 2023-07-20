import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useState } from "react";
import "./App.css";
function App() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1689571171604-888a8ed23110?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1688988816492-f71727a11149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1689615056522-2c3f0fcea5c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1689631282155-924d15b957e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  const [currentImage, setCurrentImage] = useState(2);

  const prviousImage = () => {
    const isFirstIndex = currentImage === 0;
    const prvImage = isFirstIndex ? images.length - 1 : currentImage - 1;
    setCurrentImage(prvImage);
  };

  const nextImage = () => {
    const isLastIndex = images.length - 1 === currentImage;
    const nextImage = isLastIndex ? 0 : currentImage + 1;
    setCurrentImage(nextImage);
  };

  const [currentImage2, setCurrentImage2] = useState(0);

  const prviousImage2 = () => {
    const isFirstIndex = currentImage2 === 0;
    const prvImage = isFirstIndex ? images.length - 1 : currentImage2 - 1;
    setCurrentImage2(prvImage);
  };

  const nextImage2 = () => {
    const isLastIndex = images.length - 1 === currentImage2;
    const nextImage = isLastIndex ? 0 : currentImage2 + 1;
    setCurrentImage2(nextImage);
  };

  return (
    <>
      <div className="max-w-[1400px] h-[780px] w-full mx-auto relative py-16 px-4 group">
        <div
          className="h-full w-full bg-center bg-cover duration-500 rounded-2xl"
          style={{ backgroundImage: `url(${images[currentImage].url})` }}
        ></div>
        <div
          className="absolute top-[50%] right-9 bg-slate-100 opacity-0 rounded-full group-hover:opacity-90 duration-300 cursor-pointer"
          onClick={nextImage}
        >
          <FiChevronRight size={30} />
        </div>

        <div
          className="absolute top-[50%] left-9 bg-slate-100 opacity-0 rounded-full group-hover:opacity-90 duration-300 cursor-pointer"
          onClick={prviousImage}
        >
          <FiChevronLeft size={30} />
        </div>
        <div className="flex justify-center">
          <div className="flex gap-3 bottom-[10%] absolute">
            {images.map((image, index) => (
              <div
                className={`h-3 w-3 rounded-full bg-white opacity-30 cursor-pointer ${
                  currentImage === index && "opacity-70"
                }`}
                onClick={() => setCurrentImage(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="mb-24 flex overflow-hidden w-[500px] mx-auto relative">
          {images.map((image) => (
            <img
              src={image.url}
              className={`object-cover rounded-lg duration-300 ease-out translate-x-[-${
                currentImage2 * 100
              }%]`}
              // style={{ transform: `translateX(-${currentImage2}* 100)%` }}
            />
          ))}

          <div className="absolute inset-4 flex justify-between items-center">
            <div
              className="bg-white rounded-full cursor-pointer"
              onClick={prviousImage2}
            >
              <FiChevronLeft size={30} />
            </div>
            <div
              className="bg-white rounded-full cursor-pointer"
              onClick={nextImage2}
            >
              <FiChevronRight size={30} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
