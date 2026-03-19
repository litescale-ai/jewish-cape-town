import { View, Text } from "react-native";
import { Calendar } from "lucide-react-native";

export default function EventsScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-50 gap-4">
      <Calendar color="#94a3b8" size={48} />
      <Text className="text-slate-500 text-lg font-medium">
        Events coming soon...
      </Text>
    </View>
  );
}
