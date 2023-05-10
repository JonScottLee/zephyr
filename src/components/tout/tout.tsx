import { FC, ReactNode } from 'react';
import cx from 'classnames';
import { Container } from '../helpers/container/container';

type ToutProps = {
  className?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  textColor?: 'light' | 'dark';
  content: ReactNode;
  contentPos?: 'left' | 'right';
  variant?: 'flat';
  clip?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
};

export const Tout: FC<ToutProps> = ({
  className,
  textColor = 'dark',
  content,
  contentPos = 'center',
  clip,
}) => {
  const rootClasses = cx(
    'bg-cover relative p-2 lg:p-8 h-96 items-center flex',
    {
      'text-white': textColor === 'light',
      'text-black': textColor === 'dark',
      'clip-up': clip === 'bottom-right',
    },
  );

  const contentClasses = cx('lg:max-w-[50%]', {
    'self-center text-center mx-auto': contentPos === 'center',
    'self-start text-left': contentPos === 'left',
    'self-end text-right ml-auto': contentPos === 'right',
  });

  return (
    <div className={`${className} ${rootClasses}`}>
      <Container className="flex">
        <div className={contentClasses}>{content}</div>
      </Container>
    </div>
  );
};
