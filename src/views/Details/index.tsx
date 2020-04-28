import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface DetailsProps {
  route?: any;
}

const Details: React.FC<DetailsProps> = ({ route }) => {
  return (
    <View style={styles.container}>
      {route.params && (
        <Text style={styles.text}>
          Text received by props: {route.params.from}
        </Text>
      )}
    </View>
  );
};

export default Details;
