import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

type Profile = {
  id: string;
  name: string;
  age?: number;
  avatarUrl: string;
  interests: string[];
  about?: string;
};

const demo: Profile[] = [
  {
    id: "1",
    name: "You",
    age: 21,
    avatarUrl:
      "https://images.unsplash.com/photo-1512353087810-25dfcd100962?w=1200&q=80&auto=format&fit=crop",
    interests: ["Entrepreneurship", "Fitness", "Reading"],
    about:
      "UW–Madison student looking to connect with the Jewish community on campus!",
  },
];

export default function ConnectScreen() {
  const [index, setIndex] = useState(0);
  const current = demo[index % demo.length];

  function onConnect() {
    // TODO: call API: POST /connect/like
    setIndex((i) => i + 1);
  }

  function onNext() {
    // TODO: call API: POST /connect/pass
    setIndex((i) => i + 1);
  }

  return (
    <View style={s.container}>
      <View style={s.card}>
        <Image source={{ uri: current.avatarUrl }} style={s.avatar} />
        <Text style={s.title}>
          {current.name}
          {current.age ? `, ${current.age}` : ""}
        </Text>
        <Text style={s.about}>{current.about}</Text>
        <View style={s.chipsRow}>
          {current.interests.map((i) => (
            <Text key={i} style={s.chip}>
              {i}
            </Text>
          ))}
        </View>
      </View>

      <View style={s.actions}>
        <Pressable onPress={onNext} style={[s.btn, s.secondary]}>
          <Text style={[s.btnText, s.secondaryText]}>Next</Text>
        </Pressable>
        <Pressable onPress={onConnect} style={[s.btn, s.primary]}>
          <Text style={s.btnText}>Connect</Text>
        </Pressable>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  card: { backgroundColor: "#fff", borderRadius: 16, overflow: "hidden" },
  avatar: { width: "100%", height: 360 },
  title: { fontSize: 22, fontWeight: "700", marginTop: 12 },
  about: { color: "#667085", marginTop: 6 },
  chipsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 12,
    marginBottom: 8,
  },
  chip: {
    backgroundColor: "#F2F4F7",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 999,
  },
  actions: {
    flexDirection: "row",
    gap: 12,
    marginTop: 16,
    justifyContent: "space-between",
  },
  btn: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  primary: { backgroundColor: "#7C3AED" },
  secondary: { backgroundColor: "#EEF2FF" },
  btnText: { color: "white", fontWeight: "700" },
  secondaryText: { color: "#3730A3" },
});


