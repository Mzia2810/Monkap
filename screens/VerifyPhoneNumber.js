import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AgreementContainer from "../components/AgreementContainer";
import ConfirmPincodeCard from "../components/ConfirmPincodeCard";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const VerifyPhoneNumber = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.verifyPhoneNumber}>
      <View style={[styles.verifyPhoneNumberChild, styles.childPosition]} />
      <Text style={styles.registration}>Registration</Text>
      <AgreementContainer
        onRectanglePressablePress={() =>
          navigation.navigate("SplashScreenPhoneVerified")
        }
      />
      <ConfirmPincodeCard />
      <View style={styles.help}>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector145.png")}
        />
        <Pressable
          style={[styles.helpChild, styles.tabAreaBg, styles.childPosition]}
          onPress={() => navigation.navigate("Help")}
        />
      </View>
      <Text style={styles.byClickingOnContainer}>
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
          onPress={() => navigation.navigate("Register11")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    left: 0,
    position: "absolute",
  },
  tabAreaBg: {
    backgroundColor: Color.gainsboro_700,
    top: 0,
  },
  backLayout: {
    height: 56,
    width: 74,
    left: 0,
    position: "absolute",
  },
  verifyPhoneNumberChild: {
    backgroundColor: Color.blue_100,
    width: 360,
    height: 100,
    top: 0,
    left: 0,
  },
  registration: {
    top: 44,
    left: 125,
    fontSize: FontSize.size_4xl,
    fontWeight: "700",
    fontFamily: FontFamily.gentiumBookBasic,
    color: Color.whitesmoke_100,
    textAlign: "left",
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
    left: 62,
    fontSize: FontSize.size_2xs,
    fontWeight: "600",
    fontFamily: FontFamily.poppins,
    textAlign: "center",
    width: 257,
    position: "absolute",
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
  verifyPhoneNumber: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default VerifyPhoneNumber;
