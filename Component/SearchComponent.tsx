import React from "react";
import Image from "next/image";
const SearchComponent = () => {
  return (
    <div
      style={{
        backgroundImage: `url('/World Map.svg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className=" h-screen flex flex-col items-center justify-center bg-cover bg-no-repeat w-screen]"
    >
      <Image width={800} height={800} alt="text" src="/text.svg"></Image>
      <div className="flex shadow-sm shadow-neutral-400 border-1 border-gray-300 rounded-sm ">
        <div className="relative border-r-2">
          <div className=" absolute top-1/4 flex">
            <Image
              className="mr-3 ml-4"
              src="/Union.svg"
              alt="flight"
              width={20}
              height={20}
            ></Image>
            <p className="text-gray-400 text-sm font-normal">From Where ?</p>
          </div>

          <select
            className="form-select w-80   border-none"
            placeholder="from where?"
          >
            where?
            <option value="0"></option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="relative">
          <div className=" absolute top-1/4 flex">
            <Image
              className="mr-3 ml-4"
              src="/Union2.svg"
              alt="flight"
              width={20}
              height={20}
            ></Image>
            <p className="text-gray-400 text-sm font-normal">Where To ?</p>
          </div>

          <select
            className="form-select border-none w-80 "
            placeholder="from where?"
          >
            where?
            <option  className="hover:bg-white" value="0"></option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="relative  w-80">
          {/* <div className=" absolute top-1/4 flex">
            <Image
              className="mr-3 ml-4"
              src="/Union2.svg"
              alt="flight"
              width={20}
              height={20}
            ></Image>
            <p className="text-gray-400 text-sm font-normal">Where To ?</p>
          </div> */}

<input  className="placeholder-transparent" placeholder="ho" type="date"></input>
          {/* <selectnone
            className="form-select border-none w-80 "
            placeholder="from where?"
          >
            where?
            <option value="0"></option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </selectnone> */}
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
