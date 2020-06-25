import React from 'react';
import AudioContextProvider from '../../state/Provider';
import InstrumentSelector from '../InstrumentSelector';
import KeyboardWithInstrument from '../Keyboard/WithInstrument';

function Playground(): JSX.Element {
  return (
    <AudioContextProvider>
      <div className="playground">
        <KeyboardWithInstrument />
        <InstrumentSelector />
      </div>
    </AudioContextProvider>
  );
}

export default Playground;
