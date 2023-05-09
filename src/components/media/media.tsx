import { FC, ReactNode } from 'react';
import cx from 'classnames';

type MediaProps = {
  image: string;
  content: ReactNode;
};

const rootClasses = 'flex';

export const Media: FC<MediaProps> = ({ content, image }) => {
  const classes = cx(rootClasses);

  return (
    <div className={classes}>
      <img className="flex-1 basis-1/2 max-w-[50%]" alt="yeah" src={image} />
      <div className="flex-1 basis-1/2 flex items-center p-10">
        <div>{content}</div>
      </div>
    </div>
  );
};
