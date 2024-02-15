import React from 'react';

import {
  Container,
  ContainerFoto,
  ContainerIcons,
  ContainerInfo,
  Subtitle,
  SubtitleServe,
  Title,
} from './styles';
import {Spacer} from '../../atoms/Spacer';

interface ICardReceitaProps {
  title: string;
  imageUrl: string;
  serve: number;
  tempo: number;
  onPress?: () => void;
}

const CardReceita: React.FC<ICardReceitaProps> = ({
  title,
  imageUrl,
  serve,
  tempo,
  onPress,
}) => {
  return (
    <Container onPress={onPress}>
      {imageUrl && <ContainerFoto source={{uri: imageUrl}} />}
      <Spacer horizontal={8} />
      <ContainerInfo>
        <Title>{title}</Title>
        <ContainerIcons>
          <SubtitleServe>Porções: {serve} unidades</SubtitleServe>
          <Subtitle>Tempo: {tempo} minutos</Subtitle>
        </ContainerIcons>
      </ContainerInfo>
    </Container>
  );
};

export default CardReceita;
