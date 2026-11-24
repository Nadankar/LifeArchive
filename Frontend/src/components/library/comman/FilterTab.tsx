// import { Pressable, View,Text } from "react-native";



// function FilterTab() {
//     return (
//         <> 
//             <View>
//                 <Pressable className="px-4 py-2 rounded-full bg-blue-500">
//                     <Text className="text-white">All</Text>
//                 </Pressable>
//                 <Pressable className="px-4 py-2 rounded-full bg-blue-500">
//                     <Text className="text-white">Favorites</Text>
//                 </Pressable>
//             </View>
//         </>
//     )
// }

// export default FilterTab;




import { Pressable, View, Text } from "react-native";

 type FilterColorProp={
        accentColor:string;
    }

function FilterTab({accentColor}:FilterColorProp) {
   
    return (
        <View className="flex-row items-center gap-3">

            <Pressable className="px-5 py-2.5 rounded-full "
            style={{backgroundColor:accentColor}}>
                <Text className="text-sm font-semibold text-white">
                    All
                </Text>
            </Pressable>

            <Pressable className="px-5 py-2.5 rounded-full bg-white border border-[#EAE9E4]">
                <Text className="text-sm font-medium text-[#737970]">
                    Favorites
                </Text>
            </Pressable>

        </View>
    );
}

export default FilterTab;
