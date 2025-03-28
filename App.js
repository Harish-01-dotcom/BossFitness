import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './Screen/Login/LoginScreen';
import RegistrationScreen from './Screen/Registration/RegistrationScreen';
import MembershipScreen from './Screen/Membership/MembershipScreen';
import MainPage from './Screen/Menu/MainPage';
import BookingScreen from './Screen/Bookings/BookingScreen';
import PaymentScreen from './Screen/Payment/PaymentScreen';
import AccountScreen from './Screen/Account/AccountScreen';
import MembershipChangeScreen from './Screen/MembershipChange/MembershipChangeScreen';
import PersonalDetails from './Screen/PersonalDetail/PersonalDetails';
import Feedback from './Screen/Feedback/Feedback';
import VideoPlayerScreen from './Screen/VideoPlayerScreen/VideoPlayerScreen';

const Stack = createStackNavigator();

// Reusable empty header component to avoid nested component warning
const EmptyHeaderComponent = () => null;

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="MainPage"
          component={MainPage}
          options={{
            gestureEnabled: false,
            headerShown: false,
            headerLeft: EmptyHeaderComponent,
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            gestureEnabled: false,
            headerShown: true,
            headerLeft: EmptyHeaderComponent,
          }}
        />
        <Stack.Screen name="RegisterScreen" component={RegistrationScreen} />
        <Stack.Screen name="MembershipScreen" component={MembershipScreen} />
        <Stack.Screen name="BookingScreen" component={BookingScreen} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        <Stack.Screen name="AccountScreen" component={AccountScreen} />
        <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
        <Stack.Screen name="Feedback" component={Feedback} />
        <Stack.Screen name="VideoPlayer" component={VideoPlayerScreen} />
        <Stack.Screen
          name="MembershipChangeScreen"
          component={MembershipChangeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
