import React from 'react';
import { View, Text, Button } from 'react-native';

interface HomeProps {
  navigation: any;
}

const Settings: React.FC<{}> = ({ navigation }) => {
  return (
    <View>
      <Button title='Go to Home' onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default Settings;
