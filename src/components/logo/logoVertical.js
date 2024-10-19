import React from "react";

export function LogoVertical({ isAuto }) {
  console.log(isAuto);
  if (isAuto) {
    return (
      <div className="h-screen flex items-center justify-center">
        <img
          src="../assets/Logo-Branco-Pig-Data-1.png"
          alt="Logo PigData"
          draggable={false}
          className="mx-auto h-auto w-auto"
        />
      </div>
    );
  } else {
    return (
      <div className="h-screen flex items-center justify-center">
        <img
          src="../assets/Logo-Branco-Pig-Data-1.png"
          alt="Logo Cursos"
          draggable={false}
          className="mx-auto h-60 w-60"
        />
      </div>
    );
  }
}
