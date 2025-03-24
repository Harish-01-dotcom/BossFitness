import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Animated,
} from 'react-native';
import styles from './style';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const MembershipChangeScreen = () => {
  const [currentPlan, setCurrentPlan] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [loading, setLoading] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const fetchPlan = async () => {
      const user = auth().currentUser;
      if (user) {
        const doc = await firestore().collection('users').doc(user.uid).get();
        const plan = doc.data()?.membershipPlan || '';
        setCurrentPlan(plan);
      }
    };
    fetchPlan();
  }, []);

  const handleChangePlan = newPlan => {
    setLoading(true);
    setTimeout(async () => {
      const user = auth().currentUser;
      await firestore().collection('users').doc(user.uid).update({
        membershipPlan: newPlan,
      });

      setLoading(false);
      setCurrentPlan(newPlan);
      setShowOptions(false);
      Alert.alert(
        'Success',
        `Membership changed to ${
          newPlan === 'day' ? 'Day Pass' : 'Monthly'
        } successfully!`,
      );
    }, 2000);
  };

  const animateOptions = () => {
    Alert.alert(
      'Confirm Change',
      'Are you sure you want to change your membership?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            const toValue = !showOptions ? 1 : 0;

            Animated.timing(fadeAnim, {
              toValue,
              duration: 300,
              useNativeDriver: true,
            }).start(() => {
              setShowOptions(!showOptions);
            });
          },
        },
      ],
      {cancelable: true},
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Current Plan</Text>
      <Text style={styles.currentPlan}>
        {currentPlan === 'day'
          ? 'Day Pass'
          : currentPlan === 'monthly'
          ? 'Monthly'
          : 'Not Set'}
      </Text>

      <TouchableOpacity
        style={[styles.changeButton, loading && {opacity: 0.6}]}
        onPress={animateOptions}
        disabled={loading}>
        <Text style={styles.changeButtonText}>
          {loading ? 'Changing...' : 'Change Membership'}
        </Text>
      </TouchableOpacity>

      {showOptions && (
        <Animated.View style={[styles.optionsContainer, {opacity: fadeAnim}]}>
          {currentPlan === 'monthly' && (
            <TouchableOpacity
              style={styles.optionCard}
              onPress={() => handleChangePlan('day')}
              disabled={loading}>
              <Text style={styles.optionTitle}>Switch to Day Pass</Text>
              <Text style={styles.optionDescription}>£7.99 – 1 Day</Text>
            </TouchableOpacity>
          )}
          {currentPlan === 'day' && (
            <TouchableOpacity
              style={styles.optionCard}
              onPress={() => handleChangePlan('monthly')}
              disabled={loading}>
              <Text style={styles.optionTitle}>Switch to Monthly</Text>
              <Text style={styles.optionDescription}>£15.99 – Per Month</Text>
            </TouchableOpacity>
          )}
        </Animated.View>
      )}

      {loading && (
        <ActivityIndicator
          size="large"
          color="#1E90FF"
          style={{marginTop: 20}}
        />
      )}
    </View>
  );
};

export default MembershipChangeScreen;
