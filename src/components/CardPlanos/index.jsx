import React from 'react';

const index = ({ valor, nome, beneficio, checked }) => {
  return (
    <div className="lg:w-1/6 w-1/2 min-h-1/2 h-auto bg-[#243444] flex flex-col items-center justify-between rounded-lg p-1 gap-1 text-black shadow-lg shadow-black ">
      {checked == false ? null : (
        <img
          className="w-80 h-80 absolute -rotate-12 -translate-x-1/3 translate-y-full"
          src="/Pago.svg"
        />
      )}

      <div className="flex-[1] w-full bg-[#10171E] text-white rounded-md flex items-center justify-center text-xl font-extrabold p-3">
        {nome}
      </div>
      <div className="flex-[3] min-h-96 max-h-96 overflow-x-hidden overflow-y-auto w-full bg-[#FBFBFB] gap-10 rounded-md flex flex-col items-center justify-start p-3 text-base font-semibold">
        <ul className="list-disc w-full p-5 gap-5 flex flex-col">
          {beneficio.map((item, index) => (
            <li className="hover:scale-105 transition-all duration-200">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-[1] w-full bg-[#10171E] text-white rounded-md flex items-center justify-center text-xl font-bold p-3 gap-3">
        {valor}
        <button className="bg-red-500 px-5 py-1 text-base font-semibold rounded-lg animate-pulse hover:bg-red-600">
          Assinar agora
        </button>
      </div>
    </div>
  );
};

export default index;
