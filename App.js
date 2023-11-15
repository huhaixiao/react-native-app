import { useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Animated,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  Alert,
  useColorScheme,
  Vibration,
} from "react-native";

const Separator = () => {
  return <View style={Platform.OS === "android" ? styles.separator : null} />;
};

export default function App() {
  const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    2 * ONE_SECOND_IN_MS,
    3 * ONE_SECOND_IN_MS,
  ];

  const PATTERN_DESC =
    Platform.OS === "android"
      ? "wait 1s, vibrate 2s, wait 3s"
      : "wait 1s, vibrate, wait 2s, vibrate, wait 3s";

  const colorScheme = useColorScheme();
  const createTwoButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => Alert.prompt("Cancel Pressed"),
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
      { text: "more", onPress: () => {}},
      { text: "fourth", onPress: () => {}},
      { text: "five", onPress: () => {}},
      { text: "six", onPress: () => {}},
    ]);

  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 0.3 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 0.3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
       <Button title={"Button Alert"} onPress={createTwoButtonAlert} />
      <Text
        style={{
          color: colorScheme === "lgiht" ? "#000" : "#fff",
          backgroundColor: "#e4393c",
        }}
      >
        {colorScheme}
      </Text>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnim,
          },
        ]}
      >
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "stretch",
          width: "100%",
          height: 150,
          borderColor: "red",
          borderWidth: 5,
        }}
      >
        <TextInput
          placeholder="Goal"
          style={{
            backgroundColor: "#999",
            borderColor: "#e4393c",
            borderWidth: 2,
            borderRadius: 100,
            padding: 10,
            width: "80%",
          }}
        />
        <Button
          title="Add"
          style={{ borderColor: "#e4393c", borderWidth: 5 }}
        />
      </View>
      <Text style={{ color: "#666" }}>
        https://www.bilibili.com/video/BV1FP4y1M7j2?p=21&spm_id_from=pageDriver&vd_source=9fee1ccafc516fcf12811c34f44b787e
      </Text>
     
      <View style={styles.buttonRow}>
        <Button title="Fade In View" onPress={fadeIn} />
        <Button title="Fade Out View" onPress={fadeOut} />
      </View>

      <Text style={[styles.header, styles.paragraph]}>Vibration API</Text>
      <View>
        <Button title="Vibrate once" onPress={() => Vibration.vibrate()} />
      </View>
      <Separator />
      {Platform.OS === "android"
        ? [
            <View>
              <Button
                title="Vibrate for 10 seconds"
                onPress={() => Vibration.vibrate(10 * ONE_SECOND_IN_MS)}
              />
            </View>,
            <Separator />,
          ]
        : null}
      <Text style={styles.paragraph}>Pattern: {PATTERN_DESC}</Text>
      <Button
        title="Vibrate with pattern"
        onPress={() => Vibration.vibrate(PATTERN)}
      />
      <Separator />
      <Button
        title="Vibrate with pattern until cancelled"
        onPress={() => Vibration.vibrate(PATTERN, true)}
      />
      <Separator />
      <Button
        title="Stop vibration pattern"
        onPress={() => Vibration.cancel()}
        color="#FF0000"
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
    alignItems: "center", // 纵轴
    justifyContent: "center", // 主轴
    color: "#666",
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: "powderblue",
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16,
  },
});
