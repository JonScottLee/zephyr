import { FC } from 'react';
import cx from 'classnames';

type TextFieldSizes = 'sm' | 'lg';
type TextFieldTypes = 'text' | 'password' | 'email' | 'number' | 'tel';

export type TextFieldProps = {
  disabled?: boolean;
  focus?: boolean;
  id: string;
  invalid?: boolean;
  label: string;
  type?: TextFieldTypes;
  placeholder?: string;
  helperText?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const inputRootClasses = '';

const labelRootClasses = '';

export const TextField: FC<TextFieldProps> = ({
  disabled,
  focus = false,
  helperText,
  id,
  invalid = false,
  label,
  onChange,
  type = 'text',
}) => {
  const inputClasses = cx(inputRootClasses, {
    classes: disabled,
    go: focus,
    here: invalid,
  });

  const labelClasses = cx(labelRootClasses, {
    classes: disabled,
    go: focus,
    here: invalid,
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="relative z-0">
      <input
        className={inputClasses}
        disabled={disabled}
        onChange={onChangeHandler}
        id={id}
        type={type}
        placeholder={' '}
      />

      {label && (
        <label className={labelClasses} htmlFor={id}>
          {label}
        </label>
      )}

      {helperText && <p className="text-sm my-2 text-gray-500">{helperText}</p>}
    </div>
  );
};
