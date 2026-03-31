import React from 'react';

export const lazyRemote = <TComponent extends React.ComponentType<any>>(
  importer: () => Promise<{ default: TComponent }>,
  _remoteKey?: string
) => React.lazy(importer);
