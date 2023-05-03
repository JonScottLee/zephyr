import { FC } from 'react';
import cx from 'classnames';

type [FTName | pascalcase]Props = {};

const rootClasses = '';

export const [FTName | pascalcase]: FC<[FTName | pascalcase]Props> = () => {
  const classes = cx(rootClasses);

  return (
    <div className={classes}>Something</div>
  );
};
