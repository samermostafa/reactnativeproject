import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function TaskDetails({route}) {
  const {task} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.taskKey}>{task.key}</Text>

      <Text style={styles.label}>Title:</Text>
      <Text style={styles.value}>{task.title}</Text>

      <Text style={styles.label}>Description:</Text>
      <Text style={styles.value}>{task.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
});