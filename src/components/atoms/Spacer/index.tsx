import React from 'react';
import {Container, Props} from './styles';

export const Spacer: React.FC<Props> = ({vertical, horizontal, ...rest}) => {
  return <Container vertical={vertical} horizontal={horizontal} {...rest} />;
};
