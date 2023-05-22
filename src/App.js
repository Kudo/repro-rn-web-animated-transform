import { View, Animated } from "react-native";

function App() {
  return (
    <View style={{ flex: 1 }}>
      <Animated.View style={{ height: 64, transform: undefined }}>
        <View style={{ width: 50, height: 50, backgroundColor: "green" }} />
      </Animated.View>
    </View>
  );
}

export default App;
