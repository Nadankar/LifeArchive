
// import { View, Text } from "react-native";

// type MemoryHeaderProps = {
//     title: string;
//     count: number;
// };
 
// function MemoryHeader({ title, count }: MemoryHeaderProps) {
//     return (
//         <View className="flex-row items-center justify-between">
//             <Text className="text-xl font-semibold text-gray-900">
//                 {title}
//             </Text>

//             <Text className="text-sm text-gray-500">
//                 {count} memories
//             </Text>
//         </View>
//     );
// }

// export default MemoryHeader;



import { View, Text } from "react-native";

type MemoryHeaderProps = {
    title: string;
    count: number;
};

function MemoryHeader({ title, count }: MemoryHeaderProps) {
    return (
        <View className="flex-row items-center justify-between">
            <View className="gap-1">
                <Text className="text-2xl font-bold text-[#303B35]">
                    {title}
                </Text>

                <Text className="text-sm text-[#92968F]">
                    Your saved {title.toLowerCase()} memories
                </Text>
            </View>

            <View className="bg-[#E9EEE9] px-3 py-2 rounded-full">
                <Text className="text-sm font-semibold text-[#536B59]">
                    {count} memories
                </Text>
            </View>
        </View>
    );
}

export default MemoryHeader;
