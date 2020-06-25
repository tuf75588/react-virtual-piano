import {InstrumentName} from 'soundfont-player';
import instruments from 'soundfont-player/names/musyngkite.json';

interface Option {
  value: InstrumentName;
  label: string;
}

type OptionList = Option[];
type InstrumentList = InstrumentName[];

// an array will be returned modeled after our local type "Option"
function normalizeList(list: InstrumentList): OptionList {
  return list.map((instrument) => ({
    value: instrument,
    // this will server a way to remove underscores from instrument names from soundfront
    label: instrument.replace(/_/gi, ' '),
  }));
}

export const options = normalizeList(instruments as InstrumentList);
