// import { View, Text } from "react-native";



// function ChatMessage() {
//     return (
//         <>
//             <View>
//                 <Text className="text-center">TOADAY 1:30 PM</Text>
//                 <View className="relative">
//                     <Text className="absolute border-2 border-black p-2 rounded-4xl" style={{top:5}} >How can I help you ?</Text>
//                     <Text className="absolute border-2 border-black p-2" style={{right:1 ,top:25}}>I want ....</Text>
//                 </View>

//             </View>
//             <hr></hr>
//         </>
//     )
// }

// export default ChatMessage;

import { View, Text } from "react-native";

function ChatMessage() {
    return (
        <View className="p-5 gap-4">

            <Text className="text-center text-xs text-gray-400">
                TODAY · 1:30 PM
            </Text>

            {/* AI message */}
            <View className="self-start bg-[#F0ECF8] p-3 rounded-2xl max-w-[85%]">
                <Text className="text-[#252334]">
                    How can I help you?
                </Text>
            </View>

            {/* User message */}
            <View className="self-end bg-[#8B72C7] p-3 rounded-2xl max-w-[85%]">
                <Text className="text-white">
                    I want to find my birthday memories.
                </Text>
            </View>

        </View>
    );
}

export default ChatMessage;