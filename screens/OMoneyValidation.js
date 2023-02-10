import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Image, Pressable, Text, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import ContinueButtonContainer from "../components/ContinueButtonContainer";
import ContainerMoMo from "../components/ContainerMoMo";
import { FontFamily, FontSize, Color, Border, Margin } from "../GlobalStyles";

const OMoneyValidation = () => {
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
      <View style={styles.omoneyValidation}>
        <View style={[styles.images1, styles.images1Layout]} />
        <View style={[styles.omoneyValidationChild, styles.images1Layout]} />
        <ContinueButtonContainer
          onTabAreaPress={() =>
            navigation.navigate("OMoneyValidationSuccessful")
          }
        />
        <Pressable
          style={[styles.backArrow, styles.taAreaLayout]}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", {
              screen: "OMoneyRegistration",
            })
          }
        >
          <Image
            style={styles.backArrowChild}
            resizeMode="cover"
            source={require("../assets/line-161.png")}
          />
          <View style={[styles.taArea, styles.taAreaLayout]} />
        </Pressable>
        <View style={styles.notify}>
          <Text style={styles.enterTheFour4Container}>
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
        <Text style={[styles.nowLetsVerify, styles.nowLetsVerifyTypo]}>
          Now Let’s Verify this Account
        </Text>
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
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <View style={[styles.groupItem, styles.groupChildLayout]} />
          <View style={[styles.groupInner, styles.groupChildLayout]} />
          <View style={[styles.rectangleView, styles.groupChildLayout]} />
          <View style={[styles.groupChild1, styles.groupChildLayout]} />
          <View style={[styles.groupChild2, styles.groupChildLayout]} />
        </View>
        <Text
          style={[styles.didntReceiveTheContainer, styles.nowLetsVerifyTypo]}
        >
          <Text>{`Didn’t receive the  code. `}</Text>
          <Text>{`  `}</Text>
          <Text style={styles.resendCode}>RESEND CODE</Text>
        </Text>
        <Text style={[styles.almostDonePls, styles.withMonkapYouTypo]}>
          Almost done!! Pls enter the security code we have sent to your phone
          to complete your registration.
        </Text>
        <ContainerMoMo
          carouselImageUrls={{ uri: "c14-house28@3x.png" }}
          carouselImageUrls2={{ uri: "group27@3x.png" }}
          carouselImageUrls3={require("../assets/group1.png")}
          onTabAreaPress={() => navigation.navigate("MoNkapHomeScreen2")}
          onTabAreaPress1={openTabArea2}
          onImageedit341319179892Press={() =>
            navigation.navigate("BottomTabsRoot", { screen: "LinkBank" })
          }
          onTabAreaPress2={() =>
            navigation.navigate("BottomTabsRoot", { screen: "MTNSplashScreen" })
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
  images1Layout: {
    width: 360,
    position: "absolute",
  },
  taAreaLayout: {
    height: 37,
    width: 52,
    position: "absolute",
  },
  nowLetsVerifyTypo: {
    fontFamily: FontFamily.gentiumBookBasic,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  withMonkapYouTypo: {
    fontStyle: "italic",
    fontFamily: FontFamily.gentiumBookBasic,
    lineHeight: 22,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    position: "absolute",
  },
  groupChildLayout: {
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
    height: 800,
  },
  omoneyValidationChild: {
    backgroundColor: Color.orangeColor,
    height: 54,
    left: 0,
    top: 0,
  },
  backArrowChild: {
    top: 11,
    left: 9,
    width: 28,
    height: 15,
    position: "absolute",
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
    textAlign: "center",
    height: 49,
    width: 274,
    left: 0,
    top: 0,
    position: "absolute",
  },
  notify: {
    top: 305,
    left: 37,
    height: 49,
    width: 274,
    position: "absolute",
  },
  nowLetsVerify: {
    top: 18,
    left: 81,
    color: Color.gray_1800,
    lineHeight: 22,
    fontFamily: FontFamily.gentiumBookBasic,
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    textAlign: "center",
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
    width: 272,
    height: 164,
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
  groupChild1: {
    left: 180,
  },
  groupChild2: {
    left: 225,
  },
  rectangleParent: {
    top: 369,
    left: 43,
    width: 260,
    height: 40,
    position: "absolute",
  },
  resendCode: {
    textDecoration: "underline",
    color: Color.blue_100,
  },
  didntReceiveTheContainer: {
    top: 419,
    left: 48,
    textAlign: "left",
    fontFamily: FontFamily.gentiumBookBasic,
    fontSize: FontSize.size_lg,
  },
  almostDonePls: {
    top: 470,
    left: 30,
    color: Color.darkslategray,
    width: 307,
    height: 49,
  },
  omoneyValidation: {
    backgroundColor: Color.darkgray_500,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default OMoneyValidation;
