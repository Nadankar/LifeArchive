
import { ScrollView, View } from "react-native";
import MemoryHeader from "../../comman/MemoryHeader";
import MemorySearch from "../../comman/MemorySearch";
import FilterTab from "../../comman/FilterTab";
import Viewtoggle from "../../comman/ViewToggle";
import SortDropdown from "../../comman/SortDropdown";
import VideoMemoryCard from "./VideoMemoryCard";


function VideoMemory(){
    return (
        <>
         <ScrollView className="flex-1 bg-[#F8F7F4]">
            <View className="p-5 gap-5">

                <MemoryHeader title="Video" count={0} />

                <MemorySearch placeholder="Search video memories..." />

                <FilterTab accentColor="#C34444"/>

                <View className="flex-row items-center justify-between">
                    <SortDropdown />
                    <Viewtoggle />
                </View>

                <View className="gap-3">
                    <VideoMemoryCard/>
                </View>

            </View>
        </ScrollView>

        </>
    )
}

export default VideoMemory;
