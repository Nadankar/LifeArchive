// import { useState } from "react";
// import { View, Text, Pressable, Modal } from "react-native";
// import { ChevronDown } from "lucide-react-native";

// function SortDropdown() {
//     const [visible, setVisible] = useState(false);
//     const [selected, setSelected] = useState("Newest First");

//     const options = ["Newest First", "Oldest First"];

//     return (
//         <View> 
//             {/* Dropdown Button */}
//             <Pressable
//                 onPress={() => setVisible(true)}
//                 className="flex-row items-center gap-2 px-3 py-2 rounded-lg border border-gray-300"
//             >
//                 <Text className="text-gray-700">{selected}</Text>
//                 <ChevronDown size={18} color="#555" />
//             </Pressable>

//             {/* Dropdown Modal */}
//             <Modal
//                 transparent
//                 visible={visible}
//                 animationType="fade"
//                 onRequestClose={() => setVisible(false)}
//             >
//                 <Pressable
//                     className="flex-1 bg-black/30 justify-center items-center"
//                     onPress={() => setVisible(false)}
//                 >
//                     <View className="bg-white w-64 rounded-xl p-3">
//                         {options.map((option) => (
//                             <Pressable
//                                 key={option}
//                                 onPress={() => {
//                                     setSelected(option);
//                                     setVisible(false);
//                                 }}
//                                 className="py-3 px-2"
//                             >
//                                 <Text className="text-gray-800">
//                                     {option}
//                                 </Text>
//                             </Pressable>
//                         ))}
//                     </View>
//                 </Pressable>
//             </Modal>
//         </View>
//     );
// }

// export default SortDropdown;




import { useState } from "react";
import { View, Text, Pressable, Modal } from "react-native";
import { ChevronDown, Check } from "lucide-react-native";

function SortDropdown() {
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState("Newest First");

    const options = ["Newest First", "Oldest First"];

    return (
        <View>
            <Pressable
                onPress={() => setVisible(true)}
                className="flex-row items-center gap-2 px-3 py-2.5 bg-white border border-[#EAE9E4] rounded-xl"
            >
                <Text className="text-sm font-medium text-[#536B59]">
                    {selected}
                </Text>

                <ChevronDown size={17} color="#536B59" />
            </Pressable>

            <Modal
                transparent
                visible={visible}
                animationType="fade"
                onRequestClose={() => setVisible(false)}
            >
                <Pressable
                    className="flex-1 bg-black/30 justify-center items-center px-6"
                    onPress={() => setVisible(false)}
                >
                    <View className="bg-white w-full rounded-2xl p-4 gap-2">

                        <Text className="text-base font-bold text-[#303B35] mb-2">
                            Sort memories
                        </Text>

                        {options.map((option) => (
                            <Pressable
                                key={option}
                                onPress={() => {
                                    setSelected(option);
                                    setVisible(false);
                                }}
                                className="flex-row items-center justify-between p-3 rounded-xl bg-[#F8F7F4]"
                            >
                                <Text className="text-sm text-[#536B59]">
                                    {option}
                                </Text>

                                {selected === option && (
                                    <Check size={18} color="#536B59" />
                                )}
                            </Pressable>
                        ))}

                    </View>
                </Pressable>
            </Modal>
        </View>
    );
}

export default SortDropdown;
