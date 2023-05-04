import { FC } from 'react';
import cx from 'classnames';

type TextFieldTypes = 'text' | 'password' | 'email' | 'number' | 'tel';

export type TextFieldProps = {
  id: string;
  label: string;
  type: TextFieldTypes;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const rootClasses = 'border border-gray-300 rounded-md p-2';

export const TextField: FC<TextFieldProps> = ({ id, label, type = 'text', placeholder, onChange }) => {
  const classes = cx(rootClasses);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={classes}>
      <label htmlFor={id}>{label}</label>
      <input className={classes} onChange={onChangeHandler} id={id} type={type} placeholder={placeholder} />
    </div>
  );
};
