import React from 'react'

const Modal = ({ close }) => {
    return (
        <div style={{ zIndex: 1000 }} className='fixed flex justify-center rounded-t-md bottom-0 w-full px-4 border-t-2 max-w-md h-1/4 bg-white m-auto duration-300 transition-all '>

            <div className='pt-2 font-semibold'>Sorry, luck not in your side!</div>

            <button onClick={close} className="bg-blue-400 fixed bottom-3 mt-16 rounded-full p-2 w-96  max-w-md text-white font-semibold">Close</button>
        </div>
    )
}

export default Modal
