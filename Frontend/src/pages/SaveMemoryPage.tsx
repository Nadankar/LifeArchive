import { Text, TextInput, View, Pressable, ScrollView } from "react-native";
import { CalendarDays, Mic, File, Link, Video, Camera, Heart, ImagePlus, Save, } from "lucide-react-native";
import { Picker } from "@react-native-picker/picker";

function SaveMemoryPage() {
    return (
        <>
            <ScrollView
                className="flex-1 bg-[#F8F7F4]"
                contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
            >
                {/* Header */}
                <View className="mb-7">
                    <View className="flex-row gap-2 ">
                        <Text className="text-2xl font-bold text-[#252334] ">
                            Save a Memory
                        </Text>
                        <Heart size={24} color="red" className="mt-2"/>
                    </View>

                    <Text className="text-sm text-[#777184] mt-2">
                        Capture the moments you want to remember.
                    </Text>
                </View>

                {/* Memory Title */}
                <View className="mb-5">
                    <Text className="text-sm font-semibold text-[#252334] mb-2">
                        Memory Title
                    </Text>

                    <TextInput
                        placeholder="e.g. My birthday celebration"
                        placeholderTextColor="#A39CAD"
                        className="bg-white border border-[#E4DDF0] rounded-xl px-4 py-4 text-[#252334]"
                    />
                </View>

                {/* Story */}
                <View className="mb-5">
                    <Text className="text-sm font-semibold text-[#252334] mb-2">
                        Your Story
                    </Text>

                    <TextInput
                        placeholder="What happened and why does this story matter to you?"
                        placeholderTextColor="#A39CAD"
                        multiline
                        numberOfLines={8}
                        textAlignVertical="top"
                        className="bg-white border border-[#E4DDF0] rounded-xl px-4 py-4 min-h-[170px] text-[#252334]"
                    />

                    <Text className="text-xs text-[#777184] mt-2">
                        Write freely. Let your memories speak in your own words.
                    </Text>
                </View>

                {/* Description */}
                <View className="mb-5">
                    <Text className="text-sm font-semibold text-[#252334] mb-2">
                        Description
                    </Text>

                    <TextInput
                        placeholder="Add a short description..."
                        placeholderTextColor="#A39CAD"
                        multiline
                        numberOfLines={4}
                        textAlignVertical="top"
                        className="bg-white border border-[#E4DDF0] rounded-xl px-4 py-4 min-h-[100px] text-[#252334]"
                    />
                </View>

                {/* Date */}
                <View className="mb-5">
                    <Text className="text-sm font-semibold text-[#252334] mb-2">
                        Memory Date
                    </Text>

                    <View className="bg-white border border-[#E4DDF0] rounded-xl px-4 py-4 flex-row justify-between items-center">
                        <Text className="text-[#A39CAD]">
                            Select memory date
                        </Text>
                        <CalendarDays size={21} color="#8B72C7" />
                    </View>
                </View>

                {/* Category */}
                <View className="mb-5">
                    <Text className="text-sm font-semibold text-[#252334] mb-2">
                        Choose Folder
                    </Text>

                    <View className="bg-white border border-[#E4DDF0] rounded-xl overflow-hidden w-1/2">
                        <View className="flex-row items-center px-3 w-full">

                            <View className="flex-1">
                                <Picker >
                                    <Picker.Item label="Select a category" value="" />
                                    <Picker.Item label="Photos" value="photos" />
                                    <Picker.Item label="Voice Notes" value="audio" />
                                    <Picker.Item label="Documents" value="documents" />
                                    <Picker.Item label="Links" value="links" />
                                    <Picker.Item label="Videos" value="videos" />
                                </Picker>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Attachments */}
                <View className="mb-7">
                    <Text className="text-sm font-semibold text-[#252334] mb-2">
                        Attachments
                    </Text>

                    <View className="bg-white border border-dashed border-[#B9A8D9] rounded-2xl p-5">
                        <View className="items-center mb-5">
                            <View className="bg-[#F0ECF8] p-4 rounded-full mb-3">
                                <ImagePlus size={27} color="#8B72C7" />
                            </View>

                            <Text className="text-[#252334] font-semibold">
                                Add your memory files
                            </Text>

                            <Text className="text-xs text-[#777184] mt-1 text-center">
                                Keep photos, recordings and other things connected to this moment.
                            </Text>
                        </View>

                        <View className="flex-row justify-around">
                            <View className="items-center gap-2">
                                <View className="bg-[#F0ECF8] p-3 rounded-xl">
                                    <Camera size={22} color="#8B72C7" />
                                </View>
                                <Text className="text-xs text-[#777184]">Photos</Text>
                            </View>

                            <View className="items-center gap-2">
                                <View className="bg-[#FCE7F3] p-3 rounded-xl">
                                    <Mic size={22} color="#DB2777" />
                                </View>
                                <Text className="text-xs text-[#777184]">Audio</Text>
                            </View>

                            <View className="items-center gap-2">
                                <View className="bg-[#DBEAFE] p-3 rounded-xl">
                                    <File size={22} color="#2563EB" />
                                </View>
                                <Text className="text-xs text-[#777184]">Files</Text>
                            </View>

                            <View className="items-center gap-2">
                                <View className="bg-[#D1FAE5] p-3 rounded-xl">
                                    <Link size={22} color="#059669" />
                                </View>
                                <Text className="text-xs text-[#777184]">Links</Text>
                            </View>

                            <View className="items-center gap-2">
                                <View className="bg-[#FEF3C7] p-3 rounded-xl">
                                    <Video size={22} color="#D97706" />
                                </View>
                                <Text className="text-xs text-[#777184]">Videos</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Save Button */}
                <View className="bg-[#8B72C7] rounded-xl py-4 flex-row justify-center items-center gap-2">
                    <Save size={19} color="white" />
                    <Text className="text-white font-semibold text-base">
                        Save Memory
                    </Text>
                </View>

                <Text className="text-center text-xs text-[#777184] mt-5">
                    Every little moment deserves to be remembered. ♡
                </Text>
            </ScrollView>
        </>
    )
}

export default SaveMemoryPage;