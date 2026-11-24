


import { Heart, MapPin, Image } from "lucide-react-native";
import { View, Text, Image as RNImage, Pressable } from "react-native";

function PhotoMemoryCard() {
    const data = {
        title: "Beautiful Memories",
        date: "15 November 2026",
        location: "Mumbai, Maharashtra",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
    };

    return (
        <View className="bg-white rounded-2xl border border-[#EAE9E4] overflow-hidden">

            {/* Photo */}
            <View className="relative">
                <RNImage
                    source={{ uri: data.image }}
                    className="w-full h-52"
                    resizeMode="cover"
                />


                <Pressable className="absolute top-3 right-3 bg-white/90 p-2 rounded-full">
                    <Heart size={19} color="#C16D69" />
                </Pressable>
            </View>

            {/* Details */}
            <View className="p-4 gap-3">
                <Text className="text-base font-bold text-[#303B35]">
                    {data.title}
                </Text>

                <View className="flex-row items-center justify-between">
                    <Text className="text-xs text-[#92968F]">
                        {data.date}
                    </Text>

                    <View className="flex-row items-center gap-1">
                        <MapPin size={14} color="#5876B8" />
                        <Text className="text-xs text-[#92968F]">
                            {data.location}
                        </Text>
                    </View>
                </View>
            </View>

        </View>
    );
}

export default PhotoMemoryCard;