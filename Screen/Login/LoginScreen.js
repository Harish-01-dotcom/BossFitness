import React, {useState} from 'react';
import styles from './style';
import {loginUser} from '../../api/User';
import {
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ActivityIndicator,
  View,
  Alert,
  Modal,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [forgotEmail, setForgotEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const isDisabled = email.length <= 5 || password.length <= 8;

  const handleLogin = async () => {
    setLoading(true);
    let user = await loginUser(email, password);
    setLoading(false);
    if (!user.state) {
      setError(user.error || 'Login Failed');
    } else {
      setError('');
      if (user.data.hasMembership) {
        navigation.replace('MainPage');
      } else {
        navigation.replace('MembershipScreen');
      }
    }
  };

  const handleForgotPassword = () => {
    setModalVisible(true);
  };

  const handleSendOTP = () => {
    setModalVisible(false);
    if (forgotEmail.length > 5) {
      Alert.alert('Success', 'OTP sent successfully!');
    } else {
      Alert.alert('Error', 'Please enter a valid email address.');
    }
    setForgotEmail('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../images/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Login to Your Account</Text>

      <TextInput
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      {error?.length > 0 && <Text style={styles.error}>{error}</Text>}

      <TouchableOpacity
        style={[styles.button, isDisabled && styles.disabledButton]}
        disabled={isDisabled || loading}
        onPress={handleLogin}>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Login</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.linkText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={styles.linkText}>Don't have an account? Register</Text>
      </TouchableOpacity>

      {/* Forgot Password Modal */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Enter your Email</Text>
            <TextInput
              placeholder="example@gmail.com"
              value={forgotEmail}
              onChangeText={setForgotEmail}
              style={styles.modalInput}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setModalVisible(false)}>
                <Text>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleSendOTP}>
                <Text>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default LoginScreen;
