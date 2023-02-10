import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const Help = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.help}>
      <View
        style={[styles.helpChild, styles.helpPosition, styles.helpSpaceBlock]}
      />
      <View
        style={[
          styles.enterYourPhoneOrEmailParent,
          styles.rectangleContainerPosition,
        ]}
      >
        <Text style={styles.enterYourPhone}>Enter Your Phone or Email</Text>
        <View style={styles.rectangleParent}>
          <View style={styles.groupChild} />
          <Text style={[styles.phoneOrEmail, styles.cancelTypo]}>
            Phone or Email
          </Text>
        </View>
      </View>
      <Image
        style={[styles.vectorIcon, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector147.png")}
      />
      <View
        style={[styles.helpItem, styles.helpPosition, styles.helpSpaceBlock]}
      />
      <View style={[styles.helpInner, styles.helpPosition]} />
      <View
        style={[
          styles.rectangleGroup,
          styles.groupLayout,
          styles.vectorIconPosition,
        ]}
      >
        <View style={[styles.groupItem, styles.groupItemLayout]} />
        <Text style={[styles.iNeedHelp, styles.cancelTypo, styles.cancelTypo1]}>
          I need help logging in
        </Text>
        <View
          style={[styles.groupInner, styles.groupInnerBg, styles.groupLayout]}
        />
      </View>
      <View
        style={[
          styles.rectangleContainer,
          styles.rectangleLayout,
          styles.rectangleContainerPosition,
        ]}
      >
        <View style={[styles.rectangleView, styles.groupItemLayout]} />
        <Text style={[styles.cancel, styles.cancelTypo, styles.cancelTypo1]}>
          Cancel
        </Text>
        <Pressable
          style={[
            styles.rectanglePressable,
            styles.rectangleLayout,
            styles.groupInnerBg,
          ]}
          onPress={() => navigation.navigate("UsePhone1")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  helpPosition: {
    width: 375,
    marginLeft: -188,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  helpSpaceBlock: {
    marginTop: -406,
    marginLeft: -188,
  },
  rectangleContainerPosition: {
    width: 305,
    marginLeft: -153,
    left: "50%",
    top: "50%",
  },
  cancelTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  vectorIconPosition: {
    left: "50%",
    top: "50%",
  },
  groupLayout: {
    height: 51,
    width: 306,
    position: "absolute",
  },
  groupItemLayout: {
    height: 45,
    borderRadius: Border.br_xs,
    width: 305,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  cancelTypo1: {
    fontWeight: "600",
    fontSize: FontSize.size_lg,
  },
  groupInnerBg: {
    backgroundColor: Color.gainsboro_700,
    top: 0,
  },
  rectangleLayout: {
    height: 47,
    position: "absolute",
  },
  helpChild: {
    height: 100,
    backgroundColor: Color.blue_100,
  },
  enterYourPhone: {
    marginTop: -40,
    fontSize: FontSize.size_4xl,
    color: Color.gray_100,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    marginLeft: -152.5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupChild: {
    marginTop: -20,
    backgroundColor: Color.whitesmoke_500,
    borderRadius: Border.br_xs,
    height: 40,
    marginLeft: -152.5,
    width: 305,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  phoneOrEmail: {
    marginTop: -12,
    marginLeft: -122.5,
    color: Color.silver_200,
  },
  rectangleParent: {
    marginTop: 0,
    height: 40,
    marginLeft: -152.5,
    width: 305,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  enterYourPhoneOrEmailParent: {
    marginTop: -256,
    height: 80,
    position: "absolute",
  },
  vectorIcon: {
    marginTop: -356,
    marginLeft: 128,
    width: 24,
    height: 24,
    position: "absolute",
  },
  helpItem: {
    backgroundColor: "rgba(23, 35, 49, 0.3)",
    height: 812,
  },
  helpInner: {
    marginTop: 168,
    borderTopLeftRadius: Border.br_4xl,
    borderTopRightRadius: Border.br_4xl,
    height: 238,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  groupItem: {
    marginTop: -19.5,
    marginLeft: -152,
    backgroundColor: Color.blue_100,
  },
  iNeedHelp: {
    marginTop: -8.5,
    marginLeft: -81,
    color: Color.iOSKeyBackgroundHighlight,
  },
  groupInner: {
    left: 0,
  },
  rectangleGroup: {
    marginTop: 234,
    marginLeft: -154,
  },
  rectangleView: {
    marginTop: -21.5,
    borderStyle: "solid",
    borderColor: "#0000ee",
    borderWidth: 2,
    marginLeft: -152.5,
    height: 45,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  cancel: {
    marginTop: -10.5,
    marginLeft: -27.5,
    color: Color.blue_100,
  },
  rectanglePressable: {
    left: 3,
    width: 302,
  },
  rectangleContainer: {
    marginTop: 303,
  },
  help: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
});

export default Help;
