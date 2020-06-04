import React, { ReactElement } from 'react';
import { NoteType } from '../../domain/note';
import clsx from 'clsx';
interface KeyProps {
  type: NoteType;
  label: string;
  disabled?: boolean;
}

function Key(props: KeyProps): ReactElement<KeyProps> {
  const { label, type, ...rest } = props;
  return (
    <button className={clsx(`key key--${type}`)} type="button" {...rest}>
      {label}
    </button>
  );
}

export default Key;
