import React from 'react'

const ControlWrapper = ({power, onPowerClick, name, volume, onVolumeClick, onKitClick}) => {
    return (
        <div className='control-wrapper'>
            <div className='power'>
                <p>Power: {power ? 'ON' : 'OFF'}</p>
                <input type="checkbox" id="checkbox-input" onClick={onPowerClick} />
                <label
                    htmlFor='checkbox-input'
                    className='slider-container'
                >
                    <div className={`inner right`}></div>
                </label>
            </div>
            <div className='audio-clip-display'>{name}</div>
            <div className='volume-bar'>
                <p>Volume is {Math.round(volume * 100)}%</p>
                <input type="range" min={0} max={1} step={0.01} value={volume} onChange={onVolumeClick} />
            </div>
            <div className='bank'>
                <p>Bank</p>
                <input type="checkbox" id="checkbox-input-2" onClick={onKitClick} />
                <label
                    htmlFor='checkbox-input-2'
                    className='slider-container'
                >
                    <div className={`inner`}></div>
                </label>
            </div>
        </div>
    )
}

export default ControlWrapper