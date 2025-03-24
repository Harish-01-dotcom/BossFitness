import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  ActivityIndicator,
} from 'react-native';
import {
  StripeProvider,
  useConfirmPayment,
  CardForm,
} from '@stripe/stripe-react-native';
import styles from './style';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const API_URL = 'http://localhost:3000'; // iOS simulator can use localhost

const PaymentScreen = ({route, navigation}) => {
  const {selectedPlan} = route.params || {};
  const amount = selectedPlan === 'day' ? 799 : 1599;

  const {confirmPayment, loading} = useConfirmPayment();

  const fetchClientSecret = async () => {
    try {
      const response = await fetch(`${API_URL}/create-payment-intent`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({amount}),
      });

      const {clientSecret} = await response.json();
      return clientSecret;
    } catch (error) {
      Alert.alert('Error', 'Unable to fetch payment intent.');
      return null;
    }
  };

  const handlePayPress = async () => {
    const clientSecret = await fetchClientSecret();
    if (!clientSecret) {
      return;
    }

    const {error, paymentIntent} = await confirmPayment(clientSecret, {
      paymentMethodType: 'Card',
    });

    if (error) {
      Alert.alert('Payment failed', error.message);
    } else if (paymentIntent) {
      const user = auth().currentUser;

      try {
        await firestore().collection('users').doc(user.uid).update({
          hasMembership: true,
          membershipPlan: selectedPlan,
        });
        Alert.alert('Success', 'Payment successful!', [
          {
            text: 'OK',
            onPress: () => {
              navigation.reset({
                index: 0,
                routes: [{name: 'MainPage'}],
              });
              // Delay by 300ms
            },
          },
        ]);
      } catch (err) {
        console.log('Firestore update error:', err);
        Alert.alert('Error', 'Payment succeeded but failed to update account.');
      }
    }
  };

  return (
    <StripeProvider publishableKey="pk_test_51R4ivuKab62F1Or83nR3kthQzn5DNuIFaD4xRNE6fAQxkYBu0SWEfI6wUpzV401eHc9dxKr1Cecaw26lG9cIdJur00LF688G9o">
      <View style={styles.container}>
        <Image source={require('../../images/logo.png')} style={styles.logo} />
        <Text style={styles.title}>Payment</Text>
        <Text style={styles.subtitle}>Selected Plan: {selectedPlan}</Text>
        <Text style={styles.subtitle}>
          Amount: £{(amount / 100).toFixed(2)}
        </Text>

        {/* Card Input */}
        <CardForm
          postalCodeEnabled={true}
          placeholder={{
            number: '4242 4242 4242 4242',
          }}
          cardStyle={{
            backgroundColor: '#fafafa',
            textColor: '#000000',
            borderRadius: 12,
            fontSize: 16,
          }}
          style={styles.cardform}
        />

        {/* Pay Button */}
        <TouchableOpacity
          style={styles.button}
          disabled={loading}
          onPress={handlePayPress}>
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>
              Pay £{(amount / 100).toFixed(2)}
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </StripeProvider>
  );
};

export default PaymentScreen;
