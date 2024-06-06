import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MarketingPartnershipPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[80vh] bg-gray-50 py-2 px-3 flex flex-col items-center justify-center">
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-center">
            Parcerias e Marketing
          </h1>
          <p className="mt-4 text-lg text-gray-600 text-center">
            Explore oportunidades de marketing e parceria que impulsionam o sucesso mútuo!
          </p>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Nossos Parceiros</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              <div className="bg-gray-200 rounded-lg p-4 flex flex-col items-center text-center">
                <img
                  src="/prati.jpg"
                  alt="Prati Donaduzzi"
                  className="mb-2 w-48 h-48 object-cover"
                />
                <span className="text-sm">
                Prati-Donaduzzi - Inovação e Tecnologia em Farmacologia
                </span>
              </div>
              <div className="bg-gray-200 rounded-lg p-4 flex flex-col items-center text-center">
                <img
                  src="/biopark-educacao.jpg"
                  alt="Biopark"
                  className="mb-2 w-48 h-48 object-cover"
                />
                <span className="text-sm">
                  Educação e Desenvolvimento no Setor Biotecnológico
                </span>
              </div>
              <div className="bg-gray-200 rounded-lg p-4 flex flex-col items-center text-center">
                <img
                  src="/hackaton.png"
                  alt="Anúncio 3"
                  className="mb-2 w-48 h-48 object-cover"
                />
                <span className="text-sm">Semana Academica de Tecnologia. Cupom: #bio10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MarketingPartnershipPage;
