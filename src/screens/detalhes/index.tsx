import React, {useEffect, useState} from 'react';

import {
  Container,
  ContainerImage,
  ContainerInfo,
  ContainerInstrucao,
  ImageReceita,
  Separator,
  Subtitle,
  SubtitleServe,
  Title,
} from './styles';
import {ScrollView, useWindowDimensions} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {
  IReceitasDetalhes,
  ReceitasService,
} from '../../services/ReceitasService';
import {Spacer} from '../../components/atoms/Spacer';
import RenderHTML from 'react-native-render-html';
import DetalhesSkeleton from '../../components/skeletons/detalhes-skeleton';

interface IDetalhesProps {}

const Detalhes: React.FC<IDetalhesProps> = () => {
  type ParametrosTela = {
    Detalhe: {
      id: number;
    };
  };

  const route = useRoute<RouteProp<ParametrosTela, 'Detalhe'>>();
  const {id} = route.params;

  const [detalhesReceitas, setDetalhesReceitas] = useState<IReceitasDetalhes>();

  useEffect(() => {
    async function getListagemReceitas() {
      await ReceitasService()
        .detalhes(id)
        .then(response => {
          setDetalhesReceitas(response.data);
        });
    }
    getListagemReceitas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {width} = useWindowDimensions();

  const Summary = {
    html: `<p>${detalhesReceitas?.summary}<p>`,
  };
  const Instructions = {
    html: `<p>${detalhesReceitas?.instructions}<p>`,
  };

  return (
    <ScrollView>
      <Container>
        {detalhesReceitas ? (
          <>
            <ContainerImage>
              <ImageReceita source={{uri: detalhesReceitas?.image}} />
            </ContainerImage>
            <Spacer vertical={30} />
            <Title>{detalhesReceitas?.title}</Title>
            <ContainerInfo>
              <Subtitle>
                Tempo: {detalhesReceitas?.readyInMinutes} minutos
              </Subtitle>
              <SubtitleServe>
                Porções: {detalhesReceitas?.servings} unidades
              </SubtitleServe>
            </ContainerInfo>
            <Separator />
            <ContainerInstrucao>
              <Title>Resumo</Title>
              <Spacer vertical={8} />
              <RenderHTML
                tagsStyles={{
                  b: {color: '#58585A'},
                  p: {color: '#58585A'},
                  li: {color: '#58585A'},
                }}
                contentWidth={width}
                source={Summary}
              />
            </ContainerInstrucao>
            <Separator />
            <ContainerInstrucao>
              <Title>Instruções</Title>
              <Spacer vertical={8} />
              <RenderHTML
                tagsStyles={{
                  b: {color: '#58585A'},
                  p: {color: '#58585A'},
                  li: {color: '#58585A'},
                }}
                contentWidth={width}
                source={Instructions}
              />
            </ContainerInstrucao>
          </>
        ) : (
          <DetalhesSkeleton />
        )}
      </Container>
      <Spacer vertical={50} />
    </ScrollView>
  );
};

export default Detalhes;
