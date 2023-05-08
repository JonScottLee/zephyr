import { FC, ReactNode } from 'react';
import cx from 'classnames';
import { Container } from '../helpers/container/container';

type ToutProps = {
  backgroundImage?: string;
  content: ReactNode;
  contentPos?: 'left' | 'right';
};

export const Tout: FC<ToutProps> = ({
  backgroundImage,
  content,
  contentPos = 'center',
}) => {
  const rootClasses = cx('p-2 lg:p-8 h-96 items-center flex', {
    'bg-cover': backgroundImage,
  });

  const contentClasses = cx('lg:max-w-[50%]', {
    'self-center text-center mx-auto': contentPos === 'center',
    'self-start text-left': contentPos === 'left',
    'self-end text-right ml-auto': contentPos === 'right',
  });

  const backgroundStyle = backgroundImage
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
