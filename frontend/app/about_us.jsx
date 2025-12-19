import { ScrollView, View, Text } from "react-native";
import { ShieldCheck } from "lucide-react-native";

export default function AboutUs() {
  return (
    <ScrollView
      className="flex-1 bg-neutral-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="p-6">
        {/* Header Section */}
        <View className="mb-6 bg-white rounded-2xl p-4 shadow-sm">
          <Text
            style={{ fontFamily: "Khula-Bold" }}
            className="text-3xl font-bold text-[#001618] mb-3 text-center w-full"
          >
            About बोली
          </Text>
          <Text
            style={{ fontFamily: "Khula-Regular" }}
            className="text-base text-gray-700 leading-6 text-center"
          >
            बोली is a speech app built specifically for Nepali. A
            speech-to-text-to-speech tool focused on improving access to voice
            technology for low-resource languages. Speak, see the transcription,
            and play the natural-sounding Nepali audio back.
          </Text>
        </View>

        {/* Goal Section */}
        <View className="mb-6 bg-white rounded-2xl p-4 shadow-sm">
          <Text
            style={{ fontFamily: "Khula-Bold" }}
            className="text-3xl font-bold text-[#001618] mb-2 text-center"
          >
            Our Goal
          </Text>
          <Text
            style={{ fontFamily: "Khula-Regular" }}
            className="text-base text-gray-700 leading-6 text-center"
          >
            We aim to make robust Nepali ASR (automatic speech recognition) and
            TTS (text-to-speech) experiences available to everyday users. The
            app focuses on accuracy, responsiveness, and respectful handling of
            user audio.
          </Text>
        </View>

        {/* Features Section */}
        <View className="mb-6 bg-white rounded-2xl p-4 shadow-sm">
          <Text
            style={{ fontFamily: "Khula-Bold" }}
            className="text-3xl font-bold text-[#001618] mb-3 text-center"
          >
            Key Features
          </Text>
          <View className="space-y-3">
            <View className="flex-row items-start">
              <Text
                style={{ fontFamily: "Khula-Regular" }}
                className="text-base text-gray-700 leading-6 flex-1"
              >
                • Speech-to-text in Nepali with clear, readable transcription
              </Text>
            </View>
            <View className="flex-row items-start">
              <Text
                style={{ fontFamily: "Khula-Regular" }}
                className="text-base text-gray-700 leading-6 flex-1"
              >
                • Natural Nepali text-to-speech playback
              </Text>
            </View>
            <View className="flex-row items-start">
              <Text
                style={{ fontFamily: "Khula-Regular" }}
                className="text-base text-gray-700 leading-6 flex-1"
              >
                • Easy export/share of text and audio for learning and
                accessibility
              </Text>
            </View>
          </View>
        </View>

        {/* Footer Section */}
        <View className="mt-4 mb-2 bg-[#001618] rounded-3xl p-4">
          <View className="flex-row items-center justify-center mb-2">
            <ShieldCheck size={18} color="#ffffff" className="mr-2" />
            <Text
              style={{ fontFamily: "Khula-Bold" }}
              className="text-white text-base font-semibold text-center"
            >
              {" "}
              Privacy-First
            </Text>
          </View>

          <Text
            style={{ fontFamily: "Khula-Regular" }}
            className="text-gray-300 text-xs leading-4 mb-3 text-center"
          >
            Audio stays on your device unless you choose to share it.
          </Text>
          <View className="border-t border-gray-600 pt-3">
            <Text
              style={{ fontFamily: "Khula-Regular" }}
              className="text-gray-400 text-xs leading-4 text-center"
            >
              Want to help improve Nepali speech tech? Contribute data,
              feedback, or ideas - contact us at support.boli@email.com
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
