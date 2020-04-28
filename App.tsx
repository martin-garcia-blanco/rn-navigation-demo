import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/views/Home';
import Settings from './src/views/Settings';
import Details from './src/views/Details';
import LogoTitle from './src/views/LogoTitle';

import ErrorBoundary from './src/utils/ErrorBoundary';

const Stack = createStackNavigator();

function App() {
  return (
    <ErrorBoundary>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{
            headerTitle: (props) => <LogoTitle {...props} />,
          }}
        >
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Settings' component={Settings} />
          <Stack.Screen name='Details' component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </ErrorBoundary>
  );
}

export default App;
