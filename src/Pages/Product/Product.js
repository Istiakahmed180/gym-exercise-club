import React from "react";

const Product = ({ product }) => {
  const { image, name, details, time, age } = product;
  return (
    <div>
      <div className="card w-full bg-white shadow-xl">
        <figure className="px-4 pt-4 pb-0">
          <img src={image} alt="Shoes" className="rounded-xl w-96 h-32" />
        </figure>
        <div className="p-5">
          <h2 className="font-semibold text-xl">{name.slice(0, 14)}</h2>
          <p className="my-2 font-mono text-gray-500">{details.slice(0, 50)}</p>
          <p className="">
            For Age: <span className="font-bold">{age}</span>
          </p>
          <p className="my-2">
            The Required: <span className="font-bold">{time}</span>
          </p>
          <div className="">
            <button className="btn text-white bg-[#905FEF] border-none hover:bg-[#1ab8a3]  w-full">
              Add to list
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
