import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  TextInput,
} from 'react-native';
import styles from './style';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const PersonalDetails = () => {
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: '',
    username: '',
    membershipPlan: '',
    profileImage: '',
  });
  const [editedUsername, setEditedUsername] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth().currentUser;
      if (user) {
        try {
          const doc = await firestore().collection('users').doc(user.uid).get();
          const data = doc.data();
          setUserInfo({
            email: user.email,
            username: data?.username || 'N/A',
            membershipPlan:
              data?.membershipPlan === 'day'
                ? 'Day Pass'
                : data?.membershipPlan === 'monthly'
                ? 'Monthly'
                : 'Not Set',
            profileImage: data?.profileImage || '',
          });
          setEditedUsername(data?.username || '');
        } catch (err) {
          console.log('Error fetching user info:', err);
        }
      }
      setLoading(false);
    };

    fetchUserData();
  }, []);

  const handleSave = async () => {
    const user = auth().currentUser;
    if (!editedUsername.trim()) {
      Alert.alert('Error', 'Username cannot be empty.');
      return;
    }

    try {
      await firestore().collection('users').doc(user.uid).update({
        username: editedUsername.trim(),
      });

      setUserInfo(prev => ({
        ...prev,
        username: editedUsername.trim(),
      }));
      setIsEditing(false);
      Alert.alert('Success', 'Profile updated successfully!');
    } catch (error) {
      console.log('Error updating user:', error);
      Alert.alert('Error', 'Failed to update profile.');
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#1E90FF" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={
            userInfo.profileImage
              ? {uri: userInfo.profileImage}
              : require('../../images/profile.png')
          }
          style={styles.profileImage}
        />

        {!isEditing ? (
          <TouchableOpacity
            onPress={() => setIsEditing(true)}
            style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        ) : (
          <View style={{flexDirection: 'row', gap: 10, marginTop: 10}}>
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => {
                setIsEditing(false);
                setEditedUsername(userInfo.username);
              }}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <Text style={styles.label}>Username</Text>
      {isEditing ? (
        <TextInput
          style={styles.input}
          value={editedUsername}
          onChangeText={setEditedUsername}
        />
      ) : (
        <Text style={styles.value}>{userInfo.username}</Text>
      )}

      <Text style={styles.label}>Email</Text>
      <Text style={styles.value}>{userInfo.email}</Text>

      <Text style={styles.label}>Membership Plan</Text>
      <Text style={styles.value}>{userInfo.membershipPlan}</Text>
    </ScrollView>
  );
};

export default PersonalDetails;
