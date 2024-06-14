import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  FontAwesome,
  MaterialCommunityIcons,
  AntDesign,
  Entypo,
} from "@expo/vector-icons"; // or import from 'react-native-vector-icons'

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuIcon}>
        <FontAwesome name="bars" size={24} color="white" />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>EVENT WISE</Text>
      </View>
      <TouchableOpacity style={styles.menuItemActive}>
        <MaterialCommunityIcons name="view-dashboard" size={24} color="white" />
        <Text style={styles.menuTextActive}>Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <AntDesign name="calendar" size={24} color="gray" />
        <Text style={styles.menuText}>Schedule</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <AntDesign name="calendar" size={24} color="gray" />
        <Text style={styles.menuText}>Events</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <FontAwesome name="users" size={24} color="gray" />
        <Text style={styles.menuText}>Group</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Entypo name="tools" size={24} color="gray" />
        <Text style={styles.menuText}>Service Providers</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <FontAwesome name="package" size={24} color="gray" />
        <Text style={styles.menuText}>Packages</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutItem}>
        <FontAwesome name="sign-out" size={24} color="white" />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  menuIcon: {
    marginBottom: 30,
  },
  logoContainer: {
    marginBottom: 30,
    alignItems: "center",
  },
  logoText: {
    color: "#FFA500", // Orange color
    fontSize: 24,
    fontWeight: "bold",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  menuText: {
    color: "gray",
    fontSize: 18,
    marginLeft: 10,
  },
  menuItemActive: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#FFA500", // Active background color
    padding: 10,
    borderRadius: 5,
  },
  menuTextActive: {
    color: "white",
    fontSize: 18,
    marginLeft: 10,
  },
  logoutItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "auto",
    backgroundColor: "#333", // Logout button background
    padding: 10,
    borderRadius: 5,
  },
  logoutText: {
    color: "white",
    fontSize: 18,
    marginLeft: 10,
  },
});
