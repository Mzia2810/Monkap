import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Image, Text, Modal, Pressable } from "react-native";
import OMDepositRequestReview from "../components/OMDepositRequestReview";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import TransactionHistoryContainer from "../components/TransactionHistoryContainer";
import SendContainer from "../components/SendContainer";
import FrequentCashOutPointsContainer from "../components/FrequentCashOutPointsContainer";
import CashPointContainer from "../components/CashPointContainer";
import ContainerMoMo from "../components/ContainerMoMo";
import HelloTawaContainer from "../components/HelloTawaContainer";
import MoneyContainer from "../components/MoneyContainer";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const OMDepositRequest = () => {
  const [tabAreaVisible, setTabAreaVisible] = useState(false);
  const [tabArea2Visible, setTabArea2Visible] = useState(false);
  const navigation = useNavigation();

  const openTabArea = useCallback(() => {
    setTabAreaVisible(true);
  }, []);

  const closeTabArea = useCallback(() => {
    setTabAreaVisible(false);
  }, []);

  const openTabArea2 = useCallback(() => {
    setTabArea2Visible(true);
  }, []);

  const closeTabArea2 = useCallback(() => {
    setTabArea2Visible(false);
  }, []);
  return (
    <>
      <View style={styles.omDepositRequest}>
        <View style={styles.images1} />
        <TransactionHistoryContainer />
        <Image
          style={[styles.omDepositRequestChild, styles.depositPosition]}
          resizeMode="cover"
          source={require("../assets/line-21.png")}
        />
        <SendContainer
          actionText="Deposite"
          propTop={634}
          propLeft={101}
          propWidth="unset"
          onTabAreaPress={openTabArea}
        />
        <Text style={styles.frequentCashOut}>Frequent Cash Out Points</Text>
        <Image
          style={[styles.omDepositRequestItem, styles.depositPosition]}
          resizeMode="cover"
          source={require("../assets/line-22.png")}
        />
        <FrequentCashOutPointsContainer />
        <View style={[styles.omDepositRequestInner, styles.lineViewLayout]} />
        <Text style={[styles.showRecent, styles.textTypo]}>Show Recent</Text>
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Text style={[styles.kiosk, styles.kioskTypo]}>Kiosk</Text>
          <Text style={[styles.text, styles.textTypo]}>654 26 53 94</Text>
          <Image
            style={[styles.scanSvgrepoCom1Icon, styles.groupChildPosition]}
            resizeMode="cover"
            source={require("../assets/scansvgrepocom-1.png")}
          />
        </View>
        <CashPointContainer propTop={550} propLeft={28} />
        <View style={[styles.lineView, styles.lineViewLayout]} />
        <Text style={[styles.angelinaWaMu, styles.kioskTypo]}>
          Angelina Wa Mu tema Zeze cash point. Bowango
        </Text>
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
        <HelloTawaContainer />
        <MoneyContainer
          transactionType="Deposite Money"
          propLeft={88}
          onTaAreaPress={() => navigation.navigate("OMDepositMoneyScan")}
        />
      </View>

      <Modal animationType="fade" transparent visible={tabAreaVisible}>
        <View style={styles.tabAreaOverlay}>
          <Pressable style={styles.tabAreaBg} onPress={closeTabArea} />
          <OMDepositRequestReview onClose={closeTabArea} />
        </View>
      </Modal>

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
  depositPosition: {
    width: 326,
    left: 12,
    position: "absolute",
  },
  lineViewLayout: {
    height: 1,
    width: 327,
    borderTopWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.16)",
    borderStyle: "solid",
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  groupChildPosition: {
    top: 30,
    position: "absolute",
  },
  kioskTypo: {
    lineHeight: 22,
    letterSpacing: 1.9,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  tabAreaOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  tabAreaBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
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
    left: 0,
    top: 0,
    position: "absolute",
    height: 800,
  },
  omDepositRequestChild: {
    top: 280,
    height: 3,
  },
  frequentCashOut: {
    left: 18,
    textAlign: "left",
    color: Color.iOSKeyLabel,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.gentiumBookBasic,
    lineHeight: 20,
    letterSpacing: 1.8,
    top: 291,
    position: "absolute",
  },
  omDepositRequestItem: {
    top: 201,
    height: 2,
  },
  omDepositRequestInner: {
    top: 400,
    left: 12,
    width: 327,
    borderTopWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.16)",
  },
  showRecent: {
    left: 247,
    textDecoration: "underline",
    color: Color.blue_100,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    width: 95,
    height: 17,
    fontStyle: "italic",
    fontFamily: FontFamily.gentiumBookBasic,
    top: 291,
    textAlign: "center",
  },
  groupChild: {
    borderRadius: Border.br_2xs,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    borderColor: "#ea9311",
    borderWidth: 0.3,
    height: 36,
    width: 300,
    borderStyle: "solid",
    top: 30,
    left: 0,
  },
  kiosk: {
    left: 5,
    top: 0,
    lineHeight: 22,
    letterSpacing: 1.9,
    fontSize: FontSize.size_lg,
  },
  text: {
    top: 41,
    left: 71,
    fontFamily: FontFamily.gentiumBasic,
    color: Color.gray_2200,
    textAlign: "center",
    lineHeight: 20,
    letterSpacing: 1.8,
  },
  scanSvgrepoCom1Icon: {
    left: 257,
    width: 35,
    height: 35,
    overflow: "hidden",
  },
  rectangleParent: {
    top: 412,
    height: 66,
    width: 300,
    left: 24,
    position: "absolute",
  },
  lineView: {
    top: 534,
    left: 15,
  },
  angelinaWaMu: {
    top: 489,
    width: 297,
    left: 24,
    fontStyle: "italic",
  },
  omDepositRequest: {
    backgroundColor: Color.darkgray_500,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default OMDepositRequest;
