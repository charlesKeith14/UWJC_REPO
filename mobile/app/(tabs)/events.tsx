import React, { useState } from "react";
import { View, Text, FlatList, Pressable, StyleSheet, Image } from "react-native";

type Event = {
  id: string;
  title: string;
  host: "Chabad" | "Hillel" | "Other";
  startAt: string;
  location: string;
  coverUrl?: string;
  attending: string[]; // avatar urls for demo
};

const demoEvents: Event[] = [
  {
    id: "e1",
    title: "Shabbat Dinner",
    host: "Chabad",
    startAt: new Date().toISOString(),
    location: "Chabad House",
    coverUrl:
      "https://images.unsplash.com/photo-1495195134817-aeb325a55b65?w=1200&q=80&auto=format&fit=crop",
    attending: [
      "https://randomuser.me/api/portraits/women/65.jpg",
      "https://randomuser.me/api/portraits/men/23.jpg",
    ],
  },
];

export default function EventsScreen() {
  const [filter, setFilter] = useState<"All" | "Chabad" | "Hillel">("All");
  const data = demoEvents.filter((e) => filter === "All" || e.host === filter);

  function onRsvp(eventId: string) {
    // TODO: call API POST /events/:id/rsvp
  }

  return (
    <View style={s.container}>
      <View style={s.filters}>
        {(["All", "Chabad", "Hillel"] as const).map((f) => (
          <Pressable key={f} onPress={() => setFilter(f)} style={[s.filter, filter === f && s.filterActive]}>
            <Text style={[s.filterText, filter === f && s.filterTextActive]}>{f}</Text>
          </Pressable>
        ))}
      </View>

      <FlatList
        data={data}
        keyExtractor={(e) => e.id}
        renderItem={({ item }) => (
          <View style={s.card}>
            {item.coverUrl && <Image source={{ uri: item.coverUrl }} style={s.cover} />}
            <Text style={s.title}>{item.title}</Text>
            <Text style={s.sub}>{item.host} • {new Date(item.startAt).toLocaleString()}</Text>
            <Text style={s.sub}>{item.location}</Text>
            <View style={s.attendingRow}>
              {item.attending.map((a, idx) => (
                <Image key={idx} source={{ uri: a }} style={s.avatar} />
              ))}
            </View>
            <Pressable onPress={() => onRsvp(item.id)} style={[s.btn, s.primary]}>
              <Text style={s.btnText}>RSVP</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  filters: { flexDirection: "row", gap: 8, marginBottom: 12 },
  filter: { paddingVertical: 6, paddingHorizontal: 12, borderRadius: 999, backgroundColor: "#F2F4F7" },
  filterActive: { backgroundColor: "#7C3AED" },
  filterText: { color: "#111827" },
  filterTextActive: { color: "#fff" },
  card: { backgroundColor: "#fff", borderRadius: 16, padding: 12, marginBottom: 12, borderWidth: 1, borderColor: "#EEF2FF" },
  cover: { width: "100%", height: 160, borderRadius: 12, marginBottom: 8 },
  title: { fontSize: 18, fontWeight: "700" },
  sub: { color: "#667085", marginTop: 2 },
  attendingRow: { flexDirection: "row", marginTop: 8 },
  avatar: { width: 28, height: 28, borderRadius: 14, marginRight: 6 },
  btn: { marginTop: 10, alignItems: "center", paddingVertical: 10, borderRadius: 10 },
  primary: { backgroundColor: "#7C3AED" },
  btnText: { color: "#fff", fontWeight: "700" },
});


