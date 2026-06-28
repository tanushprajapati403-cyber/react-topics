import React, { useContext, useEffect, useState } from 'react'
import ProductCards from '../components/ProductCards'
import axios from 'axios';
import { Outlet, useNavigate } from 'react-router';
import { product } from '../context/ProductContext';

const Shop = () => {

 let { products , setProducts } = useContext(product);

 let navigate = useNavigate();

 useEffect(()=>{
 (async()=>{
    try{
    let res = await axios.get("https://fakestoreapi.com/products")
    setProducts(res.data)
    }catch (error){
    console.log(error);
    }
    })()
 },[])
   



return (
    <div className="h-full p-4 grid grid-cols-4 gap-5">
      <button className="bg-[#C8F400]  cursor-pointer px-4 py-2 rounded-xl text-sm font-bold text-black hover:bg-[#b3da00] transition-colors flex items-center gap-2" onClick={()=>{navigate("nestage")}}> button</button>
      <Outlet/>
     {
      products.map((data)=>{
        return <ProductCards  elem={data} key={data.id} />
      })
     }
    </div>
  )
}

export default Shop