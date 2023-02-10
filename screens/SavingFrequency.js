import * as React from "react";
import { useState, useCallback } from "react";
import { Image, StyleSheet, View, Pressable, Text, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import DailyContributionsForm2 from "../components/DailyContributionsForm2";
import ContainerMonkap from "../components/ContainerMonkap";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SavingFrequency = () => {
  const [tabArea4Visible, setTabArea4Visible] = useState(false);
  const navigation = useNavigation();

  const openTabArea4 = useCallback(() => {
    setTabArea4Visible(true);
  }, []);

  const closeTabArea4 = useCallback(() => {
    setTabArea4Visible(false);
  }, []);
  return (
    <>
      <View style={[styles.savingFrequency, styles.groupIconLayout]}>
        <Pressable
          style={[styles.group, styles.groupPosition]}
          onPress={() => navigation.navigate("AddTargetSavings1")}
        >
          <Image
            style={[styles.vectorIcon, styles.letsSetUpPosition]}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
          <View style={styles.groupChild} />
        </Pressable>
        <View
          style={[
            styles.rectangleParent,
            styles.groupLayout,
            styles.groupItemLayout,
          ]}
        >
          <View
            style={[
              styles.groupItem,
              styles.groupLayout,
              styles.groupItemLayout,
            ]}
          />
          <Text style={styles.next}>NEXT</Text>
          <Pressable
            style={[styles.groupInner, styles.groupLayout]}
            onPress={() => navigation.navigate("MonkapLoginWithPhone")}
          />
        </View>
        <View style={[styles.savingFrequencyChild, styles.savingPosition]} />
        <View style={[styles.savingFrequencyItem, styles.savingPosition]} />
        <DailyContributionsForm2 />
        <View style={[styles.monkapHasYourBackParent, styles.monkapPosition]}>
          <Text
            style={[
              styles.monkapHasYour,
              styles.monkapPosition,
              styles.letsSetUpTypo,
            ]}
          >
            MoNkap Has Your Back
          </Text>
          <Text
            style={[
              styles.letsSetUp,
              styles.letsSetUpTypo,
              styles.letsSetUpPosition,
            ]}
          >
            Lets Set Up your Target savings
          </Text>
        </View>
        <View style={styles.selectSavingFrequencyText}>
          <Text
            style={[
              styles.howOftenWill,
              styles.houseClr,
              styles.howOftenWillTypo,
            ]}
          >
            How often will you be saving towards
          </Text>
          <Text
            style={[
              styles.buyingAHouse,
              styles.houseClr,
              styles.howOftenWillTypo,
            ]}
          >
            Buying a House?
          </Text>
        </View>
        <Pressable
          style={[styles.group1, styles.groupPosition]}
          onPress={() => navigation.navigate("SavingFrequency")}
        >
          <Image
            style={[styles.vectorIcon, styles.letsSetUpPosition]}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
          <View style={styles.groupChild} />
        </Pressable>
        <View style={styles.houseSvgrepoCom}>
          <Image
            style={[styles.groupIcon, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group52.png")}
          />
          <Text style={[styles.house, styles.houseClr]}>House</Text>
        </View>
        <ContainerMonkap
          carouselImageUrls={require("../assets/c14-house.png")}
          carouselImageUrls2={require("../assets/group.png")}
          carouselImageUrls3={require("../assets/group1.png")}
          carouselImageUrls4={require("../assets/group2.png")}
          onTabAreaPress={() => navigation.navigate("MoNkapHomeScreen2")}
          onTabAreaPress1={openTabArea4}
          onImageedit341319179892Press={() =>
            navigation.navigate("BottomTabsRoot", { screen: "LinkBank" })
          }
          onTabAreaPress2={() =>
            navigation.navigate("BottomTabsRoot", { screen: "MTNSplashScreen" })
          }
          onTabAreaPress3={() => navigation.navigate("OMoneySplashScreen")}
        />
      </View>

      <Modal animationType="fade" transparent visible={tabArea4Visible}>
        <View style={styles.tabArea4Overlay}>
          <Pressable style={styles.tabArea4Bg} onPress={closeTabArea4} />
          <MyActivity onClose={closeTabArea4} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  groupIconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  groupPosition: {
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    height: 57,
    width: 47,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  letsSetUpPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupLayout: {
    height: 45,
    position: "absolute",
  },
  groupItemLayout: {
    width: 305,
    height: 45,
    left: "50%",
    top: "50%",
  },
  savingPosition: {
    width: 375,
    marginLeft: -188,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  monkapPosition: {
    width: 270,
    marginLeft: -135,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  letsSetUpTypo: {
    color: Color.iOSKeyBackgroundHighlight,
    fontFamily: FontFamily.gentiumBookBasic,
    fontWeight: "700",
    textAlign: "center",
  },
  houseClr: {
    color: Color.iOSKeyLabel,
    position: "absolute",
  },
  howOftenWillTypo: {
    fontSize: FontSize.size_xl,
    color: Color.iOSKeyLabel,
    textAlign: "left",
    fontFamily: FontFamily.gentiumBookBasic,
    fontWeight: "700",
  },
  tabArea4Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  tabArea4Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
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
    backgroundColor: Color.gainsboro_700,
    height: 57,
    width: 47,
    position: "absolute",
  },
  group: {
    marginTop: -319,
    marginLeft: -128,
  },
  groupItem: {
    marginTop: -22.5,
    marginLeft: -152.5,
    borderRadius: Border.br_xs,
    backgroundColor: Color.blue_100,
  },
  next: {
    marginTop: -11.5,
    marginLeft: -24.5,
    fontSize: FontSize.size_4xl,
    textAlign: "left",
    color: Color.iOSKeyBackgroundHighlight,
    fontFamily: FontFamily.gentiumBookBasic,
    fontWeight: "700",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupInner: {
    left: 1,
    width: 304,
    top: 0,
    backgroundColor: Color.gainsboro_700,
  },
  rectangleParent: {
    marginTop: 290,
    marginLeft: -152,
    opacity: 0.3,
  },
  savingFrequencyChild: {
    marginTop: -306,
    backgroundColor: Color.whitesmoke_200,
    height: 42,
  },
  savingFrequencyItem: {
    marginTop: -406,
    height: 100,
    backgroundColor: Color.blue_100,
  },
  monkapHasYour: {
    marginTop: -29.5,
    fontSize: FontSize.size_6xl,
    height: 24,
    textAlign: "center",
  },
  letsSetUp: {
    marginTop: 2.5,
    marginLeft: -126,
    fontSize: FontSize.size_base,
    width: 241,
    height: 27,
    textAlign: "center",
  },
  monkapHasYourBackParent: {
    marginTop: -378,
    height: 59,
  },
  howOftenWill: {
    left: 0,
    top: 0,
  },
  buyingAHouse: {
    top: 31,
    left: 73,
  },
  selectSavingFrequencyText: {
    top: 122,
    left: 46,
    width: 267,
    height: 50,
    position: "absolute",
  },
  group1: {
    marginTop: -328,
    marginLeft: -133,
  },
  groupIcon: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
  },
  house: {
    top: 39,
    left: 9,
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.gentiumBasic,
    textAlign: "center",
  },
  houseSvgrepoCom: {
    top: 180,
    left: 161,
    width: 38,
    height: 38,
    position: "absolute",
  },
  savingFrequency: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    flex: 1,
    height: 800,
  },
});

export default SavingFrequency;
