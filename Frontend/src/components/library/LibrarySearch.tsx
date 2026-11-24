
import { TextInput, View } from "react-native";
import { Search } from "lucide-react-native";

function LibrarySearch() {
    return (
        <View className="flex-row items-center bg-gray-100 rounded-2xl px-4 mb-5 border border-gray-200">

            <Search size={20} color="#9CA3AF" />

            <TextInput
                placeholder="Search memories, folders..."
                placeholderTextColor="#9CA3AF"
                className="flex-1 py-4 px-3 text-gray-800 text-sm"
            />

        </View>
    );
}

export default LibrarySearch;
