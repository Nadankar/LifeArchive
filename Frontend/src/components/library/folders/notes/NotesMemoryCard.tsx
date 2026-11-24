import { Heart, FileText } from "lucide-react-native";
import { View, Text, Pressable } from "react-native";

function NotesMemoryCard() {
    const data = {
        title: "A Beautiful Thought",
        description:
            "Life is made up of little moments. Sometimes the smallest memories become the biggest treasures. I want to remember every beautiful moment.",
        date: "15 November 2026",
    };

    return (
        <View className="bg-white rounded-2xl border border-[#EAE9E4] p-4 gap-3">

            {/* Header */}
            <View className="flex-row items-center justify-between">
                <View className="flex-1 gap-1">
                    <Text className="text-base font-bold text-[#303B35]">
                        {data.title}
                    </Text>
                    <Text className="text-xs text-[#92968F]">
                        {data.date}
                    </Text>
                </View>

                <Pressable className="p-2">
                    <Heart size={21} color="#C16D69" />
                </Pressable>
            </View>

            {/* Note Content */}
            <Text
                className="text-sm text-[#737970] leading-6"
                numberOfLines={5}
            >
                {data.description}
            </Text>

        </View>
    );
}

export default NotesMemoryCard;