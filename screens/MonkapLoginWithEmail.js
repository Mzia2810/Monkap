import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import EmailContainer from "../components/EmailContainer";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const MonkapLoginWithEmail = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.monkapLoginWithEmail}>
      <View style={styles.monkapLoginWithEmailChild} />
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={styles.next}>Next</Text>
        <Pressable
          style={[styles.tabAreaPosition, styles.groupLayout]}
          onPress={() => navigation.navigate("MoNkapHomeScreen2")}
        />
      </View>
      <EmailContainer />
      <Text style={styles.byClickingOnContainer}>
        <Text
          style={styles.byClickingOn}
        >{`By clicking on Next, you agree to all the terms and policy of this e-wallet. `}</Text>
        <Text style={styles.learnMore}>Learn More</Text>
      </Text>
      <Text style={[styles.login, styles.loginTypo]}>Login</Text>
      <View style={styles.help}>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector145.png")}
        />
        <Pressable
          style={[styles.helpChild, styles.tabAreaPosition]}
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
          style={[styles.backLayout, styles.tabAreaPosition]}
          onPress={() => navigation.navigate("SplashScreenMoNkap")}
        />
      </View>
      <Text style={[styles.orUseYour, styles.loginTypo]}>
        Or use your MoNkap number instead
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    width: 305,
    height: 45,
    position: "absolute",
  },
  loginTypo: {
    fontFamily: FontFamily.gentiumBookBasic,
    textAlign: "left",
    position: "absolute",
  },
  tabAreaPosition: {
    backgroundColor: Color.gainsboro_700,
    left: 0,
    top: 0,
  },
  backLayout: {
    height: 56,
    width: 74,
    position: "absolute",
  },
  monkapLoginWithEmailChild: {
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
    borderRadius: Border.br_xs,
    left: "50%",
    top: "50%",
    width: 305,
    backgroundColor: Color.blue_100,
  },
  next: {
    marginTop: -11.5,
    marginLeft: -16.5,
    fontSize: FontSize.size_lg,
    color: Color.iOSKeyBackgroundHighlight,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  rectangleParent: {
    marginTop: 316,
    marginLeft: -153,
    width: 307,
    height: 45,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  byClickingOn: {
    color: Color.gray_800,
  },
  learnMore: {
    color: Color.gray_900,
    textDecoration: "underline",
  },
  byClickingOnContainer: {
    top: 471,
    left: 52,
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
    fontSize: FontSize.size_4xl,
    fontWeight: "700",
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
    top: 23,
    left: 15,
    width: 33,
    height: 15,
    position: "absolute",
  },
  back: {
    top: 25,
    left: 1,
  },
  orUseYour: {
    top: 429,
    left: 79,
    fontSize: FontSize.size_sm,
    color: Color.blue_100,
    textDecoration: "underline",
  },
  monkapLoginWithEmail: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default MonkapLoginWithEmail;
