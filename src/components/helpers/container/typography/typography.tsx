import { FC } from 'react';

export const H1: FC<React.PropsWithChildren<unknown>> = ({ children }) => (
  <h1 className="text-3xl lg:text-4xl font-normal leading-normal mt-0 mb-2 text-black">
    {children}
  </h1>
);

export const H2: FC<React.PropsWithChildren<unknown>> = ({ children }) => (
  <h2 className="text-2xl lg:text-3xl  font-normal leading-normal mt-0 mb-2 text-black">
    {children}
  </h2>
);

export const H3: FC<React.PropsWithChildren<unknown>> = ({ children }) => (
  <h3 className="text-xl lg:text-2xl font-normal leading-normal mt-0 mb-2 text-black">
    {children}
  </h3>
);

export const H4: FC<React.PropsWithChildren<unknown>> = ({ children }) => (
  <h4 className="text-3xl font-lg leading-normal mt-0 mb-2 text-black">
    {children}
  </h4>
);

export const H5: FC<React.PropsWithChildren<unknown>> = ({ children }) => (
  <h5 className="text-2xl font-normal leading-normal mt-0 mb-2 text-black">
    {children}
  </h5>
);

export const H6: FC<React.PropsWithChildren<unknown>> = ({ children }) => (
  <h6 className="text-xl font-normal leading-normal mt-0 mb-2 text-black">
    {children}
  </h6>
);

export const P: FC<React.PropsWithChildren<unknown>> = ({ children }) => (
  <p className="text-base">{children}</p>
);
