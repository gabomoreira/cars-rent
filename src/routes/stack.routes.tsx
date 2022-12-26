import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Schedules } from '../screens/Schedules';
import { CardDetails } from '../screens/CardDetails';
import { ScheduleDetails } from '../screens/ScheduleDetails';
import { ScheduleComplete } from '../screens/ScheduleComplete';

const { Navigator, Screen } = createNativeStackNavigator();

export const StackRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        statusBarTranslucent: true,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="CarDetails" component={CardDetails} />
      <Screen name="Schedules" component={Schedules} />
      <Screen name="ScheduleDetails" component={ScheduleDetails} />
      <Screen name="ScheduleComplete" component={ScheduleComplete} />
    </Navigator>
  );
};
