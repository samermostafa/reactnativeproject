import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';

export default function Profile() {

  return (

    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>

      <Image
        source={require('../assets/logoapp.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.name}>
        Mohammed Qunoo
      </Text>

      <Text style={styles.email}>
        mohammed@gmail.com
      </Text>

      <View style={styles.card}>

        <Text style={styles.cardTitle}>
          Total Tasks
        </Text>

        <Text style={styles.cardValue}>
          12
        </Text>

      </View>

      <Pressable style={styles.editButton}>
        <Text style={styles.buttonText}>
          Edit Profile
        </Text>
      </Pressable>

      <Pressable style={styles.logoutButton}>
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
    backgroundColor: '#FFFFFF',
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
    fontWeight: 'bold',
    color: '#222',
  },

  email: {
    fontSize: 15,
    color: '#777',
    marginTop: 6,
    marginBottom: 30,
  },

  card: {
    width: '100%',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginBottom: 35,
  },

  cardTitle: {
    fontSize: 16,
    color: '#666',
  },

  cardValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#F4A825',
    marginTop: 8,
  },

  editButton: {
    width: '100%',
    backgroundColor: '#F4A825',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 15,
  },

  logoutButton: {
    width: '100%',
    backgroundColor: '#E74C3C',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },

});