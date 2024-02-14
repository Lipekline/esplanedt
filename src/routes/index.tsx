import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import StackRoutes from './stacks.routes';

const AppRoutes: React.FC = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default AppRoutes;
