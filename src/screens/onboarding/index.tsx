import React from 'react';

import {
  Container,
  ContainerBody,
  Header,
  ImageOnboarding,
  Subheader,
} from './styles';
import {Spacer} from '../../components/atoms/Spacer';
import Botao from '../../components/Botao';

interface IOnboardingProps {}

const Onboarding: React.FC<IOnboardingProps> = () => {
  return (
    <>
      <Container>
        <ImageOnboarding
          source={require('../../assets/images/image-onboarding.png')}
        />
      </Container>
      <ContainerBody>
        <Spacer vertical={24} />
        <Header>Comece já a cozinhar !!</Header>
        <Spacer vertical={24} />
        <Subheader>Receitas fáceis e práticas </Subheader>
        <Subheader> para cozinhar melhor</Subheader>
        <Spacer vertical={48} />
        <Botao color="#1FCC79" textColor="#fff" text="Ver Receitas" />
      </ContainerBody>
    </>
  );
};

export default Onboarding;
