import { FC, PropsWithChildren } from 'react';

export const Container: FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => (
  <div className={`container mx-auto px-2 lg:px-4 lg:max-w-7xl	${className}`}>
    {children}
  </div>
);
