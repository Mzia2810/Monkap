import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color, Margin } from "../GlobalStyles";

const EmailVerification = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.emailVerification}>
      <View style={styles.emailVerificationChild} />
      <View style={[styles.rectangleParent, styles.groupItemPosition]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.no, styles.noTypo]}>No</Text>
        <Image
          style={[styles.groupItem, styles.groupItemPosition]}
          resizeMode="cover"
          source={require("../assets/group-12.png")}
        />
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Text style={[styles.yes, styles.noTypo]}>Yes</Text>
        <Pressable
          style={[styles.rectanglePressable, styles.rectangleLayout]}
          onPress={() => navigation.navigate("InviteFriends1")}
        />
      </View>
      <Text style={styles.canYouAccessContainer}>
        <Text style={styles.canYouAccess}>Can you access your email that</Text>
        <Text style={styles.matchesMasgmailcom}>
          matches mas******@gmail.com?
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupItemPosition: {
    height: 519,
    width: 307,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupLayout: {
    height: 45,
    borderRadius: Border.br_xs,
    width: 305,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  noTypo: {
    textAlign: "left",
    fontWeight: "600",
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_lg,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  rectangleLayout: {
    height: 46,
    position: "absolute",
  },
  emailVerificationChild: {
    left: 0,
    width: 375,
    height: 100,
    backgroundColor: Color.blue_100,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    marginTop: 214.5,
    marginLeft: -151.5,
    borderStyle: "solid",
    borderColor: "#0000ee",
    borderWidth: 2,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  no: {
    marginTop: 225.5,
    marginLeft: -9.5,
    color: Color.blue_100,
  },
  groupItem: {
    marginTop: -259.5,
    marginLeft: -153.5,
  },
  rectangleParent: {
    marginTop: -158,
    marginLeft: -155,
  },
  groupInner: {
    marginTop: -22,
    marginLeft: -152.5,
    backgroundColor: Color.blue_100,
  },
  yes: {
    marginTop: -11,
    marginLeft: -13.5,
    color: Color.iOSKeyBackgroundHighlight,
  },
  rectanglePressable: {
    left: 1,
    backgroundColor: Color.gainsboro_700,
    width: 304,
    top: 0,
  },
  rectangleGroup: {
    marginTop: 245,
    marginLeft: -153,
    width: 305,
    height: 46,
    left: "50%",
    top: "50%",
  },
  canYouAccess: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  matchesMasgmailcom: {
    margin: Margin.m_3xs,
  },
  canYouAccessContainer: {
    marginTop: -83,
    marginLeft: -128,
    fontWeight: "500",
    color: Color.iOSKeyLabel,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_lg,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  emailVerification: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
});

export default EmailVerification;
