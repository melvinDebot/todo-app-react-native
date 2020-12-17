import React from "react";
import { View, Text, StyleSheet } from "react-native";

const days = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];

const months = [
  "Janv",
  "Fev",
  "Mars",
  "Avril",
  "Mai",
  "Jun",
  "Juillet",
  "Aout",
  "Septembre",
  "Octobre",
  "Novembre",
  "Déc",
];

export default function Header() {
  const date = new Date();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{days[date.getDay()]} </Text>
      <Text style={styles.subTitle}>
        {date.getDate() + " " + months[date.getMonth()]}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 33,
    color: "#5C5C5C",
  },
});
