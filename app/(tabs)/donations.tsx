import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  Pressable,
  Modal,
  Switch,
  ImageBackground,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  ArrowLeft,
  Filter,
  Search,
  Receipt,
  Heart,
  Gift,
  X,
  ArrowRight,
} from "lucide-react-native";

interface Org {
  id: string;
  name: string;
  desc: string;
  img: string;
}

const ORGS: Org[] = [
  {
    id: "ujc",
    name: "UJC",
    desc: "Umbrella Body for Cape Town Jewry",
    img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "cso",
    name: "CSO",
    desc: "Protecting Jewish Life & Community",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "chev",
    name: "Chevrah Kadisha",
    desc: "Welfare & Social Services Support",
    img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "herzlia",
    name: "Herzlia",
    desc: "Jewish Education & Values",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "ort",
    name: "ORT JET",
    desc: "Business Mentorship & Growth",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "cjc",
    name: "Cape Jewish Chronicle",
    desc: "Community News & Voice",
    img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=400&auto=format&fit=crop",
  },
];

const AMOUNTS = ["R100", "R250", "R500", "R1000"];

const FILTERS = ["All", "Education", "Security", "Welfare"];

function OrgCard({ org, onDonate }: { org: Org; onDonate: (org: Org) => void }) {
  return (
    <View className="bg-white rounded-xl overflow-hidden border border-slate-100 flex-1 m-1">
      <View className="aspect-video w-full bg-slate-100">
        <Image
          source={{ uri: org.img }}
          className="w-full h-full"
          resizeMode="cover"
        />
        <View className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <View className="absolute bottom-2 left-2 bg-white/90 px-2 py-0.5 rounded">
          <Text className="text-xs font-bold text-slate-800">
            {org.name.split(" ")[0]}
          </Text>
        </View>
      </View>
      <View className="p-3 flex-1">
        <Text className="font-bold text-slate-800 text-base leading-tight">
          {org.name}
        </Text>
        <Text className="text-xs text-slate-500 mt-1" numberOfLines={2}>
          {org.desc}
        </Text>
        <Pressable
          onPress={() => onDonate(org)}
          className="mt-3 w-full py-2 bg-[#c5a459] rounded-lg flex-row items-center justify-center gap-1"
        >
          <Text className="text-white text-sm font-bold">Donate</Text>
          <Heart color="#ffffff" size={14} fill="#ffffff" />
        </Pressable>
      </View>
    </View>
  );
}

