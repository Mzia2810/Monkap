import * as React from "react";
import { useState, useCallback } from "react";
import { Text, StyleSheet, View, Image, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import ContainerWrapper from "../components/ContainerWrapper";
import ContainerMonkap from "../components/ContainerMonkap";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const DailyTransferAmount = () => {
  const [tabArea1Visible, setTabArea1Visible] = useState(false);
  const navigation = useNavigation();

  const openTabArea1 = useCallback(() => {
    setTabArea1Visible(true);
  }, []);

  const closeTabArea1 = useCallback(() => {
    setTabArea1Visible(false);
  }, []);
  return (
    <>
      <View style={styles.dailyTransferAmount}>
        <Text
          style={[
            styles.dailyTransferAmount1,
            styles.xaf55Typo,
            styles.xaf55Typo1,
          ]}
        >
          Daily Transfer Amount
        </Text>
        <Text style={[styles.xaf55, styles.xaf55Typo, styles.xaf55Typo1]}>
          XAF 55
        </Text>
        <ContainerWrapper />
        <View
          style={[
            styles.rectangleParent,
            styles.groupChildLayout,
            styles.groupPosition,
          ]}
        >
          <View
            style={[
              styles.groupChild,
              styles.childPosition,
              styles.groupChildLayout,
            ]}
          />
          <Text
            style={[
              styles.schedule55,
              styles.schedule55Position,
              styles.xaf55Typo,
            ]}
          >
            Schedule $55
          </Text>
        </View>
        <View style={[styles.dailyTransferAmountChild, styles.childPosition]} />
        <Text style={[styles.fromYourBank, styles.schedule55Position]}>
          FROM YOUR BANK
        </Text>
        <View style={[styles.group, styles.groupPosition]}>
          <Image
            style={[styles.vectorIcon, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
          <View style={[styles.groupItem, styles.groupItemBg]} />
          <View style={[styles.groupInner, styles.groupItemBg]} />
        </View>
        <Pressable
          style={[styles.dailyTransferAmountItem, styles.groupItemBg]}
          onPress={() => navigation.navigate("MoNkapHomeScreen2")}
        />
        <ContainerMonkap
          carouselImageUrls={require("../assets/c14-house.png")}
          carouselImageUrls2={require("../assets/group.png")}
          carouselImageUrls3={require("../assets/group1.png")}
          carouselImageUrls4={require("../assets/group12.png")}
          onTabAreaPress={() => navigation.navigate("MoNkapHomeScreen2")}
          onTabAreaPress1={openTabArea1}
          onImageedit341319179892Press={() =>
            navigation.navigate("BottomTabsRoot", { screen: "LinkBank" })
          }
          onTabAreaPress2={() =>
            navigation.navigate("BottomTabsRoot", { screen: "MTNSplashScreen" })
          }
          onTabAreaPress3={() => navigation.navigate("OMoneySplashScreen")}
        />
      </View>

      <Modal animationType="fade" transparent visible={tabArea1Visible}>
        <View style={styles.tabArea1Overlay}>
          <Pressable style={styles.tabArea1Bg} onPress={closeTabArea1} />
          <MyActivity onClose={closeTabArea1} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  xaf55Typo: {
    textAlign: "left",
    fontWeight: "600",
  },
  xaf55Typo1: {
    color: Color.gray_100,
    fontFamily: FontFamily.poppins,
    textAlign: "left",
    fontWeight: "600",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupChildLayout: {
    height: 45,
    width: 305,
  },
  groupPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  childPosition: {
    backgroundColor: Color.blue_100,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  schedule55Position: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppins,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupItemBg: {
    backgroundColor: Color.gainsboro_700,
    position: "absolute",
  },
  tabArea1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  tabArea1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  dailyTransferAmount1: {
    marginTop: -273,
    marginLeft: -114,
    fontSize: FontSize.size_4xl,
  },
  xaf55: {
    marginTop: -115,
    marginLeft: -87,
    fontSize: FontSize.size_11xl,
  },
  groupChild: {
    marginTop: -22.5,
    marginLeft: -152.5,
    borderRadius: Border.br_xs,
  },
  schedule55: {
    marginTop: -11.5,
    marginLeft: -51.5,
    color: Color.iOSKeyBackgroundHighlight,
    textAlign: "left",
    fontWeight: "600",
    fontSize: FontSize.size_lg,
  },
  rectangleParent: {
    marginTop: 303,
    marginLeft: -153,
  },
  dailyTransferAmountChild: {
    marginTop: -406,
    marginLeft: -188,
    width: 375,
    height: 100,
  },
  fromYourBank: {
    marginTop: -239,
    marginLeft: -65,
    color: Color.darkgray_100,
    textAlign: "center",
  },
  vectorIcon: {
    marginTop: -1061.5,
    marginLeft: -471,
    width: 16,
    height: 13,
  },
  groupItem: {
    top: -723,
    left: -332,
    width: 66,
    height: 57,
  },
  groupInner: {
    top: -49,
    left: -305,
    height: 49,
    width: 305,
    backgroundColor: Color.gainsboro_700,
  },
  group: {
    marginTop: 348,
    marginLeft: 152,
    width: 332,
    height: 723,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
  },
  dailyTransferAmountItem: {
    top: 702,
    left: 27,
    width: 300,
    height: 46,
  },
  dailyTransferAmount: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default DailyTransferAmount;
