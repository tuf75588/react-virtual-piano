import { useRef } from 'react';
import { Optional } from '../../domain/types';
import { accessContext } from '../../domain/audio';

function useAudioContext(): Optional<AudioContextType> {
  const audioContext = useRef(accessContext());

  return audioContext.current;
}

export default useAudioContext;
