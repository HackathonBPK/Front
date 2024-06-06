import React from 'react';

function MainLayout({ children }) {
  const links = [
    {name: "Categorias", url: "category"}
  ]
  return (
    <div className="flex">
      {/* Coluna de links */}
      <div className="w-1/4 h-screen p-4 border-r">
        <h2 className="text-lg font-semibold mb-4">Links Possíveis</h2>
        <ul>
          {links.map((link, index) => (
            <li key={index} className="mb-2">
              <a href={link.url} className="text-blue-600 hover:underline">{link.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-3/4 h-full p-4">
        <div className="bg-white p-6 rounded shadow-md">
          {children}
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
