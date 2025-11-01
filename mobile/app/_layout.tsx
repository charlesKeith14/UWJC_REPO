import React from "react";
import { Tabs, Slot } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="(tabs)/connect" options={{ title: "Connect" }} />
        <Tabs.Screen name="(tabs)/events" options={{ title: "Events" }} />
        <Tabs.Screen name="(tabs)/profile" options={{ title: "My Profile" }} />
      </Tabs>
      <Slot />
    </SafeAreaProvider>
  );
}


