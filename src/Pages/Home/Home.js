import React, { useEffect, useState } from "react";
import dumble from "../../Image/dumble.png";
import Product from "../Product/Product";
import my_photo from "../../Image/my-photo.png";
import { FaMapMarkerAlt } from "react-icons/fa";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [breakTime, setBreakTime] = useState(0);
  console.log(breakTime);

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
        <div className=" sticky top-0">
          {/* profile */}
          <div className="flex items-center mx-5 mt-8">
            <img src={my_photo} alt="" className="w-14 rounded-2xl" />
            <div className="ml-2">
              <h1 className="font-bold text-xl">Istiak Ahmed</h1>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-gray-400" />
                <span className="text-gray-500 ml-2">Ruppur,Pabna</span>
              </div>
            </div>
          </div>

          {/* weigth */}
          <div className="bg-[#DBDBF0] rounded-2xl mx-5">
            <div className="px-5 py-3 flex justify-between my-5">
              <p className="flex flex-col">
                <div>
                  <span className="text-2xl font-bold">75</span>{" "}
                  <small className="text-sm">kg</small>
                </div>
                <span>Weight</span>
              </p>
              <div className="flex flex-col">
                <span className="text-2xl font-bold">7.5</span>
                <span>Height</span>
              </div>
              <p className="flex flex-col">
                <div>
                  <span className="text-2xl font-bold">25</span>{" "}
                  <small>yrs</small>
                </div>
                <span>Age</span>
              </p>
            </div>
          </div>

          {/* break */}
          <div className="my-5 mx-5 ">
            <h3 className="font-semibold text-lg">Add A Break</h3>
            <div className="my-5 bg-[#DBDBF0] rounded-2xl flex justify-between p-5">
              <button
                onClick={(e) => setBreakTime(e.target.value)}
                value="10"
                className="bg-white hover:text-white rounded-full p-1 flex items-center cursor-pointer font-medium btn btn-circle lowercase btn-outline border-none hover:bg-[#905FEF]"
              >
                10m
              </button>
              <button
                onClick={(e) => setBreakTime(e.target.value)}
                value="20"
                className="bg-white hover:text-white rounded-full p-1 flex items-center cursor-pointer font-medium btn btn-circle btn-outline border-none hover:bg-[#905FEF] lowercase"
              >
                20m
              </button>
              <button
                onClick={(e) => setBreakTime(e.target.value)}
                value="30"
                className="bg-white hover:text-white rounded-full p-1 flex items-center cursor-pointer font-medium btn btn-circle btn-outline border-none hover:bg-[#905FEF] lowercase"
              >
                30m
              </button>
              <button
                onClick={(e) => setBreakTime(e.target.value)}
                value="40"
                className="bg-white hover:text-white rounded-full p-1 flex items-center cursor-pointer font-medium btn btn-circle btn-outline border-none hover:bg-[#905FEF] lowercase"
              >
                40m
              </button>
              <button
                onClick={(e) => setBreakTime(e.target.value)}
                value="50"
                className="bg-white hover:text-white rounded-full p-1 flex items-center cursor-pointer font-medium btn btn-circle btn-outline border-none hover:bg-[#905FEF] lowercase"
              >
                50m
              </button>
            </div>
          </div>

          {/* Exercise Details */}
          <div className="my-5 mx-5">
            <h2 className="font-semibold text-lg">Exercise Details</h2>
            <div className="flex bg-[#DBDBF0] justify-between rounded-2xl py-3 px-4 my-5 items-center">
              <span className=" font-medium">Exercise Time</span>
              <span className="text-gray-500">200 Minutes</span>
            </div>
            <div className="flex bg-[#DBDBF0] justify-between rounded-2xl py-3 px-4 my-5 items-center">
              <span className=" font-medium">Break Time</span>
              <span className="text-gray-500">{breakTime} Minutes</span>
            </div>
          </div>

          {/* activity button */}
          <div className="mx-5">
            <button className="btn btn-primary w-full hover:bg-[#1AB8A3] text-white border-none">
              Activity Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
