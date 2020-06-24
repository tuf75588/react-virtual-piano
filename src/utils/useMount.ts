import React, { EffectCallback } from 'react';

function useEffectOnce(effect: EffectCallback) {
  return React.useEffect(effect, []);
}

export default function useMount(fn: Function) {
  useEffectOnce(() => {
    fn();
  });
}
