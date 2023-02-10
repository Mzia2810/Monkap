import * as React from "react";
import { useState, useCallback } from "react";
import { Text, StyleSheet, Image, Pressable, View, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TransferContainer from "../components/TransferContainer";
import MoMoContainer from "../components/MoMoContainer";
import NjangiContainer from "../components/NjangiContainer";
import OrangeMoneyContainer from "../components/OrangeMoneyContainer";
import TargetContainer from "../components/TargetContainer";
import DepositTransferContainer from "../components/DepositTransferContainer";
import MyActivity from "../components/MyActivity";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const MoNkapHomeScreen = () => {
  const [tabArea5Visible, setTabArea5Visible] = useState(false);
  const navigation = useNavigation();

  const openTabArea5 = useCallback(() => {
    setTabArea5Visible(true);
  }, []);

  const closeTabArea5 = useCallback(() => {
    setTabArea5Visible(false);
  }, []);
  return (
    <>
      <View style={styles.monkapHomeScreen}>
        <Text style={[styles.ewallet, styles.xaf000Typo]}>eWallet</Text>
        <Pressable
          style={[styles.wrapper, styles.parentPosition]}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", {
              screen: "MoNkapHomeScreen1",
            })
          }
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/ellipse-111.png")}
          />
        </Pressable>
        <View
          style={[styles.monkapHomeScreenChild, styles.monkapChildPosition]}
        />
        <View style={[styles.xaf000Parent, styles.parentPosition]}>
          <Text style={[styles.xaf000, styles.xaf000Typo]}>XAF 0.00</Text>
          <Text
            style={[
              styles.totalBalance,
              styles.textTypo,
              styles.textTypo1,
              styles.parentPosition,
            ]}
          >
            Total Balance
          </Text>
        </View>
        <TransferContainer />
        <View style={[styles.groupParent, styles.parentPosition]}>
          <View style={[styles.parent, styles.groupPosition1]}>
            <Text
              style={[
                styles.text,
                styles.groupPosition1,
                styles.textTypo,
                styles.textTypo1,
                styles.textClr,
              ]}
            >
              041 215 663
            </Text>
            <Text style={[styles.swiftCode, styles.accountPosition]}>
              Swift Code
            </Text>
          </View>
          <View
            style={[
              styles.groupWrapper,
              styles.groupLayout,
              styles.groupPosition1,
            ]}
          >
            <View style={[styles.groupPosition, styles.groupLayout]}>
              <Text
                style={[
                  styles.groupPosition,
                  styles.textTypo,
                  styles.textTypo1,
                  styles.textClr,
                ]}
              >
                88 **** ****
              </Text>
              <Text style={[styles.account, styles.accountPosition]}>
                Account
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.monkapHomeScreenItem, styles.monkapPosition]} />
        <View style={[styles.monkapHomeScreenInner, styles.monkapPosition]} />
        <MoMoContainer
          propMarginTop={-26}
          propMarginLeft={145.5}
          onTabAreaPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "MTNSplashScreen" })
          }
        />
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild, styles.groupPosition1]} />
          <Text
            style={[styles.linkBank, styles.textTypo, styles.parentPosition]}
          >
            Link Bank
          </Text>
          <Image
            style={[styles.vectorIcon, styles.parentPosition]}
            resizeMode="cover"
            source={require("../assets/vector149.png")}
          />
        </View>
        <NjangiContainer
          propMarginTop={187}
          onTabAreaPress={() => navigation.navigate("NjangiMainDaily2")}
        />
        <View
          style={[
            styles.monkapHomeScreenChild1,
            styles.childShadowBox,
            styles.monkapChildPosition,
          ]}
        />
        <Image
          style={[
            styles.groupIcon,
            styles.groupIconPosition,
            styles.groupIconSpaceBlock,
          ]}
          resizeMode="cover"
          source={require("../assets/group256.png")}
        />
        <Image
          style={[
            styles.monkapHomeScreenChild2,
            styles.groupIconPosition,
            styles.groupIconSpaceBlock,
          ]}
          resizeMode="cover"
          source={require("../assets/group-28.png")}
        />
        <Image
          style={[styles.monkapHomeScreenChild3, styles.groupIconPosition]}
          resizeMode="cover"
          source={require("../assets/group-32.png")}
        />
        <Image
          style={[
            styles.groupIcon1,
            styles.groupIconPosition,
            styles.groupIconSpaceBlock,
          ]}
          resizeMode="cover"
          source={require("../assets/group257.png")}
        />
        <Image
          style={[
            styles.monkapHomeScreenChild4,
            styles.groupIconPosition,
            styles.groupIconSpaceBlock,
          ]}
          resizeMode="cover"
          source={require("../assets/group-31.png")}
        />
        <Image
          style={[
            styles.monkapHomeScreenChild5,
            styles.groupIconPosition,
            styles.groupIconSpaceBlock,
          ]}
          resizeMode="cover"
          source={require("../assets/group-30.png")}
        />
        <OrangeMoneyContainer
          propMarginTop={47}
          onTabAreaPress={() => navigation.navigate("OMoneySplashScreen")}
        />
        <Image
          style={[styles.mtnMmLogoGenericMtnMobileIcon, styles.mtnPosition]}
          resizeMode="cover"
          source={require("../assets/69691715-mtnmmlogogenericmtnmobilemoneylogo-140.png")}
        />
        <View
          style={[
            styles.monkapHomeScreenChild6,
            styles.rectanglePressablePosition,
          ]}
        />
        <Pressable
          style={[styles.rectanglePressable, styles.rectanglePressablePosition]}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "LinkBank" })
          }
        />
        <Pressable
          style={[styles.back, styles.backLayout]}
          onPress={() => navigation.navigate("MonkapLoginWithEmail")}
        >
          <Image
            style={[styles.backChild, styles.mtnPosition]}
            resizeMode="cover"
            source={require("../assets/line-312.png")}
          />
          <Pressable
            style={[styles.tabArea, styles.backLayout]}
            onPress={() => navigation.navigate("UsePhone1")}
          />
        </Pressable>
        <TargetContainer
          propMarginTop={120}
          onRectanglePressablePress={() =>
            navigation.navigate("StartTargetSavings")
          }
        />
        <DepositTransferContainer
          propBackgroundColor="rgba(217, 217, 217, 0.5)"
          propOpacity={0}
          onRectanglePressablePress={() =>
            navigation.navigate("DepositsTransfers1")
          }
        />
        <View style={styles.footerMonkap}>
          <View style={[styles.footerMonkapChild, styles.tabPosition]} />
          <View style={[styles.profile, styles.homeLayout]}>
            <Image
              style={[styles.profileChild, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/group-157.png")}
            />
            <Text style={[styles.profile1, styles.momo1Typo]}>Profile</Text>
            <Pressable
              style={[styles.tabArea2, styles.tabPosition]}
              onPress={openTabArea5}
            />
          </View>
          <View style={[styles.linkBank1, styles.linkBank1Position]}>
            <Image
              style={[styles.groupIcon2, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/group258.png")}
            />
            <Text style={[styles.linkBanks, styles.momo1Typo]}>Link Banks</Text>
            <Pressable
              style={styles.imageedit341319179892}
              onPress={() =>
                navigation.navigate("BottomTabsRoot", { screen: "LinkBank" })
              }
            />
          </View>
          <View style={styles.momo}>
            <Image
              style={[
                styles.groupIcon3,
                styles.linkBank1Position,
                styles.groupIconLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/group120.png")}
            />
            <Text style={[styles.momo1, styles.momo1Typo]}>MoMo</Text>
            <Pressable
              style={[styles.tabArea3, styles.tabLayout]}
              onPress={() =>
                navigation.navigate("BottomTabsRoot", {
                  screen: "MTNSplashScreen",
                })
              }
            />
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={tabArea5Visible}>
        <View style={styles.tabArea5Overlay}>
          <Pressable style={styles.tabArea5Bg} onPress={closeTabArea5} />
          <MyActivity onClose={closeTabArea5} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  xaf000Typo: {
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    color: Color.gray_100,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  parentPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  monkapChildPosition: {
    marginLeft: -180,
    width: 360,
    left: "50%",
    top: "50%",
  },
  textTypo: {
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.poppins,
  },
  textTypo1: {
    fontSize: FontSize.size_xl,
    fontWeight: "500",
  },
  groupPosition1: {
    marginTop: -21,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textClr: {
    color: Color.gray_100,
    fontSize: FontSize.size_xl,
  },
  accountPosition: {
    color: Color.darkgray_100,
    fontSize: FontSize.size_xs,
    marginTop: 3,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupLayout: {
    width: 94,
    height: 42,
  },
  monkapPosition: {
    height: 2,
    width: 305,
    backgroundColor: Color.mediumblue_100,
    borderRadius: Border.br_2xl,
    marginLeft: -154,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  childShadowBox: {
    display: "none",
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 25,
      height: 0,
    },
    position: "absolute",
  },
  groupIconPosition: {
    height: 23,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupIconSpaceBlock: {
    marginTop: 365,
    height: 23,
  },
  mtnPosition: {
    left: 24,
    position: "absolute",
  },
  rectanglePressablePosition: {
    width: 335,
    left: 14,
    backgroundColor: Color.gainsboro_700,
    position: "absolute",
  },
  backLayout: {
    height: 46,
    width: 72,
    top: 0,
    position: "absolute",
  },
  tabPosition: {
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  homeLayout: {
    width: "18.06%",
    position: "absolute",
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  momo1Typo: {
    color: Color.iOSKeyLabel,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBasic,
    lineHeight: 17,
    letterSpacing: 0.5,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  linkBank1Position: {
    top: "6.67%",
    position: "absolute",
  },
  tabLayout: {
    width: 43,
    top: 0,
    backgroundColor: Color.gainsboro_700,
    height: 42,
    position: "absolute",
  },
  ewallet: {
    marginTop: -361,
    fontSize: FontSize.size_4xl,
    marginLeft: -153,
  },
  icon: {
    marginTop: -358,
    height: "100%",
    marginLeft: 128,
    width: "100%",
  },
  wrapper: {
    width: 24,
    height: 24,
  },
  monkapHomeScreenChild: {
    marginTop: -98,
    borderTopLeftRadius: Border.br_xs,
    borderTopRightRadius: Border.br_xs,
    backgroundColor: Color.blue_100,
    height: 454,
    width: 360,
    position: "absolute",
  },
  xaf000: {
    marginTop: -37.5,
    marginLeft: -87.5,
    fontSize: FontSize.size_10xl,
  },
  totalBalance: {
    marginTop: 13.5,
    marginLeft: -55.5,
    color: Color.darkgray_600,
  },
  xaf000Parent: {
    marginTop: -318,
    marginLeft: -88,
    width: 175,
    height: 75,
  },
  text: {
    marginLeft: -45,
  },
  swiftCode: {
    marginLeft: -32,
  },
  parent: {
    marginLeft: -119.5,
    width: 90,
    height: 42,
  },
  groupPosition: {
    marginLeft: -47,
    marginTop: -21,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  account: {
    marginLeft: -25,
  },
  groupWrapper: {
    marginLeft: 25.5,
  },
  groupParent: {
    marginTop: -160,
    marginLeft: -120,
    width: 239,
    height: 42,
  },
  monkapHomeScreenItem: {
    marginTop: -36,
  },
  monkapHomeScreenInner: {
    marginTop: 38,
  },
  groupChild: {
    marginLeft: -69,
    borderRadius: Border.br_xl,
    width: 42,
    height: 42,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  linkBank: {
    marginTop: -13,
    marginLeft: -11,
    fontSize: FontSize.size_2xl,
    color: Color.iOSKeyBackgroundHighlight,
  },
  vectorIcon: {
    marginTop: -7,
    marginLeft: -55,
    width: 14,
    height: 14,
  },
  rectangleParent: {
    marginTop: 272,
    width: 138,
    marginLeft: -154,
    height: 42,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  monkapHomeScreenChild1: {
    marginTop: 346,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    height: 54,
    width: 360,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  groupIcon: {
    width: 23,
    marginLeft: -153,
  },
  monkapHomeScreenChild2: {
    marginLeft: -87,
    width: 23,
  },
  monkapHomeScreenChild3: {
    marginTop: 133,
    marginLeft: -145,
    width: 23,
  },
  groupIcon1: {
    marginLeft: -21,
    width: 23,
  },
  monkapHomeScreenChild4: {
    marginLeft: 45,
    width: 40,
  },
  monkapHomeScreenChild5: {
    width: 23,
    marginLeft: 128,
  },
  mtnMmLogoGenericMtnMobileIcon: {
    top: 386,
    width: 50,
    height: 37,
  },
  monkapHomeScreenChild6: {
    top: 585,
    height: 56,
  },
  rectanglePressable: {
    top: 656,
    height: 65,
  },
  backChild: {
    top: 15,
    height: 15,
    width: 23,
  },
  tabArea: {
    left: 0,
    backgroundColor: Color.gainsboro_700,
  },
  back: {
    left: 4,
  },
  footerMonkapChild: {
    bottom: "0%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 9,
    elevation: 9,
    shadowOpacity: 1,
    shadowOffset: {
      width: 25,
      height: 0,
    },
    right: "0%",
    height: "100%",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  profileChild: {
    height: "64.58%",
    width: "47.69%",
    top: "12.5%",
    right: "24.62%",
    bottom: "22.92%",
    left: "27.69%",
    position: "absolute",
  },
  profile1: {
    top: 34,
    left: 17,
    width: 36,
    height: 14,
  },
  tabArea5Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  tabArea5Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  tabArea2: {
    height: "93.75%",
    bottom: "6.25%",
    backgroundColor: Color.gainsboro_700,
  },
  profile: {
    height: "106.67%",
    top: "-8.89%",
    right: "3.33%",
    bottom: "2.22%",
    left: "78.61%",
  },
  groupIcon2: {
    height: "65.28%",
    width: "49.51%",
    right: "26.66%",
    bottom: "34.72%",
    left: "23.83%",
    top: "0%",
    position: "absolute",
  },
  linkBanks: {
    top: 27,
    left: 0,
  },
  imageedit341319179892: {
    top: 1,
    left: 13,
    backgroundColor: Color.silver_500,
    width: 32,
    height: 32,
    position: "absolute",
  },
  linkBank1: {
    height: "97.78%",
    width: "16.11%",
    right: "40.56%",
    left: "43.33%",
    bottom: "-4.44%",
  },
  groupIcon3: {
    height: "62.92%",
    width: "46.51%",
    right: "27.91%",
    bottom: "30.41%",
    left: "25.58%",
  },
  momo1: {
    top: 28,
    left: 5,
  },
  tabArea3: {
    left: 0,
  },
  momo: {
    width: "11.94%",
    top: "2.22%",
    right: "24.17%",
    bottom: "-2.22%",
    left: "63.89%",
    height: "100%",
    position: "absolute",
  },
  footerMonkap: {
    top: 755,
    height: 45,
    left: 0,
    width: 360,
    position: "absolute",
  },
  monkapHomeScreen: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
});

export default MoNkapHomeScreen;
