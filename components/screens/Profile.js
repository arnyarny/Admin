import React from "react";
import { View, Text, Image, FlatList } from "react-native";

const ProfileSection = () => {
  return (
    <View style={styles.profileSection}>
      <Text style={styles.profileTitle}>PROFILE</Text>
      <Text style={styles.profileName}>Service Provider Name</Text>
      <Text style={styles.profileAddress}>Service Provider Address</Text>
      <Text style={styles.profileScheduleLabel}>Open</Text>
      <Text style={styles.profileScheduleTime}>06:00 am</Text>
      <Text style={styles.profileScheduleLabel}>Close</Text>
      <Text style={styles.profileScheduleTime}>09:00 pm</Text>
      <Image
        source={require("./service_provider_logo.png")}
        style={styles.profileImage}
      />
    </View>
  );
};

const EventItem = ({ title, location, date }) => {
  return (
    <View style={styles.eventItem}>
      <Text style={styles.eventTitle}>{title}</Text>
      <Text style={styles.eventLocation}>{location}</Text>
      <Text style={styles.eventDate}>{date}</Text>
    </View>
  );
};

const PopularEventsSection = () => {
  const events = [
    {
      title: "Mr. & Mrs. Malik Wedding",
      location: "Cagayan de Oro City",
      date: "23 Sept 25",
    },
    { title: "Barbella's Birthday", location: "", date: "12 Agu 23" },
    { title: "Class of 1979 Reunion", location: "25-27 July, 23", date: "" },
    {
      title: "Barbella's Debut",
      location: "Cepede Oro City",
      date: "D 12 Aug, 24",
    },
    {
      title: "Kids Party",
      location: "Cagepan de Oro City",
      date: "23 Sep, 25",
    },
  ];

  return (
    <View style={styles.popularEventsSection}>
      <Text style={styles.popularEventsTitle}>POPULAR EVENTS</Text>
      <FlatList
        data={events}
        renderItem={({ item }) => <EventItem {...item} />}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

const Profile = () => {
  return (
    <View style={styles.container}>
      <ProfileSection />
      <PopularEventsSection />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileSection: {
    backgroundColor: "#f4f4f4",
    padding: 16,
    marginBottom: 16,
  },
  profileTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  profileName: {
    fontSize: 14,
    marginBottom: 4,
  },
  profileAddress: {
    fontSize: 12,
    marginBottom: 16,
  },
  profileScheduleLabel: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 4,
  },
  profileScheduleTime: {
    fontSize: 12,
    marginBottom: 8,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  popularEventsSection: {
    padding: 16,
    marginBottom: 16,
  },
  popularEventsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  eventItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    padding: 8,
    marginBottom: 8,
  },
  eventTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
  },
  eventLocation: {
    fontSize: 12,
    marginBottom: 4,
  },
  eventDate: {
    fontSize: 12,
  },
});

export default Profile;
