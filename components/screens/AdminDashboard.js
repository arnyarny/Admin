import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // or import from 'react-native-vector-icons/FontAwesome'

export default function AdminDashboard({ navigation }) {
  return (
    <ImageBackground
      source={require("../pictures/Wallpaper.png")} // Update this path if necessary
      style={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <FontAwesome name="bars" size={24} color="white" />
          <Text style={styles.headerText}>Dashboard</Text>
          <FontAwesome name="user-circle" size={24} color="white" />
        </View>
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>Welcome, Admin.</Text>
          <Text style={styles.subGreetingText}>Have a good day!</Text>
        </View>
        <TouchableOpacity style={styles.eventCard}>
          <Text style={styles.cardText}>
            A smart way to reach the right management.
          </Text>
          <TouchableOpacity style={styles.eventButton}>
            <Text style={styles.buttonText}>Create an Event</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <View style={styles.eventsHeader}>
          <Text style={styles.eventsText}>Events</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  greetingContainer: {
    marginBottom: 20,
  },
  greetingText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  subGreetingText: {
    color: "white",
    fontSize: 16,
  },
  eventCard: {
    backgroundColor: "#222", // Card background color
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  cardText: {
    color: "white",
    fontSize: 16,
    marginBottom: 10,
  },
  eventButton: {
    backgroundColor: "orange", // Button background color
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
  },
  eventsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  eventsText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  seeAllText: {
    color: "orange", // Link color
    fontSize: 16,
  },
});
