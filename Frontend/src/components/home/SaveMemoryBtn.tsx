

// import { CirclePlus } from "lucide-react-native";
import { Image, View } from "react-native";


function SaveMemoryBtn() {
    return (
        <>
            <View className="relative items-center justify-center  h-48 pt-80 pb-80">
                <Image source={{ uri: "https://images.unsplash.com/photo-1616428362406-4ffd9fcbf023?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" }}
                    className="w-40 h-40 rounded-2xl border-4 border-white shadow-lg absolute"
                    style={{ transform: [{ rotate: "-18deg" }], left: 100, top: 100, zIndex: 1 }}
                />

                <Image source={{ uri: "https://images.unsplash.com/photo-1651546904620-9a9bc628a1e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" }}
                     className="w-40 h-40 rounded-2xl border-4 border-white shadow-lg absolute"
                    style={{ transform: [{ rotate: "-9deg" }], left: 45, top: 200, zIndex: 2 }}
                />

                <Image source={{ uri: "https://images.unsplash.com/photo-1688597168861-b2d5f521cca6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" }}
                    className="w-40 h-40 rounded-2xl   absolute border-4 border-white shadow-lg"
                    style={{ transform: [{ rotate: "15deg" }], left: 200, top: 200, zIndex: 3 }}
                />

                <Image source={{ uri: "https://plus.unsplash.com/premium_photo-1727552116095-889cb485a803?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" }}
                    className="w-40 h-40 rounded-2xl  border-4 border-white shadow-lg absolute"
                    style={{ transform: [{ rotate: "0deg" }], left: 100, top: 240, zIndex: 5 }}
                />
                <Image source={{ uri: "https://images.unsplash.com/photo-1676385901160-a86dc9ccdfe1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" }}
                    className="w-40 h-40 rounded-2xl  border-4 border-white shadow-lg absolute"
                    style={{ transform: [{ rotate: "20deg" }], left: 100, top: 320, zIndex: 4 }}
                />
            </View>
        </>
    )

}

export default SaveMemoryBtn;
