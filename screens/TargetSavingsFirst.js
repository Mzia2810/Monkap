import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SavingsContainer from "../components/SavingsContainer";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const TargetSavingsFirst = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.targetSavingsFirst}>
      <View style={[styles.targetSavingsFirstChild, styles.groupPosition]} />
      <Text style={[styles.myTargetSavings, styles.myTargetSavingsPosition]}>
        My Target Savings
      </Text>
      <Pressable
        style={[styles.group, styles.groupLayout, styles.groupPosition]}
        onPress={() => navigation.navigate("TargetSavingsPaymentMethods")}
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
          styles.groupItemLayout,
        ]}
      >
        <View style={[styles.groupItem, styles.groupItemLayout]} />
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
      <Image
        style={[styles.targetSavingsFirstItem, styles.rectangleParentPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-4030.png")}
      />
      <View style={[styles.amountSaved, styles.amountLayout]}>
        <View style={[styles.amountSavedChild, styles.amountLayout]} />
        <Text style={[styles.totalSavedTowards, styles.welcomeTypo]}>
          Total Saved towards Targets
        </Text>
        <View style={[styles.welcomeKalsonParent, styles.dontJudgeEachLayout]}>
          <Text style={styles.welcomeKalson}>
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
        <Text style={styles.xaf00000}>XAF 00 000</Text>
      </View>
      <SavingsContainer />
      <View style={[styles.addVaultWrapper, styles.addLayout]}>
        <View style={[styles.addVault, styles.addLayout]}>
          <View style={[styles.addVaultChild, styles.tabAreaLayout]} />
          <Text style={[styles.addNew, styles.addPosition]}>Add New</Text>
          <Text style={styles.startANew}>Start a New Target Savings</Text>
          <Image
            style={[styles.addButton1Icon, styles.addPosition]}
            resizeMode="cover"
            source={require("../assets/addbutton-1.png")}
          />
          <View style={[styles.tabArea, styles.tabAreaLayout]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
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
  groupBg: {
    backgroundColor: Color.gainsboro_700,
    position: "absolute",
  },
  rectangleParentPosition: {
    display: "none",
    position: "absolute",
  },
  groupItemLayout: {
    width: 305,
    height: 45,
    left: "50%",
    top: "50%",
  },
  amountLayout: {
    height: 122,
    width: 326,
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
  addLayout: {
    height: 95,
    width: 160,
    position: "absolute",
  },
  tabAreaLayout: {
    borderRadius: Border.br_3xs,
    height: 95,
    width: 160,
    left: 0,
    top: 0,
    position: "absolute",
  },
  addPosition: {
    top: 5,
    position: "absolute",
  },
  targetSavingsFirstChild: {
    marginTop: -406,
    marginLeft: -188,
    width: 375,
    height: 100,
    backgroundColor: Color.blue_100,
  },
  myTargetSavings: {
    marginTop: -373,
    marginLeft: -101,
    textAlign: "center",
    color: Color.iOSKeyBackgroundHighlight,
    fontSize: FontSize.size_6xl,
  },
  vectorIcon: {
    marginTop: -67.5,
    marginLeft: -58.5,
    height: 13,
    width: 16,
  },
  groupChild: {
    top: -57,
    left: -47,
  },
  group: {
    marginTop: -325,
    marginLeft: -132,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
  },
  groupItem: {
    marginTop: -22.5,
    marginLeft: -152.5,
    borderRadius: Border.br_xs,
    height: 45,
    backgroundColor: Color.blue_100,
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
  targetSavingsFirstItem: {
    top: 91,
    left: -60,
    width: 449,
    height: 161,
  },
  amountSavedChild: {
    borderRadius: Border.br_2xl,
    shadowColor: "rgba(0, 0, 0, 0.6)",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowRadius: 13,
    elevation: 13,
    shadowOpacity: 1,
    left: 0,
    top: 0,
    backgroundColor: Color.blue_100,
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
    left: 0,
    textAlign: "left",
    color: Color.iOSKeyBackgroundHighlight,
    position: "absolute",
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
    top: 13,
    left: 9,
    width: 310,
  },
  xaf00000: {
    top: 86,
    left: 11,
    width: 138,
    height: 29,
    fontFamily: FontFamily.gentiumBasic,
    textAlign: "left",
    color: Color.iOSKeyBackgroundHighlight,
    fontWeight: "700",
    fontSize: FontSize.size_6xl,
    position: "absolute",
  },
  amountSaved: {
    top: 121,
    left: 16,
  },
  addVaultChild: {
    backgroundColor: Color.whitesmoke_800,
  },
  addNew: {
    left: 30,
    fontSize: FontSize.size_sm,
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBasic,
    textAlign: "left",
  },
  startANew: {
    top: 39,
    left: 46,
    fontSize: FontSize.size_3xs,
    color: Color.blue_100,
    width: 67,
    height: 11,
    fontFamily: FontFamily.gentiumBasic,
    textAlign: "center",
    position: "absolute",
  },
  addButton1Icon: {
    left: 10,
    height: 18,
    width: 16,
    overflow: "hidden",
  },
  tabArea: {
    backgroundColor: Color.whitesmoke_1200,
  },
  addVault: {
    left: 0,
    top: 0,
  },
  addVaultWrapper: {
    top: 278,
    left: 182,
  },
  targetSavingsFirst: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default TargetSavingsFirst;
