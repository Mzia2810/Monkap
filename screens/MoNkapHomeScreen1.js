import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MoMoContainer from "../components/MoMoContainer";
import NjangiContainer from "../components/NjangiContainer";
import OrangeMoneyContainer from "../components/OrangeMoneyContainer";
import TargetContainer from "../components/TargetContainer";
import DepositTransferContainer from "../components/DepositTransferContainer";
import ValueContainer from "../components/ValueContainer";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const MoNkapHomeScreen1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.monkapHomeScreen}>
      <Text style={[styles.ewallet, styles.ewalletPosition]}>eWallet</Text>
      <Image
        style={[styles.monkapHomeScreenChild, styles.depositPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-111.png")}
      />
      <View style={[styles.monkapHomeScreenItem, styles.monkapPosition1]} />
      <View style={[styles.monkapHomeScreenInner, styles.monkapPosition]} />
      <View style={[styles.rectangleView, styles.monkapPosition]} />
      <MoMoContainer
        onTabAreaPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "MTNSplashScreen" })
        }
      />
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.childLayout]} />
        <Text style={[styles.linkBank, styles.ewalletPosition]}>Link Bank</Text>
        <Image
          style={[styles.vectorIcon, styles.depositPosition]}
          resizeMode="cover"
          source={require("../assets/vector149.png")}
        />
      </View>
      <View style={[styles.monkapHomeScreenChild1, styles.monkapPosition]} />
      <NjangiContainer
        onTabAreaPress={() => navigation.navigate("NjangiMainDaily2")}
      />
      <View
        style={[
          styles.monkapHomeScreenChild2,
          styles.childShadowBox2,
          styles.monkapPosition1,
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
          styles.monkapHomeScreenChild3,
          styles.groupIconPosition,
          styles.groupIconSpaceBlock,
        ]}
        resizeMode="cover"
        source={require("../assets/group-28.png")}
      />
      <Image
        style={[styles.monkapHomeScreenChild4, styles.groupIconPosition]}
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
          styles.monkapHomeScreenChild5,
          styles.groupIconPosition,
          styles.groupIconSpaceBlock,
        ]}
        resizeMode="cover"
        source={require("../assets/group-31.png")}
      />
      <Image
        style={[
          styles.monkapHomeScreenChild6,
          styles.groupIconPosition,
          styles.groupIconSpaceBlock,
        ]}
        resizeMode="cover"
        source={require("../assets/group-30.png")}
      />
      <OrangeMoneyContainer
        onTabAreaPress={() => navigation.navigate("OMoneySplashScreen")}
      />
      <Image
        style={[styles.mtnMmLogoGenericMtnMobileIcon, styles.mtnPosition]}
        resizeMode="cover"
        source={require("../assets/69691715-mtnmmlogogenericmtnmobilemoneylogo-140.png")}
      />
      <View
        style={[
          styles.monkapHomeScreenChild7,
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
        onRectanglePressablePress={() =>
          navigation.navigate("StartTargetSavings")
        }
      />
      <DepositTransferContainer
        propBackgroundColor="rgba(217, 217, 217, 0)"
        onRectanglePressablePress={() => navigation.navigate("Deposit")}
      />
      <ValueContainer propTop={83} propLeft={16} />
      <View style={[styles.transfer, styles.payLayout, styles.payPosition]}>
        <View
          style={[
            styles.transferChild,
            styles.childShadowBox,
            styles.childShadowBox1,
          ]}
        />
        <Image
          style={[styles.vectorIcon1, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector33.png")}
        />
        <Text
          style={[styles.transfer1, styles.pay1Typo, styles.depositsPosition]}
        >
          Transfer
        </Text>
        <Pressable
          style={[styles.tabArea5, styles.childShadowBox, styles.payLayout]}
          onPress={() => navigation.navigate("TransferMonkapUser")}
        />
      </View>
      <View style={[styles.deposit, styles.payLayout, styles.depositPosition]}>
        <View
          style={[
            styles.depositChild,
            styles.childShadowBox,
            styles.childShadowBox1,
          ]}
        />
        <Text
          style={[styles.deposits, styles.pay1Typo, styles.depositsPosition]}
        >
          Deposits
        </Text>
        <Image
          style={[styles.depositItem, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group-2331.png")}
        />
        <Pressable
          style={[styles.tabArea5, styles.childShadowBox, styles.payLayout]}
          onPress={() => navigation.navigate("Deposit")}
        />
      </View>
      <View style={[styles.pay, styles.payLayout, styles.payPosition]}>
        <View
          style={[styles.payChild, styles.childShadowBox, styles.childLayout]}
        />
        <Text style={[styles.pay1, styles.pay1Typo]}>Pay</Text>
        <Image
          style={[styles.vectorIcon2, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector137.png")}
        />
        <Pressable
          style={[styles.tabArea5, styles.childShadowBox, styles.payLayout]}
          onPress={() => navigation.navigate("Pay1")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ewalletPosition: {
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  depositPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  monkapPosition1: {
    marginLeft: -180,
    width: 360,
    left: "50%",
    top: "50%",
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
  childLayout: {
    width: 42,
    height: 42,
  },
  childShadowBox2: {
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
  footerFlexBox: {
    flexDirection: "row",
    height: 44,
  },
  homePosition: {
    bottom: "-6.82%",
    position: "absolute",
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  tabPosition: {
    left: "0%",
    right: "0%",
    top: "0%",
    backgroundColor: Color.gainsboro_700,
    position: "absolute",
    width: "100%",
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
  tabLayout: {
    width: 43,
    top: 0,
    backgroundColor: Color.gainsboro_700,
    height: 42,
    position: "absolute",
  },
  payLayout: {
    height: 67,
    width: 67,
  },
  payPosition: {
    marginTop: -200,
    width: 67,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  childShadowBox: {
    elevation: 54,
    shadowRadius: 54,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 25,
      height: 0,
    },
    borderRadius: Border.br_xl,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  childShadowBox1: {
    marginLeft: -21.5,
    shadowRadius: 54,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    width: 42,
    height: 42,
    backgroundColor: Color.blue_100,
  },
  pay1Typo: {
    fontSize: FontSize.size_sm,
    color: Color.iOSKeyLabel,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  depositsPosition: {
    left: 6,
    fontSize: FontSize.size_sm,
  },
  ewallet: {
    marginTop: -361,
    fontSize: FontSize.size_4xl,
    fontWeight: "600",
    color: Color.gray_100,
    marginLeft: -153,
  },
  monkapHomeScreenChild: {
    marginTop: -358,
    width: 24,
    height: 24,
    marginLeft: 128,
  },
  monkapHomeScreenItem: {
    marginTop: -98,
    borderTopLeftRadius: Border.br_xs,
    borderTopRightRadius: Border.br_xs,
    height: 454,
    width: 360,
    backgroundColor: Color.blue_100,
    position: "absolute",
  },
  monkapHomeScreenInner: {
    marginTop: -36,
  },
  rectangleView: {
    marginTop: 38,
  },
  groupChild: {
    marginTop: -21,
    marginLeft: -69,
    borderRadius: Border.br_xl,
    width: 42,
    left: "50%",
    top: "50%",
    position: "absolute",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  linkBank: {
    marginTop: -13,
    marginLeft: -11,
    fontSize: FontSize.size_2xl,
    fontWeight: "500",
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
    height: 42,
    marginLeft: -154,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  monkapHomeScreenChild1: {
    marginTop: 255,
  },
  monkapHomeScreenChild2: {
    marginTop: 346,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    height: 54,
    width: 360,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    elevation: 4,
    shadowRadius: 4,
    marginLeft: -180,
  },
  groupIcon: {
    width: 23,
    marginLeft: -153,
  },
  monkapHomeScreenChild3: {
    marginLeft: -87,
    width: 23,
  },
  monkapHomeScreenChild4: {
    marginTop: 133,
    marginLeft: -145,
    width: 23,
  },
  groupIcon1: {
    marginLeft: -21,
    width: 23,
  },
  monkapHomeScreenChild5: {
    marginLeft: 45,
    width: 40,
  },
  monkapHomeScreenChild6: {
    width: 23,
    marginLeft: 128,
  },
  mtnMmLogoGenericMtnMobileIcon: {
    top: 386,
    width: 50,
    height: 37,
  },
  monkapHomeScreenChild7: {
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
    height: 46,
    width: 72,
    top: 0,
  },
  back: {
    left: 4,
  },
  transferChild: {
    marginTop: -30.5,
  },
  vectorIcon1: {
    height: "44.78%",
    width: "41.79%",
    top: "13.43%",
    right: "29.85%",
    bottom: "41.79%",
    left: "28.36%",
  },
  transfer1: {
    top: 46,
  },
  tabArea5: {
    marginTop: -33.5,
    marginLeft: -33.5,
    backgroundColor: Color.blue_200,
  },
  transfer: {
    marginLeft: -157,
  },
  depositChild: {
    marginTop: -31.5,
  },
  deposits: {
    top: 45,
  },
  depositItem: {
    height: "40%",
    width: "44.44%",
    top: "14.93%",
    right: "28.69%",
    bottom: "45.07%",
    left: "26.87%",
  },
  deposit: {
    marginTop: -199,
    marginLeft: -34,
  },
  payChild: {
    marginLeft: -23.5,
    marginTop: -30.5,
    backgroundColor: Color.blue_100,
  },
  pay1: {
    left: 19,
    top: 46,
  },
  vectorIcon2: {
    height: "50.75%",
    width: "43.28%",
    top: "11.94%",
    right: "31.34%",
    bottom: "37.31%",
    left: "25.37%",
  },
  pay: {
    marginLeft: 88,
  },
  monkapHomeScreen: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
});

export default MoNkapHomeScreen1;
