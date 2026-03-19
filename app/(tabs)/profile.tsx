import { View, Text, ScrollView, Image, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  ArrowLeft,
  Settings,
  Edit2,
  Mail,
  Phone,
  Plus,
  ChevronRight,
  GraduationCap,
  Building2,
  Heart,
  PlusCircle,
} from "lucide-react-native";

const FAMILY = [
  {
    name: "David Cohen",
    role: "Spouse",
    img: "https://i.pravatar.cc/150?img=11",
    initial: null,
  },
  {
    name: "Leah Cohen",
    role: "Child",
    img: null,
    initial: "L",
  },
];

const AFFILIATIONS = [
  { Icon: GraduationCap, name: "Herzlia", role: "Alumni" },
  { Icon: Building2, name: "UOS", role: "Member" },
  { Icon: Heart, name: "CSO", role: "Volunteer" },
];

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView className="flex-1 bg-slate-50">
      {/* Header */}
      <View
        className="flex-row items-center justify-between px-4 py-3 bg-white border-b border-slate-100"
        style={{ paddingTop: insets.top + 8 }}
      >
        <Pressable className="p-2 rounded-full">
          <ArrowLeft color="#1e293b" size={24} />
        </Pressable>
        <Text className="text-lg font-bold text-[#1e3a5f] flex-1 text-center">
          Profile
        </Text>
        <Pressable className="p-2 rounded-full">
          <Settings color="#1e293b" size={24} />
        </Pressable>
      </View>

      {/* Profile Info */}
      <View className="items-center pt-8 pb-6 px-4 bg-white">
        <View className="relative">
          <View className="h-28 w-28 rounded-full border-4 border-white overflow-hidden">
            <Image
              source={{ uri: "https://i.pravatar.cc/150?img=47" }}
              className="h-full w-full"
              resizeMode="cover"
            />
          </View>
          <View className="absolute bottom-1 right-1 bg-[#c5a459] p-1.5 rounded-full border-2 border-white items-center justify-center">
            <Edit2 color="#ffffff" size={14} />
          </View>
        </View>
        <Text className="mt-4 text-2xl font-bold text-slate-800">
          Sarah Cohen
        </Text>
        <View className="mt-2 items-center gap-1">
          <View className="flex-row items-center gap-2">
            <Mail color="#64748b" size={16} />
            <Text className="text-slate-500 text-sm">
              sarah.cohen@example.com
            </Text>
          </View>
          <View className="flex-row items-center gap-2">
            <Phone color="#64748b" size={16} />
            <Text className="text-slate-500 text-sm">+27 82 123 4567</Text>
          </View>
        </View>
      </View>

      {/* Stats / Contribution History */}
      <View className="px-4 py-2">
        <View className="bg-[#1e3a5f] rounded-xl p-5 overflow-hidden">
          {/* Decorative circles */}
          <View className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full" />
          <View className="absolute -left-2 -bottom-2 w-16 h-16 bg-[#c5a459]/20 rounded-full" />

          <View className="flex-row justify-between items-center mb-4 border-b border-white/10 pb-4">
            <Text className="font-medium text-white/90">
              Contribution History
            </Text>
            <View className="bg-white/20 px-2 py-1 rounded">
              <Text className="text-xs text-white font-medium">2023</Text>
            </View>
          </View>

          <View className="flex-row justify-between">
            <View className="flex-1 items-center gap-1">
              <Text className="text-xs text-blue-200">Total Given</Text>
              <Text className="text-lg font-bold text-[#c5a459]">
                R 12,500
              </Text>
            </View>
            <View className="w-px bg-white/10" />
            <View className="flex-1 items-center gap-1">
              <Text className="text-xs text-blue-200">Events</Text>
              <Text className="text-lg font-bold text-white">14</Text>
            </View>
            <View className="w-px bg-white/10" />
            <View className="flex-1 items-center gap-1">
              <Text className="text-xs text-blue-200">Years Active</Text>
              <Text className="text-lg font-bold text-white">5</Text>
            </View>
          </View>
        </View>
      </View>

      {/* My Family Section */}
      <View className="px-4 mt-6">
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-lg font-bold text-slate-800">My Family</Text>
          <Pressable className="flex-row items-center gap-1">
            <Text className="text-[#1e3a5f] text-sm font-medium">
              Add Member
            </Text>
            <Plus color="#1e3a5f" size={16} />
          </Pressable>
        </View>
        <View className="gap-3">
          {FAMILY.map((member) => (
            <View
              key={member.name}
              className="bg-white rounded-lg p-3 flex-row items-center gap-4 border border-slate-100"
            >
              {member.img ? (
                <Image
                  source={{ uri: member.img }}
                  className="h-12 w-12 rounded-full"
                  resizeMode="cover"
                />
              ) : (
                <View className="h-12 w-12 rounded-full bg-indigo-50 items-center justify-center">
                  <Text className="text-[#1e3a5f] font-bold text-lg">
                    {member.initial}
                  </Text>
                </View>
              )}
              <View className="flex-1">
                <Text className="text-slate-800 font-semibold">
                  {member.name}
                </Text>
                <Text className="text-xs text-slate-500">{member.role}</Text>
              </View>
              <Pressable className="p-2">
                <ChevronRight color="#94a3b8" size={20} />
              </Pressable>
            </View>
          ))}
        </View>
      </View>

      {/* Affiliations */}
      <View className="px-4 mt-8 mb-6">
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-lg font-bold text-slate-800">Affiliations</Text>
          <Pressable>
            <Text className="text-[#1e3a5f] text-sm font-medium">
              View All
            </Text>
          </Pressable>
        </View>
        <View className="flex-row flex-wrap gap-3">
          {AFFILIATIONS.map((aff) => (
            <View
              key={aff.name}
              className="bg-white p-4 rounded-xl border border-slate-100 items-center gap-3"
              style={{ width: "47%" }}
            >
              <View className="h-12 w-12 rounded-full bg-blue-50 items-center justify-center">
                <aff.Icon color="#1e3a5f" size={24} />
              </View>
              <View className="items-center">
                <Text className="font-bold text-sm text-slate-800">
                  {aff.name}
                </Text>
                <Text className="text-xs text-slate-500 mt-1">{aff.role}</Text>
              </View>
            </View>
          ))}
          <Pressable
            className="bg-slate-50 p-4 rounded-xl border border-dashed border-slate-300 items-center justify-center gap-2"
            style={{ width: "47%" }}
          >
            <PlusCircle color="#94a3b8" size={24} />
            <Text className="font-medium text-xs text-slate-500">Add Org</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
