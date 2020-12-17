import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Counter = ({ nb, title }) => {
  return (
    <View>
      <Text style={styles.nb}>{nb}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nb: {
    fontWeight: "bold",
    fontSize: 20,
  },
  title: {
    color: "grey",
    fontSize: 20,
  },
});

export default Counter;
