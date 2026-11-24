
// import { useFonts } from "expo-font";
// import { Stack } from "expo-router";
// import "../global.css";

//  function RootLayout() {
//   const [fontsLoaded] = useFonts({DancingScript: require("../../assets/fonts/Dancing_Script/DancingScript-VariableFont_wght.ttf"),});
//   if(!fontsLoaded){
//     return null;
//   }
//   else { 
//     return <Stack
//       screenOptions={{
//         headerShown: false,
//       }}
//     />
//   }
// }
// export default RootLayout;


import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import "../global.css";

function RootLayout() {
  const [fontsLoaded] = useFonts({
    DancingScript: require("../../assets/fonts/Dancing_Script/DancingScript-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="register" />
      <Stack.Screen name="home" />
    </Stack>
  );
}

export default RootLayout;