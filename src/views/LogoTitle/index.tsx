import React from 'react';
import { Image } from 'react-native';

const LogoTitle: React.FC<{}> = () => (
  <>
    <Image
      style={{ width: 50, height: 50 }}
      source={require('../../images/mercadona.png')}
    />
  </>
);

export default LogoTitle;
