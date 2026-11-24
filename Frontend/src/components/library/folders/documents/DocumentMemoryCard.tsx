import { Heart, FileText, Download, CalendarDays } from "lucide-react-native";
import { View, Text, Pressable } from "react-native";

function DocumentMemoryCard() {
    const data = {
        title: "College Certificate",
        description: "My final year engineering completion certificate. A memorable achievement in my academic journey.",
        fileName: "Engineering_Certificate.pdf",
        fileType: "PDF Document",
        fileSize: "2.4 MB",
        date: "15 November 2026",
    };

    return (
        <View className="bg-white rounded-2xl border border-[#EAE9E4] p-4 gap-4">

            {/* Header */}
            <View className="flex-row items-start gap-3">
                <View className="w-14 h-14 rounded-xl bg-[#F5EDE2] items-center justify-center">
                    <FileText size={27} color="#B17B45" />
                </View>

                <View className="flex-1 gap-1">
                    <Text className="text-base font-bold text-[#303B35]">
                        {data.title}
                    </Text>

                    <Text className="text-xs text-[#92968F]">
                        {data.fileType} · {data.fileSize}
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

            {/* File Details */}
            <View className="flex-row items-center justify-between bg-[#F8F7F4] p-3 rounded-xl">
                <View className="flex-1 gap-1">
                    <Text className="text-xs font-medium text-[#536B59]">
                        {data.fileName}
                    </Text>

                    <View className="flex-row items-center gap-1">
                        <CalendarDays size={13} color="#92968F" />
                        <Text className="text-xs text-[#92968F]">
                            {data.date}
                        </Text>
                    </View>
                </View>

                <Pressable className="p-2 rounded-lg bg-[#F5EDE2]">
                    <Download size={18} color="#B17B45" />
                </Pressable>
            </View>

        </View>
    );
}

export default DocumentMemoryCard;