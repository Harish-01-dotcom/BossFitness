import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const createUser = async (fullName, email, password) => {
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    await user.user.updateProfile({displayName: fullName});
    await firestore().collection('users').doc(user.user.uid).set({
      username: fullName,
      email,
      hasMembership: false,
      membershipPlan: null,
    });
    return user;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      return {error: 'That email address is already in use!'};
    } else if (error.code === 'auth/invalid-email') {
      return {error: 'Please enter a valid email address!'};
    }
    return {error: 'Something went wrong with your request!'};
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    const token = await response.user.getIdToken();
    let hasMembership = false;
    try {
      const userDoc = await firestore()
        .collection('users')
        .doc(response.user.uid)
        .get();
      if (userDoc.exists) {
        const userData = userDoc.data();
        hasMembership = userData?.hasMembership || false;
      }
    } catch (firestoreError) {
      console.log('⚠️ Firestore fetch error:', firestoreError);
    }
    return {
      state: true,
      data: {
        displayName: response.user.displayName,
        email: response.user.email,
        token,
        hasMembership,
      },
    };
  } catch (error) {
    if (error.code === 'auth/invalid-credential') {
      return {
        state: false,
        error:
          'Your Email address or password is inavlid. Please check or Create a account!',
      };
    }
    return {
      state: false,
      error: 'Something went wrong!',
    };
  }
};
