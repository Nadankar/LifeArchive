// import { View } from "react-native";
// import MemoryHeader from "../../comman/MemoryHeader";
// import MemorySearch from "../../comman/MemorySearch";
// import FilterTab from "../../comman/FilterTab";
// import Viewtoggle from "../../comman/ViewToggle";
// import SortDropdown from "../../comman/SortDropdown";
// import AudioMemoryCard from "./AudioMemoryCard";
 
// function AudioMemory(){
//     return (
//         <>
//         <View className="gap-4">
//             <MemoryHeader title="Audio" count={0}/>
//             <MemorySearch placeholder="Search audio..."/>
//             <FilterTab/>
//             <SortDropdown/>
//             <Viewtoggle/>
//             <AudioMemoryCard/>
//         </View>
//         </>
//     )
// }

// export default AudioMemory;



import { ScrollView, View } from "react-native";
import MemoryHeader from "../../comman/MemoryHeader";
import MemorySearch from "../../comman/MemorySearch";
import FilterTab from "../../comman/FilterTab";
import Viewtoggle from "../../comman/ViewToggle";
import SortDropdown from "../../comman/SortDropdown";
import AudioMemoryCard from "./AudioMemoryCard";

function AudioMemory() {
    return (
        <ScrollView className="flex-1 bg-[#F8F7F4]">
            <View className="p-5 gap-5">

                <MemoryHeader title="Audio" count={0} />

                <MemorySearch placeholder="Search audio memories..." />

                <FilterTab accentColor="#34734B"/>

                <View className="flex-row items-center justify-between">
                    <SortDropdown />
                    <Viewtoggle />
                </View>

                <View className="gap-3">
                    <AudioMemoryCard />
                </View>

            </View>
        </ScrollView>
    );
}

export default AudioMemory;
