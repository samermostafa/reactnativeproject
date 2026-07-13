import React, { useState } from 'react';
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
      <View style={styles.card}>

        <Text style={styles.label}>
          Due Date
        </Text>

        <Text style={styles.value}>
          15 July 2026
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
    backgroundColor: '#fff',
  },

  taskKey: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25,
  },

  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
  },

  value: {
    fontSize: 16,
    marginTop: 5,
    color: '#555',
  },
  screenTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 18,
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: '#F4A825',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#E74C3C',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginTop: 8,
  },

  descriptionInput: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
});