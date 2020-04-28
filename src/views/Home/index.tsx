import React from 'react';
import { View, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

interface HomeProps {
  navigation: any;
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title='Go to push and popToTop examples'
        onPress={() => navigation.navigate('Settings')}
      />

      <TouchableOpacity
        style={styles.touchableOppacity}
        onPress={() => navigation.navigate('Settings')}
      >
        <Text style={styles.touchableOppacityText}>
          TouchableOpacity example
        </Text>
      </TouchableOpacity>
      <Button
        title='example of setOptions'
        onPress={() => navigation.setOptions({ title: 'Updated' })}
      />
      <View style={styles.grouped}>
        <Text style={styles.text}>Details receives props from navigate</Text>
        <Button
          title='Go to Details'
          onPress={() => navigation.navigate('Details', { from: 'Home' })}
        />
      </View>
    </View>
  );
};

export default Home;
