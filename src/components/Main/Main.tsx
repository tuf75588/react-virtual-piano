import React from 'react';
import Keyboard from '../Keyboard/Keyboard';
import NoAudioMessage from '../NoAudioMessage/NoAudioMessage';
import useAudioContext from '../AudioContextProvider/useAudioContext';

function Main(): JSX.Element {
  const audioContext = useAudioContext();
  return !!audioContext ? <Keyboard /> : <NoAudioMessage />;
}

export default Main;
