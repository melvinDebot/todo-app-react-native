import React from "react";
import { FlatList, Text } from "react-native";

import TaskTile from "./TaskTile";

const TaskList = ({ tasks, onChangeStatus }) => {
  const _renderItem = ({ item }) => <TaskTile title={item.title} onChangeStatus={onChangeStatus} id={item.id}></TaskTile>;
  return (
    <FlatList
      data={tasks}
      renderItem={_renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default TaskList;
