import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import CounterContainer from './CounterContainer';
import FloatingButton from '../_Shared/FloatingButton/index'

function TaskContainer(props) {
  const numberRandom = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const [tasks, setTasks] = useState([
    { id: numberRandom(100), title: "taskee", completed: false },
  ]);

  const [isFormOpened, setIsFormOpened] = useState(false)

  const onAddTask = (title) => {
    const newTask = { id: numberRandom(100), title: title, completed: false };
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

  const onDeleteTask = id => {
    let newTasks = []
    tasks.forEach(task => {
      if (task.id !== id) {
        newTasks.push(task)
      }
    })

    setTasks(newTasks);
  }
  const getTasksCompleted = () => {
    let counter = 0

    tasks.forEach(task => {
      if (task.completed) {
        counter++
      }
    })

    return counter
  }
  const toggleForm = () => {
    setIsFormOpened(!isFormOpened)
  }
  return (
    <View style={styles.container}>
      {isFormOpened && <TaskForm onAddTask={onAddTask} />}
      <CounterContainer nbTasks={tasks.length} nbTasksCompleted={() => getTasksCompleted()}/>
      <TaskList tasks={tasks} onChangeStatus={onChangeStatus} onDeleteTask={onDeleteTask} />
      <FloatingButton toggleForm={toggleForm} isFormOpened={isFormOpened}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
    position : "relative"
  },
});

export default TaskContainer;
