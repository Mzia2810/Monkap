import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Image, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import ContainerMoMo from "../components/ContainerMoMo";
import MoneyContainer1 from "../components/MoneyContainer1";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const OMDepositMoneyScan = () => {
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
      <View style={styles.omDepositMoneyScan}>
        <View style={[styles.images1, styles.images1Position]} />
        <Pressable
          style={[styles.btnNextParent, styles.btnLayout]}
          onPress={() => navigation.navigate("OMDepositRequest")}
        >
          <View
            style={[
              styles.btnNext,
              styles.btnNextShadowBox,
              styles.btnLayout,
              styles.images1Position,
            ]}
          />
          <Text style={styles.scanNow}>SCAN NOW</Text>
        </Pressable>
        <Image
          style={styles.qrCodeScanIcon1}
          resizeMode="cover"
          source={require("../assets/qrcodescanicon-1.png")}
        />
        <View
          style={[
            styles.omDepositMoneyScanChild,
            styles.tabAreaBg,
            styles.btnNextShadowBox,
          ]}
        />
        <View style={[styles.tabArea, styles.tabAreaBg]} />
        <ContainerMoMo
          carouselImageUrls={{ uri: "c14-house28@3x.png" }}
          carouselImageUrls2={{ uri: "group96@3x.png" }}
          carouselImageUrls3={require("../assets/group33.png")}
          onTabAreaPress={() => navigation.navigate("MoNkapHomeScreen2")}
          onTabAreaPress1={openTabArea2}
          onImageedit341319179892Press={() =>
            navigation.navigate("BottomTabsRoot", { screen: "LinkBank" })
          }
          onTabAreaPress2={() =>
            navigation.navigate("BottomTabsRoot", { screen: "MTNSplashScreen" })
          }
        />
        <MoneyContainer1
          depositText="Deposite Money"
          propBackgroundColor="#ea9311"
          propLeft={91}
          onTaAreaPress={() => navigation.navigate("OMDepositMoneyFrequent")}
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
  images1Position: {
    left: 0,
    top: 0,
  },
  btnLayout: {
    width: 287,
    height: 40,
    position: "absolute",
  },
  btnNextShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  tabAreaBg: {
    backgroundColor: Color.gainsboro_700,
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
    right: 0,
    backgroundColor: Color.whitesmoke_900,
    position: "absolute",
    height: 800,
  },
  btnNext: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.orangeColor,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowRadius: 6,
    elevation: 6,
    height: 40,
  },
  scanNow: {
    top: 8,
    left: 61,
    fontSize: FontSize.size_4xl,
    letterSpacing: 1.9,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.gentiumBookBasic,
    color: Color.iOSKeyLabel,
    textAlign: "center",
    width: 149,
    height: 24,
    position: "absolute",
  },
  btnNextParent: {
    top: 457,
    left: 37,
    height: 40,
  },
  qrCodeScanIcon1: {
    top: 139,
    left: 43,
    width: 261,
    height: 261,
    position: "absolute",
    overflow: "hidden",
  },
  omDepositMoneyScanChild: {
    top: 632,
    left: 29,
    shadowColor: "rgba(0, 0, 0, 0.8)",
    shadowRadius: 4,
    elevation: 4,
    width: 289,
    height: 42,
  },
  tabArea: {
    top: 634,
    left: 35,
    width: 283,
    height: 40,
  },
  omDepositMoneyScan: {
    backgroundColor: Color.darkgray_500,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default OMDepositMoneyScan;
