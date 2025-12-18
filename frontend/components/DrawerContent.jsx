import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, Image } from "react-native";
import Logo from "../assets/android-icons/original-no-bg-black-outline.png";

export default function DrawerContent(props) {
  return (
    <DrawerContentScrollView>
      <View className="flex-1 items-center">
        <Image
          source={Logo}
          style={{ width: 90, height: 90 }}
          className="rounded-lg"
        />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
