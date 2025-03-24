import React, {useState} from 'react';
import styles from './style';
import {
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {createUser} from '../../api/User';

const RegisterScreen = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const isDisabled =
    fullName.length <= 3 || email.length <= 5 || password.length <= 8;

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('../../images/logo.png')} />
      <Text style={styles.title}>Create an Account</Text>
      <TextInput
        placeholder="Enter Full Name"
        onChangeText={setFullName}
        style={styles.input}
        value={fullName}
      />
      <TextInput
        placeholder="Email Address"
        onChangeText={setEmail}
        style={styles.input}
        value={email}
      />
      <TextInput
        placeholder="Create a Password"
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        value={password}
      />
      {error.length > 0 && <Text style={styles.error}>{error}</Text>}
      {success.length > 0 && <Text style={styles.success}>{success}</Text>}
      <TouchableOpacity
        style={[styles.button, isDisabled && styles.disabledButton]}
        disabled={isDisabled}
        onPress={async () => {
          let user = await createUser(fullName, email, password);
          if (user.error) {
            setError(user.error);
            setSuccess('');
          } else {
            setError('');
            setSuccess('You have successfully registered!');
            setTimeout(() => navigation.navigate('LoginScreen'), 3000);
          }
        }}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default RegisterScreen;
