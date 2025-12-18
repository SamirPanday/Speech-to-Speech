import "@/global.css"
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CustomDrawer from "../components/CustomDrawer";

export default function RootLayout() {

  return (<GestureHandlerRootView className="flex-1" >
    <CustomDrawer />
  </GestureHandlerRootView>);
}
