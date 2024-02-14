import React from 'react';
import {StyleSheet} from 'react-native';

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

interface ICardReceitaProps {}

const CardReceita: React.FC<ICardReceitaProps> = () => {
  return (
    <Container style={styles.container}>
      <ContainerFoto
        source={require('../../../assets/images/imagem-comida.jpg')}
      />
      <Spacer horizontal={8} />
      <ContainerInfo>
        <Title>17 Bean White Chicken Chili</Title>
        <ContainerIcons>
          <SubtitleServe>Serve: 4 pessoas</SubtitleServe>
          <Subtitle>Tempo: 45 minutos</Subtitle>
        </ContainerIcons>
      </ContainerInfo>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8.3,

    elevation: 10,
  },
});

export default CardReceita;
