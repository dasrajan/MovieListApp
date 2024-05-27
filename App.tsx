import React from 'react';
import ErrorBoundary from './src/components/ErrorBoundary';
import HomeNavigation from './src/navigation/MainNavigation';

const App = () => {
  return (
    <ErrorBoundary>
      <HomeNavigation />
    </ErrorBoundary>
  );
};

export default App;
