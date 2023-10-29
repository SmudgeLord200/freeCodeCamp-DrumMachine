import React from 'react'
import { FaFreeCodeCamp } from 'react-icons/fa';

const DrumHeader = () => {
    return (
        <div className='drum-header'>
            <h5>FCC</h5>
            <FaFreeCodeCamp style={{ fontSize: '1.5rem' }} />
        </div>
    )
}

export default DrumHeader