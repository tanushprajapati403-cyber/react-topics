import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { product } from "../context/ProductContext";

const ProductDetails = () => {
  let { id } = useParams();

  let {data, setData} = useContext(product);

  

  const getSingleProduct = async () => {
    try {
      let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, [id]);

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="w-[50%]  bg-[#1a1a1a] flex flex-row  rounded-3xl overflow-hidden border border-[#ffffff1a] mt-12">
        <div className="bg-white p-8 flex items-center justify-center">
          <img
            className="h-100 w-250 object-contain"
            src={data.image}
            alt={data.title}
          />
        </div>

        <div className="flex flex-col justify-between p-6 grow">
          <div>
            <span className="text-[#C8F400] text-[10px] uppercase tracking-widest font-bold">
              {data.category}
            </span>

            <h3 className="text-white text-2xl font-bold mt-1">{data.title}</h3>

            <p className="text-gray-400 text-sm mt-3 leading-relaxed ">
              {data.description} 
            </p> <br />
          </div>

          <div className="flex items-center justify-between mt-6 pt-5 border-t border-[#ffffff1a]">
            <div className="flex flex-col">
              <span className="text-gray-500 text-[10px] uppercase">
              
              </span>
              <h1 className="text-[#C8F400] text-3xl font-black">
                ${data.price}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
