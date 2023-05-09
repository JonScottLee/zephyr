import { FC, ReactNode } from 'react';
import cx from 'classnames';
import { Container } from '../helpers/container/container';

type ToutProps = {
  backgroundColor?: string;
  backgroundImage?: string;
  textColor?: 'light' | 'dark';
  content: ReactNode;
  contentPos?: 'left' | 'right';
  variant?: 'flat';
  clip?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
};

export const Tout: FC<ToutProps> = ({
  backgroundColor,
  backgroundImage,
  textColor = 'dark',
  content,
  contentPos = 'center',
  clip,
}) => {
  const rootClasses = cx('relative p-2 lg:p-8 h-96 items-center flex', {
    'text-white': textColor === 'light',
    [`bg-[${backgroundColor}]`]: backgroundColor,
    'text-black': textColor === 'dark',
    'clip-up': clip === 'bottom-right',
  });

  const contentClasses = cx('lg:max-w-[50%]', {
    'self-center text-center mx-auto': contentPos === 'center',
    'self-start text-left': contentPos === 'left',
    'self-end text-right ml-auto': contentPos === 'right',
  });

  console.log(backgroundColor);

  // const additionalStyles: React.CSSProperties = {
  //   backgroundColor: backgroundColor ? backgroundColor : undefined,
  //   backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
  //   backgroundSize: 'cover',
  // };

  const additionalStyles = {};

  return (
    <div style={additionalStyles} className={rootClasses}>
      <Container className="flex">
        <div className={contentClasses}>{content}</div>
      </Container>
    </div>
  );
};
