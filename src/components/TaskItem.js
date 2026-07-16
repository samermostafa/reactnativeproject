import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';
import COLORS from '../styles/colors';
import FONTS from '../styles/fonts';

const TaskItem = ({ item, onDelete, onPress }) => {
  return (
    <Pressable onPress={onPress}>

      <View style={styles.container}>

        <Image
          source={require ('../assets/logootask.png')}
          style={styles.image}
        />

        <View style={styles.textContainer}>

          <Text style={styles.title}>
            {item.title}
          </Text>

          <Text style={styles.description}>
            Description: {item.description}
          </Text>

        </View>

      </View>

    </Pressable>
  );
};

export default TaskItem;

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
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
    fontFamily: FONTS.bold,
    color: COLORS.black,
  },

  title: {
    fontSize: 16,
    fontFamily: FONTS.semiBold,
    color: COLORS.black,
    marginTop: 4,
  },

  description: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.gray,
    marginTop: 3,
  },

  deleteButton: {
    backgroundColor: COLORS.danger,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },

  deleteText: {
    color: COLORS.white,
    fontSize: 14,
    fontFamily: FONTS.bold,
  },

});