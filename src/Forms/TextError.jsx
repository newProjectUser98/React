import React from 'react'

const TextError = (props) => {
    return <div className='error text-red-500 mt-2 text-sm font-normal leading-5'>{props.children}</div>
}

export default TextError