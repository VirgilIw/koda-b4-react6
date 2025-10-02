import { useState } from "react";
import Buttons from "./Buttons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  const [input, setInput] = useState(false);

  return (
    <nav className="border-b bg-white">
      <div className="px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Buttons onClick={() => setHamburger(!hamburger)}>
            {hamburger ? "✕" : "☰"}
          </Buttons>
          <h1 className="text-2xl font-bold text-gray-900">Medium</h1>
        </div>

        <div className="hidden md:flex gap-2 flex-1 max-w-md ">
          <div className="flex items-center w-60 bg-gray-50 rounded-full px-4 py-2 border border-gray-200 focus-within:border-gray-300 focus-within:bg-white">
            <input
              type="text"
              placeholder="Search Medium"
              className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-500"
            />
            <button
              type="submit"
              className="ml-2 p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <img
                src="src/assets/search.png"
                alt="search"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setInput(!input)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <img
                src="src/assets/search.png"
                alt="search"
                className="w-5 h-5"
              />
            </button>
            <button
              type="button"
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <img src="src/assets/gmail.png" alt="email" className="w-5 h-5" />
            </button>
          </div>

          <div className="hidden md:block">
            <Buttons className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <img src="src/assets/user.png" alt="user" className="w-6 h-6" />
            </Buttons>
          </div>
        </div>
      </div>

      {hamburger && (
        <div className="bg-white">
          <div className="flex flex-col items-start p-4 space-y-2">
            <button
              onClick={() => setHamburger(false)}
              className="text-gray-500 hover:text-gray-700 text-xl p-1"
            ></button>
            <Buttons>
              <Link to="/">Home</Link>
            </Buttons>
            <Buttons>Library</Buttons>
            <Buttons>Profile</Buttons>
            <Buttons>Stories</Buttons>
            <Buttons>Stats</Buttons>
          </div>
        </div>
      )}

      {input && (
        <div className="md:hidden border-t bg-gray-50">
          <div className="flex items-center gap-3 p-4">
            <div className="flex-1 flex items-center bg-white rounded-full px-4 py-2 border border-gray-200 focus-within:border-blue-500">
              <img
                src="src/assets/search.png"
                alt="search"
                className="w-4 h-4"
              />
              <input
                type="text"
                placeholder="Search Medium"
                className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-500"
                autoFocus
              />
              <button
                type="submit"
                className="ml-2 p-1 hover:bg-gray-100 rounded-full transition-colors"
              ></button>
            </div>
            <button
              onClick={() => setInput(false)}
              className="text-gray-500 hover:text-gray-700 text-sm font-medium px-2 py-1"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
