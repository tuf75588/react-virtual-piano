// if our browser can't support audio context
import React, { FunctionComponent } from 'react';

const NoAudioMessage: FunctionComponent = () => {
  return (
    <div>
      <p>Sorry, this application will not work on your browser.</p>
      <p>
        Please consider updating in order to support the{' '}
        <code>Web Audio API</code>
      </p>
    </div>
  );
};
export default NoAudioMessage;
