import React, {useState} from 'react'
import { View, TextInput } from 'react-native'

const TaskForm = ({ }) => {
  const [title, setTitle] = useState('')
  const _onChangeText = (value) => {
    setTitle(value)
  }
  return (
    <View>
      <TextInput value={title} onChangeText={ _onChangeText }/>
    </View>
  )
}

export default TaskForm