import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

function TaskContainer(props) {
  const [tasks, setTasks] = useState([
    { id: new Date().getTime, title: "taskee", completed: false },
  ]);

  const onAddTask = (title) => {
    const newTask = { id: new Date().getTime, title: title, completed: false };
    setTasks([newTask, ...tasks]);
  };

  const onChangeStatus = (id) => {
    let newTasks = [];
    tasks.forEach((task) => {
      if (task.id === id) {
        newTasks.push({
          id: id,
          title: task.title,
          completed: !task.completed,
        });
      } else {
        newTasks.push(task);
      }
    });

    setTasks(newTasks);
  };
  return (
    <View style={styles.container}>
      <TaskForm onAddTask={onAddTask} />
      <TaskList tasks={tasks} onChangeStatus={onChangeStatus} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default TaskContainer;
