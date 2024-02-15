import {View, ViewProps} from 'react-native';
import styled from 'styled-components/native';

export interface Props extends ViewProps {
  /**
   * Adiciona margem para baixo ou cima entre os componentes.
   */
  vertical?: number;

  /**
   * Adiciona margem para o lado esquerdo ou direito entre os componentes.
   */
  horizontal?: number;
}

export const Container = styled(View)<Props>`
  margin: ${props =>
    `${props.vertical ? props.vertical / 2 : 0}px 
    ${props.horizontal ? props.horizontal / 2 : 0}px`};
`;
