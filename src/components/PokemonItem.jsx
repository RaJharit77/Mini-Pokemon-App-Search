import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { GiReturnArrow } from "react-icons/gi";
import { useNavigate, useParams } from 'react-router-dom';

const PokemonItem = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
                setPokemon(response.data);
            } catch (error) {
                console.error('Error fetching Pokémon:', error);
                setPokemon(null);
            }
        };

        if (id) {
            fetchPokemon();
        }
    }, [id]);

    return (
        <div className="p-7 border rounded-lg shadow-lg bg-gray-900 max-w-xl mx-auto">
            {pokemon ? (
                <>
                    <h2 className="text-center text-3xl font-bold capitalize text-white">
                        {pokemon.name}
                    </h2>
                    <p className="text-center text-xl text-white">#{pokemon.id}</p>
                    <img
                        src={pokemon.sprites?.other?.['official-artwork']?.front_default || pokemon.sprites?.front_default}
                        alt={pokemon.name}
                        className="mx-auto mb-4 w-full max-h-96 object-contain"
                    />
                </>
            ) : (
                <p className="text-center">Aucun Pokémon sélectionné.</p>
            )}
            <button
                onClick={() => navigate(-1)}
                className="mt-6 px-4 py-2 bg-orange-500 text-white hover:text-black rounded-md hover:bg-orange-600 block mx-auto"
            >
                <GiReturnArrow />
            </button>
        </div>
    );
};

export default PokemonItem;
