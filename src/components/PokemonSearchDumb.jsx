import React from 'react';
import { FaRandom, FaSearch } from "react-icons/fa";

const PokemonSearchDumb = ({ searchRef, onSearch, onRandom }) => {
    return (
        <div className="flex flex-col items-center gap-7">
            <input
                type="text"
                ref={searchRef}
                placeholder="Entrez un nom ou un ID"
                className="mt-1 block border pl-5 pr-16 py-3 rounded-md w-full max-w-lg focus:outline-none text-lg text-leftm h-12 bg-gray-950 text-gray-100"
            />
            <div className="flex gap-3">
                <button
                    onClick={onSearch}
                    className="px-7 py-3 bg-yellow-400 text-black hover:text-black rounded-md hover:bg-yellow-500"
                >
                    <FaSearch />
                </button>
                <button
                    onClick={onRandom}
                    className="px-7 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    <FaRandom />
                </button>
            </div>
        </div>
    );
};

export default PokemonSearchDumb;
