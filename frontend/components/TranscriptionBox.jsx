import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Copy, Volume2 } from "lucide-react-native";
import { useState } from "react";

export default function TranscriptionBox({ text, textSize }) {
  const [speaking, setSpeaking] = useState(false);

  const copyText = () => {
    let copiedItem = "";
    copiedItem = text;
    console.log("Copied text is: ", copiedItem);
  };

  const speakText = () => {
    setSpeaking(!speaking);
    console.log("Speaking:", !speaking);
  };
  return (
    <View className="flex-[3] w-full relative">
      {/* Action buttons - top right */}
      <View className="absolute top-4 right-4 flex-row gap-2 z-10">
        <TouchableOpacity
          onPress={copyText}
          className="bg-gray-100 p-3 rounded-full"
        >
          <Copy size={20} color="#001618" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={speakText}
          className={`${speaking ? "bg-blue-200" : "bg-gray-100"} p-3 rounded-full`}
        >
          <Volume2 size={20} color="#001618" />
        </TouchableOpacity>
      </View>

      {/* Scrollable text content - padding-top avoids button overlap */}
      <ScrollView
        className="flex-1 w-full "
        contentContainerClassName="justify-center items-center p-5 pt-32"
        showsVerticalScrollIndicator={false}
      >
        <View className="w-full items-center ">
          <Text
            className={`${textSize === "small" ? "text-xl" : textSize === "medium" ? "text-2xl" : "text-3xl"} pt-10 text-center`}
            style={{ fontFamily: "Khula-Regular" }}
          >
            {text}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
