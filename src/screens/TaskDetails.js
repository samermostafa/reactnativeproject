import React, { useState } from 'react';
import COLORS from '../styles/colors';
import FONTS from '../styles/fonts';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';

export default function TaskDetails({ route }) {
  const { task } = route.params;
  const navigation = useNavigation();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  
  async function handleDelete() {

    Alert.alert(
      'Delete Task',
      'Are you sure you want to delete this task?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {

            try {

              await firestore()
                .collection('tasks')
                .doc(task.id)
                .delete();

              navigation.goBack();

            } catch (error) {

              Alert.alert(
                'Error',
                error.message,
              );

            }

          },
        },
      ],
    );

  }
  async function handleUpdate() {

    try {

      await firestore()
        .collection('tasks')
        .doc(task.id)
        .update({
          title,
          description,
        });

      Alert.alert(
        'Success',
        'Task updated successfully'
      );

      setIsEditing(false);

    } catch (error) {

      Alert.alert(
        'Error',
        error.message
      );

    }

  }
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <Text style={styles.taskKey}>{task.key}</Text>
      <Text style={styles.screenTitle}>
        Task Details
      </Text>

      <View style={styles.card}>

        <Text style={styles.label}>
          Title
        </Text>

        {isEditing ? (
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={setTitle}
          />
        ) : (
          <Text style={styles.value}>
            {title}
          </Text>
        )}

      </View>

      <View style={styles.card}>

        <Text style={styles.label}>
          Description
        </Text>

        {isEditing ? (
          <TextInput
            style={[styles.input, styles.descriptionInput]}
            value={description}
            onChangeText={setDescription}
            multiline
          />
        ) : (
          <Text style={styles.value}>
            {description}
          </Text>
        )}

      </View>
      <View style={styles.card}>

        <Text style={styles.label}>
          Status
        </Text>

        <Text style={styles.value}>
          Pending
        </Text>

      </View>
      
      <Pressable
        style={styles.editButton}
        onPress={() => {

          if (isEditing) {
            handleUpdate();
          } else {
            setIsEditing(true);
          }

        }}>
        <Text style={styles.buttonText}>
          {isEditing ? 'Save Changes' : 'Edit Task'}
        </Text>

      </Pressable>
      <Pressable
        style={styles.deleteButton}
        onPress={handleDelete}>

        <Text style={styles.buttonText}>
          Delete Task
        </Text>

      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 40,
    backgroundColor: COLORS.white,
  },

  taskKey: {
    fontSize: 28,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    marginBottom: 25,
  },

  label: {
    fontSize: 18,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    marginTop: 15,
  },

  value: {
    fontSize: 16,
    fontFamily: FONTS.regular,
    marginTop: 5,
    color: COLORS.gray,
  },

  screenTitle: {
    fontSize: 30,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    textAlign: 'center',
    marginBottom: 30,
  },

  card: {
    backgroundColor: COLORS.lightGray,
    borderRadius: 12,
    padding: 18,
    marginBottom: 20,
  },

  editButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
  },

  buttonText: {
    color: COLORS.white,
    fontSize: 17,
    fontFamily: FONTS.bold,
  },

  deleteButton: {
    backgroundColor: COLORS.danger,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
  },

  input: {
    backgroundColor: COLORS.lightGray,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    fontFamily: FONTS.regular,
    color: COLORS.black,
    marginTop: 8,
  },

  descriptionInput: {
    minHeight: 100,
    textAlignVertical: 'top',
  },

});