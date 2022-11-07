import React from 'react'

const Navbaritems = ({title, classProps}) => {
  return (
    <div>
        <li className= {`mx-4 cursor-pointer hover:scale-125 hover:transition-all text-xl ${classProps}`}>
            {title}

        </li>
    </div>
  )
}

export default Navbaritems