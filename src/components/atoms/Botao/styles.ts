import styled from 'styled-components/native';
import {IBotaoProps} from '.';

export const Container = styled.Pressable<IBotaoProps>`
  width: 100%;
  padding: 16px 16px;
  background-color: ${props => (props.color ? props.color : undefined)};
  border-radius: 20px;
  align-items: center;
`;

export const ButtonText = styled.Text<IBotaoProps>`
  color: ${props => (props.textColor ? props.textColor : '#000')};
  font-size: 18px;
`;
