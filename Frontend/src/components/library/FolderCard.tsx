import { Camera, Mic, File, Link, Video,NotebookPen} from "lucide-react-native";
import { View, Text, Pressable } from "react-native";

import { useRouter } from "expo-router";


function FolderCard() {
    const router=useRouter();

    const cards = [
        {
            id: 1,
            icon: Camera,
            name: "Photos",
            description: "Your captured moments",
            color: "#EDE9FE",
            iconColor: "#7C3AED",
            route:"photos"
        },
        {
            id: 2,
            icon: Mic,
            name: "Voice Notes",
            description: "Words and memories",
            color: "#FCE7F3",
            iconColor: "#DB2777",
            route:"audio"
        },
        {
            id: 3,
            icon: File,
            name: "Documents",
            description: "Your saved files",
            color: "#DBEAFE",
            iconColor: "#2563EB",
            route:"file"
        },
        {
            id: 4,
            icon: Link,
            name: "Links",
            description: "Your saved links",
            color: "#D1FAE5",
            iconColor: "#059669",
            route:"links"
        },
        {
            id: 5,
            icon: Video,
            name: "Videos",
            description: "Your saved videos",
            color: "#FEF3C7",
            iconColor: "#D97706",
            route:"video"
        },
        {
            id: 6,
            icon: NotebookPen,
            name: "Notes",
            description: "Save information to remember",
            color: "#FEF3C7",
            iconColor: "#D97706",
            route:"notes"
        }
    ];

    return (
        <View className="mt-5">

            <Text className="text-lg font-bold text-gray-900 mb-4">Your Collection</Text>

            <View className="flex-row flex-wrap justify-between">
                {
                    cards.map((data) => {
                        const Icon = data.icon;
                        return (
                            <Pressable
                                key={data.id}
                                onPress={()=>router.push(`/library/${data.route}/`)}
                                className="w-[48%] bg-white border border-gray-100 rounded-2xl p-4 mb-4">

                                <View
                                    style={{ backgroundColor: data.color }}
                                    className="w-11 h-11 rounded-xl items-center justify-center mb-4">
                                    <Icon
                                        size={22}
                                        color={data.iconColor}
                                    />
                                </View>

                                <Text className="text-base font-bold text-gray-900 mb-1">{data.name}</Text>

                                <Text className="text-xs text-gray-500">{data.description}</Text>

                            </Pressable>
                        );
                    })}

            </View>

        </View>
    );
}

export default FolderCard;
