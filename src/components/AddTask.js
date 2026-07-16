import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';
import COLORS from '../styles/colors';
import FONTS from '../styles/fonts';
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
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 3,
  },

  input: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
    fontFamily: FONTS.regular,
    color: COLORS.black,
  },

  addButton: {
    backgroundColor: COLORS.danger,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },

  addButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: FONTS.bold,
  },

});