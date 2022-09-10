import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const Pokebag = () => {
  const [pokebags, setPokebags] = useState([])
  return (
    <div className="w-full min-h-screen max-w-md m-auto bg-slate-50">
      <Navbar />
      <div className='mx-5 pt-14'>

        <div className='font-bold text-2xl'>Pokebag</div>

        {pokebags.length > 0 ?

          <div> List pokebag</div> :

          <div className='pt-5 flex justify-center text-gray-400 font-medium text-sm'> Empty data </div>}

      </div>
    </div>
  )
}

export default Pokebag;