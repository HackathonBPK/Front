import React from "react";

export function Submit({ type, text }) {
  return (
    <button
      className="flex w-full justify-center rounded-md bg-[#6e87da] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#96b7d8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      type={type}
    >
      {text}
    </button>
  );
}
