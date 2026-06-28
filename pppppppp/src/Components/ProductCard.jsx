import React from "react";

function ProductCard() {
  return (
    <div className=" h-115 w-95 border border-gray-900 rounded-4xl p-5 shadow-xl text-center flex flex-col gap-6">
      <h1 className="text-4xl font-bold underline">USER DETAILS</h1>
      <h1 className="text-3xl font-semibold capitalize">Name:</h1>
      <h1 className="text-2xl font-semibold">Email :</h1>
      <h1 className="text-2xl font-semibold">Mobile No. : </h1>
      <h1 className="text-2xl font-semibold capitaliz">Designation :</h1>
      <h1 className="text-2xl font-semibold capitaliz">Role :</h1>
      <div className="flex items-center justify-around">
        <button className="rounded-4xl bg-green-600 text-white py-3 px-5 cursor-pointer">
          Update
        </button>
        <button className="rounded-4xl bg-red-600 text-white py-3 px-5 cursor-pointer">
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
