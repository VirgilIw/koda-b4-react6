/**
 * Komponen Error 404 dengan animasi dan elemen interaktif
 * @returns {JSX.Element} Halaman error 404 yang animatif
 */

import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce"></div>
        <div className="absolute top-1/2 -right-4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-ping"></div>
      </div>

      <div className="text-center relative z-10">
        <div className="mb-8 relative">
          <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
            4<span className="inline-block animate-bounce">0</span>4
          </h1>

          <div className="absolute inset-0 text-8xl md:text-9xl font-black text-red-500 opacity-30 animate-ping pointer-events-none">
            404
          </div>
        </div>

        <div className="text-6xl mb-6 animate-bounce">🤖</div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 animate-fadeIn">
          Oops! Halaman Menghilang
        </h2>

        <p className="text-gray-300 mb-8 max-w-md mx-auto animate-slideUp">
          Sepertinya robot kecil kami telah menyembunyikan halaman yang Anda
          cari. Mari kita cari jalan pulang! 🚀
        </p>

        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <button
            onClick={() => window.history.back()}
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 hover:rotate-3 shadow-2xl relative overflow-hidden"
          >
            <span className="relative z-10">⏪ Mundur</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>

          <button
            onClick={() => navigate("/")}
            className="group px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-110 hover:-rotate-3 shadow-xl relative overflow-hidden"
          >
            <span className="relative z-10">🏠 Beranda</span>
          </button>
        </div>

        <div className="mt-8 text-sm text-gray-400 animate-pulse">
          💡 Tips: Periksa URL atau gunakan fitur pencarian
        </div>
      </div>
    </div>
  );
};

export default Error;
