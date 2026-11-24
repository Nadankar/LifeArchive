import { View } from "react-native";
import { useLocalSearchParams } from "expo-router";

import PhotoMemory from "../components/library/folders/photos/PhotoMemory";
import AudioMemory from "../components/library/folders/audio/AudioMemory";
import DocumentMemory from "../components/library/folders/documents/DocumentMemory";
import LinkMemory from "../components/library/folders/links/LinkMemory";
import VideoMemory from "../components/library/folders/video/VideoMemory";
import Notes from "../components/library/folders/notes/NotesMemory";



function MemoryFolders() {
    const { folderName } = useLocalSearchParams();
    return (
        <> 
            <View className="flex-1">
                {folderName === "photos" && <PhotoMemory />}
                {folderName === "audio" && <AudioMemory />}
                {folderName === "file" && <DocumentMemory />}
                {folderName === "links" && <LinkMemory />}
                {folderName === "video" && <VideoMemory />}
                {folderName === "notes" && <Notes/>}
            </View>
        </>
    )
}

export default MemoryFolders;


