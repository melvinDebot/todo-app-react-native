import React from 'react'
import { View, TextInput } from 'react-native'

const TaskForm = ({ }) => {
  const _onChangeText = (value) => {

  }
  return (
    <View>
      <TextInput value={'Enter'} onChangeText={ _onChangeText }/>
    </View>
  )
}

export default TaskForm