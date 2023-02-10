import * as React from "react";
import { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  Pressable,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import { Input as RNKTextInput } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import AgreementContainer from "../components/AgreementContainer";
import PincodeForm from "../components/PincodeForm";
import NameCard from "../components/NameCard";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Register11 = () => {
  const [rectangleTextInput4, setRectangleTextInput4] = useState();
  const navigation = useNavigation();

  return (
    <View style={styles.register1}>
      <StatusBar
        style={styles.childPosition}
        barStyle="default"
        backgroundColor="#0000ee"
      />
      <Text style={[styles.registration, styles.registrationFlexBox]}>
        Registration
      </Text>
      <AgreementContainer
        onRectanglePressablePress={() =>
          navigation.navigate("VerifyPhoneNumber")
        }
      />
      <PincodeForm />
      <TouchableOpacity
        style={styles.help}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("Help")}
      >
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector145.png")}
        />
        <Pressable
          style={[styles.helpChild, styles.tabAreaBg, styles.childPosition]}
          onPress={() => navigation.navigate("Help")}
        />
      </TouchableOpacity>
      <Text
        style={[
          styles.byClickingOnContainer,
          styles.textFlexBox,
          styles.textTypo,
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
      <NameCard
        fullNameInput="Enter email"
        pincodeInput="Enter email"
        fullNameInputField="Enter Your e-mail"
        propTop={488}
        propLeft={29}
        propLeft1={2}
      />
      <Text style={[styles.optional, styles.optionalTypo]}>(Optional)</Text>
      <View style={styles.aVerificationCodeWillBeSeParent}>
        <Text style={[styles.aVerificationCode, styles.textFlexBox]}>
          A verification code will be sent to this number
        </Text>
        <View style={[styles.notify, styles.notifyPosition]}>
          <Image
            style={[styles.notifyChild, styles.notifyPosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-1214.png")}
          />
          <Text style={[styles.text, styles.textFlexBox, styles.textTypo]}>
            !
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    left: 0,
    position: "absolute",
  },
  registrationFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  tabAreaBg: {
    backgroundColor: Color.gainsboro_700,
    top: 0,
  },
  textFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  textTypo: {
    fontWeight: "600",
    textAlign: "center",
  },
  backLayout: {
    height: 56,
    width: 74,
    left: 0,
    position: "absolute",
  },
  optionalTypo: {
    color: Color.iOSKeyLabel,
    textAlign: "left",
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  notifyPosition: {
    width: 10,
    left: 0,
    position: "absolute",
  },
  registration: {
    top: 44,
    left: 125,
    fontSize: FontSize.size_4xl,
    color: Color.whitesmoke_100,
    fontFamily: FontFamily.gentiumBookBasic,
    textAlign: "left",
    fontWeight: "700",
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
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_2xs,
    left: 62,
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
  optional: {
    top: 458,
    left: 31,
    fontSize: FontSize.size_lg,
  },
  aVerificationCode: {
    top: 2,
    left: 12,
    fontFamily: FontFamily.gentiumBasic,
    color: Color.gray_800,
    fontSize: FontSize.size_2xs,
    textAlign: "center",
    fontWeight: "700",
  },
  notifyChild: {
    top: 3,
    height: 13,
  },
  text: {
    left: 2,
    fontSize: FontSize.size_xs,
    lineHeight: 17,
    fontFamily: FontFamily.rubik,
    color: Color.gray_1400,
    top: 0,
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
  register1: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Register11;
