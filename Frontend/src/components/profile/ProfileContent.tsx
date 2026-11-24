import { Camera, Folders, Heart, UserRound, ChevronRight, LockKeyhole, Settings, CircleQuestionMark } from "lucide-react-native";
import { Button, Image, Pressable, Text, View } from "react-native";

function ProfileHeader() {
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
            <View className="p-5">
                <Text>My Profile</Text>
                <Text>Manage your account and preferences</Text>
                <View className="border-2 p-5 rounded-2xl flex-row gap-5">
                    <Image source={{ uri: "https://images.unsplash.com/photo-1676385901228-64ad87402847?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" }}
                        className="h-20 w-20 rounded-full"
                    />
                    <View>
                        <Text>Sakshi Nadankar</Text>
                        <Text>sakshi@gmail.com</Text>
                        <Pressable>Edit Profile</Pressable>
                    </View>
                </View>
                <View className="flex-row gap-20">
                    {
                        features.map((data) => {
                            const Icon = data.icon;
                            return (
                                <View key={data.id} className="justify-center items-center">
                                    <Icon size={24} color="#8B72C7" />
                                    <Text>{data.count}</Text>
                                    <Text>{data.description}</Text>
                                </View>
                            )
                        })
                    }
                </View>

                <View>
                    <View>
                        <text>Account</text>
                        {
                            accountOptions.map((data) => {
                                const Icon = data.icon;
                                return (
                                    <View key={data.id} className="flex-row">
                                        <View className="flex-row">
                                            <Icon size={24} color="#8B72C7" />
                                            <View>
                                                <Text>{data.mainText}</Text>
                                                <Text>{data.subtext}</Text>
                                            </View>
                                        </View>
                                        <ChevronRight size={24} color="#8B72C7" />
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>

                <Button title="Log Out" />

            </View>
        </>
    )

}

export default ProfileHeader;
