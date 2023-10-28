import './App.css';
import { FaFreeCodeCamp } from 'react-icons/fa';

function App() {
  return (
    <div className='wrapper'>
      <div id="drum-machine">
        <div className='drum-header'>
          <h5>FCC</h5>
          <FaFreeCodeCamp style={{ fontSize: '1.5rem' }} />
        </div>
        <div id="display">
          {/* Nine clickable elements */}
          <div className='drum-pad-wrapper'>
            <div className="drum-pad" id="Heater-1">Q</div>
            <div className="drum-pad" id="Heater-2">W</div>
            <div className="drum-pad" id="Heater-3">E</div>
            <div className="drum-pad" id="Heater-4">A</div>
            <div className="drum-pad" id="Clap">S</div>
            <div className="drum-pad" id="Open-HH">D</div>
            <div className="drum-pad" id="Kick-n'Hat">Z</div>
            <div className="drum-pad" id="Kick">X</div>
            <div className="drum-pad" id="Closed-HH">C</div>
          </div>
          <div className='control-wrapper'>
            <div className='power'>Power</div>
            <div className='audio-clip-display'></div>
            <div className='toggle-bar'></div>
            <div className='power-swicth'>Bank</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
