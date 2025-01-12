import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PokemonSearchDumb from '../components/PokemonSearchDumb';
import { pad } from '../utils/index';

const PokemonSearch = () => {
    const [pokemon, setPokemon] = useState(null);
    const searchRef = useRef();
    const navigate = useNavigate();

    const fetchPokemon = async (query) => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`);
            setPokemon(response.data);
        } catch (error) {
            console.error('Error fetching Pokémon:', error);
            setPokemon(null);
        }
    };

    const handleSearch = () => {
        const query = searchRef.current.value.toLowerCase();
        if (query) {
            fetchPokemon(query);
            navigate(`/pokemon/${query}`);
        }
    };

    const handleRandom = () => {
        const randomId = pad(Math.floor(Math.random() * 1010) + 1, 3);
        fetchPokemon(randomId);
        navigate(`/pokemon/${randomId}`);
    };

    return (
        <div className="min-h-full flex items-center justify-center">
            <div className="bg-gray-100 p-12 rounded-lg shadow-amber-300 shadow-lg w-full max-w-lg">
                <h1 className="text-center text-3xl font-bold mb-6 text-blue-700">Pokémon Search</h1>
                <PokemonSearchDumb
                    searchRef={searchRef}
                    onSearch={handleSearch}
                    onRandom={handleRandom}
                />
            </div>
        </div>
    );
};

export default PokemonSearch;
