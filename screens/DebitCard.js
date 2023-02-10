import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import SecurityCodeContainer from "../components/SecurityCodeContainer";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const DebitCard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.debitCard}>
      <View style={[styles.debitCardChild, styles.childBg]} />
      <View style={[styles.groupParent, styles.continuePosition]}>
        <SecurityCodeContainer />
        <View
          style={[
            styles.rectangleParent,
            styles.groupItemLayout,
            styles.groupChildPosition,
          ]}
        >
          <View
            style={[
              styles.groupChild,
              styles.groupChildPosition,
              styles.childBg,
            ]}
          />
          <Text style={[styles.continue, styles.continuePosition]}>
            Continue
          </Text>
          <Pressable
            style={[styles.groupItem, styles.groupItemLayout]}
            onPress={() => navigation.navigate("PhoneNumber")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childBg: {
    backgroundColor: Color.blue_100,
    position: "absolute",
  },
  continuePosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupItemLayout: {
    height: 48,
    position: "absolute",
  },
  groupChildPosition: {
    width: 305,
    left: "50%",
    top: "50%",
  },
  debitCardChild: {
    left: 0,
    width: 375,
    height: 100,
    top: 0,
  },
  groupChild: {
    marginTop: -21,
    marginLeft: -152.5,
    borderRadius: Border.br_xs,
    height: 45,
  },
  continue: {
    marginTop: -10,
    marginLeft: -35.5,
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    fontFamily: FontFamily.poppins,
    color: Color.iOSKeyBackgroundHighlight,
    textAlign: "left",
  },
  groupItem: {
    left: 17,
    backgroundColor: Color.gainsboro_700,
    width: 269,
    top: 0,
  },
  rectangleParent: {
    marginTop: 254.5,
    marginLeft: -148,
  },
  groupParent: {
    marginTop: -256,
    marginLeft: -153,
    width: 314,
    height: 605,
  },
  debitCard: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default DebitCard;
