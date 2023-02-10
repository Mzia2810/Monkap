import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const MonkapLoginWithPhone = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.monkapLoginWithPhone}>
      <View style={styles.monkapLoginWithPhoneChild} />
      <Text style={styles.login}>Login</Text>
      <Pressable
        style={[
          styles.rectangleParent,
          styles.groupLayout1,
          styles.emailParentPosition,
        ]}
      >
        <View
          style={[
            styles.groupChild,
            styles.groupLayout,
            styles.groupLayout1,
            styles.emailParentPosition,
          ]}
        />
        <Text
          style={[styles.next, styles.nextTypo, styles.emailParentPosition]}
        >
          Next
        </Text>
        <Pressable
          style={[styles.groupItem, styles.tabBg, styles.groupLayout1]}
          onPress={() => navigation.navigate("MoNkapHomeScreen2")}
        />
      </Pressable>
      <View style={[styles.emailParent, styles.emailParentPosition]}>
        <View
          style={[styles.email, styles.emailLayout, styles.emailParentPosition]}
        >
          <Text style={[styles.phone, styles.phonePosition]}>{`Phone `}</Text>
          <View style={[styles.emailChild, styles.emailChildShadowBox]} />
          <Text style={[styles.email1, styles.phonePosition]}>Email</Text>
          <Pressable
            style={[styles.tabArea, styles.emailLayout, styles.tabBg]}
            onPress={() => navigation.navigate("MonkapLoginWithEmail")}
          />
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View
            style={[
              styles.groupInner,
              styles.emailChildShadowBox,
              styles.groupLayout,
            ]}
          />
          <Text style={styles.enterPhoneNumber}>Enter phone number</Text>
          <Text style={[styles.text, styles.textPosition]}>+237</Text>
          <Image
            style={styles.polygonIcon}
            resizeMode="cover"
            source={require("../assets/polygon-1.png")}
          />
          <Text style={[styles.enterYourPhone, styles.yourTypo]}>
            Enter Your Phone Number
          </Text>
        </View>
        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <View
            style={[
              styles.groupInner,
              styles.emailChildShadowBox,
              styles.groupLayout,
            ]}
          />
          <Text style={[styles.enterPincode, styles.textPosition]}>
            Enter pincode
          </Text>
          <Text style={[styles.enterYourPincode, styles.yourTypo]}>
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
      <Pressable
        style={[styles.back, styles.backLayout]}
        onPress={() => navigation.navigate("SplashScreenMoNkap")}
      >
        <Image
          style={styles.backChild}
          resizeMode="cover"
          source={require("../assets/line-31.png")}
        />
        <View style={[styles.backLayout, styles.tabBg]} />
      </Pressable>
      <Text style={[styles.orUseYour, styles.yourTypo]}>
        Or use your MoNkap number instead
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout1: {
    height: 45,
    position: "absolute",
  },
  emailParentPosition: {
    left: "50%",
    top: "50%",
  },
  groupLayout: {
    borderRadius: Border.br_xs,
    width: 305,
  },
  nextTypo: {
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    position: "absolute",
  },
  tabBg: {
    backgroundColor: Color.gainsboro_700,
    top: 0,
  },
  emailLayout: {
    height: 47,
    position: "absolute",
  },
  phonePosition: {
    fontSize: FontSize.size_xl,
    marginTop: -10.5,
    left: "50%",
    top: "50%",
    textAlign: "left",
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  emailChildShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
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
    fontSize: FontSize.size_base,
    top: 35,
    fontFamily: FontFamily.poppins,
    textAlign: "left",
    position: "absolute",
  },
  yourTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  backLayout: {
    height: 56,
    width: 74,
    left: 0,
    position: "absolute",
  },
  monkapLoginWithPhoneChild: {
    width: 360,
    height: 100,
    backgroundColor: Color.blue_100,
    left: 0,
    top: 0,
    position: "absolute",
  },
  login: {
    left: 155,
    fontSize: FontSize.size_4xl,
    color: Color.whitesmoke_100,
    textAlign: "left",
    fontFamily: FontFamily.gentiumBookBasic,
    fontWeight: "700",
    top: 44,
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
    fontSize: FontSize.size_lg,
    color: Color.iOSKeyBackgroundHighlight,
    textAlign: "left",
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
  phone: {
    marginLeft: -126,
    color: Color.iOSKeyLabel,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    marginTop: -10.5,
  },
  emailChild: {
    top: 39,
    left: -1,
    shadowRadius: 4,
    elevation: 4,
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 2,
    width: 47,
    height: 2,
  },
  email1: {
    marginLeft: 56,
    color: Color.gray_700,
  },
  tabArea: {
    left: 152,
    width: 100,
  },
  email: {
    marginTop: -119.5,
    marginLeft: -115.5,
    width: 252,
  },
  groupInner: {
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
    fontSize: FontSize.size_base,
    top: 35,
    fontFamily: FontFamily.poppins,
    textAlign: "left",
    position: "absolute",
  },
  text: {
    color: Color.iOSKeyLabel,
  },
  polygonIcon: {
    left: 50,
    width: 9,
    height: 9,
    top: 44,
    position: "absolute",
  },
  enterYourPhone: {
    left: 2,
    color: Color.iOSKeyLabel,
    top: 0,
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
    top: 0,
  },
  rectangleContainer: {
    top: 173,
  },
  emailParent: {
    marginTop: -217,
    marginLeft: -152,
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
    color: Color.gray_900,
    textDecoration: "underline",
  },
  byClickingOnContainer: {
    top: 471,
    left: 52,
    fontSize: FontSize.size_2xs,
    textAlign: "center",
    width: 257,
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
  orUseYour: {
    top: 429,
    left: 79,
    color: Color.blue_100,
    textDecoration: "underline",
  },
  monkapLoginWithPhone: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default MonkapLoginWithPhone;
