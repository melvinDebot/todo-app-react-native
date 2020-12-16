import React from 'react'
import { FlatList, Text } from 'react-native'

const TaskList = ({ tasks }) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => <Text>{item.title}</Text>}
      keyExtractor={item => item.title}
    />
  );
};

export default TaskList;