import { Tabs } from "expo-router";
import { View, Pressable } from "react-native";
import { Home, BookOpen, Heart, Calendar, User } from "lucide-react-native";

const NAVY = "#1e3a5f";
const GOLD = "#c5a459";
const INACTIVE = "#94a3b8"; // slate-400

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: NAVY,
        tabBarInactiveTintColor: INACTIVE,
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "600",
        },
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderTopWidth: 1,
          borderTopColor: "#e2e8f0",
          paddingBottom: 8,
          paddingTop: 4,
          height: 70,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.05,
          shadowRadius: 6,
          elevation: 8,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Home
              size={24}
              color={color}
              strokeWidth={focused ? 2.5 : 2}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="directory"
        options={{
          title: "Directory",
          tabBarIcon: ({ color, focused }) => (
            <BookOpen
              size={24}
              color={color}
              strokeWidth={focused ? 2.5 : 2}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="donations"
        options={{
          title: "Donate",
          tabBarIcon: ({ focused }) => (
            <View
              className={`h-12 w-12 -mt-4 rounded-full shadow-lg items-center justify-center border-4 border-white ${
                focused ? "bg-navy" : "bg-gold"
              }`}
            >
              <Heart
                size={24}
                color="#ffffff"
                fill={focused ? "#ffffff" : "transparent"}
              />
            </View>
          ),
          tabBarButton: (props) => (
            <Pressable
              {...props}
              style={[
                typeof props.style === "object" ? props.style : {},
                { flex: 1, alignItems: "center", justifyContent: "center" },
              ]}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          title: "Events",
          tabBarIcon: ({ color, focused }) => (
            <Calendar
              size={24}
              color={color}
              strokeWidth={focused ? 2.5 : 2}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <User
              size={24}
              color={color}
              strokeWidth={focused ? 2.5 : 2}
            />
          ),
        }}
      />
    </Tabs>
  );
}
