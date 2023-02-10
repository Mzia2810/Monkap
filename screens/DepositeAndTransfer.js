import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const DepositeAndTransfer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.depositeAndTransfer}>
      <Image
        style={[styles.depositeAndTransferChild, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/group-22.png")}
      />
      <Text
        style={[styles.depositsTransfers, styles.vectorIconPosition]}
      >{`Deposits & Transfers`}</Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector148.png")}
      />
      <Pressable
        style={styles.depositeAndTransferItem}
        onPress={() => navigation.navigate("DepositsTransfers1")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  depositeAndTransferChild: {
    marginTop: -23,
    marginLeft: -153.5,
    width: 42,
    height: 42,
  },
  depositsTransfers: {
    marginTop: -18,
    marginLeft: -98.5,
    fontSize: FontSize.size_2xl,
    fontWeight: "500",
    fontFamily: FontFamily.poppins,
    color: Color.iOSKeyBackgroundHighlight,
    textAlign: "left",
  },
  vectorIcon: {
    marginTop: -11,
    marginLeft: 140.5,
    width: 8,
    height: 14,
  },
  depositeAndTransferItem: {
    top: 0,
    left: 0,
    backgroundColor: Color.gainsboro_500,
    width: 337,
    opacity: 0,
    position: "absolute",
    height: 52,
  },
  depositeAndTransfer: {
    flex: 1,
    width: "100%",
    height: 52,
  },
});

export default DepositeAndTransfer;
