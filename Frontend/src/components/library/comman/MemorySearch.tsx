// import { Search } from "lucide-react-native";
// import { TextInput, View } from "react-native";


// type memorySearchProps = {
//     placeholder: string;
// }


// function MemorySearch({ placeholder }: memorySearchProps) { 
//     return (
//         <>
//             <View className="flex-row items-center px-3 border border-gray-300 rounded-xl" >
//                 <Search size={20} color="#888" />
//                 <TextInput
//                     placeholder={placeholder}
//                     className="flex-1 p-3" />
//             </View>

//         </>
//     )
// } 

// export default MemorySearch;




import { Search } from "lucide-react-native";
import { TextInput, View } from "react-native";

type MemorySearchProps = {
    placeholder: string;
};

function MemorySearch({ placeholder }: MemorySearchProps) {
    return (
        <View className="flex-row items-center gap-3 px-4 bg-white border border-[#EAE9E4] rounded-2xl">
            <Search size={20} color="#92968F" />

            <TextInput
                placeholder={placeholder}
                placeholderTextColor="#A5A69F"
                className="flex-1 py-4 text-sm text-[#303B35]"
            />
        </View>
    );
}

export default MemorySearch;
