import AIHeader from "@/components/askAi/AIHeader";
import ChatInput from "@/components/askAi/ChatInput";
import ChatMessage from "@/components/askAi/ChatMessage";
import { View } from "react-native";


function AskAiPage(){
    return(
        <>
        <View>
            <AIHeader/>
            <ChatMessage/>
            <ChatInput/>
        </View>

        </>
    )

} 

export default AskAiPage;