import { Text } from 'react-native';
import React from 'react';

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    //logErrorToService(error, info.componentStack)
    console.log(error, info);
  }

  render() {
    return this.state.hasError ? (
      <view>
        <Text>Oops!</Text>
        <Text>There's an error</Text>
      </view>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
