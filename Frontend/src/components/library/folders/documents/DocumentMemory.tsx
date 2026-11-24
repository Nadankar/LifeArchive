

import { ScrollView, View } from "react-native";
import MemoryHeader from "../../comman/MemoryHeader";
import MemorySearch from "../../comman/MemorySearch";
import FilterTab from "../../comman/FilterTab";
import Viewtoggle from "../../comman/ViewToggle";
import SortDropdown from "../../comman/SortDropdown";
import DocumentMemoryCard from "./DocumentMemoryCard";

function AudioMemory() {
    return (
        <ScrollView className="flex-1 bg-[#F8F7F4]">
            <View className="p-5 gap-5">

                <MemoryHeader title="Document" count={0} />

                <MemorySearch placeholder="Search document memories..." />

                <FilterTab accentColor="#B66A19"/>

                <View className="flex-row items-center justify-between">
                    <SortDropdown />
                    <Viewtoggle />
                </View>

                <View className="gap-3">
                    <DocumentMemoryCard/>
                </View>

            </View>
        </ScrollView>
    );
}

export default AudioMemory;


