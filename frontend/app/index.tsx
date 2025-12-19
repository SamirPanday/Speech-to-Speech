import { View } from "react-native";
import TranscriptionBox from '../components/TranscriptionBox';
import MicButton from '../components/MicButton';

export default function Index({ textSize }) {
   return (
    <View className="flex-1 bg-neutral-200">
      {/* Top section - Text display */}
      <TranscriptionBox text="Hello, welcome to बोली!

बनेको छ पहराले यो छाती मेरो,
बगेको छ छहरा रगतमा मेरो, पखेरुमा जन्मे, टाकुरामा खेल्ने, म झुक्दै नझुक्ने पहाडको छोरो। खोसेको रोटीले मेरो पेट भरिन्न,
मागेको धोतिले मेरो लाज छोपिन्न। घोटिएर हात-पाउ झरिजाउन औला, तर कोई अगाडि मेरो हात जोडिन्न, यी हात जोडिन्न।
बनेको छ पहराले यो छाती मेरो, बगेको छ छहरा रगतमा मेरो पखेरुमा जन्मे, टाकुरामा खेल्ने, म झुक्दै नझुक्ने पहाडको छोरो।
" 
      textSize={textSize} />

      {/* Bottom section - Mic button */}
      <MicButton />
    </View>
  );
}