// import { TextInput, View } from "react-native";
// import { Mic, Paperclip, Send } from "lucide-react-native";



// function ChatInput() {
//     return (
//         <>
//             <View className="p-5 flex-row justify-content gap-5 mt-10">
//                 <Paperclip size={24} />
//                 <TextInput
//                     placeholder="Ask about your memories..."
//                     className="flex-1 focus-none"
//                 />
//                 <Mic size={24} />
//                 <Send size={24} />
//             </View>
//         </>
//     )
// }

// export default ChatInput;

import { TextInput, View } from "react-native";
import { Mic, Paperclip, Send } from "lucide-react-native";

function ChatInput() {
    return (
        <View className="p-3 flex-row items-center gap-3 mt-10 bg-white rounded-2xl border border-[#E4DDF0]">

            <Paperclip size={22} color="#8B72C7" />

            <TextInput
                placeholder="Ask about your memories..."
                className="flex-1 text-base"
                placeholderTextColor="#777184"
            />

            <Mic size={22} color="#8B72C7" />

            <Send size={22} color="#b15050" />
        </View>
    );
}

export default ChatInput;