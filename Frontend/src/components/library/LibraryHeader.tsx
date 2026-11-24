
import { Text, View, TouchableOpacity } from "react-native";
import { Plus } from "lucide-react-native";

function LibraryHeader() {
    return (
        <View className="flex-row justify-between items-center mb-6">
            <View className="gap-1">
                <Text className="text-2xl font-bold text-gray-900">
                    My Library
                </Text>

                <Text className="text-sm text-gray-500">
                    Your memories, beautifully organized
                </Text>
            </View>

            <TouchableOpacity
                activeOpacity={0.8}
                className="bg-violet-600 w-11 h-11 rounded-2xl items-center justify-center"
            >
                <Plus size={24} color="#FFFFFF" strokeWidth={2.5} />
            </TouchableOpacity>

        </View>
    );
}

export default LibraryHeader;



