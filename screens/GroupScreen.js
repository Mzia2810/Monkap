import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const GroupScreen = () => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textTypo2]}>1</Text>
        <Text style={[styles.text1, styles.textTypo1]}>7</Text>
        <Text style={[styles.text2, styles.textTypo]}>4</Text>
        <Text style={[styles.abc, styles.textTypo2]}>ABC</Text>
      </View>
      <View style={styles.group}>
        <Text style={[styles.text3, styles.textTypo2]}>2</Text>
        <Text style={[styles.text4, styles.textTypo2]}>8</Text>
        <Text style={[styles.text5, styles.textTypo]}>5</Text>
        <Text style={[styles.abc, styles.textTypo2]}>0</Text>
      </View>
      <View style={styles.container}>
        <Text style={[styles.text7, styles.textTypo1]}>3</Text>
        <Text style={[styles.text8, styles.textTypo1]}>9</Text>
        <Text style={[styles.text9, styles.textTypo1]}>6</Text>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector171.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo2: {
    textAlign: "left",
    color: Color.dimgray_400,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    fontSize: FontSize.size_2xl,
    position: "absolute",
  },
  textTypo1: {
    left: 13,
    textAlign: "left",
    color: Color.dimgray_400,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    fontSize: FontSize.size_2xl,
    position: "absolute",
  },
  textTypo: {
    top: 40,
    textAlign: "left",
    color: Color.dimgray_400,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    fontSize: FontSize.size_2xl,
    position: "absolute",
  },
  text: {
    left: 15,
    top: 0,
  },
  text1: {
    top: 80,
  },
  text2: {
    left: 12,
  },
  abc: {
    top: 120,
    left: 0,
  },
  parent: {
    width: 36,
    left: 0,
    top: 0,
    position: "absolute",
    height: 146,
  },
  text3: {
    left: 1,
    top: 0,
  },
  text4: {
    top: 80,
    left: 0,
  },
  text5: {
    left: 0,
  },
  group: {
    left: 160,
    width: 11,
    top: 0,
    position: "absolute",
    height: 146,
  },
  text7: {
    top: 0,
  },
  text8: {
    top: 84,
  },
  text9: {
    top: 42,
  },
  vectorIcon: {
    height: "9.25%",
    width: "43.64%",
    top: "90.75%",
    right: "56.36%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  container: {
    top: 4,
    left: 282,
    width: 24,
    height: 128,
    position: "absolute",
  },
  groupParent: {
    flex: 1,
    width: "100%",
    height: 146,
  },
});

export default GroupScreen;
