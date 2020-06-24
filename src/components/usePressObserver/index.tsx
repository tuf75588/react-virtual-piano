import React, {useEffect, useState, Key} from 'react';
import {Key as KeyLabel} from '../../domain/keyboard';
type IsPressed = boolean;

// event code will help us know which key was pressed (event.code)
type EventCode = string;

interface Settings {
  watchKey: KeyLabel;
  onStartPress: Function;
  onFinishPress: Function;
}

function fromEventCode(code: EventCode) {
  const prefixRegex = /Key|Digit/gi;
  return code.replace(prefixRegex, '');
}

function equal(watchedKey: KeyLabel, eventCode: EventCode) {
  return fromEventCode(eventCode).toUpperCase() === watchedKey.toUpperCase();
}

function usePressObserver({
  watchKey,
  onStartPress,
  onFinishPress,
}: Settings): IsPressed {
  // isPressed designates what this custom hook will return
  const [pressed, setPressed] = useState<IsPressed>(false);
  useEffect(() => {
    function handlePressStart({code}: KeyboardEvent) {
      if (pressed || !equal(watchKey, code)) return;
      setPressed(true);
      onStartPress();
    }

    function handlePressFinish({code}: KeyboardEvent) {
      if (!pressed || !equal(watchKey, code)) return;
      setPressed(false);
      onFinishPress();
    }

    document.addEventListener('keydown', handlePressStart);
    document.addEventListener('keyup', handlePressFinish);

    return () => {
      document.removeEventListener('keyup', handlePressStart);
      document.removeEventListener('keydown', handlePressFinish);
    };
  }, [watchKey, pressed, setPressed, onStartPress, onFinishPress]);
  return pressed;
}

export default usePressObserver;
