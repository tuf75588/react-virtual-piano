import React from 'react';
import NoAudioMessage from '../NoAudioMessage/NoAudioMessage';
import useAudioContext from '../AudioContextProvider/useAudioContext';
import KeyboardWithInstrument from '../Keyboard/WithInstrument';

function Main(): JSX.Element {
  const audioContext = useAudioContext();
  return !!audioContext ? <KeyboardWithInstrument /> : <NoAudioMessage />;
}

export default Main;
