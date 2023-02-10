import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const LinkBanks = () => {
  return (
    <View style={styles.linkBanks}>
      <Image
        style={styles.imageedit341319179891Icon}
        resizeMode="cover"
        source={require("../assets/imageedit-3-4131917989-148.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageedit341319179891Icon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 39,
    height: 39,
  },
  linkBanks: {
    flex: 1,
    width: "100%",
    height: 39,
  },
});

export default LinkBanks;
