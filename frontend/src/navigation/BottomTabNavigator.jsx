import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ROUTES } from './routes';

import DashboardScreen from '../screens/Dashboard/DashboardScreen';
import HabitsScreen from '../screens/Habits/HabitsScreen';
import TimeBlockScreen from '../screens/TimeBlocks/TimeBlockScreen';
import UrgeScreen from '../screens/Urge/UrgeScreen';
import AnalyticsScreen from '../screens/Analytics/AnalyticsScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#0a0a0a',
          borderTopColor: '#1a1a2e',
        },
        tabBarActiveTintColor: '#7c3aed',
        tabBarInactiveTintColor: '#6b7280',
      }}
    >
      <Tab.Screen name={ROUTES.DASHBOARD} component={DashboardScreen} />
      <Tab.Screen name={ROUTES.HABITS} component={HabitsScreen} />
      <Tab.Screen name={ROUTES.TIME_BLOCKS} component={TimeBlockScreen} />
      <Tab.Screen name={ROUTES.URGE} component={UrgeScreen} />
      <Tab.Screen name={ROUTES.ANALYTICS} component={AnalyticsScreen} />
    </Tab.Navigator>
  );
}
