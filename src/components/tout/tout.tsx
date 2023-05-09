import { FC, ReactNode } from 'react';
import cx from 'classnames';
import { Container } from '../helpers/container/container';

type ToutProps = {
  backgroundImage?: string;
  content: ReactNode;
  contentPos?: 'left' | 'right';
  variant?: 'flat' | 'half-flat';
};

export const Tout: FC<ToutProps> = ({
  backgroundImage,
  content,
  variant,
  contentPos = 'center',
}) => {
  const rootClasses = cx('p-2 lg:p-8 h-96 items-center flex', {
    'bg-cover': backgroundImage,
    'bg-primary text-white': variant === 'flat',
  });

  const contentClasses = cx('lg:max-w-[50%]', {
    'self-center text-center mx-auto': contentPos === 'center',
    'self-start text-left': contentPos === 'left',
    'self-end text-right ml-auto': contentPos === 'right',
  });

  const backgroundStyle: React.CSSProperties = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};

  return (
    <div style={backgroundStyle} className={rootClasses}>
      <Container className="flex">
        <div className={contentClasses}>{content}</div>
      </Container>
    </div>
  );
};
