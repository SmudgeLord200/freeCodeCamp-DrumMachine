import React, { useEffect } from 'react'

const DrumPad = ({ clip, power, setActiveKey }) => {

    useEffect(() => {
        document.addEventListener('keydown', (event) => {
            const obj = { keyTrigger: event.key.toUpperCase() };
            onPlayClip(obj);
        });
    }, []);

    const onPlayClip = (clip) => {
        document.getElementById(clip.keyTrigger)?.play().catch((e) => console.log(e));
        power && setActiveKey(clip.id);
    }

    return (
        <button className="drum-pad" id={clip.id} onClick={() => onPlayClip(clip)}>
            {clip.keyTrigger}
            <audio className='clip' src={power ? clip.url : '#'} id={clip.keyTrigger}></audio>
        </button>
    )
}

export default DrumPad