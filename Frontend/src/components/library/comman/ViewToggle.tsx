// import { Grid2X2, List } from "lucide-react-native";
// import { Pressable, View } from "react-native";

// function Viewtoggle(){
//     return (
//         <>
//         <View className="flex-row items-center gap-2">
//             <Pressable className="p-2 rounded-lg bg-blue-500">
//                 <List size={20} color="white"/>
//             </Pressable>
//             <Pressable className="p-2 rounded-lg bg-blue-500">
//                <Grid2X2 size={20} color="#555"/>
//             </Pressable>
//         </View>
//         </>
//     ) 
// }

// export default Viewtoggle;



import { Grid2X2, List } from "lucide-react-native";
import { Pressable, View } from "react-native";

type ViewToggleColor={
       accentColor:string
}

function Viewtoggle({accentColor}:ViewToggleColor) {
    return (
        <View className="flex-row items-center gap-2">

            <Pressable className="p-2.5 rounded-xl bg-[#536B59]">
                <List size={19} color="#FFFFFF" />
            </Pressable>

            <Pressable className="p-2.5 rounded-xl bg-white border border-[#EAE9E4]">
                <Grid2X2 size={19} color="#858B83" />
            </Pressable>

        </View>
    );
}

export default Viewtoggle;
