import { Heart, MapPin, Play, Video } from "lucide-react-native";
import { View, Text, Image, Pressable } from "react-native";

function VideoMemoryCard() {
    const data = {
        title: "Birthday Celebration",
        description: "A beautiful day spent celebrating my birthday with my closest friends. Moments I will always cherish.",
        date: "15 November 2026",
        location: "Mumbai",
        duration: "02:45",
        thumbnail: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800",
    };

    return (
        <View className="bg-white rounded-2xl border border-[#EAE9E4] overflow-hidden">

            {/* Video Thumbnail */}
            <View className="relative">
                <Image
                    source={{ uri: data.thumbnail }}
                    className="w-full h-52"
                    resizeMode="cover"
                />

                {/* Play Button */}
                <View className="absolute inset-0 items-center justify-center">
                    <Pressable className="w-14 h-14 rounded-full bg-white/90 items-center justify-center">
                        <Play size={25} color="#C16D69" fill="#C16D69" />
                    </Pressable>
                </View>

                {/* Duration */}
                <View className="absolute bottom-3 right-3 bg-black/70 px-2.5 py-1 rounded-lg">
                    <Text className="text-xs font-semibold text-white">
                        {data.duration}
                    </Text>
                </View>

                {/* Favorite */}
                <Pressable className="absolute top-3 right-3 bg-white/90 p-2 rounded-full">
                    <Heart size={19} color="#C16D69" />
                </Pressable>
            </View>

            {/* Video Details */}
            <View className="p-4 gap-3">
                <Text className="text-base font-bold text-[#303B35]">
                    {data.title}
                </Text>

                <Text
                    className="text-sm text-[#92968F] leading-5"
                    numberOfLines={3}
                >
                    {data.description}
                </Text>

                <View className="flex-row items-center justify-between">
                    <Text className="text-xs text-[#92968F]">
                        {data.date}
                    </Text>

                    <View className="flex-row items-center gap-1">
                        <MapPin size={14} color="#C16D69" />
                        <Text className="text-xs text-[#92968F]">
                            {data.location}
                        </Text>
                    </View>
                </View>
            </View>

        </View>
    );
}

export default VideoMemoryCard;



