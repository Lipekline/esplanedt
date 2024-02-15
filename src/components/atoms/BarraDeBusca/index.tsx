import React from 'react';

import {Container} from './styles';
import {TextInput} from 'react-native';

interface IBarraDeBuscaProps {
  onChangeText: (value: string) => void;
  value: string;
}

const BarraDeBusca: React.FC<IBarraDeBuscaProps> = ({onChangeText, value}) => {
  return (
    <Container>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        placeholder="Procure sua receita..."
        placeholderTextColor="#97a2b0"
      />
    </Container>
  );
};

export default BarraDeBusca;
