import React from "react";

function ProductCard({data , SetToggle , setIsedited , deletecard  }) {
  return (
    <div className=" h-115 w-95 border border-gray-900 rounded-4xl p-5 shadow-xl text-center flex flex-col gap-6">
      <h1 className="text-4xl font-bold underline">USER DETAILS</h1>
      <h1 className="text-3xl font-semibold capitalize">
        Name: {data.emp_name}
      </h1>
      <h1 className="text-2xl font-semibold">
        Email : {data.emp_email}
      </h1>
      <h1 className="text-2xl font-semibold">Mobile No. : {data.emp_mobile}</h1>
      <h1 className="text-2xl font-semibold capitaliz">
        Designation : {data.emp_des}
      </h1>
      <h1 className="text-2xl font-semibold capitaliz">
        Role : {data.role}
      </h1>
      <div className="flex items-center justify-around">
        <button onClick={()=>{setIsedited(data);
          SetToggle(true);}} className="rounded-4xl bg-green-600 text-white py-3 px-5 cursor-pointer">
          Update
        </button>
        <button onClick={()=>{deletecard(data.emp_email)}} className="rounded-4xl bg-red-600 text-white py-3 px-5 cursor-pointer">
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
