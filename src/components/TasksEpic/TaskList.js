import React from "react";
import { FlatList } from "react-native";

import TaskTile from "./TaskTile";

const TaskList = ({ tasks, onChangeStatus, onDeleteTask }) => {
  const _renderItem = ({ item }) => (
    <TaskTile
      title={item.title}
      onChangeStatus={onChangeStatus}
      id={item.id}
      completed={item.completed}
      onDeleteTask={onDeleteTask}
    ></TaskTile>
  );
  return (
    <FlatList
      data={tasks}
      renderItem={_renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default TaskList;
