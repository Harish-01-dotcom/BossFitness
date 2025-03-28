import React, {useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(async user => {
      if (user) {
        const userDoc = await firestore()
          .collection('user')
          .doc(user.uid)
          .get();
        const data = userDoc.data();

        if (data?.hasMembership === true) {
          navigation.replace('MainPage');
        } else {
          navigation.replace('MembershipScreen');
        }
      } else {
        navigation.replace('LoginScreen');
      }
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
