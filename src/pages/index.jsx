import { useEffect, useState } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import axios from 'axios';

const Index = () => {

    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=10');
    const [allPokemons, setAllPokemons] = useState([]);

    const getAllPokemon = async () => {
        try {
            const response = await axios.get(loadMore);
            const { results, next } = response?.data;

            if (response) {
                getPokemonData(results);
                setLoadMore(next);
            }

        } catch (error) {
            console.log(error)
        }
    }

    const getPokemonData = async (results) => {
        results.forEach(async (pokemon) => {
            const res = await axios(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
            setAllPokemons(current => [...current, res?.data])
        });
    }

    useEffect(() => {
        getAllPokemon()
    }, [])

    return (
        <div className="w-full min-h-screen max-w-md m-auto bg-slate-50">
            <Navbar />
            <div className='mx-5 py-10'>
                <div className='font-bold text-2xl'>Pokedex</div>

                <div className='grid grid-cols-2 gap-3 py-5'>
                    {allPokemons && allPokemons.map((pokemon, index) => {
                        return (
                            <Card
                                id={pokemon.id} 
                                name={pokemon.name} 
                                types={pokemon.types} 
                                image={pokemon.sprites.other.dream_world.front_default} 
                            />
                        )
                    })}
                </div>

                <Button
                    onClick={() => getAllPokemon()}
                    title="Load more"
                />
            </div>
        </div>
    );
}

export default Index
