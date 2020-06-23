import React from 'react';
import { OctavesRange, selectKey } from '../../domain/keyboard';
import { notes, MidiValue } from '../../domain/note';
import Key from '../Key/Key';

export interface KeyboardProps {
  loading: boolean;
  play: (note: MidiValue) => Promise<void>;
  stop: (note: MidiValue) => Promise<void>;
}

function Keyboard<KeyboardProps>({ loading, stop, play }: any): JSX.Element {
  return (
    <div className="keyboard">
      {notes.map(({ midi, type, index, octave }) => {
        const label = selectKey(octave as OctavesRange, index);
        return (
          <Key
            type={type}
            label={label}
            key={midi}
            disabled={loading}
            onDown={() => play(midi)}
            onUp={() => stop(midi)}
          />
        );
      })}
    </div>
  );
}

export default Keyboard;
