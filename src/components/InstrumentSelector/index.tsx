import React from 'react';
import {useInstrument} from '../../state/Context';
import {InstrumentName} from 'soundfont-player';
import {options} from './options';
function InstrumentSelector() {
  const {instrument, setInstrument} = useInstrument();
  const updateValue = ({
    currentTarget,
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setInstrument(currentTarget.value as InstrumentName);
  };

  return (
    <select className="instruments" onChange={updateValue} value={instrument}>
      {options.map((item) => {
        return (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        );
      })}
    </select>
  );
}
export default InstrumentSelector;
