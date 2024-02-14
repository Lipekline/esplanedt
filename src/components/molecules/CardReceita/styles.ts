import styled from 'styled-components/native';
import {Colors} from '../../../styles/colors';

export const Container = styled.View`
  width: 100%;
  background-color: #f6f6f6;
  border-radius: 15px;
  padding: 20px;
  margin-top: 20px;
  flex-direction: row;
`;

export const ContainerFoto = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 15px;
`;

export const ContainerInfo = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  color: ${Colors.secondary};
  font-weight: bold;
  text-align: center;
  font-size: 16px;
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

export const ContainerIcons = styled.View`
  margin-top: 16px;
`;
