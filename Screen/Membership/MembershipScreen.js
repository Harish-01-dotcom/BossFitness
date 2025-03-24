import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert, Image} from 'react-native';
import styles from './style';

const MembershipScreen = ({navigation}) => {
  const [selectedPlan, setSelectedPlan] = useState('');

  const planPrices = {
    day: 7.99,
    monthly: 15.99,
  };

  const handlePaymentNavigation = () => {
    if (!selectedPlan) {
      Alert.alert('Selection Required', 'Please select a membership plan.');
      return;
    }
    const amount = planPrices[selectedPlan];

    navigation.navigate('PaymentScreen', {
      selectedPlan,
      amount,
    });
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image style={styles.logo} source={require('../../images/logo.png')} />

      {/* Membership Title */}
      <Text style={styles.title}>CHOOSE YOUR MEMBERSHIP</Text>

      {/* Membership Cards */}
      <View style={styles.membershipContainer}>
        {/* Day Pass */}
        <TouchableOpacity
          style={[styles.card, selectedPlan === 'day' && styles.selectedCard]}
          onPress={() => setSelectedPlan('day')}>
          <Text style={styles.cardTitle}>DAY PASS</Text>
          <Text style={styles.price}>£7.99</Text>
          <Text style={styles.description}>for 1 day</Text>
        </TouchableOpacity>

        {/* Monthly Pass */}
        <TouchableOpacity
          style={[
            styles.card,
            selectedPlan === 'monthly' && styles.selectedCard,
          ]}
          onPress={() => setSelectedPlan('monthly')}>
          <Text style={styles.cardTitle}>MONTHLY</Text>
          <Text style={styles.price}>£15.99</Text>
          <Text style={styles.description}>Per Month</Text>
        </TouchableOpacity>
      </View>

      {/* Payment Button */}
      <TouchableOpacity style={styles.button} onPress={handlePaymentNavigation}>
        <Text style={styles.buttonText}>Pay & Subscribe</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MembershipScreen;
