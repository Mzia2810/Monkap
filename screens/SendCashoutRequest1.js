import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Image, Text, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import TransactionHistoryContainer from "../components/TransactionHistoryContainer";
import CashOutRequestReview from "../components/CashOutRequestReview";
import AwesomeContainer from "../components/AwesomeContainer";
import FrequentCashOutPointsContainer from "../components/FrequentCashOutPointsContainer";
import MTNContainer from "../components/MTNContainer";
import MoneyContainer from "../components/MoneyContainer";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const SendCashoutRequest1 = () => {
  const [tabArea2Visible, setTabArea2Visible] = useState(false);
  const navigation = useNavigation();
  const [tabAreaVisible, setTabAreaVisible] = useState(false);

  const openTabArea2 = useCallback(() => {
    setTabArea2Visible(true);
  }, []);

  const closeTabArea2 = useCallback(() => {
    setTabArea2Visible(false);
  }, []);

  const openTabArea = useCallback(() => {
    setTabAreaVisible(true);
  }, []);

  const closeTabArea = useCallback(() => {
    setTabAreaVisible(false);
  }, []);
  return (
    <>
      <View style={styles.sendCashoutRequest}>
        <View style={[styles.images1, styles.images1Position]} />
        <TransactionHistoryContainer />
        <Image
          style={[styles.sendCashoutRequestChild, styles.sendPosition]}
          resizeMode="cover"
          source={require("../assets/line-21.png")}
        />
        <View style={styles.sendBtn}>
          <View
            style={[styles.btnNext, styles.btnNextLayout, styles.btnShadowBox]}
          />
          <Text style={styles.requestCashOut}>Request CASH OUT</Text>
          <View
            style={[
              styles.sendBtnChild,
              styles.tabAreaBg1,
              styles.btnShadowBox,
            ]}
          />
          <Pressable
            style={[styles.tabArea, styles.tabAreaBg1]}
            onPress={openTabArea}
          />
        </View>
        <Text style={[styles.frequentCashOut, styles.xafLayout]}>
          Frequent Cash Out Points
        </Text>
        <AwesomeContainer
          carImageUrl={require("../assets/69691715-mtnmmlogogenericmtnmobilemoneylogo-12.png")}
        />
        <Image
          style={[styles.sendCashoutRequestItem, styles.sendPosition]}
          resizeMode="cover"
          source={require("../assets/line-22.png")}
        />
        <FrequentCashOutPointsContainer />
        <View style={[styles.sendCashoutRequestInner, styles.lineViewLayout]} />
        <Text style={[styles.showRecent, styles.showRecentTypo]}>
          Show Recent
        </Text>
        <View style={[styles.rectangleParent, styles.btnNextLayout]}>
          <View style={[styles.groupChildPosition, styles.groupBorder]} />
          <Text
            style={[styles.xafTypo, styles.kioskLayout, styles.kioskPosition]}
          >
            Kiosk
          </Text>
          <Text style={[styles.text, styles.textTypo]}>654 26 53 94</Text>
          <Image
            style={[styles.scanSvgrepoCom1Icon, styles.groupChildPosition]}
            resizeMode="cover"
            source={require("../assets/scansvgrepocom-12.png")}
          />
        </View>
        <View style={[styles.amount, styles.amountLayout]}>
          <View
            style={[
              styles.rectangleGroup,
              styles.amountLayout,
              styles.images1Position,
            ]}
          >
            <View style={[styles.groupItemPosition, styles.groupBorder]} />
            <Text
              style={[
                styles.amount1,
                styles.xafTypo,
                styles.kioskLayout,
                styles.kioskPosition,
              ]}
            >
              Amount
            </Text>
            <View style={[styles.rectangleContainer, styles.groupItemPosition]}>
              <View style={styles.groupInner} />
              <Text style={[styles.xaf, styles.xafTypo, styles.xafLayout]}>
                XAF
              </Text>
              <Image
                style={styles.groupIcon}
                resizeMode="cover"
                source={require("../assets/group90.png")}
              />
            </View>
            <Text style={[styles.enterAmountTo, styles.textTypo]}>
              Enter amount to Request
            </Text>
          </View>
        </View>
        <View style={[styles.lineView, styles.lineViewLayout]} />
        <Text
          style={[
            styles.angelinaWaMu,
            styles.kioskLayout,
            styles.showRecentTypo,
          ]}
        >
          Angelina Wa Mu tema Zeze cash point. Bowango
        </Text>
        <MTNContainer
          carouselImageUrls={{ uri: "c14-house28@3x.png" }}
          carouselImageUrls2={{ uri: "group124@3x.png" }}
          carouselImageUrls3={{ uri: "group24@3x.png" }}
          propLeft={0}
          onTabAreaPress={() => navigation.navigate("MoNkapHomeScreen2")}
          onTabAreaPress1={openTabArea2}
          onTabAreaPress2={() => navigation.navigate("OMoneySplashScreen")}
          onImageedit341319179892Press={() =>
            navigation.navigate("BottomTabsRoot", { screen: "LinkBank" })
          }
        />
        <MoneyContainer
          transactionType="CASH OUT Money"
          propBackgroundColor="#feca18"
          propLeft={86}
          onTaAreaPress={() => navigation.navigate("CashoutMoneyScan")}
        />
      </View>

      <Modal animationType="fade" transparent visible={tabArea2Visible}>
        <View style={styles.tabArea2Overlay}>
          <Pressable style={styles.tabArea2Bg} onPress={closeTabArea2} />
          <MyActivity onClose={closeTabArea2} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={tabAreaVisible}>
        <View style={styles.tabAreaOverlay}>
          <Pressable style={styles.tabAreaBg} onPress={closeTabArea} />
          <CashOutRequestReview onClose={closeTabArea} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  images1Position: {
    top: 0,
    left: 0,
  },
  sendPosition: {
    width: 326,
    left: 12,
    position: "absolute",
  },
  btnNextLayout: {
    width: 300,
    position: "absolute",
  },
  btnShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    height: 42,
    top: 0,
  },
  tabAreaBg1: {
    backgroundColor: Color.gainsboro_700,
    position: "absolute",
  },
  xafLayout: {
    lineHeight: 20,
    letterSpacing: 1.8,
    fontSize: FontSize.size_base,
  },
  lineViewLayout: {
    height: 1,
    width: 327,
    borderTopWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.16)",
    borderStyle: "solid",
    position: "absolute",
  },
  showRecentTypo: {
    fontStyle: "italic",
    textAlign: "center",
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  groupBorder: {
    borderWidth: 0.3,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    borderRadius: Border.br_2xs,
    borderColor: "#feca18",
    borderStyle: "solid",
    width: 300,
    left: 0,
  },
  kioskLayout: {
    lineHeight: 22,
    fontSize: FontSize.size_lg,
    letterSpacing: 1.9,
  },
  kioskPosition: {
    left: 4,
    fontWeight: "700",
    lineHeight: 22,
    fontSize: FontSize.size_lg,
    top: 0,
  },
  textTypo: {
    color: Color.gray_2200,
    fontFamily: FontFamily.gentiumBasic,
    lineHeight: 20,
    letterSpacing: 1.8,
    fontSize: FontSize.size_base,
    textAlign: "center",
    position: "absolute",
  },
  groupChildPosition: {
    height: 35,
    top: 30,
    position: "absolute",
  },
  amountLayout: {
    height: 57,
    width: 300,
    position: "absolute",
  },
  xafTypo: {
    fontWeight: "700",
    textAlign: "center",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  groupItemPosition: {
    top: 22,
    height: 35,
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
    left: 0,
    position: "absolute",
    height: 800,
  },
  sendCashoutRequestChild: {
    top: 280,
    height: 3,
  },
  btnNext: {
    left: 1,
    borderRadius: Border.br_xs,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowRadius: 6,
    elevation: 6,
    backgroundColor: Color.gold_100,
    width: 300,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  requestCashOut: {
    top: 10,
    fontSize: FontSize.size_4xl,
    lineHeight: 24,
    textTransform: "uppercase",
    width: 263,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBookBasic,
    letterSpacing: 1.9,
    left: 18,
    color: Color.iOSKeyLabel,
    position: "absolute",
  },
  sendBtnChild: {
    shadowColor: "rgba(0, 0, 0, 0.8)",
    shadowRadius: 4,
    elevation: 4,
    width: 294,
    left: 0,
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
  tabArea: {
    top: 2,
    left: 6,
    width: 288,
    height: 40,
  },
  sendBtn: {
    top: 634,
    width: 301,
    height: 42,
    left: 30,
    position: "absolute",
  },
  frequentCashOut: {
    textAlign: "left",
    top: 291,
    letterSpacing: 1.8,
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
    left: 18,
    position: "absolute",
  },
  sendCashoutRequestItem: {
    top: 201,
    height: 2,
  },
  sendCashoutRequestInner: {
    top: 400,
    left: 12,
    width: 327,
    borderTopWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.16)",
    borderStyle: "solid",
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
    fontSize: FontSize.size_base,
    fontStyle: "italic",
    top: 291,
  },
  text: {
    top: 41,
    left: 13,
  },
  scanSvgrepoCom1Icon: {
    left: 257,
    width: 35,
    overflow: "hidden",
  },
  rectangleParent: {
    top: 412,
    height: 65,
    left: 30,
  },
  amount1: {
    width: 65,
  },
  groupInner: {
    borderTopRightRadius: Border.br_2xs,
    borderBottomRightRadius: Border.br_2xs,
    borderWidth: 1,
    width: 82,
    height: 36,
    borderColor: "#feca18",
    borderStyle: "solid",
    backgroundColor: Color.gold_100,
    left: 0,
    top: 0,
    position: "absolute",
  },
  xaf: {
    top: 12,
    width: 33,
    height: 19,
    left: 13,
  },
  groupIcon: {
    height: "67.14%",
    width: "27.47%",
    top: "25.71%",
    right: "9.57%",
    bottom: "7.14%",
    left: "62.96%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleContainer: {
    left: 219,
    width: 81,
  },
  enterAmountTo: {
    top: 33,
    left: 8,
  },
  rectangleGroup: {
    left: 0,
  },
  amount: {
    top: 550,
    left: 30,
  },
  lineView: {
    top: 534,
    left: 15,
  },
  angelinaWaMu: {
    top: 489,
    left: 24,
    width: 297,
    lineHeight: 22,
    fontSize: FontSize.size_lg,
    fontStyle: "italic",
    color: Color.iOSKeyLabel,
  },
  sendCashoutRequest: {
    backgroundColor: Color.darkgray_500,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default SendCashoutRequest1;
