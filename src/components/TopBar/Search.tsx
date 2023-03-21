import React, { useContext } from "react";
import { ServerContext } from "../../store/ServerContext";

type Props = {};

export default function Search({}: Props) {


  return (
    <form className="flex items-center" onSubmit={(e)=>{e.preventDefault()}}>
      <input
        className="bg-gray-800 rounded-sm text-gray-50 outline-none pl-2 w-[6.5rem] focus:w-80 transition-all duration-150"
        placeholder="Search"
      />
      <i className="bg-gray-800 h-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill=" rgb(249 250 251)"
          className="w-5 h-5 pt-1"
        >
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clipRule="evenodd"
          />
        </svg>
      </i>
    </form>
  );
}
