import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const UsePhone1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.usePhone}>
      <View style={styles.usePhoneChild} />
      <Text style={[styles.login, styles.loginTypo, styles.loginTypo1]}>
        Login
      </Text>
      <View
        style={[
          styles.rectangleParent,
          styles.groupLayout,
          styles.emailPosition,
        ]}
      >
        <View
          style={[
            styles.groupChild,
            styles.groupChildLayout,
            styles.groupLayout,
            styles.emailPosition,
          ]}
        />
        <Text
          style={[
            styles.next,
            styles.nextTypo,
            styles.enterTypo,
            styles.emailPosition,
          ]}
        >
          Next
        </Text>
        <Pressable
          style={[styles.groupItem, styles.tabBg, styles.groupLayout]}
          onPress={() => navigation.navigate("MoNkapHomeScreen2")}
        />
      </View>
      <View style={styles.lineParent}>
        <View style={[styles.groupInner, styles.groupInnerShadowBox]} />
        <Text
          style={[
            styles.phone,
            styles.emailPosition,
            styles.loginTypo,
            styles.loginTypo1,
          ]}
        >{`Phone `}</Text>
        <View style={[styles.email, styles.emailLayout, styles.emailPosition]}>
          <Text style={[styles.email1, styles.emailPosition, styles.loginTypo]}>
            Email
          </Text>
          <Pressable
            style={[styles.tabArea, styles.emailLayout, styles.tabBg]}
            onPress={() => navigation.navigate("UsePhone")}
          />
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View
            style={[
              styles.rectangleView,
              styles.groupInnerShadowBox,
              styles.groupChildLayout,
            ]}
          />
          <Text style={styles.enterPhoneNumber}>Enter phone number</Text>
          <Text style={[styles.text, styles.textPosition]}>+237</Text>
          <Image
            style={styles.polygonIcon}
            resizeMode="cover"
            source={require("../assets/polygon-1.png")}
          />
          <Text
            style={[styles.enterYourPhone, styles.enterTypo, styles.enterTypo1]}
          >
            Enter Your Phone Number
          </Text>
        </View>
        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <View
            style={[
              styles.rectangleView,
              styles.groupInnerShadowBox,
              styles.groupChildLayout,
            ]}
          />
          <Text style={[styles.enterPincode, styles.textPosition]}>
            Enter pincode
          </Text>
          <Text
            style={[
              styles.enterYourPincode,
              styles.enterTypo,
              styles.enterTypo1,
            ]}
          >
            Enter Your Pincode
          </Text>
        </View>
      </View>
      <View style={styles.help}>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector145.png")}
        />
        <Pressable
          style={[styles.helpChild, styles.tabBg]}
          onPress={() => navigation.navigate("Help")}
        />
      </View>
      <Text style={[styles.byClickingOnContainer, styles.nextTypo]}>
        <Text
          style={styles.byClickingOn}
        >{`By clicking on Next, you agree to all the terms and policy of this e-wallet. `}</Text>
        <Text style={styles.learnMore}>Learn More</Text>
      </Text>
      <View style={[styles.back, styles.backLayout]}>
        <Image
          style={styles.backChild}
          resizeMode="cover"
          source={require("../assets/line-31.png")}
        />
        <Pressable
          style={[styles.backLayout, styles.tabBg]}
          onPress={() => navigation.navigate("SplashScreenMoNkap")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginTypo: {
    textAlign: "left",
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  loginTypo1: {
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.size_4xl,
  },
  groupLayout: {
    height: 45,
    position: "absolute",
  },
  emailPosition: {
    left: "50%",
    top: "50%",
  },
  groupChildLayout: {
    borderRadius: Border.br_xs,
    width: 305,
  },
  nextTypo: {
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    position: "absolute",
  },
  enterTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  tabBg: {
    backgroundColor: Color.gainsboro_700,
    top: 0,
  },
  groupInnerShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  emailLayout: {
    height: 47,
    width: 100,
    position: "absolute",
  },
  rectangleLayout: {
    height: 66,
    width: 305,
    left: 0,
    position: "absolute",
  },
  textPosition: {
    left: 7,
    top: 35,
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
  },
  enterTypo1: {
    fontFamily: FontFamily.gentiumBookBasic,
    color: Color.iOSKeyLabel,
    fontSize: FontSize.size_lg,
    top: 0,
    position: "absolute",
  },
  backLayout: {
    height: 56,
    width: 74,
    left: 0,
    position: "absolute",
  },
  usePhoneChild: {
    width: 360,
    height: 100,
    backgroundColor: Color.blue_100,
    left: 0,
    top: 0,
    position: "absolute",
  },
  login: {
    top: 44,
    left: 155,
    color: Color.whitesmoke_100,
  },
  groupChild: {
    marginTop: -22.5,
    marginLeft: -151.5,
    width: 305,
    backgroundColor: Color.blue_100,
  },
  next: {
    marginTop: -11.5,
    marginLeft: -16.5,
    color: Color.iOSKeyBackgroundHighlight,
  },
  groupItem: {
    width: 305,
    left: 0,
  },
  rectangleParent: {
    marginTop: 316,
    marginLeft: -153,
    width: 307,
  },
  groupInner: {
    top: 39,
    left: 36,
    shadowRadius: 4,
    elevation: 4,
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 2,
    width: 56,
    height: 2,
  },
  phone: {
    marginTop: -106.5,
    marginLeft: -115.5,
    color: Color.iOSKeyLabel,
  },
  email1: {
    marginTop: -10.5,
    marginLeft: -20,
    color: Color.gray_700,
    textAlign: "left",
    fontSize: FontSize.size_4xl,
    top: "50%",
  },
  tabArea: {
    left: 0,
  },
  email: {
    marginTop: -119.5,
    marginLeft: 36.5,
  },
  rectangleView: {
    top: 26,
    backgroundColor: Color.whitesmoke_500,
    shadowRadius: 26,
    elevation: 26,
    height: 40,
    width: 305,
    left: 0,
  },
  enterPhoneNumber: {
    left: 67,
    color: Color.silver_200,
    top: 35,
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
  },
  text: {
    color: Color.iOSKeyLabel,
  },
  polygonIcon: {
    top: 51,
    left: 49,
    width: 9,
    height: 9,
    position: "absolute",
  },
  enterYourPhone: {
    left: 2,
    color: Color.iOSKeyLabel,
  },
  rectangleGroup: {
    top: 83,
  },
  enterPincode: {
    color: Color.silver_200,
  },
  enterYourPincode: {
    left: 3,
    color: Color.iOSKeyLabel,
  },
  rectangleContainer: {
    top: 173,
  },
  lineParent: {
    top: 183,
    left: 28,
    height: 239,
    width: 305,
    position: "absolute",
  },
  vectorIcon: {
    height: "35.29%",
    width: "24.77%",
    top: "25.37%",
    right: "31.14%",
    bottom: "39.34%",
    left: "44.09%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  helpChild: {
    width: 93,
    height: 67,
    left: 0,
    position: "absolute",
  },
  help: {
    height: "8.38%",
    width: "25.83%",
    top: "3.38%",
    right: "0%",
    bottom: "88.25%",
    left: "74.17%",
    position: "absolute",
  },
  byClickingOn: {
    color: Color.gray_800,
  },
  learnMore: {
    textDecoration: "underline",
    color: Color.gray_900,
  },
  byClickingOnContainer: {
    top: 457,
    left: 62,
    fontSize: FontSize.size_2xs,
    textAlign: "center",
    width: 257,
  },
  backChild: {
    top: 30,
    left: 16,
    width: 32,
    height: 0,
    position: "absolute",
  },
  back: {
    top: 25,
  },
  usePhone: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    flex: 1,
    width: "100%",
    height: 800,
    display: "none",
    overflow: "hidden",
  },
});

export default UsePhone1;
