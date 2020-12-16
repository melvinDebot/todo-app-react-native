import React from "react";
import { FlatList, Text } from "react-native";

import TaskTile from "./TaskTile";

const TaskList = ({ tasks }) => {
  const _renderItem = ({ item }) => <TaskTile title={item.title}></TaskTile>;
  return (
    <FlatList
      data={tasks}
      renderItem={_renderItem}
      keyExtractor={(item) => item.title}
    />
  );
};

export default TaskList;
