import React from 'react';
import {useInstrument} from '../../state/Context';
import {InstrumentName} from 'soundfont-player';

function InstrumentSelector() {
  const {instrument, setInstrument} = useInstrument();
  const updateValue = ({
    currentTarget,
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setInstrument(currentTarget.value as InstrumentName);
  };

  return (
    <select className="instruments" onChange={updateValue} value={instrument}>
      select select select
    </select>
  );
}
export default InstrumentSelector;
