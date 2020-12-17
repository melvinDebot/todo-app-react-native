import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";

const TaskTile = ({ title, onChangeStatus, id, completed, onDeleteTask }) => {
  return (
    <TouchableOpacity onPress={() => onChangeStatus(id)}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Image
            style={styles.icon}
            source={completed ? require("../../../assets/icon_checked.png") : require("../../../assets/icon_circle.png")}
          />
          <Text style={[styles.title, {color: completed ? '#D0D0D0' : 'black'}]}>{title}</Text>
        </View>
        <TouchableOpacity
          onPress={()=> {onDeleteTask(id)}}
        >
          <Image
          style={styles.icon}
          source={require("../../../assets/icon_bin.png")}
        />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginLeft: 15,
    fontSize: 20,
    fontWeight : "bold"
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default TaskTile;
