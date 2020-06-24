import {InstrumentName} from 'soundfont-player';
import {createContext, useContext} from 'react';
import {DEFAULT_INSTRUMENT} from '../domain/sound';

export interface ContextValue {
  instrument: InstrumentName;
  setInstrument: (instrument: InstrumentName) => void;
}

export const InstrumentContext = createContext<ContextValue>({
  instrument: DEFAULT_INSTRUMENT,
  setInstrument() {},
});

export const InstrumentConsumer = InstrumentContext.Consumer;

//export our context object
export const useInstrument = () => useContext(InstrumentContext);
