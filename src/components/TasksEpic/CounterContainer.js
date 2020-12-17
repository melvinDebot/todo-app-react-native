import React from 'react'
import { View, StyleSheet } from 'react-native'

import Counter from '../_Shared/Counter/index'

const CounterContainer = ({nbTasks, nbTasksCompleted}) => {
  return (
    <View style={styles.container}>
      <Counter nb={nbTasks} title={'Taches crée'} />
      <Counter nb={nbTasksCompleted()} title={ 'Taches valider'}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom : 15
  }
})

export default CounterContainer;