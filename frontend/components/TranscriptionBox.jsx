import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Copy, Volume2 } from "lucide-react-native";

export default function TranscriptionBox({ text }) {
  return (
    <View className="flex-[3] w-full relative border border-red-500">
      {/* Action buttons - top right */}
      <View className="absolute top-4 right-4 flex-row gap-2 z-10">
        <TouchableOpacity className="bg-gray-200 p-3 rounded-full">
          <Copy size={20} color="#001618" />
        </TouchableOpacity>
        <TouchableOpacity className="bg-gray-200 p-3 rounded-full">
          <Volume2 size={20} color="#001618" />
        </TouchableOpacity>
      </View>

      {/* Scrollable text content - padding-top avoids button overlap */}
      <ScrollView
        className="flex-1 w-full "
        contentContainerClassName="justify-center items-center p-6 pt-20"
        showsVerticalScrollIndicator={false}
      >
        <View className="w-full border border-blue-500 items-center">
          <Text className="text-lg pt-10 text-center">{text}</Text>
        </View>
      </ScrollView>
    </View>
  );
}
