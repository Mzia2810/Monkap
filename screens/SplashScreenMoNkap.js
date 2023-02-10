import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const SplashScreenMoNkap = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.splashScreenMonkap}>
      <Text style={[styles.cameroonsPremierMobile, styles.xafcfaPosition]}>
        Cameroon’s Premier Mobile Money App
      </Text>
      <View style={styles.welcomeToMonkapParent}>
        <Text style={[styles.welcomeToMonkap, styles.xafcfaPosition]}>
          Welcome to MoNkap
        </Text>
        <Text style={[styles.xafcfa, styles.xafcfaPosition]}>XAF[CFA]</Text>
      </View>
      <TouchableOpacity
        style={[styles.yes, styles.yesLayout, styles.noPosition]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("Register11")}
      >
        <Text style={[styles.register, styles.signInTypo]}>Register</Text>
        <Pressable
          style={[styles.yesChild, styles.yesLayout]}
          onPress={() => navigation.navigate("Register11")}
        />
      </TouchableOpacity>
      <Pressable
        style={[styles.no, styles.yesLayout, styles.noPosition]}
        onPress={() => navigation.navigate("MonkapLoginWithPhone")}
      >
        <Text style={[styles.signIn, styles.signInTypo]}>Sign In</Text>
        <Pressable
          style={[styles.yesChild, styles.yesLayout]}
          onPress={() => navigation.navigate("UsePhone1")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  xafcfaPosition: {
    textAlign: "left",
    color: Color.iOSKeyBackgroundHighlight,
    fontFamily: FontFamily.gentiumBookBasic,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  yesLayout: {
    height: 45,
    width: 70,
    position: "absolute",
  },
  noPosition: {
    marginTop: 56,
    width: 70,
    left: "50%",
    top: "50%",
  },
  signInTypo: {
    textDecoration: "underline",
    fontSize: FontSize.size_3xl,
    marginTop: -11.5,
    textAlign: "left",
    color: Color.iOSKeyBackgroundHighlight,
    fontFamily: FontFamily.gentiumBookBasic,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  cameroonsPremierMobile: {
    marginTop: 281,
    marginLeft: -125,
    fontSize: FontSize.size_lg,
  },
  welcomeToMonkap: {
    marginTop: -35.5,
    marginLeft: -87,
    fontSize: FontSize.size_4xl,
  },
  xafcfa: {
    marginTop: 0.5,
    marginLeft: -64,
    fontSize: FontSize.size_8xl,
    fontWeight: "700",
  },
  welcomeToMonkapParent: {
    marginTop: -221,
    marginLeft: -86,
    width: 174,
    height: 71,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  register: {
    marginLeft: -32,
  },
  yesChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.gainsboro_700,
  },
  yes: {
    marginLeft: -90,
  },
  signIn: {
    marginLeft: -24,
  },
  no: {
    marginLeft: 20,
  },
  splashScreenMonkap: {
    backgroundColor: Color.blue_100,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default SplashScreenMoNkap;
