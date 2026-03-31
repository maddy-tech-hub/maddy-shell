import React from 'react';

interface RemoteBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface RemoteBoundaryState {
  hasError: boolean;
}

class RemoteBoundary extends React.Component<
  RemoteBoundaryProps,
  RemoteBoundaryState
> {
  public state: RemoteBoundaryState = {
    hasError: false,
  };

  public static getDerivedStateFromError(): RemoteBoundaryState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error): void {
    // Remote failures should not crash the shell.
    // eslint-disable-next-line no-console
    console.error('Remote module failed to render.', error);
  }

  public render(): React.ReactNode {
    if (this.state.hasError) {
      return this.props.fallback ?? null;
    }

    return this.props.children;
  }
}

export default RemoteBoundary;
