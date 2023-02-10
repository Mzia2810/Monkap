import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Image, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import MTNContainer from "../components/MTNContainer";
import { Color, FontSize, FontFamily, Border, Margin } from "../GlobalStyles";

const MomoValidation = () => {
  const [tabArea2Visible, setTabArea2Visible] = useState(false);
  const navigation = useNavigation();

  const openTabArea2 = useCallback(() => {
    setTabArea2Visible(true);
  }, []);

  const closeTabArea2 = useCallback(() => {
    setTabArea2Visible(false);
  }, []);
  return (
    <>
      <View style={styles.momoValidation}>
        <View style={styles.images1} />
        <View style={[styles.momoValidationChild, styles.momoLayout]} />
        <View style={[styles.momoValidationItem, styles.momoLayout]} />
        <View style={[styles.contBtn, styles.contBtnLayout]}>
          <View style={[styles.btnNext, styles.btnNextLayout]} />
          <Text style={styles.continue}>Continue</Text>
          <Pressable
            style={[styles.areaPosition, styles.contBtnLayout]}
            onPress={() => navigation.navigate("MonoValidationSuccessful")}
          />
        </View>
        <Pressable
          style={[styles.backArrow, styles.taAreaLayout]}
          onPress={() => navigation.navigate("MomoRegistration")}
        >
          <Image
            style={styles.backArrowChild}
            resizeMode="cover"
            source={require("../assets/line-161.png")}
          />
          <View style={[styles.taAreaLayout, styles.areaPosition]} />
        </Pressable>
        <View style={[styles.notify, styles.notifyLayout]}>
          <Text style={[styles.enterTheFour4Container, styles.notifyLayout]}>
            <Text style={styles.enterTheFour4DigitCodeW}>
              <Text
                style={styles.enterTheFour4}
              >{`Enter the four(4) digit code we sent to `}</Text>
            </Text>
            <Text style={styles.text}>
              <Text style={styles.text1}>694379485</Text>
            </Text>
          </Text>
        </View>
        <Text style={styles.nowLetsVerify}>Now Let’s Verify this Account</Text>
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
        <View style={[styles.rectangleParent, styles.btnNextLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <View style={[styles.groupItem, styles.groupLayout]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
          <View style={[styles.rectangleView, styles.groupLayout]} />
        </View>
        <Text style={styles.didntReceiveTheContainer}>
          <Text>{`Didn’t receive the  code. `}</Text>
          <Text>{`  `}</Text>
          <Text style={styles.resendCode}>RESEND CODE</Text>
        </Text>
        <Text style={[styles.almostDonePls, styles.withMonkapYouTypo]}>
          Almost done!! Pls enter the security code we have sent to your phone
          to complete your registration.
        </Text>
        <MTNContainer
          carouselImageUrls={{ uri: "c14-house40@3x.png" }}
          carouselImageUrls2={{ uri: "group126@3x.png" }}
          carouselImageUrls3={{ uri: "group24@3x.png" }}
          propTop={752}
          propLeft={0}
          onTabAreaPress={() => navigation.navigate("MoNkapHomeScreen2")}
          onTabAreaPress1={openTabArea2}
          onTabAreaPress2={() => navigation.navigate("OMoneySplashScreen")}
          onImageedit341319179892Press={() =>
            navigation.navigate("BottomTabsRoot", { screen: "LinkBank" })
          }
        />
      </View>

      <Modal animationType="fade" transparent visible={tabArea2Visible}>
        <View style={styles.tabArea2Overlay}>
          <Pressable style={styles.tabArea2Bg} onPress={closeTabArea2} />
          <MyActivity onClose={closeTabArea2} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  momoLayout: {
    height: 54,
    backgroundColor: Color.gold_100,
    left: 0,
    width: 360,
    position: "absolute",
  },
  contBtnLayout: {
    height: 41,
    width: 273,
    position: "absolute",
  },
  btnNextLayout: {
    height: 40,
    position: "absolute",
  },
  taAreaLayout: {
    height: 37,
    width: 52,
    position: "absolute",
  },
  areaPosition: {
    backgroundColor: Color.gainsboro_700,
    left: 0,
    top: 0,
  },
  notifyLayout: {
    width: 274,
    height: 49,
    position: "absolute",
  },
  withMonkapYouTypo: {
    fontStyle: "italic",
    lineHeight: 22,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  groupLayout: {
    width: 35,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    borderRadius: Border.br_xs,
    height: 40,
    top: 0,
    position: "absolute",
  },
  tabArea2Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  tabArea2Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
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
  momoValidationChild: {
    top: 0,
  },
  momoValidationItem: {
    top: 746,
  },
  btnNext: {
    top: 1,
    left: 1,
    borderRadius: Border.br_2xl,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    width: 272,
    backgroundColor: Color.gold_100,
    height: 40,
  },
  continue: {
    top: 9,
    left: 66,
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
  contBtn: {
    top: 641,
    left: 43,
  },
  backArrowChild: {
    top: 11,
    left: 9,
    width: 28,
    height: 15,
    position: "absolute",
  },
  backArrow: {
    top: 10,
    left: 6,
  },
  enterTheFour4: {
    letterSpacing: "2%",
    fontFamily: FontFamily.gentiumBasic,
  },
  enterTheFour4DigitCodeW: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text1: {
    letterSpacing: "6.5%",
    fontWeight: "700",
    fontFamily: FontFamily.gentiumBasic,
  },
  text: {
    margin: Margin.m_3xs,
  },
  enterTheFour4Container: {
    fontSize: FontSize.size_xl,
    lineHeight: 23,
    color: Color.iOSKeyLabel,
    height: 49,
    textAlign: "center",
    left: 0,
    top: 0,
  },
  notify: {
    top: 305,
    left: 37,
    height: 49,
  },
  nowLetsVerify: {
    top: 18,
    left: 81,
    color: Color.gray_1800,
    lineHeight: 22,
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: FontFamily.gentiumBookBasic,
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
  },
  undrawAccessAccountRe8spmParent: {
    top: 79,
    left: 32,
    height: 164,
    width: 272,
    position: "absolute",
  },
  groupChild: {
    left: 0,
  },
  groupItem: {
    left: 45,
  },
  groupInner: {
    left: 90,
  },
  rectangleView: {
    left: 135,
  },
  rectangleParent: {
    top: 369,
    left: 95,
    width: 170,
  },
  resendCode: {
    textDecoration: "underline",
    color: Color.blue_100,
  },
  didntReceiveTheContainer: {
    top: 419,
    left: 48,
    textAlign: "left",
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  almostDonePls: {
    top: 470,
    left: 30,
    color: Color.darkslategray,
    width: 307,
    height: 49,
  },
  momoValidation: {
    backgroundColor: Color.darkgray_500,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default MomoValidation;
