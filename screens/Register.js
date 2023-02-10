import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const Register = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.register}>
      <View style={styles.registerChild} />
      <Text style={[styles.registration, styles.nextTypo]}>Registration</Text>
      <View style={[styles.rectangleParent, styles.nextPosition]}>
        <View
          style={[
            styles.groupChild,
            styles.groupLayout1,
            styles.groupShadowBox,
            styles.nextPosition,
          ]}
        />
        <Text style={[styles.next, styles.nextPosition, styles.nextTypo]}>
          Next
        </Text>
        <Pressable
          style={[styles.groupItem, styles.tabAreaBg, styles.groupLayout1]}
          onPress={() => navigation.navigate("VerifyPhoneNumber")}
        />
      </View>
      <View style={[styles.groupParent, styles.groupLayout1]}>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View
            style={[
              styles.groupInner,
              styles.groupLayout1,
              styles.groupShadowBox,
            ]}
          />
          <Text style={[styles.enterPhoneNumber, styles.enterTypo1]}>
            Enter phone number
          </Text>
          <Text style={[styles.enterTypo, styles.textPosition]}>+237</Text>
          <Image
            style={styles.polygonIcon}
            resizeMode="cover"
            source={require("../assets/polygon-1.png")}
          />
          <Text
            style={[styles.text1Position, styles.enterTypo, styles.enterTypo2]}
          >
            Enter Your Phone Number
          </Text>
        </View>
        <View style={[styles.rectangleContainer, styles.groupLayout]}>
          <View
            style={[
              styles.groupInner,
              styles.groupLayout1,
              styles.groupShadowBox,
            ]}
          />
          <Text style={[styles.textPosition, styles.enterTypo1]}>
            Enter Full name
          </Text>
          <Text
            style={[styles.enterYourFull, styles.enterTypo, styles.enterTypo2]}
          >
            Enter your full name
          </Text>
        </View>
        <View style={[styles.groupView, styles.groupLayout]}>
          <View
            style={[
              styles.groupInner,
              styles.groupLayout1,
              styles.groupShadowBox,
            ]}
          />
          <Text style={styles.enterTypo1}>Enter pincode</Text>
          <Text
            style={[styles.enterYourFull, styles.enterTypo, styles.enterTypo2]}
          >
            Create your pincode
          </Text>
        </View>
        <View style={[styles.rectangleParent1, styles.groupLayout]}>
          <View
            style={[
              styles.groupInner,
              styles.groupLayout1,
              styles.groupShadowBox,
            ]}
          />
          <Text style={styles.enterTypo1}>Enter pincode</Text>
          <Text
            style={[styles.enterYourFull, styles.enterTypo, styles.enterTypo2]}
          >
            Confirm your pincode
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
          style={[styles.helpChild, styles.tabAreaBg]}
          onPress={() => navigation.navigate("Help")}
        />
      </View>
      <Text
        style={[
          styles.byClickingOnContainer,
          styles.text1FlexBox,
          styles.text1Typo,
        ]}
      >
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
          style={[styles.backLayout, styles.tabAreaBg]}
          onPress={() => navigation.navigate("SplashScreenMoNkap")}
        />
      </View>
      <View style={[styles.rectangleParent2, styles.rectangleParentPosition]}>
        <View
          style={[
            styles.groupInner,
            styles.groupLayout1,
            styles.groupShadowBox,
          ]}
        />
        <Text style={styles.enterTypo1}>Enter email</Text>
        <Text style={[styles.enterTypo, styles.enterTypo2]}>
          Enter Your e-mail
        </Text>
      </View>
      <View style={[styles.rectangleParent3, styles.rectangleParentPosition]}>
        <View
          style={[
            styles.groupInner,
            styles.groupLayout1,
            styles.groupShadowBox,
          ]}
        />
        <Text style={styles.enterTypo1}>Enterpassword</Text>
        <Text
          style={[styles.enterYourFull, styles.enterTypo, styles.enterTypo2]}
        >
          Enter Your Password
        </Text>
      </View>
      <Text style={[styles.optional, styles.enterTypo, styles.enterTypo2]}>
        (Optional)
      </Text>
      <View style={styles.aVerificationCodeWillBeSeParent}>
        <Text style={[styles.aVerificationCode, styles.text1FlexBox]}>
          A verification code will be sent to this number
        </Text>
        <View style={[styles.notify, styles.notifyPosition]}>
          <Image
            style={[styles.notifyChild, styles.notifyPosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-1214.png")}
          />
          <Text
            style={[
              styles.text1,
              styles.text1FlexBox,
              styles.text1Typo,
              styles.text1Position,
            ]}
          >
            !
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nextTypo: {
    textAlign: "left",
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.gentiumBookBasic,
    fontWeight: "700",
    position: "absolute",
  },
  nextPosition: {
    left: "50%",
    top: "50%",
  },
  groupLayout1: {
    width: 305,
    position: "absolute",
  },
  groupShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xs,
    width: 305,
  },
  tabAreaBg: {
    backgroundColor: Color.gainsboro_700,
    top: 0,
  },
  groupLayout: {
    height: 66,
    width: 305,
    left: 0,
    position: "absolute",
  },
  enterTypo1: {
    color: Color.silver_200,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
  },
  textPosition: {
    left: 7,
    fontFamily: FontFamily.poppins,
    top: 35,
  },
  enterTypo: {
    color: Color.iOSKeyLabel,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
  },
  enterTypo2: {
    fontFamily: FontFamily.gentiumBookBasic,
    color: Color.iOSKeyLabel,
  },
  text1FlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  text1Typo: {
    fontWeight: "600",
    textAlign: "center",
  },
  backLayout: {
    height: 56,
    width: 74,
    left: 0,
    position: "absolute",
  },
  rectangleParentPosition: {
    left: 29,
    height: 66,
    width: 305,
    position: "absolute",
  },
  notifyPosition: {
    width: 10,
    left: 0,
    position: "absolute",
  },
  text1Position: {
    left: 2,
    top: 0,
  },
  registerChild: {
    width: 360,
    height: 100,
    backgroundColor: Color.blue_100,
    left: 0,
    top: 0,
    position: "absolute",
  },
  registration: {
    left: 125,
    color: Color.whitesmoke_100,
    top: 44,
  },
  groupChild: {
    marginTop: -22.5,
    marginLeft: -151.5,
    shadowRadius: 4,
    elevation: 4,
    height: 45,
    backgroundColor: Color.blue_100,
  },
  next: {
    marginTop: -11.5,
    marginLeft: -20.5,
    color: Color.iOSKeyBackgroundHighlight,
  },
  groupItem: {
    height: 45,
    left: 0,
  },
  rectangleParent: {
    marginTop: 316,
    marginLeft: -153,
    width: 307,
    height: 45,
    position: "absolute",
  },
  groupInner: {
    top: 26,
    backgroundColor: Color.whitesmoke_500,
    shadowRadius: 26,
    elevation: 26,
    height: 40,
    left: 0,
  },
  enterPhoneNumber: {
    left: 67,
    fontFamily: FontFamily.poppins,
    top: 35,
    fontSize: FontSize.size_lg,
  },
  polygonIcon: {
    left: 50,
    width: 9,
    height: 9,
    top: 44,
    position: "absolute",
  },
  rectangleGroup: {
    top: 0,
  },
  enterYourFull: {
    left: 3,
    top: 0,
  },
  rectangleContainer: {
    top: 89,
  },
  groupView: {
    top: 178,
  },
  rectangleParent1: {
    top: 267,
  },
  groupParent: {
    top: 110,
    left: 28,
    height: 333,
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
    top: 667,
    width: 257,
    fontSize: FontSize.size_2xs,
    left: 62,
    fontFamily: FontFamily.poppins,
  },
  backChild: {
    top: 23,
    left: 15,
    width: 33,
    height: 15,
    position: "absolute",
  },
  back: {
    top: 25,
  },
  rectangleParent2: {
    top: 488,
  },
  rectangleParent3: {
    top: 578,
  },
  optional: {
    top: 458,
    left: 31,
    fontWeight: "700",
  },
  aVerificationCode: {
    top: 2,
    left: 12,
    fontFamily: FontFamily.gentiumBasic,
    color: Color.gray_800,
    fontSize: FontSize.size_2xs,
    fontWeight: "700",
  },
  notifyChild: {
    top: 3,
    height: 13,
  },
  text1: {
    fontSize: FontSize.size_xs,
    lineHeight: 17,
    fontFamily: FontFamily.rubik,
    color: Color.gray_1400,
  },
  notify: {
    height: 17,
    top: 0,
  },
  aVerificationCodeWillBeSeParent: {
    top: 176,
    width: 236,
    height: 17,
    left: 62,
    position: "absolute",
  },
  register: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Register;
