import "@/global.css"
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CustomDrawer from "../components/CustomDrawer";
import { useState } from "react";
import { useFonts } from "expo-font";

export default function RootLayout() {
  // text size context for the preferences screen
  const [textSize, setTextSize] = useState('medium');

  const [fontsLoaded] = useFonts({
    'Khula-Regular': require('../assets/fonts/Khula/Khula-Regular.ttf'),
    'Khula-Bold': require('../assets/fonts/Khula/Khula-Bold.ttf'),
    'Khula-SemiBold': require('../assets/fonts/Khula/Khula-SemiBold.ttf'),
    'Khula-Light': require('../assets/fonts/Khula/Khula-Light.ttf'),
    'Khula-ExtraBold': require('../assets/fonts/Khula/Khula-ExtraBold.ttf'),
  });
  if (!fontsLoaded) return null;

  return (<GestureHandlerRootView className="flex-1" >
    <CustomDrawer textSize={textSize} setTextSize={setTextSize} />
  </GestureHandlerRootView>);
}
