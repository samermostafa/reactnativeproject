import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import TaskItem from '../components/TaskItem';
import AddTask from '../components/AddTask';
import firestore from '@react-native-firebase/firestore';
import { useEffect } from 'react';
export default function Home() {
  const navigation = useNavigation();

  const [tasksItems, setTasksItems] = useState([]);
  useEffect(() => {

    const subscriber = firestore()
      .collection('tasks')
      .where('uid', '==', auth().currentUser.uid)
      .onSnapshot(querySnapshot => {

        const tasks = [];

        querySnapshot.forEach(documentSnapshot => {

          tasks.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          });

        });

        setTasksItems(tasks);

      });

    return () => subscriber();

  }, []);

  const handleAddTask = async (title, description) => {
    try {
      await firestore()
        .collection('tasks')
        .add({

          title,
          description,
          uid: auth().currentUser.uid,

        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>

      <FlatList
        data={tasksItems}
        ListHeaderComponent={
          <>
            <Text style={styles.title}>
              To Do List
            </Text>

            <AddTask onAddTask={handleAddTask} />
          </>
        }
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              navigation.navigate('TaskDetails', { task: item })
            }>
            <TaskItem item={item}/>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 10,
    backgroundColor: '#ffffff',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});