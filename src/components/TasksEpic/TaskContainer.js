import React, {useState} from 'react'
import { View } from 'react-native'

import TaskList from './TaskList'
import TaskForm from './TaskForm'

function TaskContainer() {
  const [tasks, setTasks] = useState([
    { title : 'taskee', completed : false}
  ])
  return (
    <View>
      <TaskForm />
      <TaskList tasks={tasks} />
    </View>
  )
}

export default TaskContainer