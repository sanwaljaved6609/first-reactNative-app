import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "skyblue" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <Ionicons name="home" size={24} color={color} />
            ) : (
              <Ionicons name="home-outline" size={24} color="black" />
            );
          },
        }}
      />

      <Tabs.Screen
        name="register"
        options={{
          title: "Register",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="app-registration" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="login"
        options={{
          title: "Login",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="login" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
