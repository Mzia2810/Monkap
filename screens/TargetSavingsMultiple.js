import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HouseContainer from "../components/HouseContainer";
import SavingsContainer from "../components/SavingsContainer";
import BuyHouseContainer from "../components/BuyHouseContainer";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const TargetSavingsMultiple = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.targetSavingsMultiple}>
      <View style={styles.targetSavingsMultipleChild} />
      <Text style={[styles.myTargetSavings, styles.myTargetSavingsPosition]}>
        My Target Savings
      </Text>
      <Pressable
        style={[styles.group, styles.groupLayout, styles.groupPosition]}
        onPress={() => navigation.navigate("TargetSavingsFirst")}
      >
        <Image
          style={[styles.vectorIcon, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <View style={[styles.groupChild, styles.groupBg, styles.groupLayout]} />
      </Pressable>
      <View
        style={[
          styles.rectangleParent,
          styles.rectangleParentPosition,
          styles.groupItemLayout1,
        ]}
      >
        <View
          style={[
            styles.groupItem,
            styles.groupItemLayout,
            styles.groupItemLayout1,
          ]}
        />
        <Text
          style={[styles.activateSavingAccount, styles.myTargetSavingsPosition]}
        >
          Activate Saving Account
        </Text>
        <Pressable
          style={[styles.groupInner, styles.groupBg]}
          onPress={() => navigation.navigate("MonkapLoginWithPhone")}
        />
      </View>
      <View
        style={[
          styles.addParentLayout,
          styles.amountSavedPosition,
          styles.groupParentPosition,
        ]}
      >
        <HouseContainer />
      </View>
      <Image
        style={[
          styles.targetSavingsMultipleItem,
          styles.rectangleParentPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/ellipse-4030.png")}
      />
      <View
        style={[
          styles.amountSaved,
          styles.amountLayout,
          styles.amountSavedPosition,
        ]}
      >
        <View
          style={[
            styles.amountSavedChild,
            styles.addVaultPosition,
            styles.amountLayout,
            styles.groupItemLayout,
          ]}
        />
        <Text style={[styles.totalSavedTowards, styles.welcomeTypo]}>
          Total Saved towards Targets
        </Text>
        <Text style={styles.xaf23500Container}>
          XAF 2<Text style={styles.text}>3 5</Text>00
        </Text>
        <View style={[styles.welcomeKalsonParent, styles.dontJudgeEachLayout]}>
          <Text style={[styles.welcomeKalson, styles.addVaultPosition]}>
            <Text style={[styles.welcome, styles.welcomeTypo]}>Welcome</Text>
            <Text style={styles.kalson}>, Kalson</Text>
          </Text>
          <Text
            style={[
              styles.dontJudgeEach,
              styles.dontJudgeEachLayout,
              styles.welcomeTypo,
            ]}
          >
            “Don’t judge each day by the harvest you reap but by the seeds that
            you plant”
          </Text>
        </View>
      </View>
      <SavingsContainer />
      <View
        style={[
          styles.addVaultParent,
          styles.addParentLayout,
          styles.amountSavedPosition,
        ]}
      >
        <View
          style={[
            styles.addVault,
            styles.addVaultPosition,
            styles.addParentLayout,
          ]}
        >
          <View style={[styles.addVaultChild, styles.tabAreaLayout]} />
          <Text style={[styles.addNew, styles.newTypo]}>Add New</Text>
          <Text style={[styles.startANew, styles.iconLayout, styles.newTypo]}>
            Start a New Target Savings
          </Text>
          <Pressable
            style={[styles.tabArea, styles.tabAreaLayout]}
            onPress={() => navigation.navigate("AddTargetSavings1")}
          />
        </View>
        <Image
          style={[styles.addButton1Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/addbutton-11.png")}
        />
      </View>
      <Image
        style={styles.shoeLadies1Icon}
        resizeMode="cover"
        source={require("../assets/shoeladies-1.png")}
      />
      <View
        style={[
          styles.groupParent,
          styles.addParentLayout,
          styles.groupParentPosition,
        ]}
      >
        <View
          style={[
            styles.addVault,
            styles.addVaultPosition,
            styles.addParentLayout,
          ]}
        >
          <BuyHouseContainer />
        </View>
        <Image
          style={[styles.house1Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/house-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  myTargetSavingsPosition: {
    fontFamily: FontFamily.gentiumBookBasic,
    color: Color.iOSKeyBackgroundHighlight,
    fontWeight: "700",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupLayout: {
    height: 57,
    width: 47,
  },
  groupPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupBg: {
    backgroundColor: Color.gainsboro_700,
    position: "absolute",
  },
  rectangleParentPosition: {
    display: "none",
    position: "absolute",
  },
  groupItemLayout1: {
    width: 305,
    height: 45,
    left: "50%",
    top: "50%",
  },
  groupItemLayout: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.blue_100,
  },
  amountSavedPosition: {
    left: 16,
    position: "absolute",
  },
  groupParentPosition: {
    top: 279,
    width: 160,
  },
  amountLayout: {
    height: 122,
    width: 326,
  },
  addVaultPosition: {
    left: 0,
    position: "absolute",
  },
  welcomeTypo: {
    fontStyle: "italic",
    fontFamily: FontFamily.gentiumBasic,
  },
  dontJudgeEachLayout: {
    height: 40,
    position: "absolute",
  },
  addParentLayout: {
    height: 95,
    width: 160,
  },
  tabAreaLayout: {
    borderRadius: Border.br_3xs,
    left: 0,
    height: 95,
    width: 160,
    top: 0,
    position: "absolute",
  },
  newTypo: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.gentiumBasic,
  },
  iconLayout: {
    height: 11,
    position: "absolute",
  },
  targetSavingsMultipleChild: {
    marginTop: -406,
    marginLeft: -188,
    width: 375,
    height: 100,
    backgroundColor: Color.blue_100,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  myTargetSavings: {
    marginTop: -373,
    marginLeft: -101,
    textAlign: "center",
    color: Color.iOSKeyBackgroundHighlight,
    fontSize: FontSize.size_6xl,
  },
  vectorIcon: {
    marginTop: -61.5,
    marginLeft: -56.5,
    width: 16,
    height: 13,
  },
  groupChild: {
    top: -57,
    left: -47,
  },
  group: {
    marginTop: -327,
    marginLeft: -130,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
  },
  groupItem: {
    marginTop: -22.5,
    marginLeft: -152.5,
    height: 45,
    position: "absolute",
  },
  activateSavingAccount: {
    marginTop: -11.5,
    marginLeft: -108.5,
    fontSize: FontSize.size_4xl,
    textAlign: "left",
    color: Color.iOSKeyBackgroundHighlight,
  },
  groupInner: {
    left: 1,
    width: 304,
    top: 0,
    height: 45,
  },
  rectangleParent: {
    marginTop: 291,
    marginLeft: -152,
    height: 45,
  },
  targetSavingsMultipleItem: {
    top: 91,
    left: -60,
    width: 449,
    height: 161,
  },
  amountSavedChild: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    top: 0,
  },
  totalSavedTowards: {
    top: 69,
    left: 8,
    fontSize: FontSize.size_base,
    color: Color.gray_2500,
    width: 166,
    height: 17,
    fontFamily: FontFamily.gentiumBasic,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  text: {
    letterSpacing: "-6.5%",
  },
  xaf23500Container: {
    top: 86,
    width: 125,
    height: 27,
    left: 11,
    fontFamily: FontFamily.gentiumBasic,
    textAlign: "left",
    color: Color.iOSKeyBackgroundHighlight,
    fontWeight: "700",
    fontSize: FontSize.size_6xl,
    position: "absolute",
  },
  welcome: {
    fontFamily: FontFamily.gentiumBasic,
  },
  kalson: {
    fontFamily: FontFamily.gentiumBasic,
    fontWeight: "700",
  },
  welcomeKalson: {
    top: 1,
    fontSize: FontSize.size_xl,
    width: 117,
    height: 20,
    textAlign: "left",
    color: Color.iOSKeyBackgroundHighlight,
  },
  dontJudgeEach: {
    left: 164,
    fontSize: FontSize.size_xs,
    width: 146,
    fontFamily: FontFamily.gentiumBasic,
    top: 0,
    textAlign: "center",
    color: Color.iOSKeyBackgroundHighlight,
    fontWeight: "700",
  },
  welcomeKalsonParent: {
    top: 12,
    width: 310,
    left: 11,
  },
  amountSaved: {
    top: 121,
  },
  addVaultChild: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  addNew: {
    left: 30,
    color: Color.iOSKeyLabel,
    top: 6,
    textAlign: "left",
    position: "absolute",
  },
  startANew: {
    top: 39,
    left: 46,
    color: Color.blue_100,
    width: 67,
    textAlign: "center",
  },
  tabArea: {
    backgroundColor: Color.whitesmoke_1200,
  },
  addVault: {
    top: 0,
  },
  addButton1Icon: {
    left: 14,
    width: 10,
    top: 6,
    overflow: "hidden",
  },
  addVaultParent: {
    top: 387,
  },
  shoeLadies1Icon: {
    top: 286,
    left: 61,
    width: 11,
    height: 9,
    position: "absolute",
    overflow: "hidden",
  },
  house1Icon: {
    top: 5,
    left: 45,
    width: 14,
    overflow: "hidden",
  },
  groupParent: {
    left: 182,
    position: "absolute",
  },
  targetSavingsMultiple: {
    backgroundColor: Color.whitesmoke_400,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default TargetSavingsMultiple;
