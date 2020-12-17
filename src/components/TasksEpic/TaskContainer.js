import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

function TaskContainer() {
  const [tasks, setTasks] = useState([{ title: "taskee", completed: false }]);

  const onAddTask = (title) => {
    const newTask = {title : title, completed : false}
    setTasks([newTask, ...tasks])
  }
  return (
    <View style={styles.container}>
      <TaskForm onAddTask={onAddTask}/>
      <TaskList tasks={tasks} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight : 10
  }
})

export default TaskContainer;
