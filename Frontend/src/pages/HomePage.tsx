
import { View } from "react-native";
import Footer from '../components/home/Footer';
import Header from "../components/home/Header";
import SaveMemoryBtn from "@/components/home/SaveMemoryBtn";
import AudioMemory from "@/components/library/folders/audio/AudioMemory";
import PhotoMemory from "@/components/library/folders/photos/PhotoMemory";
import VideoMemory from "@/components/library/folders/video/VideoMemory";
import DocumentMemory from "@/components/library/folders/documents/DocumentMemory";
import DocumentMemoryCard from "@/components/library/folders/documents/DocumentMemoryCard";
import LinkMemory from "@/components/library/folders/links/LinkMemory";
import NotesMemory from "@/components/library/folders/notes/NotesMemory";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";



function HomePage(){
    return (
        <>
           <View className="flex-1 bg-[#F8F7F4]">
            {/* <LoginScreen/> */}
            {/* <RegisterScreen/> */}
            {/* <AudioMemory/> */}
            {/* <PhotoMemory/> */}
            {/* <VideoMemory/> */}
             {/* <DocumentMemory/> */}
             {/* <LinkMemory/> */}
             {/* <NotesMemory/> */}


             
             <Header/>
             <SaveMemoryBtn/>
            <Footer/>
           </View>
        </>
    )

}


export default HomePage;


