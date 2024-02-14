import React from 'react';

import {Container} from './styles';
import {Text} from 'react-native';

interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  return (
    <Container>
      <Text>Home App Esplane</Text>
    </Container>
  );
};

export default Home;
