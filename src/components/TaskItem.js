import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';

const TaskItem = ({ item, onDelete, onPress }) => {
  return (
    <Pressable onPress={onPress}>

      <View style={styles.container}>

        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt1LRmQ1dwCl3pVz80_mimnHMPlrpiOv4II3l0PVV4rQ&s=10',
          }}
          style={styles.image}
        />

        <View style={styles.textContainer}>

          <Text style={styles.taskNumber}>
            {item.key}
          </Text>

          <Text style={styles.title}>
            {item.title}
          </Text>

          <Text style={styles.description}>
            Description: {item.description}
          </Text>

        </View>

        <Pressable
          style={styles.deleteButton}
          onPress={() => onDelete(item.key)}
        >
          <Text style={styles.deleteText}>
            Delete
          </Text>
        </Pressable>

      </View>

    </Pressable>
  );
};

export default TaskItem;

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8c978',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },

  textContainer: {
    flex: 1,
    marginLeft: 15,
  },

  taskNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
    marginTop: 4,
  },

  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 3,
  },

  deleteButton: {
    backgroundColor: '#e53935',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },

  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
  },

});