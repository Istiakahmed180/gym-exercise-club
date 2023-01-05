import React, { useEffect, useState } from "react";
import dumble from "../../Image/dumble.png";
import Product from "../Product/Product";
import my_photo from "../../Image/my-photo.png";
import { FaMapMarkerAlt } from "react-icons/fa";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("ExerciseData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="flex">
      {/* Home Left Side */}
      <div className="flex-auto w-[35%] bg-base-100  mx-20 mt-10">
        {/* Club Logo and header */}
        <div className="flex items-center -ml-3">
          <img className="w-16 flex" src={dumble} alt="" />
          <span className="uppercase font-bold text-[#5D5FEF] text-2xl">
            ultra-active-club
          </span>
        </div>

        {/* Exercise paragraph */}
        <p className="font-semibold text-xl mt-5">Select Today Exercise</p>

        {/* Exercise Data */}
        <div className="grid grid-cols-3 gap-5 mt-10">
          {products.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </div>
      </div>

      {/* Home Right Side */}
      <div className="flex-auto w-0 bg-white">
        {/* profile */}
        <div className="flex items-center mx-10 mt-8">
          <img src={my_photo} alt="" className="w-14 rounded-2xl" />
          <div className="ml-2">
            <h1 className="font-bold text-xl">Istiak Ahmed</h1>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-gray-400" />
              <span className="text-gray-500 ml-2">Ruppur,Pabna</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
