import { useRouter } from "expo-router";
import { useAuth } from "@/context/AuthContext";
import { Camera, Folders, Heart, UserRound, ChevronRight, LockKeyhole, Settings, CircleQuestionMark, LogOut } from "lucide-react-native";
import { Image, Pressable, Text, View } from "react-native";

function ProfileHeader() {
    const router = useRouter();
    const { logout } = useAuth();

    const features = [
        {
            id: 1,
            icon: Camera,
            count: 30,
            description: "Memories"
        },
        {
            id: 2,
            icon: Folders,
            count: 10,
            description: "Folders"
        },
        {
            id: 3,
            icon: Heart,
            count: 380,
            description: "Favourite"
        }
    ]

    const accountOptions = [
        {
            id: 1,
            icon: UserRound,
            mainText: "Personal Information",
            subtext: "Update your details"
        },
        {
            id: 2,
            icon: LockKeyhole,
            mainText: "Change password",
            subtext: "Keep your account secure"
        },
        {
            id: 3,
            icon: Settings,
            mainText: "Setting",
            subtext: "Customize your app experience"
        },
        {
            id: 4,
            icon: CircleQuestionMark,
            mainText: "Help & Support",
            subtext: "Get help or contact us"
        }
    ]



    return (

        <>
            <View className="flex-1 bg-[#FAF7F3] px-5 py-6">

                {/* Header */}
                <View className="mb-6">
                    <Text className="text-2xl font-bold text-[#352C27]">
                        My Profile
                    </Text>
                    <Text className="mt-1 text-sm text-[#8A7C72]">
                        Manage your account and preferences
                    </Text>
                </View>

                {/* Profile Card */}
                <View className="flex-row items-center rounded-2xl border border-[#E7DDD2] bg-white p-5">
                    <Image
                        source={{
                            uri: "https://images.unsplash.com/photo-1676385901228-64ad87402847?w=500&auto=format&fit=crop&q=60",
                        }}
                        className="h-20 w-20 rounded-full"
                    />

                    <View className="ml-4 flex-1">
                        <Text className="text-lg font-bold text-[#352C27]">
                            Sakshi Nadankar
                        </Text>

                        <Text className="mt-1 text-sm text-[#8A7C72]">
                            sakshi@gmail.com
                        </Text>

                        <Pressable className="mt-2 self-start">
                            <Text className="font-semibold text-[#A56B50]">
                                Edit Profile
                            </Text>
                        </Pressable>
                    </View>
                </View>

                {/* Statistics */}
                <View className="mt-6 flex-row justify-between rounded-2xl border border-[#E7DDD2] bg-white px-3 py-5">
                    {features.map((data) => {
                        const Icon = data.icon;

                        return (
                            <View
                                key={data.id}
                                className="flex-1 items-center"
                            >
                                <Icon size={23} color="#A56B50" />

                                <Text className="mt-2 text-lg font-bold text-[#352C27]">
                                    {data.count}
                                </Text>

                                <Text className="mt-1 text-xs text-[#8A7C72]">
                                    {data.description}
                                </Text>
                            </View>
                        );
                    })}
                </View>

                {/* Account Options */}
                <View className="mt-7">
                    <Text className="mb-3 text-lg font-bold text-[#352C27]">
                        Account
                    </Text>

                    <View className="overflow-hidden rounded-2xl border border-[#E7DDD2] bg-white">
                        {accountOptions.map((data, index) => {
                            const Icon = data.icon;

                            return (
                                <Pressable
                                    key={data.id}
                                    className={`flex-row items-center justify-between p-4 ${index !== accountOptions.length - 1
                                        ? "border-b border-[#F0E9E2]"
                                        : ""
                                        }`}
                                >
                                    <View className="flex-row items-center gap-4">
                                        <View className="h-11 w-11 items-center justify-center rounded-xl bg-[#F5EDE7]">
                                            <Icon size={21} color="#A56B50" />
                                        </View>

                                        <View>
                                            <Text className="font-semibold text-[#352C27]">
                                                {data.mainText}
                                            </Text>

                                            <Text className="mt-1 text-xs text-[#8A7C72]">
                                                {data.subtext}
                                            </Text>
                                        </View>
                                    </View>

                                    <ChevronRight size={20} color="#A99B91" />
                                </Pressable>
                            );
                        })}
                    </View>
                </View>

                {/* Logout */}
                <Pressable
                    onPress={async () => {
                        try {
                            await logout();
                            router.replace("/");
                        } catch (error) {
                            console.log("Logout failed", error);
                        }
                    }}
                    className="mt-7 flex-row items-center justify-center gap-3 rounded-2xl border border-red-200 bg-white py-4">
                    <LogOut size={20} color="#DC5555" />
                    <Text className="font-bold text-red-500">
                        Log Out
                    </Text>
                </Pressable>

            </View>
        </>
    )

}

export default ProfileHeader;
