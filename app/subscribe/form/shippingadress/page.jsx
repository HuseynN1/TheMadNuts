"use client";
import React from "react";
import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { CiSearch } from "react-icons/ci";

const AdressForm = () => {
  const [selected, setSelected] = useState("");

  return (
    <>
    <h1 className="text-4xl font-bold ">Choose your shipping address.</h1>

    <div className="flex flex-col gap-5 size-full w-full mt-3  ">
      
      <p className="text-base">Country</p>
      <ReactFlagsSelect
        selected={selected}
        onSelect={(code) => setSelected(code)}
        className="bg-white h-11 border-none rounded-md"
      />
      <div className=" flex flex-col gap-4 w-full ">
        <label className="text-base">Find your shipping address</label>

        <div className=" flex flex-row gap-1 bg-white items-center border-none h-11 rounded-md">
          <input
            type="search"
            id="gsearch"
            name="gsearch"
            className="text-base w-full h-11 text-black ps-3 rounded-md "
          />
          <CiSearch className="" />
        </div>
      </div>
      <div className="bg-gray-400 h-0.5"></div>
      <div className="flex flex-col text-base gap-5">
        <label>Street*</label>
        <input
          type="text"
          className="text-base h-11 text-black ps-3 rounded-md border border-black-600"
        />
        <label>House number</label>
        <input
          type="text"
          className="text-base h-11 text-black ps-3 rounded-md border"
        />
        <label>Postal code*</label>
        <input
          type="text"
          className="text-base h-11  text-black ps-3 rounded-md border"
        />
        <label>City*</label>
        <input
          type="text"
          className="text-base h-11 text-black ps-3 rounded-md border"
        />
      </div>
    </div>
    </>
  );
};

export default AdressForm;
