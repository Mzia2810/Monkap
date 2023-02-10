import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const MTNSplashScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mtnSplashscreen}>
      <Image
        style={[styles.images1Icon, styles.images1IconLayout]}
        resizeMode="cover"
        source={require("../assets/images-1.png")}
      />
      <View style={[styles.mtnSplashscreenChild, styles.images1IconLayout]} />
      <Text style={styles.welcomeToMtm}>Welcome To MTM Mobile Money</Text>
      <Pressable
        style={styles.contBtn}
        onPress={() => navigation.navigate("MomoRegistration")}
      >
        <View style={[styles.btnNext, styles.btnShadowBox]} />
        <Text style={[styles.register, styles.loginTypo]}>Register</Text>
        <View style={[styles.tabArea, styles.tabLayout, styles.tabBg]} />
      </Pressable>
      <View style={[styles.contBtn1, styles.tabLayout]}>
        <View style={[styles.btnNext1, styles.btnShadowBox]} />
        <Text style={[styles.login, styles.loginTypo]}>{`Login `}</Text>
        <Pressable
          style={[styles.tabArea1, styles.tabLayout, styles.tabBg]}
          onPress={() => navigation.navigate("MomoOnMonkapHomeHideBalance")}
        />
      </View>
      <Image
        style={styles.mtnMmLogoGenericMtnMobileIcon}
        resizeMode="cover"
        source={require("../assets/69691715-mtnmmlogogenericmtnmobilemoneylogo-139.png")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("MoNkapHomeScreen2")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/line-1650.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  images1IconLayout: {
    width: 360,
    position: "absolute",
  },
  btnShadowBox: {
    display: "none",
    height: 40,
    width: 79,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.29)",
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.gold_300,
    borderRadius: Border.br_2xl,
    top: -2,
    position: "absolute",
  },
  loginTypo: {
    color: Color.gold_100,
    lineHeight: 24,
    letterSpacing: 1.9,
    textDecoration: "underline",
    fontSize: FontSize.size_4xl,
    top: 6,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBookBasic,
    fontWeight: "700",
    position: "absolute",
  },
  tabLayout: {
    width: 76,
    height: 38,
    position: "absolute",
  },
  tabBg: {
    backgroundColor: Color.gainsboro_700,
    width: 76,
    top: 0,
  },
  images1Icon: {
    marginTop: -400,
    marginLeft: -180,
    top: "50%",
    left: "50%",
    height: 800,
  },
  mtnSplashscreenChild: {
    top: 493,
    backgroundColor: "rgba(0, 0, 0, 0.38)",
    height: 54,
    left: 0,
  },
  welcomeToMtm: {
    top: 96,
    left: 22,
    fontSize: FontSize.size_9xl,
    letterSpacing: -0.3,
    lineHeight: 46,
    color: Color.iOSKeyLabel,
    width: 316,
    height: 131,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBookBasic,
    fontWeight: "700",
    position: "absolute",
  },
  btnNext: {
    left: 8,
  },
  register: {
    left: 0,
  },
  tabArea: {
    left: 9,
  },
  contBtn: {
    left: 27,
    width: 88,
    height: 38,
    top: 509,
    position: "absolute",
  },
  btnNext1: {
    left: -1,
  },
  login: {
    left: 5,
  },
  tabArea1: {
    left: 0,
  },
  contBtn1: {
    left: 237,
    width: 76,
    top: 509,
  },
  mtnMmLogoGenericMtnMobileIcon: {
    left: 109,
    width: 153,
    height: 104,
    top: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 18,
    top: 25,
    width: 28,
    height: 15,
    position: "absolute",
  },
  mtnSplashscreen: {
    backgroundColor: Color.darkgray_500,
    flex: 1,
    overflow: "hidden",
    height: 800,
    width: "100%",
  },
});

export default MTNSplashScreen;
