import { useState, useRef } from 'react';
import { Optional } from '../../domain/types';
import { InstrumentName, Player } from 'soundfont-player';
import { MidiValue } from '../../domain/note';
import { AudioNodesRegistery } from '../../domain/sound';
// this will describe what our useSoundfont() custom hook requires
interface Settings {
  AudioContext: AudioContextType;
}

// this represents what we will return from the custom hook
// async function in TypeScript are typed with Promise<TResult>
interface Adapted {
  loading: boolean;
  current: Optional<InstrumentName>;
  load: (instrument: InstrumentName) => Promise<void>;
  play: (note: MidiValue) => Promise<void>;
  stop: (note: MidiValue) => Promise<void>;
}

function useSoundfont({ AudioContext }: Settings): Adapted {
  let activeNodes: AudioNodesRegistery = {};
  const [current, setCurrent] = useState<Optional<InstrumentName>>();
  const [loading, setLoading] = useState(false);
  // player comes from the soundfont package
  const [player, setPlayer] = useState<Optional<Player>>(null);
  // instantiate a new audio player reference
  const audio = useRef(new AudioContext());
  return {
    loading: true,
    current: 'acoustic_grand_piano',
    stop: () => console.log('stop'),
    play: () => console.log('play'),
    load: () => console.log('load'),
  };
}

export default useSoundfont;