export default function DonationsScreen() {
  const insets = useSafeAreaInsets();
  const [showModal, setShowModal] = useState(false);
  const [selectedOrg, setSelectedOrg] = useState<Org | null>(null);
  const [selectedAmount, setSelectedAmount] = useState("R250");
  const [isGift, setIsGift] = useState(false);

  const handleDonateClick = (org: Org) => {
    setSelectedOrg(org);
    setShowModal(true);
  };

  // Build 2-column grid rows manually for ScrollView
  const rows: Org[][] = [];
  for (let i = 0; i < ORGS.length; i += 2) {
    rows.push(ORGS.slice(i, i + 2));
  }

  return (
    <View className="flex-1 bg-slate-50">
      {/* Header */}
      <View
        className="flex-row items-center justify-between px-4 py-4 bg-white border-b border-slate-100"
        style={{ paddingTop: insets.top + 8 }}
      >
        <View className="flex-row items-center gap-3">
          <Pressable className="w-10 h-10 items-center justify-center rounded-full">
            <ArrowLeft color="#0f172a" size={24} />
          </Pressable>
          <Text className="text-xl font-bold text-slate-800">Donations</Text>
        </View>
        <Pressable className="w-10 h-10 items-center justify-center rounded-full">
          <Filter color="#0f172a" size={20} />
        </Pressable>
      </View>

      <ScrollView className="flex-1">
        {/* Search Section */}
        <View className="px-4 pt-4 pb-2 bg-white">
          <View className="flex-row items-center bg-slate-100 rounded-xl px-3 h-12">
            <Search color="#94a3b8" size={18} />
            <TextInput
              className="flex-1 ml-2 text-slate-800"
              placeholder="Search organizations (e.g., CSO, Herzlia)"
              placeholderTextColor="#94a3b8"
            />
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 8, paddingTop: 12, paddingBottom: 8 }}
          >
            {FILTERS.map((filter, i) => (
              <Pressable
                key={filter}
                className={`px-4 py-1.5 rounded-full ${
                  i === 0
                    ? "bg-[#1e3a5f]"
                    : "bg-white border border-slate-200"
                }`}
              >
                <Text
                  className={`text-sm font-medium ${
                    i === 0 ? "text-white" : "text-slate-600"
                  }`}
                >
                  {filter}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        {/* Tax Note */}
        <View className="px-4 mt-4 mb-2">
          <View className="bg-[#1e3a5f]/5 border border-[#1e3a5f]/10 rounded-lg p-3 flex-row items-start gap-3">
            <Receipt color="#1e3a5f" size={20} />
            <View className="flex-1">
              <Text className="text-sm font-semibold text-[#1e3a5f]">
                Tax Deductible
              </Text>
              <Text className="text-xs text-slate-500 mt-0.5">
                All donations are eligible for a Section 18A tax receipt.
              </Text>
            </View>
          </View>
        </View>

        <Text className="px-4 pt-4 pb-2 text-lg font-bold text-slate-800">
          Support Our Community
        </Text>

        {/* Org Grid (2-col) */}
        <View className="px-3 pb-4">
          {rows.map((row, ri) => (
            <View key={ri} className="flex-row">
              {row.map((org) => (
                <OrgCard key={org.id} org={org} onDonate={handleDonateClick} />
              ))}
              {row.length === 1 && <View className="flex-1 m-1" />}
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Donation Modal */}
      <Modal
        visible={showModal}
        transparent
        animationType="slide"
        onRequestClose={() => setShowModal(false)}
      >
        <Pressable
          className="flex-1 bg-black/40"
          onPress={() => setShowModal(false)}
        />
        <View className="bg-white rounded-t-2xl p-6 pb-10">
          <View className="flex-row justify-between items-center mb-3">
            <Text className="font-bold text-lg text-slate-800">
              Donate to {selectedOrg?.name}
            </Text>
            <Pressable onPress={() => setShowModal(false)}>
              <X color="#94a3b8" size={24} />
            </Pressable>
          </View>

          <Text className="text-sm text-slate-500 mb-3">
            Choose an amount to donate
          </Text>

          {/* Amount Buttons */}
          <View className="flex-row gap-2 mb-4">
            {AMOUNTS.map((amount) => (
              <Pressable
                key={amount}
                onPress={() => setSelectedAmount(amount)}
                className={`flex-1 py-2 rounded-lg border items-center ${
                  selectedAmount === amount
                    ? "border-[#1e3a5f] bg-[#1e3a5f]"
                    : "border-[#1e3a5f]/20 bg-[#1e3a5f]/5"
                }`}
              >
                <Text
                  className={`text-sm font-semibold ${
                    selectedAmount === amount
                      ? "text-white font-bold"
                      : "text-[#1e3a5f]"
                  }`}
                >
                  {amount}
                </Text>
              </Pressable>
            ))}
          </View>

          {/* Custom Amount */}
          <View className="flex-row items-center bg-slate-50 border border-slate-200 rounded-lg mb-4 px-3">
            <Text className="text-slate-500 font-semibold mr-1">R</Text>
            <TextInput
              className="flex-1 py-3 text-slate-800 font-bold"
              placeholder="Other Amount"
              placeholderTextColor="#94a3b8"
              keyboardType="numeric"
            />
          </View>

          {/* Gift Toggle */}
          <View className="flex-row items-center justify-between mb-6 p-3 bg-slate-50 rounded-lg border border-slate-100">
            <View className="flex-row items-center gap-2">
              <Gift color="#c5a459" size={20} />
              <Text className="text-sm font-medium text-slate-800">
                Send as a Gift
              </Text>
            </View>
            <Switch
              value={isGift}
              onValueChange={setIsGift}
              trackColor={{ false: "#cbd5e1", true: "#c5a459" }}
              thumbColor="#ffffff"
            />
          </View>

          {/* Confirm Button */}
          <Pressable className="w-full py-3.5 bg-[#1e3a5f] rounded-xl flex-row items-center justify-center gap-2">
            <Text className="text-white text-base font-bold">
              Confirm Donation ({selectedAmount})
            </Text>
            <ArrowRight color="#ffffff" size={20} />
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}
