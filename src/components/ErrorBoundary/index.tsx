import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {
  ErrorBoundary as ReactErrorBoundary,
  FallbackProps,
} from 'react-error-boundary';

const ErrorFallback = ({error, resetErrorBoundary}: FallbackProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>Something went wrong:</Text>
      <Text style={styles.errorMessage}>{error.message}</Text>
      <Button title="Try again" onPress={resetErrorBoundary} />
    </View>
  );
};

const ErrorBoundary: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, errorInfo) => {
        console.error('Error caught by ErrorBoundary:', error, errorInfo);
      }}>
      {children}
    </ReactErrorBoundary>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    marginBottom: 8,
  },
  errorMessage: {
    fontSize: 16,
    color: 'black',
    marginBottom: 16,
  },
});

export default ErrorBoundary;
