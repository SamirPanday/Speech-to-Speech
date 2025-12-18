import { View } from "react-native";
import TranscriptionBox from '../components/TranscriptionBox';
import MicButton from '../components/MicButton';

export default function Index() {
   return (
    <View className="flex-1 bg-neutral-200">
      {/* Top section - Text display */}
      <TranscriptionBox text="The transcribed text will appear here... This can be very long and will scroll without covering the buttons. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis debitis veniam minima officia magnam dolore eum excepturi ipsam quasi maiores. Amet, mollitia vel culpa nulla dolor eligendi eos facere placeat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eligendi adipisci laborum doloremque necessitatibus quas id doloribus tempora ratione architecto. Deserunt tempore, vero facere autem ullam iste officiis laudantium amet?Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias expedita sapiente commodi praesentium inventore incidunt nostrum error necessitatibus. Ea corrupti repellat quae, illum asperiores atque qui quis aliquam tempora dolores! CRACKER" />

      {/* Bottom section - Mic button */}
      <MicButton />
    </View>
  );
}