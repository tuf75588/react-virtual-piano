import {useState, useRef} from 'react';
import {Optional} from '../../domain/types';
import Soundfont, {InstrumentName, Player} from 'soundfont-player';
import {MidiValue} from '../../domain/note';
import {AudioNodesRegistry, DEFAULT_INSTRUMENT} from '../../domain/sound';
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

function useSoundfont({AudioContext}: Settings): Adapted {
  let activeNodes: AudioNodesRegistry = {};
  const [current, setCurrent] = useState<Optional<InstrumentName>>(null);
  const [loading, setLoading] = useState(false);
  // player comes from the soundfont package
  const [player, setPlayer] = useState<Optional<Player>>(null);
  // instantiate a new audio player reference
  const audio = useRef(new AudioContext());
  const load = async (instrument: InstrumentName = DEFAULT_INSTRUMENT) => {
    setLoading(true);
    const player = await Soundfont.instrument(audio.current, instrument);
    setLoading(false);
    setCurrent(instrument);
    setPlayer(player);
  };

  const play = async (note: MidiValue) => {
    await resume();
    if (!player) return;
    const node = player.play(note.toString());
    activeNodes = {...activeNodes, [note]: node};
  };

  const stop = async (note: MidiValue) => {
    await resume();
    if (!activeNodes[note]) return;

    /*
        // the ! is the "non-null" assertion operator,
        basically telling TS we know more than the compiler does,
        and this value will not be null since we check for that in the line above
    */
    activeNodes[note]!.stop();
    activeNodes = {...activeNodes, [note]: null};
  };

  // for hoisting
  async function resume() {
    return audio.current.state === 'suspended'
      ? await audio.current.resume()
      : Promise.resolve();
  }
  return {
    loading,
    current,
    load,
    play,
    stop,
  };
}

export default useSoundfont;
