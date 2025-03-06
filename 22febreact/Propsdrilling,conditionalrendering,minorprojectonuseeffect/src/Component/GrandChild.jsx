import React from 'react'

const GrandChild = ({userId , title , completed}) => {
  return (
    <div>
        <h1>
            GC <br />
        {userId} <br />
        {title} <br />
        {completed.toString()} <br /> 
        </h1>
    </div>
  )
}

export default GrandChild