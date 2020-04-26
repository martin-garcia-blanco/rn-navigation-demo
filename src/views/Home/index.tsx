import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

interface HomeProps {
  navigation: any;
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title='Go to Settings'
        onPress={() => navigation.navigate('Settings')}
      />
      <Button
        title='Go to Details'
        onPress={() => navigation.navigate('Details', { from: 'Home' })}
      />
    </View>
  );
};

export default Home;
