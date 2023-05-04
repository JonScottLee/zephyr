import { FC } from 'react';
import cx from 'classnames';

type TextFieldSizes = 'small' | 'medium' | 'large';
type TextFieldTypes = 'text' | 'password' | 'email' | 'number' | 'tel';

export type TextFieldProps = {
  id: string;
  label?: string;
  type?: TextFieldTypes;
  placeholder?: string;
  helperText?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: TextFieldSizes;
};

const rootClasses = 'border border-gray-300 rounded-md p-2';

export const TextField: FC<TextFieldProps> = ({
  helperText,
  id,
  label,
  onChange,
  placeholder,
  type = 'text',
  size = 'large',
}) => {
  const classes = cx(rootClasses, {
    'text-sm': size === 'small',
    'text-md': size === 'medium',
    'text-base': size === 'large',
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        className={classes}
        onChange={onChangeHandler}
        id={id}
        type={type}
        placeholder={placeholder}
      />
      {helperText && <p className="text-sm text-gray-500">{helperText}</p>}
    </div>
  );
};
