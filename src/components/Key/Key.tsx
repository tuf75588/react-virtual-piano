import React, {ReactElement, ReactEventHandler} from 'react';
import {NoteType} from '../../domain/note';
import clsx from 'clsx';
import usePressObserver from '../usePressObserver';
interface KeyProps {
  type: NoteType;
  label: string;
  disabled?: boolean;
  onUp: ReactEventHandler<HTMLButtonElement>;
  onDown: ReactEventHandler<HTMLButtonElement>;
}

function Key(props: KeyProps): ReactElement<KeyProps> {
  const {label, type, onUp, onDown, ...rest} = props;
  const pressed = usePressObserver({
    watchKey: label,
    onFinishPress: onUp,
    onStartPress: onDown,
  });
  return (
    <button
      className={clsx(`key key--${type}`, pressed && 'is-pressed')}
      type="button"
      {...rest}
      onMouseUp={onUp}
      onMouseDown={onDown}
    >
      {label}
    </button>
  );
}

export default Key;
