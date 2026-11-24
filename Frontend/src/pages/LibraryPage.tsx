import FolderCard from "@/components/library/FolderCard";
import LibraryHeader from "@/components/library/LibraryHeader";
import LibrarySearch from "@/components/library/LibrarySearch";
import { View } from "react-native";


function LibraryPage(){
    return(
        <>
        <View className="p-5"> 
            <LibraryHeader/>
            <LibrarySearch/>
            <FolderCard/>
        </View>
        </>  
    )
}

export default LibraryPage;