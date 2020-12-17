import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";

const TaskTile = ({ title, onChangeStatus, id }) => {
  return (
    <TouchableOpacity
      onPress={()=> onChangeStatus(id)}
    >
      <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image
        style={styles.icon}
        source={require("../../../assets/icon_circle.png")}
      />
      <Text style={styles.title}>{title}</Text>
      </View>
      <Image
        style={styles.icon}
        source={require("../../../assets/icon_bin.png")}
      />
    </View>
    </TouchableOpacity>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent : "center"
  },
  title: {
    marginLeft: 15,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default TaskTile;
