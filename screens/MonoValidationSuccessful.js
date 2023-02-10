import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Image, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import MTNContainer from "../components/MTNContainer";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const MonoValidationSuccessful = () => {
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
      <View style={styles.monoValidationSuccessful}>
        <View style={[styles.images1, styles.images1Layout]} />
        <View
          style={[styles.monoValidationSuccessfulChild, styles.monoLayout]}
        />
        <View
          style={[styles.monoValidationSuccessfulItem, styles.monoLayout]}
        />
        <View style={[styles.contBtn, styles.contBtnLayout]}>
          <View style={[styles.btnNext, styles.btnNextLayout]} />
          <Text style={[styles.continue, styles.continueTypo]}>Continue</Text>
          <Pressable
            style={[styles.areaPosition, styles.contBtnLayout]}
            onPress={() => navigation.navigate("MomoOnMonkapProfile")}
          />
        </View>
        <Pressable
          style={[styles.backArrow, styles.taAreaLayout]}
          onPress={() => navigation.navigate("MomoValidation")}
        >
          <Image
            style={styles.backArrowChild}
            resizeMode="cover"
            source={require("../assets/line-161.png")}
          />
          <View style={[styles.taAreaLayout, styles.areaPosition]} />
        </Pressable>
        <Text
          style={[
            styles.accountVerified,
            styles.withMonkapYouLayout,
            styles.continueTypo,
          ]}
        >
          Account Verified
        </Text>
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
          style={[styles.monoValidationSuccessfulInner, styles.images1Layout]}
          resizeMode="cover"
          source={require("../assets/rectangle-83.png")}
        />
        <View
          style={[styles.undrawAccessAccountRe8spmParent, styles.btnNextLayout]}
        >
          <Image
            style={styles.undrawAccessAccountRe8spmIcon}
            resizeMode="cover"
            source={require("../assets/undraw-access-account-re-8spm-2.png")}
          />
          <Text
            style={[
              styles.withMonkapYou,
              styles.withMonkapYouTypo,
              styles.withMonkapYouLayout,
            ]}
          >
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
  images1Layout: {
    width: 360,
    position: "absolute",
  },
  monoLayout: {
    height: 54,
    left: 0,
    backgroundColor: Color.gold_100,
    width: 360,
    position: "absolute",
  },
  contBtnLayout: {
    height: 41,
    width: 273,
    position: "absolute",
  },
  btnNextLayout: {
    width: 272,
    position: "absolute",
  },
  continueTypo: {
    textAlign: "center",
    fontFamily: FontFamily.gentiumBookBasic,
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
  withMonkapYouLayout: {
    lineHeight: 22,
    fontSize: FontSize.size_lg,
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
  monoValidationSuccessfulChild: {
    top: 0,
  },
  monoValidationSuccessfulItem: {
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
    height: 40,
    backgroundColor: Color.gold_100,
    width: 272,
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
  accountVerified: {
    top: 18,
    left: 123,
    fontWeight: "700",
    color: Color.limegreen_100,
  },
  yourMomoAccount: {
    top: 417,
    left: 25,
    color: Color.limegreen_100,
  },
  monoValidationSuccessfulInner: {
    top: 482,
    left: 12,
    height: 219,
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
    top: 81,
    left: 24,
    height: 164,
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
  monoValidationSuccessful: {
    backgroundColor: Color.darkgray_500,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default MonoValidationSuccessful;
