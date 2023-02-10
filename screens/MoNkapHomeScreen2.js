import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MoMoContainer from "../components/MoMoContainer";
import NjangiContainer from "../components/NjangiContainer";
import OrangeMoneyContainer from "../components/OrangeMoneyContainer";
import TargetContainer from "../components/TargetContainer";
import ValueContainer from "../components/ValueContainer";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const MoNkapHomeScreen2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.monkapHomeScreen}>
      <Text style={[styles.ewallet, styles.ewalletPosition]}>eWallet</Text>
      <Image
        style={[styles.monkapHomeScreenChild, styles.monkapPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-111.png")}
      />
      <View
        style={[
          styles.monkapHomeScreenItem,
          styles.monkapSpaceBlock,
          styles.monkapPosition,
        ]}
      />
      <View
        style={[styles.monkapHomeScreenInner, styles.rectangleViewPosition]}
      />
      <MoMoContainer
        propMarginTop={-86}
        propMarginLeft={142.5}
        onTabAreaPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "MTNSplashScreen" })
        }
      />
      <View style={[styles.rectangleParent, styles.rectangleParentPosition]}>
        <View style={[styles.groupChild, styles.childLayout]} />
        <Text style={[styles.linkBank, styles.ewalletPosition]}>Link Bank</Text>
        <Image
          style={[styles.vectorIcon, styles.monkapPosition]}
          resizeMode="cover"
          source={require("../assets/vector149.png")}
        />
        <Pressable
          style={styles.groupItem}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "LinkBank" })
          }
        />
      </View>
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <NjangiContainer
        propMarginTop={127}
        onTabAreaPress={() => navigation.navigate("NjangiMainDaily2")}
      />
      <View
        style={[
          styles.monkapHomeScreenChild1,
          styles.childShadowBox2,
          styles.rectangleParentPosition,
          styles.monkapSpaceBlock,
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
        propMarginTop={-13}
        onTabAreaPress={() => navigation.navigate("OMoneySplashScreen")}
      />
      <Image
        style={styles.mtnMmLogoGenericMtnMobileIcon}
        resizeMode="cover"
        source={require("../assets/69691715-mtnmmlogogenericmtnmobilemoneylogo-12.png")}
      />
      <View style={styles.monkapHomeScreenChild6} />
      <Pressable
        style={[styles.back, styles.backLayout]}
        onPress={() => navigation.navigate("MonkapLoginWithEmail")}
      >
        <Image
          style={styles.backChild}
          resizeMode="cover"
          source={require("../assets/line-312.png")}
        />
        <Pressable
          style={[styles.tabArea, styles.backLayout]}
          onPress={() => navigation.navigate("UsePhone1")}
        />
      </Pressable>
      <TargetContainer
        propMarginTop={60}
        onRectanglePressablePress={() =>
          navigation.navigate("StartTargetSavings")
        }
      />
      <ValueContainer propTop={84} propLeft={17} />
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
      <View style={[styles.deposit, styles.payLayout, styles.monkapPosition]}>
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
  monkapPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  monkapSpaceBlock: {
    marginLeft: -180,
    width: 360,
  },
  rectangleViewPosition: {
    height: 2,
    width: 305,
    backgroundColor: Color.mediumblue_100,
    borderRadius: Border.br_2xl,
    marginLeft: -154,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  rectangleParentPosition: {
    height: 54,
    left: "50%",
    top: "50%",
  },
  childLayout: {
    height: 42,
    width: 42,
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
    backgroundColor: Color.gainsboro_700,
    top: 0,
    height: 42,
    position: "absolute",
  },
  payLayout: {
    height: 67,
    width: 67,
  },
  payPosition: {
    marginTop: -199,
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
    height: 42,
    width: 42,
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
    marginTop: -107,
    borderTopLeftRadius: Border.br_6xl,
    borderTopRightRadius: Border.br_6xl,
    height: 463,
    width: 360,
    backgroundColor: Color.blue_100,
  },
  monkapHomeScreenInner: {
    marginTop: -22,
    width: 305,
    backgroundColor: Color.mediumblue_100,
    borderRadius: Border.br_2xl,
    marginLeft: -154,
  },
  groupChild: {
    marginLeft: -156.5,
    borderRadius: Border.br_xl,
    height: 42,
    marginTop: -22,
    left: "50%",
    top: "50%",
    position: "absolute",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  linkBank: {
    marginTop: -14,
    marginLeft: -98.5,
    fontSize: FontSize.size_2xl,
    fontWeight: "500",
    color: Color.iOSKeyBackgroundHighlight,
  },
  vectorIcon: {
    marginTop: -8,
    marginLeft: -142.5,
    width: 14,
    height: 14,
  },
  groupItem: {
    backgroundColor: Color.gainsboro_700,
    left: 0,
    top: 0,
    height: 54,
    width: 333,
    position: "absolute",
  },
  rectangleParent: {
    marginTop: 207,
    marginLeft: -164,
    width: 333,
    height: 54,
    position: "absolute",
  },
  rectangleView: {
    marginTop: 195,
  },
  monkapHomeScreenChild1: {
    marginTop: 346,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    width: 360,
    height: 54,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    elevation: 4,
    shadowRadius: 4,
    marginLeft: -180,
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
    marginTop: 73,
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
    top: 327,
    left: 28,
    height: 29,
    width: 42,
    position: "absolute",
  },
  monkapHomeScreenChild6: {
    top: 525,
    left: 14,
    width: 335,
    height: 56,
    backgroundColor: Color.gainsboro_700,
    position: "absolute",
  },
  backChild: {
    top: 15,
    left: 24,
    height: 15,
    width: 23,
    position: "absolute",
  },
  tabArea: {
    backgroundColor: Color.gainsboro_700,
    left: 0,
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
    position: "absolute",
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
    marginLeft: -156,
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
    position: "absolute",
  },
  deposit: {
    marginTop: -198,
    marginLeft: -33,
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
    position: "absolute",
  },
  pay: {
    marginLeft: 89,
  },
  monkapHomeScreen: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
});

export default MoNkapHomeScreen2;
