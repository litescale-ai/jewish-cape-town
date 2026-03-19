import { View, Text, TextInput, FlatList, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ArrowLeft, Search, ChevronRight } from "lucide-react-native";

const ORGS = [
  {
    name: "United Jewish Campaign",
    desc: "Funding the community's future",
    color: "#0f766e", // teal-700
  },
  {
    name: "Jewish Community Services",
    desc: "Social welfare and family support",
    color: "#fef3c7", // amber-100
  },
  {
    name: "CSO Cape Town",
    desc: "Protecting Jewish life and way of life",
    color: "#065f46", // emerald-800
  },
  {
    name: "Herzlia Schools",
    desc: "Educational excellence with Jewish values",
    color: "#f1f5f9", // slate-100
  },
  {
    name: "Highlands House",
    desc: "Aged care and retirement living",
    color: "#fff7ed", // orange-50
  },
  {
    name: "SAJBD Cape Council",
    desc: "Civil rights and advocacy",
    color: "#064e3b", // emerald-900
  },
  {
    name: "Kaplan Centre",
    desc: "Jewish studies and research at UCT",
    color: "#f8fafc", // slate-50
  },
  {
    name: "Mensch",
    desc: "Social change and activism",
    color: "#134e4a", // teal-900
  },
  {
    name: "SA Jewish Museum",
    desc: "Preserving heritage and history",
    color: "#115e59", // teal-800
  },
  {
    name: "Temple Israel",
    desc: "Progressive Jewish community",
    color: "#1e3a8a", // blue-900
  },
];

function OrgRow({ org }: { org: (typeof ORGS)[number] }) {
  return (
    <Pressable className="flex-row items-center gap-4 bg-white px-4 py-3 justify-between border-b border-slate-100">
      <View className="flex-row items-center gap-4 flex-1">
        <View
          className="rounded-lg w-14 h-14 items-center justify-center"
          style={{ backgroundColor: org.color }}
        >
          <View className="w-8 h-8 rounded-full bg-black/10" />
        </View>
        <View className="flex-1">
          <Text className="text-slate-900 text-base font-bold" numberOfLines={1}>
            {org.name}
          </Text>
          <Text className="text-slate-500 text-sm" numberOfLines={2}>
            {org.desc}
          </Text>
        </View>
      </View>
      <View className="ml-2">
        <ChevronRight color="#94a3b8" size={24} />
      </View>
    </Pressable>
  );
}

export default function DirectoryScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View
        className="flex-row items-center bg-white px-4 pb-2 justify-between border-b border-slate-100"
        style={{ paddingTop: insets.top + 8 }}
      >
        <Pressable className="w-10 h-10 items-center justify-center rounded-full">
          <ArrowLeft color="#0f172a" size={24} />
        </Pressable>
        <Text className="text-slate-900 text-lg font-bold flex-1 text-center pr-10">
          Community Directory
        </Text>
      </View>

      {/* Search Bar */}
      <View className="px-4 py-3 bg-white">
        <View className="flex-row w-full items-center rounded-xl h-12 ring-1 ring-slate-200 bg-slate-50 px-4">
          <Search color="#94a3b8" size={20} />
          <TextInput
            className="flex-1 ml-2 text-slate-800"
            placeholder="Search organizations..."
            placeholderTextColor="#94a3b8"
          />
        </View>
      </View>

      {/* Directory List */}
      <FlatList
        data={ORGS}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <OrgRow org={item} />}
      />
    </View>
  );
}
