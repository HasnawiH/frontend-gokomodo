import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({id, name, types, image}) => {
    const navigate = useNavigate();

    const handleClickDetail = () => navigate(`/pokemon/${id}/detail`)
    return (
        <div onClick={handleClickDetail} className='w-full h-32 bg-white rounded-md p-2 shadow-sm cursor-pointer hover:shadow-md'>
            <div className='font-semibold text-gray-400 text-lg'>{name}</div>
            <div className='flex justify-between items-start py-2'>
                <div className='w-16'>{types.map(type => <div style={{ fontSize: "0.6rem", paddingTop: "0.15rem", paddingBottom: "0.15rem" }} className=' w-full rounded-full bg-blue-100 my-1 text-center text-blue-300 font-medium ' >{type.type.name}</div>)}</div>
                <img className='w-20 h-20' src={image} alt={name} />
            </div>
        </div>
    )
}

export default Card