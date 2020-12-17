import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const _onChangeText = (value) => {
    setTitle(value);
  };
  const _onPressBtn = () => {
    if (title.length > 0) {
      onAddTask(title);
      setTitle("");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput value={title} onChangeText={_onChangeText} style={{height : 30}}/>
      </View>
      <Button
        onPress={_onPressBtn}
        title="Ajouter"
        color="#30CE80"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  containerInput: {
    width: "75%",
    borderWidth: 1,
    borderColor: "#5C5C5C",
    borderRadius: 4,
    paddingLeft: 7,
  },
});

export default TaskForm;
