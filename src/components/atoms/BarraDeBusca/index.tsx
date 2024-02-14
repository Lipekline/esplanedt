import React from 'react';

import {Container} from './styles';
import {Text} from 'react-native';

interface IBarraDeBuscaProps {}

const BarraDeBusca: React.FC<IBarraDeBuscaProps> = () => {
  return (
    <Container>
      <Text>Barra de busca</Text>
    </Container>
  );
};

export default BarraDeBusca;
