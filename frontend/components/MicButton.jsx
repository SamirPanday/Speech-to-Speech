import { View, TouchableOpacity } from "react-native";
import { Mic } from "lucide-react-native";

export default function MicButton() {
  return (
    <View className="flex-1 w-full justify-center items-center">
      <TouchableOpacity className="bg-teal-400 w-20 h-20 rounded-full justify-center items-center">
        <Mic size={32} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
