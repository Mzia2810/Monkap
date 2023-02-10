import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color, Margin } from "../GlobalStyles";

const EmailAddress1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.emailAddress}>
      <View style={[styles.emailAddressChild, styles.vectorIconPosition]} />
      <Text style={styles.enterTheEmailContainer}>
        <Text style={styles.enterTheEmail}>Enter the email address</Text>
        <Text style={styles.associatedWithYour}>
          associated with your account
        </Text>
      </Text>
      <View style={[styles.rectangleParent, styles.groupChildPosition]}>
        <View
          style={[
            styles.groupChild,
            styles.groupLayout,
            styles.groupChildPosition,
          ]}
        />
        <Text style={[styles.emailAddress1, styles.nextTypo]}>
          Email Address
        </Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupPosition]}>
        <View
          style={[styles.groupItem, styles.groupPosition, styles.groupLayout]}
        />
        <Text style={[styles.next, styles.nextTypo]}>Next</Text>
        <Pressable
          style={styles.groupInner}
          onPress={() => navigation.navigate("EmailAddress")}
        />
      </View>
      <Image
        style={[styles.vectorIcon, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector147.png")}
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
  groupChildPosition: {
    height: 40,
    width: 305,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupLayout: {
    borderRadius: Border.br_xs,
    marginLeft: -152.5,
  },
  nextTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupPosition: {
    height: 45,
    width: 305,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  emailAddressChild: {
    marginTop: -406,
    marginLeft: -188,
    width: 375,
    height: 100,
    backgroundColor: Color.blue_100,
  },
  enterTheEmail: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  associatedWithYour: {
    margin: Margin.m_3xs,
  },
  enterTheEmailContainer: {
    marginTop: -256,
    fontSize: FontSize.size_4xl,
    color: Color.gray_100,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    marginLeft: -153,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupChild: {
    marginTop: -20,
    backgroundColor: Color.whitesmoke_500,
  },
  emailAddress1: {
    marginTop: -12,
    marginLeft: -122.5,
    color: Color.silver_200,
  },
  rectangleParent: {
    marginTop: -181,
    marginLeft: -153,
  },
  groupItem: {
    marginTop: -22.5,
    backgroundColor: Color.blue_100,
  },
  next: {
    marginTop: -11.5,
    marginLeft: -17.5,
    color: Color.iOSKeyBackgroundHighlight,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
  },
  groupInner: {
    top: 1,
    left: 0,
    backgroundColor: Color.gainsboro_700,
    height: 44,
    width: 305,
    position: "absolute",
  },
  rectangleGroup: {
    marginTop: 316,
    marginLeft: -153,
  },
  vectorIcon: {
    marginTop: -356,
    marginLeft: 128,
    width: 24,
    height: 24,
  },
  emailAddress: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default EmailAddress1;
