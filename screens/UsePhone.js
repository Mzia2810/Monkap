import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const UsePhone = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.usePhone}>
      <View style={styles.usePhoneChild} />
      <View
        style={[
          styles.rectangleParent,
          styles.groupLayout,
          styles.phonePosition,
        ]}
      >
        <View
          style={[
            styles.groupChild,
            styles.groupChildLayout,
            styles.groupLayout,
            styles.phonePosition,
          ]}
        />
        <Text style={styles.next}>Next</Text>
        <Pressable
          style={[styles.groupItem, styles.childPosition, styles.groupLayout]}
          onPress={() => navigation.navigate("MoNkapHomeScreen2")}
        />
      </View>
      <View style={styles.lineParent}>
        <View style={[styles.groupInner, styles.groupInnerShadowBox]} />
        <Text
          style={[
            styles.email,
            styles.enterTypo,
            styles.emailTypo,
            styles.phonePosition,
          ]}
        >
          Email
        </Text>
        <View style={[styles.phone, styles.phoneLayout, styles.phonePosition]}>
          <Text
            style={[
              styles.phone1,
              styles.enterTypo,
              styles.emailTypo,
              styles.phonePosition,
            ]}
          >{`Phone `}</Text>
          <Pressable
            style={[styles.phoneLayout, styles.childPosition]}
            onPress={() => navigation.navigate("UsePhone1")}
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
          <Text style={styles.enterEmail}>Enter email</Text>
          <Text style={[styles.text, styles.textPosition]}>+237</Text>
          <Image
            style={styles.polygonIcon}
            resizeMode="cover"
            source={require("../assets/polygon-1.png")}
          />
          <Text
            style={[styles.enterYourEMail, styles.enterTypo, styles.enterTypo1]}
          >
            Enter Your e-mail
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
          <Text style={[styles.enterpassword, styles.textPosition]}>
            Enterpassword
          </Text>
          <Text
            style={[
              styles.enterYourPassword,
              styles.enterTypo,
              styles.enterTypo1,
            ]}
          >
            Enter Your Password
          </Text>
        </View>
      </View>
      <Text style={styles.byClickingOnContainer}>
        <Text
          style={styles.byClickingOn}
        >{`By clicking on Next, you agree to all the terms and policy of this e-wallet. `}</Text>
        <Text style={styles.learnMore}>Learn More</Text>
      </Text>
      <Text style={[styles.login, styles.enterTypo, styles.emailTypo]}>
        Login
      </Text>
      <View style={styles.help}>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector145.png")}
        />
        <Pressable
          style={[styles.helpChild, styles.childPosition]}
          onPress={() => navigation.navigate("Help")}
        />
      </View>
      <View style={[styles.back, styles.backLayout]}>
        <Image
          style={styles.backChild}
          resizeMode="cover"
          source={require("../assets/line-31.png")}
        />
        <Pressable
          style={[styles.backLayout, styles.childPosition]}
          onPress={() => navigation.navigate("SplashScreenMoNkap")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 45,
    position: "absolute",
  },
  phonePosition: {
    left: "50%",
    top: "50%",
  },
  groupChildLayout: {
    borderRadius: Border.br_xs,
    width: 305,
  },
  childPosition: {
    backgroundColor: Color.gainsboro_700,
    left: 0,
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
  enterTypo: {
    fontFamily: FontFamily.gentiumBookBasic,
    textAlign: "left",
    position: "absolute",
  },
  emailTypo: {
    fontWeight: "700",
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.gentiumBookBasic,
  },
  phoneLayout: {
    height: 50,
    width: 101,
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
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  enterTypo1: {
    fontFamily: FontFamily.gentiumBookBasic,
    fontSize: FontSize.size_lg,
    color: Color.iOSKeyLabel,
    top: 0,
  },
  backLayout: {
    height: 56,
    width: 74,
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
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupItem: {
    width: 305,
  },
  rectangleParent: {
    marginTop: 316,
    marginLeft: -153,
    width: 307,
  },
  groupInner: {
    top: 40,
    left: 215,
    shadowRadius: 4,
    elevation: 4,
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 2,
    width: 53,
    height: 2,
  },
  email: {
    marginTop: -106,
    marginLeft: 63.5,
    color: Color.iOSKeyLabel,
  },
  phone1: {
    marginTop: -11,
    marginLeft: -26.5,
    color: Color.gray_800,
  },
  phone: {
    marginTop: -120,
    marginLeft: -139.5,
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
  enterEmail: {
    left: 67,
    color: Color.silver_200,
    top: 35,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_lg,
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
  enterYourEMail: {
    left: 2,
    color: Color.iOSKeyLabel,
  },
  rectangleGroup: {
    top: 84,
  },
  enterpassword: {
    color: Color.silver_200,
  },
  enterYourPassword: {
    left: 3,
    color: Color.iOSKeyLabel,
  },
  rectangleContainer: {
    top: 174,
  },
  lineParent: {
    top: 182,
    left: 28,
    height: 240,
    width: 305,
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
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    position: "absolute",
  },
  login: {
    top: 44,
    left: 155,
    color: Color.whitesmoke_100,
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
    position: "absolute",
  },
  help: {
    height: "8.38%",
    width: "25.83%",
    top: "3.38%",
    right: "-0.28%",
    bottom: "88.25%",
    left: "74.44%",
    position: "absolute",
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
    left: 1,
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

export default UsePhone;
