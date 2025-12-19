import { View } from "react-native";
import TranscriptionBox from '../components/TranscriptionBox';
import MicButton from '../components/MicButton';

export default function Index({ textSize }) {
   return (
    <View className="flex-1 bg-neutral-200">
      {/* Top section - Text display */}
      <TranscriptionBox text="Hello, welcome to बोली!" 
      textSize={textSize} />

      {/* Bottom section - Mic button */}
      <MicButton />
    </View>
  );
}