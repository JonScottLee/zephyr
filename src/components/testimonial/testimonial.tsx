import { FC } from 'react';
import cx from 'classnames';

type TestimonialProps = {
  text: string;
  attribution: string;
};

const rootClasses = 'text-italic text-center text-md text-gray-500';

export const Testimonial: FC<TestimonialProps> = ({ text, attribution }) => {
  const classes = cx(rootClasses);

  return (
    <p className={classes}>
      {text}
      <div className="mt-2 text-lg text-primary-500">{attribution}</div>
    </p>
  );
};
