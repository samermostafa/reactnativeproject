import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';

export default function AddTask({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTask = () => {
    if (
      title.trim() === '' ||
      description.trim() === ''
    ) {
      return;
    }
    onAddTask(
      title,
      description,
    );
    setTitle('');
    setDescription('');

  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Task Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />

      <TextInput
        placeholder="Task Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />

      <Pressable style={styles.addButton} onPress={handleAddTask}>
        <Text style={styles.addButtonText}>Add Task</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8c978',
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 3,
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d9a441',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },

  addButton: {
    backgroundColor: '#e53935',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },

  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});