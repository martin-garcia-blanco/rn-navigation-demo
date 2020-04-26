import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface DetailsProps {
  navigation: any;
  route?: any;
}

const Details: React.FC<DetailsProps> = ({ navigation, route }) => {
  return (
    <View>
      <Text>Details</Text>
      {route.params && <Text>From {route.params.from}</Text>}
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Text>Settings</Text>
      </TouchableOpacity>
      <Button title='Go to Home' onPress={() => navigation.navigate('Home')} />
      <Button
        title='Go to Details'
        onPress={() => navigation.push('Details')}
      />
      <Button
        title='setOptions'
        onPress={() => navigation.setOptions({ title: 'Updated' })}
      />
      <Button title='Go back' onPress={() => navigation.goBack()} />
      <Button title='Go to Top' onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default Details;
