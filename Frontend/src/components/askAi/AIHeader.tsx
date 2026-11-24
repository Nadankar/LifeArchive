// import { Text, View } from "react-native";


// function AIHeader() {
//     return (
//         <>
//             <View>
//                 <Text>LifeArchive AiChatbot</Text>
//                 <Text>Your personal assistant</Text>
//             </View>
//             <View>
//                 <Text>online</Text>
//             </View>
//             <hr></hr>
//         </>
//     )
// }

// export default AIHeader;


import { Text, View } from "react-native";

function AIHeader() {
    return (
        <View className="p-5">

            <View className="flex-row justify-between items-center">

                {/* Chatbot details */}
                <View>
                    <Text className="text-lg font-bold text-[#252334]">
                        LifeArchive AI
                    </Text>

                    <Text className="text-sm text-[#777184]">
                        Your personal assistant
                    </Text>
                </View>

                {/* Online status */}
                <View className="flex-row items-center gap-2">
                    <View className="h-2 w-2 rounded-full bg-green-500" />
                    <Text className="text-sm text-green-600">
                        Online
                    </Text>
                </View>

            </View>

            {/* Divider */}
            <View className="h-px bg-[#E4DDF0] mt-4" />

        </View>
    );
}

export default AIHeader;

