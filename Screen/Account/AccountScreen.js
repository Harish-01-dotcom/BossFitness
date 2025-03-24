import React from 'react';
import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import styles from './style';

const AccountScreen = ({navigation}) => {
  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to log out?', [
      {text: 'Cancel', style: 'cancel'},
      {text: 'Logout', onPress: () => navigation.replace('LoginScreen')}, // ✅ Replaces the screen (no back button)
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <View style={styles.profileSection}>
        <Image
          source={require('../../images/profile.png')}
          style={styles.profileImage}
        />
        <TouchableOpacity
          style={styles.personalDetailButton}
          onPress={() => navigation.navigate('PersonalDetails')}>
          <Text style={styles.personalDetailText}>VIEW PERSONAL DETAIL</Text>
        </TouchableOpacity>
      </View>

      {/* Members Section */}
      <Text style={styles.sectionHeader}>MEMBERS</Text>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('MembershipChangeScreen')}>
        <Text style={styles.menuText}>YOUR GYM MEMBERSHIP</Text>
        <Text style={styles.arrow}>&gt;</Text>
      </TouchableOpacity>

      {/* Support Section */}
      <Text style={styles.sectionHeader}>SUPPORT</Text>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Feedback')}>
        <Text style={styles.menuText}>GIVE US FEEDBACK</Text>
        <Text style={styles.arrow}>&gt;</Text>
      </TouchableOpacity>

      {/* Logout Button */}
      <View style={styles.logoutContainer}>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.logoutText}>LOGOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AccountScreen;
