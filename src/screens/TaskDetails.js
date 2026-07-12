import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TaskDetails({ route }) {
  const { task } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.taskKey}>{task.key}</Text>
      <Text style={styles.screenTitle}>
        Task Details
      </Text>

      <View style={styles.card}>

        <Text style={styles.label}>
          Title
        </Text>

        <Text style={styles.value}>
          {task.title}
        </Text>

      </View>

      <View style={styles.card}>

        <Text style={styles.label}>
          Description
        </Text>

        <Text style={styles.value}>
          {task.description}
        </Text>

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
        onPress={() => { }}>

        <Text style={styles.buttonText}>
          Edit Task
        </Text>

      </Pressable>
      <Pressable
        style={styles.deleteButton}
        onPress={() => { }}>

        <Text style={styles.buttonText}>
          Delete Task
        </Text>

      </Pressable>
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
});