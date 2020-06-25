import React from 'react';
import NoAudioMessage from '../NoAudioMessage/NoAudioMessage';
import useAudioContext from '../AudioContextProvider/useAudioContext';
import Playground from '../Playground';

function Main(): JSX.Element {
  const audioContext = useAudioContext();
  return !!audioContext ? <Playground /> : <NoAudioMessage />;
}

export default Main;
