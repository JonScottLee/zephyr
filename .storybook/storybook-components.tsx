import React, { FC } from 'react';

export const RowWrapper: FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
    {children}
  </div>
);

export const ColWrapper: FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    {children}
  </div>
);
