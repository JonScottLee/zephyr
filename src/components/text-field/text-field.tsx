import { FC } from 'react';
import cx from 'classnames';

type TextFieldSizes = 'sm' | 'md' | 'lg';
type TextFieldTypes = 'text' | 'password' | 'email' | 'number' | 'tel';

export type TextFieldProps = {
  disabled?: boolean;
  focus?: boolean;
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
  disabled,
  focus = false,
  helperText,
  id,
  label,
  onChange,
  placeholder,
  type = 'text',
  size = 'large',
}) => {
  const classes = cx(rootClasses, {
    'text-sm': size === 'sm',
    'text-md': size === 'md',
    'text-base': size === 'lg',
    'pointer-events-none bg-gray-100 border-none placeholder-gray-400':
      disabled,
    'border-2 border-black': focus,
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div>
      {label && (
        <label className="block" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className={classes}
        disabled={disabled}
        onChange={onChangeHandler}
        id={id}
        type={type}
        placeholder={placeholder}
      />
      {helperText && <p className="text-sm text-gray-500">{helperText}</p>}
    </div>
  );
};
