export type NoteType = 'sharp' | 'natural' | 'flat';
export type NotePitch = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
export type OctaveIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type MidiValue = number;
export type PitchIndex = number;

/* INTERFACES */

export interface Note {
  midi: MidiValue;
  type: NoteType;
  pitch: NotePitch;
  index: PitchIndex;
  octave: OctaveIndex;
}

interface NoteGeneratorSettings {
  fromNote?: MidiValue;
  toNote?: MidiValue;
}

/* CONSTRAINTS */

const C1_MIDI_NUMBER = 24;
const C4_MIDI_NUMBER = 60;
const B5_MIDI_NUMBER = 83;

export const LOWER_NOTE = C4_MIDI_NUMBER;
export const HIGHER_NOTE = B5_MIDI_NUMBER;
export const SEMITONES_IN_OCTAVE = 12;

// array of only natural notes
export const NATURAL_PITCH_NOTES: PitchIndex[] = [0, 2, 4, 5, 7, 9, 11];

// an object with PitchIndex as key and NotePitch as a value

export const PITCHES_REGISTERY: Record<PitchIndex, NotePitch> = {
  0: 'C',
  1: 'C',
  2: 'D',
  3: 'D',
  4: 'E',
  5: 'F',
  6: 'F',
  7: 'G',
  8: 'G',
  9: 'A',
  10: 'A',
  11: 'B',
};

// function to create a Note from a given MidiValue

export function fromMidi(midi: MidiValue): Note {
  const pianoRange = midi - C1_MIDI_NUMBER;
  const octave = (Math.floor(pianoRange / SEMITONES_IN_OCTAVE) +
    1) as OctaveIndex;
  const index = pianoRange % SEMITONES_IN_OCTAVE;
  const pitch = PITCHES_REGISTERY[index];
  const isSharp = !NATURAL_PITCH_NOTES.includes(index);
  const type = isSharp ? 'sharp' : 'natural';
  return { octave, pitch, index, type, midi };
}

export function generateNotes({
  fromNote = LOWER_NOTE,
  toNote = HIGHER_NOTE,
}: NoteGeneratorSettings = {}): Note[] {
  return [toNote - fromNote + 1].fill(0).map((_, index: number) => {
    return fromMidi(fromNote + index);
  });
}

export const notes = generateNotes();
