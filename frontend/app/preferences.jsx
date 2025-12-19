import { View, Text } from "react-native";
import SizeButton from "../components/SizeButton.jsx";

export default function Preferences({ textSize, setTextSize }) {
  return (
    <View className="flex-1 items-center bg-neutral-200">
      <Text className="text-xl m-4 text-neutral-500 text-center">
        Text Size | अक्षरको आकार
      </Text>
      <View className="h-px bg-gray-300 w-3/4 mb-4" />
      <SizeButton
        active={textSize === "small"}
        label="Small | सानो"
        onPress={() => setTextSize("small")}
      />
      <SizeButton
        active={textSize === "medium"}
        label="Medium | मध्यम"
        onPress={() => setTextSize("medium")}
      />
      <SizeButton
        active={textSize === "large"}
        label="Large | ठूलो"
        onPress={() => setTextSize("large")}
      />
    </View>
  );
}
