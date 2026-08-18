import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.ipadScreen}>
      <View style={styles.phoneContainer}>
        <Text>Hi MAD</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ipadScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#cf3131ab",
  },

  phoneContainer: {
    width: 350,
    height: 700,
    backgroundColor: "#3945b1",
    borderRadius: 35,
    borderWidth: 5,
    borderColor: "#ff00d4",
    paddingTop: 20,
  },
});
