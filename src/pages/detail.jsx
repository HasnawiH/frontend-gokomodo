import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';
import "../assets/styles/detail.css";

//import icon or img
import IconPokeball from "../assets/img/pokeball.svg"
import Modal from '../components/Modal';

const Detail = () => {
    const { id } = useParams()
    const [pokemon, setPokemon] = useState()

    const [showModal, setShowModal] = useState(false)

    const getPokemonData = async () => {
        const res = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon(res?.data)
    }

    const handleShowModal = () => setShowModal(!showModal)

    useEffect(() => {
        getPokemonData()
    }, [id])

    const Pokeball = () => (
        <div className='con-catch'>
            <button onClick={handleShowModal} className='btn-catch'>
                <img src={IconPokeball} className="img-catch" alt="" />
            </button>
        </div>
    )

    console.log(showModal)

    return (
        <Fragment>
            
            <div className="w-full min-h-screen max-w-md m-auto bg-slate-50">
            {showModal && <Modal close={handleShowModal} />}
                <Navbar />
                <div className='mx-5 pt-10'>
                    <div className='font-bold text-xl mb-2'>{pokemon?.name}</div>
                    <div className='flex'>{pokemon?.types.map(type => <div className='px-3 py-1 mr-1 text-xs rounded-full bg-blue-100 my-1 text-center text-blue-300 font-medium ' >{type.type.name}</div>)}</div>

                    <div className='pt-20 flex justify-center'>
                        <img className='w-36 h-36 -mb-5' src={pokemon?.sprites.other.dream_world.front_default} />
                    </div>

                </div>

                <div className='bg-white rounded-t-3xl h-screen'>
                    <div className='font-bold text-2xl mb-2 px-6 pt-14'>Moves</div>
                    <div className='mx-6 grid grid-cols-4 pt-2'>
                        {pokemon?.moves.map((move) => (
                            <div className='px-3 py-1 mr-1 text-xs rounded-full bg-blue-500 my-1 text-center text-white font-medium ' >{move.move.name}</div>
                        ))}

                    </div>

                </div>
                {Pokeball()}
            </div>
        </Fragment>
    )
}

export default Detail