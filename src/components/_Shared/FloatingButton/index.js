import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

const FloatingButton = ({ toggleForm, isFormOpened }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={toggleForm}>
      {isFormOpened ? <Text style={styles.title}>X</Text> : <Text style={styles.title}>+</Text>}
    </TouchableOpacity>
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
    backgroundColor: "#30CE80",
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