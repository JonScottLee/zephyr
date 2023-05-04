import { FC } from 'react';
import cx from 'classnames';

type TextFieldSizes = 'sm' | 'lg';
type TextFieldTypes = 'text' | 'password' | 'email' | 'number' | 'tel';

export type TextFieldProps = {
  disabled?: boolean;
  id: string;
  invalid?: boolean;
  label: string;
  type?: TextFieldTypes;
  placeholder?: string;
  helperText?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const inputRootClasses =
  'transition-all peer p-y-2 outline-none border-x-0 border-y-0 border-b-2 focus:border-b-2 border border-2 border-gray-500 focus:border-primary-500';

const labelRootClasses =
  'peer-placeholder-shown:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 -translate-y-6 scale-75 text-primary-500 peer-focus:scale-75 peer-focus:-translate-y-6  peer-focus:text-primary-500 transition-all absolute -left-0 -top-1 origin-left';

export const TextField: FC<TextFieldProps> = ({
  disabled,
  helperText,
  id,
  invalid = false,
  label,
  onChange,
  type = 'text',
}) => {
  const inputClasses = cx(inputRootClasses, {
    '!border-gray-300 bg-transparent': disabled,
    '!border-red-500': invalid,
  });

  const labelClasses = cx(labelRootClasses, {
    '!text-gray-300': disabled,
    '!text-red-500': invalid,
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
        placeholder={' '} // this space is deliberate
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
