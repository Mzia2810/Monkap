import * as React from "react";
import { useState, useCallback } from "react";
import { Text, StyleSheet, View, Pressable, Image, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FingerPrintEnroll from "../components/FingerPrintEnroll";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const SplashScreenPhoneVerified = () => {
  const [rectangle1Visible, setRectangle1Visible] = useState(false);
  const navigation = useNavigation();

  const openRectangle1 = useCallback(() => {
    setRectangle1Visible(true);
  }, []);

  const closeRectangle1 = useCallback(() => {
    setRectangle1Visible(false);
  }, []);
  return (
    <>
      <View style={styles.splashScreenPhoneVerified}>
        <Text style={styles.cameroonsPremierMobile}>
          Cameroon’s Premier Mobile Money App
        </Text>
        <View style={[styles.yes, styles.yesLayout, styles.yesPosition]}>
          <Text style={[styles.no, styles.noTypo]}>NO</Text>
          <Pressable
            style={[styles.tabAreaPosition, styles.yesLayout]}
            onPress={() => navigation.navigate("MonkapProfile")}
          />
        </View>
        <View style={[styles.no1, styles.yesLayout, styles.yesPosition]}>
          <Text style={[styles.yes1, styles.noTypo]}>YES</Text>
          <Pressable style={styles.yesLayout} onPress={openRectangle1} />
        </View>
        <Text
          style={[
            styles.yourNumberHas,
            styles.yourNumberHasTypo,
            styles.yourNumberHasTypo1,
          ]}
        >
          Your number has been successfully Verified
        </Text>
        <Text
          style={[
            styles.biometricVerification,
            styles.yourNumberHasTypo,
            styles.yourNumberHasTypo1,
          ]}
        >
          Biometric Verification
        </Text>
        <View style={styles.splashScreenPhoneVerifiedChild} />
        <Text style={[styles.additionalSecurity, styles.yourNumberHasTypo]}>
          Additional Security
        </Text>
        <View style={[styles.back, styles.backLayout]}>
          <Image
            style={styles.backChild}
            resizeMode="cover"
            source={require("../assets/line-31.png")}
          />
          <Pressable
            style={[styles.backLayout, styles.tabAreaPosition]}
            onPress={() => navigation.navigate("VerifyPhoneNumber")}
          />
        </View>
      </View>

      <Modal animationType="fade" transparent visible={rectangle1Visible}>
        <View style={styles.rectangle1Overlay}>
          <Pressable style={styles.rectangle1Bg} onPress={closeRectangle1} />
          <FingerPrintEnroll onClose={closeRectangle1} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  yesLayout: {
    height: 45,
    width: 70,
    position: "absolute",
  },
  yesPosition: {
    marginTop: 76,
    width: 70,
    left: "50%",
    top: "50%",
  },
  noTypo: {
    color: Color.iOSKeyLabel,
    textDecoration: "underline",
    fontSize: FontSize.size_3xl,
    marginTop: -11.5,
    textAlign: "left",
    fontFamily: FontFamily.gentiumBookBasic,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  yourNumberHasTypo: {
    textAlign: "center",
    fontWeight: "700",
    letterSpacing: 2.4,
    fontSize: FontSize.size_2xl,
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  yourNumberHasTypo1: {
    lineHeight: 21,
    fontWeight: "700",
    letterSpacing: 2.4,
    fontSize: FontSize.size_2xl,
    color: Color.iOSKeyBackgroundHighlight,
  },
  backLayout: {
    height: 56,
    width: 74,
    position: "absolute",
  },
  tabAreaPosition: {
    backgroundColor: Color.gainsboro_700,
    left: 0,
    top: 0,
  },
  cameroonsPremierMobile: {
    marginTop: 281,
    marginLeft: -125,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.iOSKeyBackgroundHighlight,
    fontFamily: FontFamily.gentiumBookBasic,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  no: {
    marginLeft: -14,
  },
  yes: {
    marginLeft: -94,
  },
  yes1: {
    marginLeft: -12,
  },
  rectangle1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  rectangle1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  no1: {
    marginLeft: 10,
  },
  yourNumberHas: {
    top: 225,
    left: 42,
    width: 276,
    height: 48,
  },
  biometricVerification: {
    top: 438,
    left: 70,
  },
  splashScreenPhoneVerifiedChild: {
    top: 340,
    left: 8,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.33)",
    borderTopWidth: 1,
    width: 346,
    height: 1,
    position: "absolute",
  },
  additionalSecurity: {
    top: 384,
    left: 85,
    lineHeight: 17,
    fontWeight: "700",
    letterSpacing: 2.4,
    fontSize: FontSize.size_2xl,
    color: Color.iOSKeyLabel,
  },
  backChild: {
    top: 23,
    left: 15,
    width: 33,
    height: 15,
    position: "absolute",
  },
  back: {
    top: 20,
    left: -1,
  },
  splashScreenPhoneVerified: {
    backgroundColor: Color.blue_100,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default SplashScreenPhoneVerified;
