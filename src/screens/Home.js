import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import TaskItem from '../components/TaskItem';
import AddTask from '../components/AddTask';

export default function Home() {
  const navigation = useNavigation();

  const [tasksItems, setTasksItems] = useState([
    {key: 'Task 1', title: 'Task 1', description: 'Study React Native'},
    {key: 'Task 2', title: 'Task 2', description: 'Go to Gym'},
    {key: 'Task 3', title: 'Task 3', description: 'Finish Homework'},
  ]);

  const handleDelete = key => {
    setTasksItems(prevTasks =>
      prevTasks.filter(task => task.key !== key),
    );
  };

  const handleAddTask = (title, description) => {
    const newTaskNumber = tasksItems.length + 1;

    const newTask = {
      key: `Task ${newTaskNumber}`,
      title: title,
      description: description,
    };

    setTasksItems(prevTasks => [...prevTasks, newTask]);
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
        keyExtractor={item => item.key}
        renderItem={({item}) => (
          <Pressable
            onPress={() =>
              navigation.navigate('TaskDetails', {task: item})
            }>
            <TaskItem item={item} onDelete={handleDelete} />
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
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});