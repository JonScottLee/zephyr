import { FC } from 'react';
import cx from 'classnames';

type TextFieldProps = {};

const rootClasses = '';

export const TextField: FC<TextFieldProps> = () => {
  const classes = cx(rootClasses);

  return <div className={classes}>Something</div>;
};
