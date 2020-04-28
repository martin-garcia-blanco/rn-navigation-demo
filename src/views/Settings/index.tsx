import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './style';

interface HomeProps {
  navigation: any;
}

const Settings: React.FC<{}> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Example of navigate.push, it allows us to express the intent to add
        another route regardless of the existing navigation history.{' '}
      </Text>
      <Button
        title='Go to Settings (push)'
        onPress={() => navigation.push('Settings')}
      />
      <Text style={styles.text}>
        Example of popToTop action, it takes you back to the first screen in the
        stack, dismissing all the others
      </Text>
      <Button
        title='Go to Home (popToTop)'
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

export default Settings;
