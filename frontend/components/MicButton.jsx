import { View, TouchableOpacity } from "react-native";
import { Mic } from "lucide-react-native";
import { useState } from "react";

export default function MicButton() {
  const [buttonPressed, setButtonPressed] = useState(false);

  const ToggleBtn = () => {
    setButtonPressed(!buttonPressed);
    console.log("Button pressed:", !buttonPressed);
  };

  return (
    <View className="flex-1 w-full justify-center items-center">
      <TouchableOpacity
        onPress={ToggleBtn}
        className={`${buttonPressed ? "bg-red-500" : "bg-teal-400"} w-20 h-20 rounded-full justify-center items-center`}
      >
        <Mic size={32} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
