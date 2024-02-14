import styled from 'styled-components/native';
import {Colors} from '../../styles/colors';

export const Container = styled.View`
  background-color: #fff;
  align-items: center;
  flex: 1;
`;
export const ContainerBody = styled.View`
  background-color: #fff;
  align-items: center;
  padding: 0px 20px;
  margin-top: 60px;
  flex: 1;
`;

export const ImageOnboarding = styled.Image`
  width: 110%;
`;

export const Header = styled.Text`
  color: ${Colors.secondary};
  font-size: 24px;
  font-weight: bold;
`;

export const Subheader = styled.Text`
  color: ${Colors.tertiary};
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;
