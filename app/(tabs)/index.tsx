import { View, Text, ScrollView, Image, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Bell,
  AlertTriangle,
  Heart,
  ArrowRight,
  Calendar,
  Book,
  Building2,
  Utensils,
  Clock,
} from "lucide-react-native";

const QUICK_ACTIONS = [
  { Icon: Calendar, label: "Calendar" },
  { Icon: Book, label: "Parasha" },
  { Icon: Building2, label: "Minyan" },
  { Icon: Utensils, label: "Kosher" },
];

const EVENTS = [
  {
    id: "1",
    day: "Fri",
    date: "18",
    category: "Community",
    categoryColor: "bg-navy/10",
    categoryTextColor: "#1e3a5f",
    time: "18:30",
    title: "Community Shabbat Dinner",
    desc: "Join us for a warm evening of community, prayer, and delicious food at the Gardens Shul.",
    img: "https://images.unsplash.com/photo-1605289355680-75fb41239154?q=80&w=800&auto=format&fit=crop",
    cta: "RSVP",
  },
  {
    id: "2",
    day: "Tue",
    date: "22",
    category: "Education",
    categoryColor: "bg-gold/10",
    categoryTextColor: "#c5a459",
    time: "20:00",
    title: "Weekly Torah Classes",
    desc: "Deep dive into the weekly Parasha with Rabbi Goldstein. Refreshments served.",
    img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop",
    cta: "Learn More",
  },
];

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView className="flex-1 bg-slate-50">
      {/* Header Section */}
      <View
        className="bg-[#1e3a5f] pb-6 px-5 rounded-b-3xl overflow-hidden"
        style={{ paddingTop: insets.top + 12 }}
      >
        {/* Top Bar */}
        <View className="flex-row items-center justify-between mb-6">
          <View className="flex-row items-center gap-3">
            <View className="h-10 w-10 rounded-full bg-white/10 items-center justify-center border border-white/20">
              <Building2 color="#c5a459" size={20} />
            </View>
            <View>
              <Text className="text-white/70 text-xs font-medium uppercase tracking-wider">
                UJC Community
              </Text>
              <Text className="text-xl font-bold text-white tracking-tight">
                Shalom, Sarah
              </Text>
            </View>
          </View>
          <View className="flex-row items-center gap-3">
            <Pressable className="h-10 w-10 rounded-full bg-white/10 items-center justify-center">
              <Bell color="#ffffff" size={20} />
              <View className="absolute top-2 right-2.5 h-2 w-2 rounded-full bg-[#c5a459] border border-[#1e3a5f]" />
            </Pressable>
            <View className="h-10 w-10 rounded-full overflow-hidden border-2 border-[#c5a459]/50 bg-[#162e4d]">
              <Image
                source={{ uri: "https://i.pravatar.cc/150?img=47" }}
                className="h-full w-full"
                resizeMode="cover"
              />
            </View>
          </View>
        </View>

        {/* Emergency Button */}
        <Pressable className="w-full bg-red-600 p-4 rounded-xl flex-row items-center justify-between">
          <View className="flex-row items-center gap-3">
            <View className="bg-white/20 rounded-lg p-2">
              <AlertTriangle color="#ffffff" size={24} />
            </View>
            <View>
              <Text className="font-bold text-lg text-white leading-tight">
                CSO EMERGENCY
              </Text>
              <Text className="text-xs text-white/90 font-medium">
                Tap for immediate assistance
              </Text>
            </View>
          </View>
          <ArrowRight color="rgba(255,255,255,0.8)" size={20} />
        </Pressable>
      </View>

      <View className="px-5 pt-6 gap-6 pb-6">
        {/* Fundraising Section */}
        <View className="bg-white rounded-2xl p-5 border border-slate-100">
          <View className="flex-row items-center justify-between mb-4">
            <View>
              <Text className="font-bold text-slate-800 text-lg">
                Community Fund
              </Text>
              <Text className="text-slate-500 text-sm">Target: R110M</Text>
            </View>
            <View className="bg-[#c5a459]/10 px-3 py-1 rounded-full">
              <Text className="text-[#c5a459] text-xs font-bold">
                7.4% Reached
              </Text>
            </View>
          </View>
          <View className="mb-4">
            <View className="flex-row items-end gap-1 mb-2">
              <Text className="text-2xl font-black text-[#1e3a5f] tracking-tight">
                R8,200,000
              </Text>
              <Text className="text-sm text-slate-400 font-medium mb-1">
                raised
              </Text>
            </View>
            <View className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
              <View
                className="h-full bg-[#c5a459] rounded-full"
                style={{ width: "7.4%" }}
              />
            </View>
          </View>
          <View className="flex-row items-stretch gap-4">
            <View className="flex-1 bg-slate-50 rounded-xl p-3 items-center justify-center gap-1 border border-slate-100">
              <Heart color="#c5a459" size={20} />
              <Text className="text-xs font-semibold text-slate-600 text-center">
                Quick{"\n"}Give
              </Text>
            </View>
            <Pressable className="flex-[3] bg-[#1e3a5f] rounded-xl py-3 px-4 flex-row items-center justify-center gap-2">
              <Text className="text-white font-semibold text-sm">
                Donate Now
              </Text>
              <ArrowRight color="#ffffff" size={18} />
            </Pressable>
          </View>
        </View>

        {/* Quick Actions Grid */}
        <View className="flex-row justify-between">
          {QUICK_ACTIONS.map((action, i) => (
            <Pressable key={i} className="items-center gap-2">
              <View className="h-14 w-14 rounded-2xl bg-white border border-slate-100 items-center justify-center">
                <action.Icon color="#1e3a5f" size={24} />
              </View>
              <Text className="text-xs font-medium text-slate-600 text-center">
                {action.label}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Upcoming Events Section */}
        <View>
          <View className="flex-row items-center justify-between mb-4">
            <Text className="font-bold text-slate-800 text-lg">
              Upcoming Events
            </Text>
            <Pressable>
              <Text className="text-[#c5a459] text-sm font-semibold">
                View All
              </Text>
            </Pressable>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 16 }}
          >
            {EVENTS.map((event) => (
              <View
                key={event.id}
                className="w-72 bg-white rounded-2xl overflow-hidden border border-slate-100"
              >
                <View className="h-32 bg-slate-200 overflow-hidden">
                  <Image
                    source={{ uri: event.img }}
                    className="w-full h-full"
                    resizeMode="cover"
                  />
                  <View className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-lg">
                    <Text className="text-[#c5a459] text-center text-xs uppercase font-bold">
                      {event.day}
                    </Text>
                    <Text className="text-slate-900 text-center text-lg leading-none font-bold">
                      {event.date}
                    </Text>
                  </View>
                </View>
                <View className="p-4">
                  <View className="flex-row items-center gap-2 mb-2">
                    <View
                      className="px-2 py-0.5 rounded"
                      style={{
                        backgroundColor:
                          event.categoryTextColor === "#1e3a5f"
                            ? "rgba(30,58,95,0.1)"
                            : "rgba(197,164,89,0.1)",
                      }}
                    >
                      <Text
                        className="text-[10px] font-bold uppercase tracking-wide"
                        style={{ color: event.categoryTextColor }}
                      >
                        {event.category}
                      </Text>
                    </View>
                    <View className="flex-row items-center gap-1">
                      <Clock color="#94a3b8" size={12} />
                      <Text className="text-xs text-slate-400">
                        {event.time}
                      </Text>
                    </View>
                  </View>
                  <Text
                    className="font-bold text-slate-800 mb-1"
                    numberOfLines={1}
                  >
                    {event.title}
                  </Text>
                  <Text
                    className="text-slate-500 text-xs mb-3"
                    numberOfLines={2}
                  >
                    {event.desc}
                  </Text>
                  <Pressable className="w-full py-2 rounded-lg border border-slate-200 items-center">
                    <Text className="text-slate-600 text-xs font-semibold">
                      {event.cta}
                    </Text>
                  </Pressable>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}
