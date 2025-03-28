// File: Screen/Menu/MainPage.js

import React, {useState} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BookingScreen from '../Bookings/BookingScreen';
import AccountScreen from '../Account/AccountScreen';
import styles from './style';

import {
  CardioPage,
  StrengthPage,
  DietPage,
  WorkoutPlanPage,
} from '../FitnessSections/FitnessSections';

const MainPage = () => {
  const [activeTab, setActiveTab] = useState('Cardio');

  const renderTab = () => {
    switch (activeTab) {
      case 'Cardio':
        return <CardioPage />;
      case 'Strength':
        return <StrengthPage />;
      case 'Diet':
        return <DietPage />;
      case 'Workout Plan':
        return <WorkoutPlanPage />;
      default:
        return <CardioPage />;
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.topBar}>
        <Image source={require('../../images/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.tabBar}>
        {['Cardio', 'Strength', 'Diet', 'Workout Plan'].map(tab => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabButton, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}>
            <Text
              style={[
                styles.tabButtonText,
                activeTab === tab && styles.activeTabText,
              ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {renderTab()}
    </SafeAreaView>
  );
};

const BottomTab = createBottomTabNavigator();

const getScreenOptions = ({route}) => ({
  tabBarIcon: ({focused}) => {
    let iconSource;

    if (route.name === 'You') {
      iconSource = require('../../images/you.png');
    } else if (route.name === 'Booking') {
      iconSource = require('../../images/booking.png');
    } else if (route.name === 'Account') {
      iconSource = require('../../images/account.png');
    }

    const tinyStyle = focused ? styles.iconFocused : styles.iconUnFocumsed;

    return <Image source={iconSource} style={[styles.tabIcon, tinyStyle]} />;
  },
  tabBarActiveTintColor: '#FF5733',
  tabBarInactiveTintColor: 'gray',
  tabBarStyle: {
    backgroundColor: '#fff',
    paddingBottom: 5,
    height: 65,
  },
  headerShown: false,
  tabBarLabelStyle: {
    fontSize: 12,
    marginBottom: 5,
  },
});

const AppNavigator = () => {
  return (
    <BottomTab.Navigator screenOptions={getScreenOptions}>
      <BottomTab.Screen name="You" component={MainPage} />
      <BottomTab.Screen name="Booking" component={BookingScreen} />
      <BottomTab.Screen name="Account" component={AccountScreen} />
    </BottomTab.Navigator>
  );
};

export default AppNavigator;
