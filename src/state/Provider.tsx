import React, {useState} from 'react';
import {DEFAULT_INSTRUMENT} from '../domain/sound';
import {InstrumentContext} from './Context';

// keep the current insturment in local state and expose updater function
function InstrumentContextProvider({
  children,
}: React.PropsWithChildren<{}>): JSX.Element {
  const [instrument, setInstrument] = useState(DEFAULT_INSTRUMENT);
  return (
    <InstrumentContext.Provider value={{instrument, setInstrument}}>
      {children}
    </InstrumentContext.Provider>
  );
}

export default InstrumentContextProvider;
/*
we will use this component to wrap our whole component in
*/
