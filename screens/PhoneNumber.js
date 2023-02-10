import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color, Margin } from "../GlobalStyles";

const PhoneNumber = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.phoneNumber}>
      <View style={styles.phoneNumberChild} />
      <Text style={styles.enterThePhoneContainer}>
        <Text style={styles.enterThePhone}>Enter the phone number</Text>
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
        <Text style={[styles.mobileNumber, styles.nextTypo]}>
          Mobile Number
        </Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupPosition]}>
        <View
          style={[styles.groupItem, styles.groupPosition, styles.groupLayout]}
        />
        <Text style={[styles.next, styles.nextTypo]}>Next</Text>
        <Pressable
          style={styles.groupInner}
          onPress={() => navigation.navigate("EmailAddress1")}
        />
      </View>
      <View
        style={[
          styles.groupParent,
          styles.textIconPosition,
          styles.parentSpaceBlock,
        ]}
      >
        <View
          style={[styles.parent, styles.textPosition2, styles.parentSpaceBlock]}
        >
          <Text style={[styles.text, styles.textTypo, styles.textPosition2]}>
            1
          </Text>
          <Text style={[styles.text1, styles.textPosition1]}>7</Text>
          <Text style={[styles.text2, styles.textPosition]}>4</Text>
          <Text style={[styles.abc, styles.abcPosition]}>ABC</Text>
        </View>
        <View style={[styles.group, styles.textPosition2]}>
          <Text style={[styles.text3, styles.textTypo, styles.textPosition2]}>
            2
          </Text>
          <Text style={[styles.text4, styles.textPosition1]}>8</Text>
          <Text style={[styles.text5, styles.textPosition]}>5</Text>
          <Text style={[styles.text6, styles.abcPosition]}>0</Text>
        </View>
        <View style={[styles.container, styles.text7Position]}>
          <Text style={[styles.text7, styles.text7Position, styles.textTypo]}>
            3
          </Text>
          <Text
            style={[styles.text8, styles.textTypo, styles.textIconPosition]}
          >
            9
          </Text>
          <Text
            style={[styles.text9, styles.textTypo, styles.textIconPosition]}
          >
            6
          </Text>
          <Image
            style={[styles.vectorIcon, styles.textIconPosition]}
            resizeMode="cover"
            source={require("../assets/vector200.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.vectorIcon1, styles.textIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector147.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    height: 40,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupLayout: {
    borderRadius: Border.br_xs,
    width: 305,
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
    left: "50%",
    top: "50%",
    marginLeft: -153,
    position: "absolute",
  },
  textIconPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  parentSpaceBlock: {
    marginLeft: -153,
    height: 146,
  },
  textPosition2: {
    marginTop: -73,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textTypo: {
    color: Color.dimgray_200,
    fontWeight: "500",
    fontSize: FontSize.size_2xl,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
  },
  textPosition1: {
    marginTop: 7,
    color: Color.dimgray_200,
    fontWeight: "500",
    fontSize: FontSize.size_2xl,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textPosition: {
    marginTop: -33,
    color: Color.dimgray_200,
    fontWeight: "500",
    fontSize: FontSize.size_2xl,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  abcPosition: {
    marginTop: 47,
    color: Color.dimgray_200,
    fontWeight: "500",
    fontSize: FontSize.size_2xl,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  text7Position: {
    marginTop: -69,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  phoneNumberChild: {
    top: 0,
    left: 0,
    width: 375,
    height: 100,
    backgroundColor: Color.blue_100,
    position: "absolute",
  },
  enterThePhone: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  associatedWithYour: {
    margin: Margin.m_3xs,
  },
  enterThePhoneContainer: {
    marginTop: -256,
    fontSize: FontSize.size_4xl,
    color: Color.gray_100,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    left: "50%",
    top: "50%",
    marginLeft: -153,
    position: "absolute",
  },
  groupChild: {
    marginTop: -20,
    marginLeft: -152.5,
    backgroundColor: Color.whitesmoke_500,
  },
  mobileNumber: {
    marginTop: -12,
    marginLeft: -122.5,
    color: Color.silver_200,
  },
  rectangleParent: {
    marginTop: -181,
    width: 305,
    height: 40,
    marginLeft: -153,
  },
  groupItem: {
    marginTop: -22.5,
    backgroundColor: Color.blue_100,
  },
  next: {
    marginTop: -11.5,
    color: Color.iOSKeyBackgroundHighlight,
    marginLeft: -18,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
  },
  groupInner: {
    top: 2,
    left: 2,
    backgroundColor: Color.gainsboro_700,
    width: 304,
    height: 43,
    position: "absolute",
  },
  rectangleGroup: {
    marginTop: 316,
    width: 306,
  },
  text: {
    marginLeft: -3,
  },
  text1: {
    marginLeft: -5,
  },
  text2: {
    marginLeft: -6,
  },
  abc: {
    marginLeft: -18,
  },
  parent: {
    width: 36,
    height: 146,
  },
  text3: {
    marginLeft: -4.5,
  },
  text4: {
    marginLeft: -5.5,
  },
  text5: {
    marginLeft: -5.5,
  },
  text6: {
    marginLeft: -5.5,
  },
  group: {
    marginLeft: 7,
    width: 11,
    height: 146,
  },
  text7: {
    marginLeft: -5.5,
  },
  text8: {
    marginTop: 15,
    marginLeft: -5.5,
  },
  text9: {
    marginTop: -27,
    marginLeft: -5.5,
  },
  vectorIcon: {
    marginTop: 57,
    height: 12,
    marginLeft: -5.5,
    width: 11,
  },
  container: {
    marginLeft: 142,
    height: 138,
    width: 11,
  },
  groupParent: {
    marginTop: 142,
    height: 146,
    width: 306,
  },
  vectorIcon1: {
    marginTop: -356,
    marginLeft: 128,
    width: 24,
    height: 24,
  },
  phoneNumber: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default PhoneNumber;
