import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const FloatingButton = ({ }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>+</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: "orange",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    fontSize : 35
  }
})

export default FloatingButton