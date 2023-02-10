import * as React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import LoginContainer from "../components/LoginContainer";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const OMoneySplashScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.omoneySplashscreen}>
      <Image
        style={[styles.images1Icon, styles.directionsPosition]}
        resizeMode="cover"
        source={require("../assets/images-11.png")}
      />
      <Text style={[styles.welcomeToOrangemoney, styles.orangeMoneyFlexBox]}>
        Welcome To OrangeMoney
      </Text>
      <View style={[styles.orangeMoneyIcon, styles.orangeIconLayout1]}>
        <View style={[styles.orangeMoneyIconChild, styles.orangeIconLayout1]} />
        <Image
          style={[styles.orangeMoneyIconItem, styles.orangeIconLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-223.png")}
        />
        <Image
          style={[styles.orangeMoneyIconInner, styles.orangeIconLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-323.png")}
        />
        <Text style={[styles.orangeMoney, styles.orangeMoneyFlexBox]}>
          Orange Money
        </Text>
      </View>
      <LoginContainer />
      <Pressable
        style={[styles.directions, styles.directionsPosition]}
        onPress={() => navigation.navigate("MoNkapHomeScreen2")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/directions25.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  directionsPosition: {
    position: "absolute",
    left: 0,
  },
  orangeMoneyFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  orangeIconLayout1: {
    height: 45,
    width: 45,
    position: "absolute",
  },
  orangeIconLayout: {
    height: 18,
    width: 18,
    borderRadius: Border.br_5xl,
    position: "absolute",
  },
  images1Icon: {
    top: 2,
    width: 360,
    height: 798,
    left: 0,
  },
  welcomeToOrangemoney: {
    top: 75,
    left: 22,
    fontSize: FontSize.size_9xl,
    letterSpacing: 8,
    lineHeight: 46,
    fontWeight: "700",
    fontFamily: FontFamily.gentiumBasic,
    color: Color.iOSKeyLabel,
    width: 316,
    height: 86,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  orangeMoneyIconChild: {
    top: 0,
    borderRadius: Border.br_2xs,
    backgroundColor: Color.gray_400,
    left: 0,
  },
  orangeMoneyIconItem: {
    top: 13,
    left: 26,
  },
  orangeMoneyIconInner: {
    top: 14,
    left: 6,
  },
  orangeMoney: {
    top: 33,
    left: 3,
    fontSize: FontSize.size_7xs,
    lineHeight: 7,
    fontWeight: "900",
    fontFamily: FontFamily.rubik,
    color: Color.orangeColor,
  },
  orangeMoneyIcon: {
    top: 27,
    left: 16,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  directions: {
    top: 24,
    width: 31,
    height: 36,
    left: 0,
  },
  omoneySplashscreen: {
    backgroundColor: Color.darkgray_500,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default OMoneySplashScreen;
