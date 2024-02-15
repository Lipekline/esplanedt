import React, {PropsWithChildren} from 'react';

import {ButtonText, Container} from './styles';

export interface IBotaoProps extends PropsWithChildren {
  onPress?: () => void;
  color?: string;
  text?: string;
  textColor?: string;
}

const Botao: React.FC<IBotaoProps> = ({color, textColor, text, onPress}) => {
  return (
    <Container color={color} onPress={onPress}>
      <ButtonText textColor={textColor}>{text}</ButtonText>
    </Container>
  );
};

export default Botao;
