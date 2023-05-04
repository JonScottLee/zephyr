import { FC } from 'react';
import cx from 'classnames';

enum TextFieldTypes {
  text = 'text',
  password = 'password',
  email = 'email',
  number = 'number',
  tel = 'tel',
}

export type TextFieldProps = {
  id: string;
  label: string;
  type: TextFieldTypes;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const rootClasses = 'border border-gray-300 rounded-md p-2';

export const TextField: FC<TextFieldProps> = ({ id, label, type = TextFieldTypes.text, placeholder, onChange }) => {
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
