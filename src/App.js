import { useState } from 'react';
import './App.css';
import { FaFreeCodeCamp } from 'react-icons/fa';
import DrumPad from './DrumPad';
import DrumHeader from './DrumHeader';

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

function App() {
  const [bank, setBank] = useState('Heater Kit');
  const [power, setPower] = useState(true);

  const onBankClick = () => {
    setBank(prevBank => (prevBank === 'Heater Kit' ? 'Smooth-Piano-Kit' : 'Heater Kit'));
  }
  const onPowerClick = () => {
    setPower((prev) => !prev);
  }

  return (
    <div className='wrapper'>
      <div id="drum-machine">
        <DrumHeader />
        <div id="display">
          {/* Nine clickable elements */}
          <div className='drum-pad-wrapper'>
            {bankOne.map((b, index) => {
              return (
                <DrumPad
                  keyTrigger={b.keyTrigger}
                  id={b.id}
                  url={b.url}
                  clip={b}
                />
              )
            })}
          </div>
          <div className='control-wrapper'>
            <div className='power'>
              <p>Power: {power ? 'on' : 'off'}</p>
              {/* add onClick listener */}
              <input type="checkbox" id="checkbox-input" onClick={onPowerClick} />
              <label
                htmlFor='checkbox-input'
                className='slider-container'
              >
                <div className={`inner right`}></div>
              </label>
            </div>
            <div className='audio-clip-display'>{power && bank ? bank : ''}</div>
            <div className='volume-bar'>
              <input type="range" min={0} max={100} step={1} />
            </div>
            <div className='bank'>
              <p>Bank</p>
              {/* add onClick listener */}
              <input type="checkbox" id="checkbox-input-2" onClick={onBankClick} />
              <label
                htmlFor='checkbox-input-2'
                className='slider-container'
              >
                <div className={`inner`}></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
