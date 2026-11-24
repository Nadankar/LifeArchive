import { Heart, Link as LinkIcon, ExternalLink, Globe } from "lucide-react-native";
import { View, Text, Pressable } from "react-native";

function LinkMemoryCard() {
    const data = {
        title: "React Native Documentation",
        description: "A useful resource for learning React Native components, navigation and building mobile applications.",
        url: "reactnative.dev",
        fullUrl: "https://reactnative.dev",
        date: "15 November 2026",
    };

    return (
        <View className="bg-white rounded-2xl border border-[#EAE9E4] p-4 gap-4">

            {/* Header */}
            <View className="flex-row items-start gap-3">
                <View className="w-12 h-12 rounded-xl bg-[#F2EAF5] items-center justify-center">
                    <Globe size={23} color="#9366A8" />
                </View>

                <View className="flex-1 gap-1">
                    <Text className="text-base font-bold text-[#303B35]">
                        {data.title}
                    </Text>

                    <Text className="text-xs text-[#9366A8]">
                        {data.url}
                    </Text>
                </View>

                <Pressable className="p-2">
                    <Heart size={21} color="#C16D69" />
                </Pressable>
            </View>

            {/* Description */}
            <Text
                className="text-sm text-[#92968F] leading-5"
                numberOfLines={3}
            >
                {data.description}
            </Text>

            {/* Link Preview */}
            <View className="flex-row items-center justify-between bg-[#F2EAF5] p-3 rounded-xl">
                <View className="flex-row items-center gap-2 flex-1">
                    <LinkIcon size={16} color="#9366A8" />
                    <Text
                        className="text-xs font-medium text-[#9366A8] flex-1"
                        numberOfLines={1}
                    >
                        {data.fullUrl}
                    </Text>
                </View>

                <Pressable className="p-2">
                    <ExternalLink size={18} color="#9366A8" />
                </Pressable>
            </View>

            {/* Date */}
            <Text className="text-xs text-[#92968F]">
                Saved on {data.date}
            </Text>

        </View>
    );
}

export default LinkMemoryCard;