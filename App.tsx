import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/views/Home';
import Settings from './src/views/Settings';
import Details from './src/views/Details';
import LogoTitle from './src/views/LogoTitle';

import ErrorBoundary from './src/utils/ErrorBoundary';

const Stack = createStackNavigator();

function App() {
  const props = { user: 'martin' };
  const headerStyle = {
      backgroundColor: '#FF9C9C',
    },
    headerTintColor: '#FF9C9C',
    headerTitleStyle: {
      fontWeight: 'bold';
    };

  return (
    <ErrorBoundary>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title='Info'
                color='#fff'
              />
            ),
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
