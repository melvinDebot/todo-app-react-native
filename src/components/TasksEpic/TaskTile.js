import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'

const TaskTile = ({ title }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={ require('../../../assets/icon_circle.png')}/>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.icon} source={ require('../../../assets/icon_bin.png')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent : 'space-around',
    alignItems : 'center'
  },
  title: {
    marginLeft : 0
  },
  icon: {
    width: 30,
    height : 30
  }
})

export default TaskTile