import React, {useEffect} from 'react';
import useAudioContext from '../AudioContextProvider/useAudioContext';
import useSoundfont from '../../adapters/Soundfont/useSoundfont';
import Keyboard from './Keyboard';
import {useInstrument} from '../../state/Context';
import {SoundfontProvider} from '../../adapters/Soundfont/SoundFontProvider';

function KeyboardWithInstrument(): JSX.Element {
  /* ensure AudioContext does not return null */
  const AudioContext = useAudioContext()!;
  const {instrument} = useInstrument();
  const {loading, load, current} = useSoundfont({AudioContext});
  useEffect(() => {
    if (!loading && instrument !== current) load(instrument);
  }, [load, loading, current, instrument]);
  return (
    <SoundfontProvider
      AudioContext={AudioContext}
      instrument={instrument}
      render={(props) => <Keyboard {...props} />}
    />
  );
}

export default KeyboardWithInstrument;
