import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Image, Text, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import TransactionsContainer1 from "../components/TransactionsContainer1";
import CashOutRequestReview from "../components/CashOutRequestReview";
import AwesomeContainer from "../components/AwesomeContainer";
import ImageContainer from "../components/ImageContainer";
import AmountBox from "../components/AmountBox";
import MTNContainer from "../components/MTNContainer";
import ContainerGrid from "../components/ContainerGrid";
import MoneyContainer from "../components/MoneyContainer";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const CashoutMoneyRecent = () => {
  const [tabArea4Visible, setTabArea4Visible] = useState(false);
  const [tabAreaVisible, setTabAreaVisible] = useState(false);
  const navigation = useNavigation();

  const openTabArea4 = useCallback(() => {
    setTabArea4Visible(true);
  }, []);

  const closeTabArea4 = useCallback(() => {
    setTabArea4Visible(false);
  }, []);

  const openTabArea = useCallback(() => {
    setTabAreaVisible(true);
  }, []);

  const closeTabArea = useCallback(() => {
    setTabAreaVisible(false);
  }, []);
  return (
    <>
      <View style={styles.cashoutMoneyRecent}>
        <View style={styles.images1} />
        <TransactionsContainer1 />
        <Image
          style={[styles.cashoutMoneyRecentChild, styles.cashoutLayout]}
          resizeMode="cover"
          source={require("../assets/line-21.png")}
        />
        <View style={styles.sendBtn}>
          <View style={[styles.btnNext, styles.btnShadowBox]} />
          <Text style={[styles.requestCashOut, styles.cashClr]}>
            Request CASH OUT
          </Text>
          <View style={[styles.sendBtnChild, styles.btnShadowBox]} />
          <Pressable style={styles.tabArea} onPress={openTabArea} />
        </View>
        <AwesomeContainer
          carImageUrl={require("../assets/69691715-mtnmmlogogenericmtnmobilemoneylogo-12.png")}
        />
        <Image
          style={[styles.cashoutMoneyRecentItem, styles.cashoutLayout]}
          resizeMode="cover"
          source={require("../assets/line-22.png")}
        />
        <View style={[styles.cashoutMoneyRecentInner, styles.lineViewLayout]} />
        <View style={[styles.recentFrequent, styles.tabArea1Layout]}>
          <Text
            style={[
              styles.frequentCashOut,
              styles.showRecentTypo,
              styles.cashClr,
            ]}
          >
            Frequent Cash Out Points
          </Text>
          <Text style={[styles.showRecent, styles.showRecentTypo]}>
            Show Recent
          </Text>
          <Pressable
            style={[styles.tabArea1, styles.tabArea1Layout]}
            onPress={() => navigation.navigate("CashoutMoneyFrequent")}
          />
        </View>
        <ImageContainer
          cashOutPointText="Cash Out Point"
          cashOutPointImageUrl={{ uri: "vector49@3x.png" }}
          onTabAreaPress={() => navigation.navigate("CashoutMoneyScan")}
        />
        <AmountBox propTop={9} propTop1="17.65%" propBottom="13.24%" />
        <View style={[styles.lineView, styles.lineViewLayout]} />
        <MTNContainer
          carouselImageUrls={{ uri: "c14-house27@3x.png" }}
          carouselImageUrls2={{ uri: "group124@3x.png" }}
          carouselImageUrls3={{ uri: "group24@3x.png" }}
          propLeft={0}
          onTabAreaPress={() => navigation.navigate("MoNkapHomeScreen2")}
          onTabAreaPress1={openTabArea4}
          onTabAreaPress2={() => navigation.navigate("OMoneySplashScreen")}
          onImageedit341319179892Press={() =>
            navigation.navigate("BottomTabsRoot", { screen: "LinkBank" })
          }
        />
        <ContainerGrid
          group164Left={0}
          propLeft={243}
          propLeft1={81}
          propLeft2={162}
        />
        <MoneyContainer
          transactionType="CASH OUT Money"
          propBackgroundColor="#feca18"
          propLeft={86}
          onTaAreaPress={() =>
            navigation.navigate("MomoOnMonkapHomeSeeBalance")
          }
        />
      </View>

      <Modal animationType="fade" transparent visible={tabArea4Visible}>
        <View style={styles.tabArea4Overlay}>
          <Pressable style={styles.tabArea4Bg} onPress={closeTabArea4} />
          <MyActivity onClose={closeTabArea4} />
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
  cashoutLayout: {
    width: 326,
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
    position: "absolute",
  },
  cashClr: {
    color: Color.iOSKeyLabel,
    top: 10,
  },
  lineViewLayout: {
    height: 1,
    width: 327,
    borderTopWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.16)",
    borderStyle: "solid",
    left: 17,
    position: "absolute",
  },
  tabArea1Layout: {
    height: 35,
    position: "absolute",
  },
  showRecentTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
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
  images1: {
    right: 0,
    backgroundColor: Color.whitesmoke_900,
    left: 0,
    top: 0,
    position: "absolute",
    height: 800,
  },
  cashoutMoneyRecentChild: {
    top: 280,
    height: 3,
    left: 17,
    width: 326,
  },
  btnNext: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.gold_100,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowRadius: 6,
    elevation: 6,
    width: 300,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    left: 0,
  },
  requestCashOut: {
    left: 23,
    fontSize: FontSize.size_4xl,
    letterSpacing: 1.9,
    lineHeight: 24,
    textTransform: "uppercase",
    width: 263,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBookBasic,
    color: Color.iOSKeyLabel,
    top: 10,
    position: "absolute",
  },
  sendBtnChild: {
    left: 10,
    shadowColor: "rgba(0, 0, 0, 0.8)",
    shadowRadius: 4,
    elevation: 4,
    width: 289,
    backgroundColor: Color.gainsboro_700,
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
    left: 11,
    width: 288,
    height: 40,
    backgroundColor: Color.gainsboro_700,
    position: "absolute",
  },
  sendBtn: {
    top: 634,
    left: 30,
    height: 42,
    width: 300,
    position: "absolute",
  },
  cashoutMoneyRecentItem: {
    top: 201,
    left: 12,
    height: 2,
  },
  cashoutMoneyRecentInner: {
    top: 400,
  },
  frequentCashOut: {
    letterSpacing: 1.8,
    lineHeight: 20,
    textAlign: "left",
    color: Color.iOSKeyLabel,
    top: 10,
    fontSize: FontSize.size_base,
    left: 0,
  },
  showRecent: {
    top: 11,
    left: 242,
    textDecoration: "underline",
    fontStyle: "italic",
    color: Color.blue_100,
    textAlign: "center",
  },
  tabArea1: {
    left: 228,
    width: 95,
    backgroundColor: Color.gainsboro_700,
    top: 0,
    height: 35,
  },
  recentFrequent: {
    top: 281,
    left: 18,
    width: 323,
  },
  lineView: {
    top: 534,
  },
  cashoutMoneyRecent: {
    backgroundColor: Color.darkgray_500,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default CashoutMoneyRecent;
