import React, { EffectCallback } from 'react';

function useEffectOnce(effect: EffectCallback) {
  return React.useEffect(effect, []);
}

export function useMount(fn: Function) {
  useEffectOnce(() => {
    fn();
  });
}
