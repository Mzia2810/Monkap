import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ContinueButtonContainer from "../components/ContinueButtonContainer";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const OMoneyValidationSuccessful = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.omoneyValidationSuccessful}>
      <View style={styles.images1} />
      <View style={styles.omoneyValidationSuccessfulChild} />
      <ContinueButtonContainer
        onTabAreaPress={() => navigation.navigate("OMoneyOnMonkapProfile")}
      />
      <Pressable
        style={[styles.backArrow, styles.taAreaLayout]}
        onPress={() => navigation.navigate("OMoneyValidation")}
      >
        <Image
          style={[styles.backArrowChild, styles.backArrowChildLayout]}
          resizeMode="cover"
          source={require("../assets/line-161.png")}
        />
        <View style={[styles.taArea, styles.areaBg, styles.taAreaLayout]} />
      </Pressable>
      <Text style={styles.accountVerified}>Account Verified</Text>
      <Text
        style={[
          styles.yourMomoAccount,
          styles.momoLayout,
          styles.withMonkapYouTypo,
        ]}
      >
        Your MoMo Account was Successfully Added to MoNkap
      </Text>
      <Image
        style={styles.omoneyValidationSuccessfulItem}
        resizeMode="cover"
        source={require("../assets/rectangle-83.png")}
      />
      <View style={styles.undrawAccessAccountRe8spmParent}>
        <Image
          style={styles.undrawAccessAccountRe8spmIcon}
          resizeMode="cover"
          source={require("../assets/undraw-access-account-re-8spm-2.png")}
        />
        <Text style={[styles.withMonkapYou, styles.withMonkapYouTypo]}>
          With MoNkap you can manage all your Money Accounts from a signle app
        </Text>
      </View>
      <Text style={[styles.congratulations, styles.addAnotherMomoTypo]}>
        Congratulations!!
      </Text>
      <Text
        style={[
          styles.addAnotherMomo,
          styles.addAnotherMomoTypo,
          styles.momoLayout,
        ]}
      >
        Add Another MoMo Account
      </Text>
      <View style={[styles.footerOm, styles.footerOmLayout]}>
        <View
          style={[
            styles.footerOmChild,
            styles.childShadowBox,
            styles.tabAreaPosition,
          ]}
        />
        <View style={[styles.home, styles.homePosition]}>
          <Image
            style={[
              styles.c14HouseIcon,
              styles.groupIconLayout,
              styles.iconPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/c14-house23.png")}
          />
          <Pressable
            style={[styles.tabArea, styles.tabAreaPosition, styles.areaBg]}
            onPress={() => navigation.navigate("MoNkapHomeScreen2")}
          />
          <Text style={[styles.home1, styles.home1Typo]}>Home</Text>
        </View>
        <View style={styles.orange}>
          <View style={[styles.orangeChild, styles.childShadowBox]} />
          <Image
            style={[styles.groupIcon, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group84.png")}
          />
          <Text style={styles.omoney}>OMoney</Text>
        </View>
        <View style={styles.linkBanks}>
          <Image
            style={[
              styles.imageedit341319179891Icon,
              styles.backArrowChildLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/imageedit-3-4131917989-1.png")}
          />
          <Text style={[styles.profile1, styles.home1Typo]}>Link Banks</Text>
          <Pressable
            style={[styles.imageedit341319179892, styles.footerOmLayout]}
            onPress={() =>
              navigation.navigate("BottomTabsRoot", { screen: "LinkBank" })
            }
          />
        </View>
        <View style={styles.momo}>
          <Image
            style={[
              styles.groupIcon1,
              styles.groupIconLayout,
              styles.iconPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/group8.png")}
          />
          <Text style={[styles.momo1, styles.home1Typo]}>MoMo</Text>
          <Pressable
            style={[styles.tabArea2, styles.areaBg]}
            onPress={() =>
              navigation.navigate("BottomTabsRoot", {
                screen: "MTNSplashScreen",
              })
            }
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  taAreaLayout: {
    height: 37,
    width: 52,
  },
  backArrowChildLayout: {
    width: 28,
    position: "absolute",
  },
  areaBg: {
    backgroundColor: Color.gainsboro_700,
    position: "absolute",
  },
  momoLayout: {
    width: 293,
    fontSize: FontSize.size_6xl,
  },
  withMonkapYouTypo: {
    fontStyle: "italic",
    textAlign: "center",
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  addAnotherMomoTypo: {
    left: 32,
    fontStyle: "italic",
    textAlign: "center",
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  footerOmLayout: {
    height: 45,
    position: "absolute",
  },
  childShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: -3,
    },
    position: "absolute",
  },
  tabAreaPosition: {
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  homePosition: {
    top: "-6.67%",
    position: "absolute",
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    right: "27.91%",
    maxWidth: "100%",
  },
  home1Typo: {
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBasic,
    lineHeight: 17,
    letterSpacing: 0.5,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    position: "absolute",
  },
  images1: {
    marginTop: -400,
    marginLeft: -180,
    top: "50%",
    left: "50%",
    backgroundColor: Color.whitesmoke_900,
    width: 360,
    position: "absolute",
    height: 800,
  },
  omoneyValidationSuccessfulChild: {
    height: 54,
    backgroundColor: Color.orangeColor,
    left: 0,
    top: 0,
    width: 360,
    position: "absolute",
  },
  backArrowChild: {
    top: 11,
    height: 15,
    left: 9,
  },
  taArea: {
    left: 0,
    top: 0,
  },
  backArrow: {
    top: 10,
    left: 6,
    position: "absolute",
  },
  accountVerified: {
    top: 18,
    left: 123,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBookBasic,
    fontWeight: "700",
    color: Color.limegreen_100,
    lineHeight: 22,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  yourMomoAccount: {
    top: 417,
    left: 25,
    color: Color.limegreen_100,
  },
  omoneyValidationSuccessfulItem: {
    top: 482,
    left: 12,
    height: 219,
    width: 360,
    position: "absolute",
  },
  undrawAccessAccountRe8spmIcon: {
    left: -1,
    width: 172,
    height: 172,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  withMonkapYou: {
    top: 21,
    left: 163,
    width: 109,
    height: 124,
    color: Color.blue_100,
    lineHeight: 22,
    fontSize: FontSize.size_lg,
    fontStyle: "italic",
  },
  undrawAccessAccountRe8spmParent: {
    top: 81,
    left: 24,
    width: 272,
    height: 164,
    position: "absolute",
  },
  congratulations: {
    top: 344,
    fontSize: FontSize.size_10xl,
    lineHeight: 58,
    width: 288,
    height: 64,
    color: Color.limegreen_100,
  },
  addAnotherMomo: {
    top: 592,
    color: Color.blue_100,
  },
  footerOmChild: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 13,
    elevation: 13,
    bottom: "0%",
    height: "100%",
    backgroundColor: Color.orangeColor,
  },
  c14HouseIcon: {
    height: "46.15%",
    width: "58.14%",
    top: "22.92%",
    bottom: "30.93%",
    left: "13.95%",
  },
  tabArea: {
    height: "93.75%",
    bottom: "6.25%",
  },
  home1: {
    top: 31,
    left: 3,
  },
  home: {
    height: "106.67%",
    right: "80.28%",
    left: "7.78%",
    width: "11.94%",
    bottom: "0%",
  },
  orangeChild: {
    top: -7,
    left: -8,
    borderRadius: Border.br_xs,
    backgroundColor: Color.iOSKeyLabel,
    shadowColor: "rgba(0, 0, 0, 0.94)",
    shadowRadius: 4,
    elevation: 4,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 64,
    height: 36,
    display: "none",
  },
  groupIcon: {
    height: "67.26%",
    width: "54.35%",
    right: "23.91%",
    bottom: "32.74%",
    left: "21.74%",
    top: "0%",
    maxWidth: "100%",
  },
  omoney: {
    top: 23,
    color: Color.iOSKeyBackgroundHighlight,
    fontFamily: FontFamily.gentiumBasic,
    lineHeight: 17,
    letterSpacing: 0.5,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontWeight: "700",
    left: 0,
    position: "absolute",
  },
  orange: {
    top: 6,
    left: 91,
    width: 46,
    height: 40,
    position: "absolute",
  },
  imageedit341319179891Icon: {
    top: 8,
    left: 14,
    height: 28,
  },
  profile1: {
    top: 32,
    left: 0,
  },
  imageedit341319179892: {
    backgroundColor: Color.silver_500,
    width: 39,
    left: 9,
    top: 0,
  },
  linkBanks: {
    top: -3,
    left: 154,
    width: 58,
    height: 49,
    position: "absolute",
  },
  groupIcon1: {
    height: "62.92%",
    width: "46.51%",
    top: "6.67%",
    bottom: "30.41%",
    left: "25.58%",
  },
  momo1: {
    top: 28,
    left: 5,
  },
  tabArea2: {
    width: 43,
    height: 42,
    left: 0,
    top: 0,
  },
  momo: {
    top: "4.44%",
    right: "24.17%",
    bottom: "-4.44%",
    left: "63.89%",
    width: "11.94%",
    height: "100%",
    position: "absolute",
  },
  footerOm: {
    top: 755,
    left: 0,
    width: 360,
  },
  omoneyValidationSuccessful: {
    backgroundColor: Color.darkgray_500,
    flex: 1,
    overflow: "hidden",
    height: 800,
    width: "100%",
  },
});

export default OMoneyValidationSuccessful;
