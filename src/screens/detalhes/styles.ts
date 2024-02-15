import styled from 'styled-components/native';
import {Colors} from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  padding: 0px 20px;
`;

export const Title = styled.Text`
  color: ${Colors.secondary};
  font-size: 24px;
  font-weight: bold;
`;

export const ImageReceita = styled.Image`
  flex: 1;
`;

export const ContainerImage = styled.View`
  width: 120%;
  height: 300px;
  margin-left: -20px;
`;

export const ContainerInfo = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-top: 16px;
`;

export const Subtitle = styled.Text`
  color: ${Colors.primary};
  font-weight: bold;
  text-align: center;
  font-size: 16px;
`;

export const SubtitleServe = styled.Text`
  color: orange;
  font-weight: bold;
  text-align: center;
  font-size: 16px;
`;

export const Separator = styled.View`
  border-bottom-width: 1px;
  border: #d0dbea;
  margin-top: 16px;
`;

export const ContainerInstrucao = styled.View`
  margin-top: 16px;
`;
