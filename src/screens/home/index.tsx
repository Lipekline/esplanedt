import React, {useEffect, useState} from 'react';

import {Container, HeaderContainer, Title} from './styles';
import {Spacer} from '../../components/atoms/Spacer';
import BarraDeBusca from '../../components/atoms/BarraDeBusca';
import CardReceita from '../../components/molecules/CardReceita';
import {IReceitasCard, ReceitasService} from '../../services/ReceitasService';
import {FlatList} from 'react-native';

interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  const [listagemReceitas, setListagemReceitas] = useState<IReceitasCard[]>();

  useEffect(() => {
    async function getListagemReceitas() {
      await ReceitasService()
        .listagem()
        .then(response => {
          setListagemReceitas(response.data.recipes);
        });
    }
    getListagemReceitas();
  }, []);

  return (
    <Container>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={listagemReceitas}
        ListHeaderComponent={
          <HeaderContainer>
            <Spacer vertical={32} />
            <Title>Procure a sua receita favorita</Title>
            <Spacer vertical={32} />
            <BarraDeBusca />
            <Spacer vertical={12} />
          </HeaderContainer>
        }
        ListFooterComponent={<Spacer vertical={50} />}
        renderItem={({item}) => (
          <CardReceita
            imageUrl={item.image}
            title={item.title}
            tempo={item.readyInMinutes}
            serve={item.servings}
          />
        )}
      />
    </Container>
  );
};

export default Home;
