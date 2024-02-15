import React from 'react';

import {Container} from './styles';
import {Text} from 'react-native';

interface IDetalhesProps {}

const Detalhes: React.FC<IDetalhesProps> = () => {
  return (
    <Container>
      <Text>Tela de detalhes</Text>
    </Container>
  );
};

export default Detalhes;
