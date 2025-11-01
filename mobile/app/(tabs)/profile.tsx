import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";

const demoPhotos = [
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80&auto=format&fit=crop",
];

export default function ProfileScreen() {
  return (
    <FlatList
      style={{ backgroundColor: "#fff" }}
      contentContainerStyle={{ padding: 16 }}
      ListHeaderComponent={
        <View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
            <Image
              source={{ uri: demoPhotos[0] }}
              style={{ width: 72, height: 72, borderRadius: 36 }}
            />
            <View>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>You, 21</Text>
              <Text style={{ color: "#667085" }}>Junior • Business</Text>
            </View>
          </View>

          <Text style={s.h2}>About Me</Text>
          <Text style={s.body}>
            UW–Madison student looking to connect with the Jewish community on campus!
          </Text>

          <Text style={s.h3}>Interests</Text>
          <View style={s.chipsRow}>
            {["Entrepreneurship", "Fitness", "Reading"].map((i) => (
              <Text key={i} style={s.chip}>{i}</Text>
            ))}
          </View>

          <Text style={s.h3}>My Photos</Text>
        </View>
      }
      data={demoPhotos}
      keyExtractor={(u, i) => `${i}`}
      numColumns={3}
      columnWrapperStyle={{ gap: 8 }}
      renderItem={({ item }) => (
        <Image source={{ uri: item }} style={{ width: "32%", aspectRatio: 1, borderRadius: 8, marginBottom: 8 }} />
      )}
    />
  );
}

const s = StyleSheet.create({
  h2: { fontSize: 18, fontWeight: "700", marginTop: 16 },
  h3: { fontSize: 16, fontWeight: "700", marginTop: 12 },
  body: { color: "#667085", marginTop: 6 },
  chipsRow: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginTop: 8 },
  chip: { backgroundColor: "#F2F4F7", paddingVertical: 6, paddingHorizontal: 10, borderRadius: 999 },
});


