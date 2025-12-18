import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "./DrawerContent";
import Index from "../app/index";
import Preferences from "../app/preferences";
import AboutUs from "../app/about_us";

export default function CustomDrawer() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return <DrawerContent {...props} />;
      }}
    >
      <Drawer.Screen
        name="index"
        component={Index}
        options={{
          drawerLabel: "Home",
          headerShown: true,
          headerTitle: "बोली",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#001618",
          },
          headerTintColor: "#ffffff",
        }}
      />
      <Drawer.Screen
        name="preferences"
        component={Preferences}
        options={{
          drawerLabel: "Preferences",
          headerShown: true,
          headerTitle: "Preferences",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#001618",
          },
          headerTintColor: "#ffffff",
        }}
      />
      <Drawer.Screen
        name="about_us"
        component={AboutUs}
        options={{
          drawerLabel: "About Us",
          headerShown: true,
          headerTitle: "About Us",
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
