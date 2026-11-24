
// import { Heart, Pause, Play } from "lucide-react-native";
// import { Text, View, Pressable } from "react-native";

// function AudioMemoryCard() {
//     const data = {
//         name: "Birthday Recording",
//         date: new Date(),
//         duration: "02:35",  
//     };

//     return (
//         <View className="bg-white p-4 rounded-xl border border-gray-200 gap-3">

//             {/* Play and Pause */}
//             <View className="flex-row items-center gap-3">
//                 <Pressable>
//                     <Play size={22} color="#555" />
//                 </Pressable>

//                 <Pressable>
//                     <Pause size={22} color="#555" />
//                 </Pressable>

//                 {/* Recording details */}
//                 <View className="flex-1">
//                     <Text className="text-base font-semibold text-gray-900">
//                         {data.name}
//                     </Text>

//                     <Text className="text-xs text-gray-500">
//                         {data.date.toLocaleDateString()}
//                     </Text>
//                 </View>

//                 <Heart size={22} color="#888" />
//             </View>

//             {/* Recording progress view */}
//             <View>
//                 <View className="h-1.5 bg-gray-200 rounded-full">
//                     <View className="h-1.5 w-1/3 bg-blue-500 rounded-full" />
//                 </View>

//                 <View className="flex-row justify-between mt-2">
//                     <Text className="text-xs text-gray-500">00:45</Text>
//                     <Text className="text-xs text-gray-500">
//                         {data.duration}
//                     </Text>
//                 </View>
//             </View>

//         </View>
//     );
// }

// export default AudioMemoryCard;


import { Heart, Play, Headphones } from "lucide-react-native";
import { Text, View, Pressable } from "react-native";

function AudioMemoryCard() {
    const data = {
    name: "Birthday Recording",
    date: "15 November 2026",
    duration: "02:35",
};

    return (
        <View className="bg-white p-4 rounded-2xl border border-[#ECEBE6] gap-4">

            {/* Recording details */}
            <View className="flex-row items-center gap-3">

                <View className="w-12 h-12 rounded-xl bg-[#E9EEE9] items-center justify-center">
                    <Headphones size={23} color="#536B59" />
                </View>

                <View className="flex-1 gap-1">
                    <Text className="text-base font-semibold text-[#303B35]">
                        {data.name}
                    </Text>

                    <Text className="text-xs text-[#92968F]">
                        {data.date}
                    </Text>
                </View>

                <Pressable className="p-2">
                    <Heart size={21} color="#92968F" />
                </Pressable>

            </View>

            {/* Audio progress */}
            <View className="flex-row items-center gap-3">

                <Pressable className="w-10 h-10 rounded-full bg-[#536B59] items-center justify-center">
                    <Play size={18} color="#FFFFFF" fill="#FFFFFF" />
                </Pressable>

                <View className="flex-1 gap-2">

                    <View className="h-1.5 bg-[#EAECE7] rounded-full overflow-hidden">
                        <View className="h-full w-1/3 bg-[#829783] rounded-full" />
                    </View>

                    <View className="flex-row justify-between">
                        <Text className="text-xs text-[#92968F]">
                            00:45
                        </Text>

                        <Text className="text-xs text-[#92968F]">
                            {data.duration}
                        </Text>
                    </View>

                </View>
            </View>

        </View>
    );
}

export default AudioMemoryCard;
