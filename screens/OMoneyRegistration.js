import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Text, Image, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import MoMoPINCodeContainer from "../components/MoMoPINCodeContainer";
import MoMoNumberContainer from "../components/MoMoNumberContainer";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const OMoneyRegistration = () => {
  const [tabArea3Visible, setTabArea3Visible] = useState(false);
  const navigation = useNavigation();

  const openTabArea3 = useCallback(() => {
    setTabArea3Visible(true);
  }, []);

  const closeTabArea3 = useCallback(() => {
    setTabArea3Visible(false);
  }, []);
  return (
    <>
      <View style={styles.omoneyRegistration}>
        <View style={styles.images1} />
        <View style={styles.omoneyRegistrationChild} />
        <Text style={styles.letsRegisterYour}>
          Let’s Register Your OMoney On MoNkap
        </Text>
        <Image
          style={styles.undrawAccessAccountRe8spmIcon}
          resizeMode="cover"
          source={require("../assets/undraw-access-account-re-8spm-2.png")}
        />
        <View style={[styles.contBtn, styles.contBtnLayout]}>
          <Text style={styles.continue}>Continue</Text>
          <Pressable
            style={[styles.tabArea, styles.contBtnLayout]}
            onPress={() => navigation.navigate("OMoneyValidation")}
          />
        </View>
        <View style={[styles.skip, styles.skipPosition]}>
          <Text
            style={[
              styles.iHaveAlreadyContainer,
              styles.tabArea1Layout,
              styles.aFour6Layout,
            ]}
          >
            <Text style={styles.iHaveAlreadyVerified}>
              <Text style={styles.iHaveAlready}>I have already verified!!</Text>
              <Text>{` `}</Text>
            </Text>
            <Text style={[styles.skip1, styles.skip1Typo]}>SKIP</Text>
          </Text>
          <View style={[styles.tabArea1, styles.tabArea1Layout]} />
        </View>
        <View style={[styles.backArrow, styles.taAreaLayout]}>
          <Image
            style={[styles.backArrowChild, styles.backArrowChildLayout]}
            resizeMode="cover"
            source={require("../assets/line-161.png")}
          />
          <Pressable
            style={[styles.taArea, styles.taAreaLayout]}
            onPress={() => navigation.navigate("OMoneySplashScreen")}
          />
        </View>
        <Text style={[styles.withMonkapYou, styles.rememberMe2Typo]}>
          With MoNkap you can manage all your Money Accounts from a signle app
        </Text>
        <View style={[styles.footerOm, styles.footerOmLayout]}>
          <View
            style={[
              styles.footerOmChild,
              styles.tabArea2Position,
              styles.childShadowBox,
              styles.btnNextShadowBox,
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
              style={[styles.tabArea2, styles.tabArea2Position]}
              onPress={() => navigation.navigate("MoNkapHomeScreen2")}
            />
            <Text style={[styles.home1, styles.home1Typo]}>Home</Text>
          </View>
          <View style={[styles.profile, styles.homePosition]}>
            <Image
              style={[styles.profileChild, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/group-15723.png")}
            />
            <Text style={[styles.profile1, styles.home1Typo]}>Profile</Text>
            <Pressable style={styles.tabArea3} onPress={openTabArea3} />
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
              style={styles.tabArea4}
              onPress={() =>
                navigation.navigate("BottomTabsRoot", {
                  screen: "MTNSplashScreen",
                })
              }
            />
          </View>
        </View>
        <View style={[styles.rememberMe, styles.tabArea1Layout]}>
          <Text
            style={[
              styles.iHaveAlready1,
              styles.aFour6Typo,
              styles.rememberMe2Typo,
            ]}
          >
            I have already registered.
          </Text>
          <Pressable
            style={styles.rememberMe1}
            onPress={() => navigation.navigate("OMoneyOnMonkapHomeHideBalance")}
          >
            <Text
              style={[
                styles.rememberMe2,
                styles.skip1Typo,
                styles.rememberMe2Typo,
              ]}
            >
              Remember me
            </Text>
          </Pressable>
        </View>
        <MoMoPINCodeContainer
          propTop={411}
          propLeft={24}
          propBorderColor="#ea9311"
        />
        <MoMoNumberContainer
          propTop={290}
          propLeft={23}
          propBorderColor="#ea9311"
        />
        <Text style={[styles.aFour6, styles.aFour6Typo, styles.aFour6Layout]}>
          A four (6) digit code will be sent to this number
        </Text>
        <Text style={[styles.yourSecurityIs, styles.aFour6Typo]}>
          Your Security is our priority. All new customers must enter their PIN
          so we can verify their MoMo accounts.
        </Text>
      </View>

      <Modal animationType="fade" transparent visible={tabArea3Visible}>
        <View style={styles.tabArea3Overlay}>
          <Pressable style={styles.tabArea3Bg} onPress={closeTabArea3} />
          <MyActivity onClose={closeTabArea3} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  contBtnLayout: {
    height: 41,
    position: "absolute",
  },
  childShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  btnNextShadowBox: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    backgroundColor: Color.orangeColor,
  },
  skipPosition: {
    display: "none",
    position: "absolute",
  },
  tabArea1Layout: {
    height: 22,
    position: "absolute",
  },
  aFour6Layout: {
    lineHeight: 16,
    fontSize: FontSize.size_sm,
  },
  skip1Typo: {
    textDecoration: "underline",
    fontFamily: FontFamily.gentiumBookBasic,
    fontWeight: "700",
  },
  taAreaLayout: {
    height: 37,
    width: 52,
    position: "absolute",
  },
  backArrowChildLayout: {
    width: 28,
    position: "absolute",
  },
  rememberMe2Typo: {
    fontStyle: "italic",
    lineHeight: 22,
    fontSize: FontSize.size_lg,
  },
  footerOmLayout: {
    height: 45,
    position: "absolute",
  },
  tabArea2Position: {
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
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
  aFour6Typo: {
    color: Color.darkslategray,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBookBasic,
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
  omoneyRegistrationChild: {
    height: 54,
    backgroundColor: Color.orangeColor,
    left: 0,
    top: 0,
    width: 360,
    position: "absolute",
  },
  letsRegisterYour: {
    top: 17,
    left: 59,
    color: Color.gray_1800,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBookBasic,
    fontWeight: "700",
    lineHeight: 22,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  undrawAccessAccountRe8spmIcon: {
    top: 81,
    left: 34,
    width: 172,
    height: 172,
    position: "absolute",
    overflow: "hidden",
  },
  continue: {
    top: 9,
    left: 65,
    fontSize: FontSize.size_4xl,
    letterSpacing: 1.9,
    lineHeight: 24,
    color: Color.gray_2000,
    width: 142,
    height: 24,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  tabArea: {
    width: 253,
    backgroundColor: Color.gainsboro_700,
    left: 5,
    top: 0,
  },
  contBtn: {
    top: 641,
    left: 44,
    width: 272,
  },
  iHaveAlready: {
    color: Color.gray_1400,
  },
  iHaveAlreadyVerified: {
    fontFamily: FontFamily.gentiumBookBasic,
  },
  skip1: {
    color: Color.gray_1600,
  },
  iHaveAlreadyContainer: {
    top: 2,
    width: 244,
    textAlign: "center",
    left: 0,
  },
  tabArea1: {
    left: 171,
    width: 48,
    backgroundColor: Color.gainsboro_700,
    top: 0,
  },
  skip: {
    left: 58,
    width: 244,
    top: 614,
    height: 24,
  },
  backArrowChild: {
    top: 11,
    height: 15,
    left: 9,
  },
  taArea: {
    backgroundColor: Color.gainsboro_700,
    left: 0,
    top: 0,
  },
  backArrow: {
    top: 10,
    left: 6,
  },
  withMonkapYou: {
    top: 102,
    left: 198,
    color: Color.blue_100,
    width: 109,
    height: 124,
    fontStyle: "italic",
    textAlign: "center",
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  footerOmChild: {
    shadowRadius: 13,
    elevation: 13,
    bottom: "0%",
    height: "100%",
  },
  c14HouseIcon: {
    height: "46.15%",
    width: "58.14%",
    top: "22.92%",
    bottom: "30.93%",
    left: "13.95%",
  },
  tabArea2: {
    height: "93.75%",
    bottom: "6.25%",
    backgroundColor: Color.gainsboro_700,
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
  profileChild: {
    height: "51.02%",
    width: "60.98%",
    top: "20.41%",
    right: "26.83%",
    bottom: "28.57%",
    left: "12.2%",
  },
  profile1: {
    top: 32,
    left: 0,
  },
  tabArea3Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  tabArea3Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  tabArea3: {
    height: "91.84%",
    width: "97.56%",
    bottom: "8.16%",
    left: "2.44%",
    right: "0%",
    top: "0%",
    backgroundColor: Color.gainsboro_700,
    position: "absolute",
  },
  profile: {
    height: "108.89%",
    width: "11.39%",
    right: "6.67%",
    bottom: "-2.22%",
    left: "81.94%",
  },
  imageedit341319179891Icon: {
    top: 8,
    left: 14,
    height: 28,
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
  tabArea4: {
    width: 43,
    height: 42,
    backgroundColor: Color.gainsboro_700,
    left: 0,
    top: 0,
    position: "absolute",
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
    left: 1,
    width: 360,
  },
  iHaveAlready1: {
    fontStyle: "italic",
    left: 0,
    top: 0,
  },
  rememberMe2: {
    color: Color.limegreen_100,
    fontStyle: "italic",
    textAlign: "center",
  },
  rememberMe1: {
    left: 150,
    top: 0,
    position: "absolute",
  },
  rememberMe: {
    left: 57,
    width: 238,
    top: 614,
  },
  aFour6: {
    top: 367,
    left: 39,
    height: 19,
    width: 272,
  },
  yourSecurityIs: {
    top: 484,
    left: 28,
    lineHeight: 19,
    width: 307,
    height: 35,
    fontStyle: "italic",
    fontSize: FontSize.size_sm,
    color: Color.darkslategray,
  },
  omoneyRegistration: {
    backgroundColor: Color.darkgray_500,
    flex: 1,
    overflow: "hidden",
    height: 800,
    width: "100%",
  },
});

export default OMoneyRegistration;
