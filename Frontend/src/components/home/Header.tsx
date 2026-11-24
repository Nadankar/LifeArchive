
import { Text, View } from "react-native";

function Header() {
  return (
    <View className="px-5 pt-4 pb-5">
      <Text
        style={{
          fontFamily: "DancingScript",
          fontWeight: "800",
          fontSize: 50,
          color: "#d84dcc"
        }}
        className="text-center mt-10"
      >
        Hello, Sakshi !
      </Text>
    </View>
  );
}

export default Header;