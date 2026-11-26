
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import "../global.css";
import { AuthProvider } from "@/context/AuthContext";

function RootLayout() {
  const [fontsLoaded] = useFonts({
    DancingScript: require("../../assets/fonts/Dancing_Script/DancingScript-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}> 
        <Stack.Screen name="index" />
        <Stack.Screen name="register" />
        <Stack.Screen name="login" /> 
        <Stack.Screen name="home" />
      </Stack>
    </AuthProvider>
  );
}

export default RootLayout;