import { useRouter } from "expo-router";
import { BookImage, CirclePlus, House, Sparkles, UserRound } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

function Footer() {
    const router=useRouter();
    return (
        <>
            <View>
                <View className="h-[1px] w-full bg-[#E4DDF0] mb-3" />
                <View className="flex-row gap-10 text-[#252334] justify-center px-5">

                    <View className="flex-col items-center justify-center hover:scale-110">
                        <House size={24} color="#8B72C7" />
                        <Text className="text-[#252334] text-xs mt-1">Home</Text>
                    </View>
                    <Pressable onPress={()=>router.push("/library")} className="flex-col items-center justify-center hover:scale-110">
                        <BookImage size={24} color="#8B72C7" />
                        <Text className="text-[#252334] text-xs mt-1">Liabrary</Text>
                    </Pressable>
                    <Pressable onPress={()=>router.push("/saveMemory")} className="flex-col items-center justify-center hover:scale-110   ">
                        <CirclePlus size={24} color="#8B72C7"  />
                        <Text className="text-[#252334] text-xs mt-1">Save</Text>
                    </Pressable>
                    <Pressable onPress={()=>router.push("/askAi")} className="flex-col items-center justify-center hover:scale-110">
                        <Sparkles size={24} color="#8B72C7" />
                        <Text className="text-[#252334] text-xs mt-1">Ask AI</Text>
                    </Pressable>
                    <Pressable onPress={()=> router.push("/profile")} className="flex-col items-center justify-center hover:scale-110   ">
                        <UserRound size={24} color="#8B72C7"  />
                        <Text className="text-[#252334] text-xs mt-1">Profile</Text>
                    </Pressable>

                </View>
            </View>
        </>
    )

}

export default Footer;