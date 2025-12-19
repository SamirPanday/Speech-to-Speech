import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "./DrawerContent";
import Index from "../app/index";
import Preferences from "../app/preferences";
import AboutUs from "../app/about_us";

export default function CustomDrawer(props) {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return <DrawerContent {...props} />;
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Home",
          drawerLabelStyle: {
            fontFamily: "Khula-SemiBold",
          },
          headerShown: true,
          headerTitle: "बोली",
          headerTitleStyle: { fontFamily: "Khula-Bold" },
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#001618",
          },
          headerTintColor: "#ffffff",
        }}
      >
        {() => (
          <Index textSize={props.textSize} setTextSize={props.setTextSize} />
        )}
      </Drawer.Screen>
      <Drawer.Screen
        name="preferences"
        options={{
          drawerLabel: "Preferences",
          drawerLabelStyle: { fontFamily: "Khula-SemiBold" },
          headerShown: true,
          headerTitle: "Preferences",
          headerTitleStyle: { fontFamily: "Khula-Bold" },
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#001618",
          },
          headerTintColor: "#ffffff",
        }}
      >
        {() => (
          <Preferences
            textSize={props.textSize}
            setTextSize={props.setTextSize}
          />
        )}
      </Drawer.Screen>
      <Drawer.Screen
        name="about_us"
        component={AboutUs}
        options={{
          drawerLabel: "About Us",
          drawerLabelStyle: { fontFamily: "Khula-SemiBold" },
          headerShown: true,
          headerTitle: "About Us",
          headerTitleStyle: { fontFamily: "Khula-Bold" },
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#001618",
          },
          headerTintColor: "#ffffff",
        }}
      />
    </Drawer.Navigator>
  );
}
