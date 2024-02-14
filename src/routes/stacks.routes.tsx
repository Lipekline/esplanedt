import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from '../screens/onboarding';
import Home from '../screens/home';

export type StackList = {
  Onboarding: undefined;
  Home: undefined;
};

const {Navigator, Screen} = createStackNavigator<StackList>();

const StackRoutes: React.FC = () => {
  return (
    <Navigator>
      <Screen
        name="Onboarding"
        component={Onboarding}
        options={{headerShown: false}}
      />
      <Screen name="Home" component={Home} options={{headerShown: false}} />
    </Navigator>
  );
};

export default StackRoutes;
