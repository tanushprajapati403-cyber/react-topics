import React from "react";
import { axiosInstance } from "../components/axiosinstance";
import { useQuery } from "@tanstack/react-query";

const About = () => {
  let getproducts = async () => {
    try {
      let res = await axiosInstance.get("/products");
      return res.data.products;
    } catch (error) {
      console.log("error in products api", error);
    }
  };

  let { data , isPending } = useQuery({
    queryKey:["products"],
    queryFn: getproducts ,
    staleTime : Infinity ,
  });

  if(isPending) return <h1>loading....</h1>;

  return (
    <div>
      <h1>This is about page</h1>
       {
        data.map((elem)=>
            <h2 key={elem.id}>{elem.title}</h2>
        )
       }
    </div>
  );
};

export default About;
