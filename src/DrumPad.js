import React from 'react'

const DrumPad = ({ keyTrigger, id, url, clip }) => {
    const onPlayClip = (clip) => {
        document.getElementById(clip.keyTrigger)?.play();
    }

    return (
        <div className="drum-pad" id={clip.id} onClick={() => onPlayClip(clip)}>
            {keyTrigger}
            <audio src={url} id={clip.keyTrigger}></audio>
        </div>
    )
}

export default DrumPad