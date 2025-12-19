import { Pressable, Animated } from "react-native";
import { useEffect, useRef } from "react";

export default function SizeButton({ active, label, onPress }) {
  const anim = useRef(new Animated.Value(active ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(anim, {
      toValue: active ? 1 : 0,
      duration: 80,
      useNativeDriver: false,
    }).start();
  }, [active, anim]);

  const bg = anim.interpolate({
    inputRange: [0, 1],
    outputRange: ["#d7d7d7", "#1cd1bf"],
  });
  const color = anim.interpolate({
    inputRange: [0, 1],
    outputRange: ["#4b5563", "#ffffff"],
  });

  return (
    <Pressable onPress={onPress} style={{ width: "85%", marginVertical: 4 }}>
      <Animated.View
        style={{ backgroundColor: bg, paddingVertical: 14, borderRadius: 12 }}
      >
        <Animated.Text
          style={{
            textAlign: "center",
            fontWeight: "600",
            color,
            fontSize: 16,
          }}
        >
          {label}
        </Animated.Text>
      </Animated.View>
    </Pressable>
  );
}
