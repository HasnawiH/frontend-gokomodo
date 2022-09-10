import React from 'react'

const Button = ({ onClick, title }) => {
    return (
        <button onClick={onClick} className="bg-blue-400 rounded-full p-2 w-full text-white font-semibold">{title}</button>
    )
}

export default Button