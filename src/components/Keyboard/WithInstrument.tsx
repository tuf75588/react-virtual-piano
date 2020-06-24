import React from 'react';
import useAudioContext from '../AudioContextProvider/useAudioContext';
import useSoundfont from '../../adapters/Soundfont/useSoundfont';
import useMount from '../../utils/useMount';
import Keyboard from './Keyboard';

function KeyboardWithInstrument(): JSX.Element {
  /* ensure AudioContext does not return null */
  const AudioContext = useAudioContext()!;
  const { loading, stop, play, load } = useSoundfont({ AudioContext });
  useMount(load);
  return <Keyboard loading={loading} play={play} stop={stop} />;
}

export default KeyboardWithInstrument;
