import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    
    return (
        <div className='w-full flex justify-between items-center px-5 pt-5 font-semibold text-gray-400 '>
            <div onClick={() => navigate("/")} className='cursor-pointer'>Home</div>
            <div onClick={() => navigate("/list-pokebag")} className='cursor-pointer'>Pokebag</div>
        </div>
    )
}

export default Navbar