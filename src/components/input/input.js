import React from 'react'

export function Input({ type, placeholder,handleInputChange, name, value, required}){
    return(
        <input className= 'block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[1px]   focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 shadow shadow-black/30'
            type={type}
            onChange={handleInputChange}
            name={name}
            placeholder={placeholder}
            required={required}
            value={value}
        />
    )
}