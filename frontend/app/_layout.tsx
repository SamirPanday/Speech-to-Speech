import { Stack } from "expo-router";
import "@/global.css"

export default function RootLayout() {
  return <Stack>
    <Stack.Screen
      name="index"
      options={{
        headerShown: true,
        headerTitle: "बोली",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#001618",
        },
        headerTintColor: "#ffffff",
      }}
    />
  </Stack>;
}
