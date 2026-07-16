import React from 'react';
import COLORS from '../styles/colors';
import FONTS from '../styles/fonts';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  Alert,
  TextInput,

} from 'react-native';

export default function Profile() {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [totalTasks, setTotalTasks] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState('');

  async function handleLogout() {

    try {

      await auth().signOut();

      navigation.replace('Login');

    } catch (error) {

      Alert.alert(
        'Error',
        error.message,
      );

    }

  }
  useEffect(() => {

    const user = auth().currentUser;

    if (user) {

      setUserName(user.displayName || 'User');
      setNewName(user.displayName || 'User');
      setUserEmail(user.email || '');

    }

    const subscriber = firestore()
      .collection('tasks')
      .where('uid', '==', auth().currentUser.uid)
      .onSnapshot(snapshot => {

        setTotalTasks(snapshot.size);

      });

    return () => subscriber();

  }, []);

  async function handleEditProfile() {
    if (isEditing) {
      try {
        await auth().currentUser.updateProfile({
          displayName: newName,
        });
        setUserName(newName);
        setIsEditing(false);
        Alert.alert(
          'Success',
          'Profile updated successfully'
        );
      } catch (error) {
        Alert.alert(
          'Error',
          error.message
        );
      }
    } else {
      setIsEditing(true);
    }
  }

  return (

    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>

      <Image
        source={require('../assets/logoapp.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {isEditing ? (
        <TextInput
          style={styles.input}
          value={newName}
          onChangeText={setNewName}
        />
      ) : (
        <Text style={styles.name}>
          {userName}
        </Text>
      )}

      <Text style={styles.email}>
        {userEmail}
      </Text>

      <View style={styles.card}>

        <Text style={styles.cardTitle}>
          Total Tasks
        </Text>

        <Text style={styles.cardValue}>
          {totalTasks}
        </Text>

      </View>

      <Pressable style={styles.editButton} onPress={handleEditProfile} >
        <Text style={styles.buttonText}>
          {isEditing ? 'Save Changes' : 'Edit Profile'}
        </Text>
      </Pressable>

      <Pressable style={styles.logoutButton}
        onPress={handleLogout}>
        <Text style={styles.buttonText}>
          Logout
        </Text>
      </Pressable>

    </ScrollView>

  );

}
const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 25,
  },

  logo: {
    width: 110,
    height: 110,
    marginBottom: 20,
  },

  name: {
    fontSize: 24,
    fontFamily: FONTS.bold,
    color: COLORS.black,
  },

  email: {
    fontSize: 15,
    fontFamily: FONTS.regular,
    color: COLORS.gray,
    marginTop: 6,
    marginBottom: 30,
  },

  card: {
    width: '100%',
    backgroundColor: COLORS.lightGray,
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginBottom: 35,
  },

  cardTitle: {
    fontSize: 16,
    fontFamily: FONTS.regular,
    color: COLORS.gray,
  },

  cardValue: {
    fontSize: 32,
    fontFamily: FONTS.bold,
    color: COLORS.primary,
    marginTop: 8,
  },

  editButton: {
    width: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 15,
  },

  logoutButton: {
    width: '100%',
    backgroundColor: COLORS.danger,
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },

  buttonText: {
    color: COLORS.white,
    fontSize: 17,
    fontFamily: FONTS.bold,
  },

  input: {
    width: '100%',
    backgroundColor: COLORS.lightGray,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 18,
    fontFamily: FONTS.regular,
    color: COLORS.black,
    textAlign: 'center',
  },

});