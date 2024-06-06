import React from "react";

export function Submit({type, text }){
    return(
        <button className='flex w-full justify-center rounded-md bg-[#D82E4A] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#D82E4A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
        type={type}>
        {text}
        </button>
    )
}