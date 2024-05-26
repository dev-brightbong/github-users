import React from 'react';

interface LoadingViewProps {
  isLoading?: boolean;
  fallback: React.ReactNode;
  children: React.ReactNode;
}

const LoadingView = ({ children, fallback, isLoading }: LoadingViewProps) => {
  if (isLoading) return <>{fallback}</>;
  else return <>{children}</>;
};

export default LoadingView;
