import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Image, Text, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import TransactionsContainer from "../components/TransactionsContainer";
import DepositRequestReview from "../components/DepositRequestReview";
import AwesomeContainer from "../components/AwesomeContainer";
import ImageContainer from "../components/ImageContainer";
import AmountWrapper from "../components/AmountWrapper";
import MTNContainer from "../components/MTNContainer";
import ContainerGrid from "../components/ContainerGrid";
import MoneyContainer from "../components/MoneyContainer";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const DepositMoneyRecent = () => {
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
      <View style={styles.depositMoneyRecent}>
        <View style={styles.images1} />
        <TransactionsContainer recentTransactionsTop={217} />
        <Image
          style={[styles.depositMoneyRecentChild, styles.depositPosition]}
          resizeMode="cover"
          source={require("../assets/line-21.png")}
        />
        <View style={styles.sendBtn}>
          <View style={[styles.btnNext, styles.btnShadowBox]} />
          <Text style={[styles.deposit, styles.depositClr]}>Deposit</Text>
          <View style={[styles.sendBtnChild, styles.btnShadowBox]} />
          <Pressable style={styles.tabArea} onPress={openTabArea} />
        </View>
        <AwesomeContainer
          carImageUrl={require("../assets/69691715-mtnmmlogogenericmtnmobilemoneylogo-12.png")}
        />
        <Image
          style={[styles.depositMoneyRecentItem, styles.depositPosition]}
          resizeMode="cover"
          source={require("../assets/line-22.png")}
        />
        <View style={[styles.depositMoneyRecentInner, styles.lineViewLayout]} />
        <View style={[styles.recentFrequent, styles.tabArea1Layout]}>
          <Text
            style={[
              styles.frequentCashOut,
              styles.showRecentTypo,
              styles.depositClr,
            ]}
          >
            Frequent Cash Out Points
          </Text>
          <Text style={[styles.showRecent, styles.showRecentTypo]}>
            Show Recent
          </Text>
          <Pressable
            style={[styles.tabArea1, styles.tabArea1Layout]}
            onPress={() => navigation.navigate("DepositMoneyFrequent")}
          />
        </View>
        <ImageContainer
          cashOutPointText="Deposit Point"
          cashOutPointImageUrl={{ uri: "vector55@3x.png" }}
          propHeight={68}
          propHeight1={36}
          propLeft={5}
          propTextAlign="left"
          propLeft1={16}
          propLeft2={258}
          onTabAreaPress={() => navigation.navigate("CashoutMoneyScan")}
        />
        <AmountWrapper />
        <View style={[styles.lineView, styles.lineViewLayout]} />
        <MTNContainer
          carouselImageUrls={{ uri: "c14-house40@3x.png" }}
          carouselImageUrls2={{ uri: "group124@3x.png" }}
          carouselImageUrls3={{ uri: "group157@3x.png" }}
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
          transactionType="Deposit Money"
          propBackgroundColor="#feca18"
          propLeft={94}
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
          <DepositRequestReview onClose={closeTabArea} />
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
  depositClr: {
    color: Color.iOSKeyLabel,
    top: 10,
  },
  lineViewLayout: {
    height: 1,
    width: 327,
    borderTopWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.16)",
    borderStyle: "solid",
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
  depositMoneyRecentChild: {
    top: 280,
    height: 3,
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
  deposit: {
    left: 107,
    fontSize: FontSize.size_4xl,
    letterSpacing: 1.9,
    lineHeight: 24,
    textTransform: "uppercase",
    textAlign: "center",
    fontFamily: FontFamily.gentiumBookBasic,
    color: Color.iOSKeyLabel,
    top: 10,
    position: "absolute",
  },
  sendBtnChild: {
    left: 6,
    shadowColor: "rgba(0, 0, 0, 0.8)",
    shadowRadius: 4,
    elevation: 4,
    width: 287,
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
    left: 5,
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
  depositMoneyRecentItem: {
    top: 201,
    height: 2,
  },
  depositMoneyRecentInner: {
    top: 400,
    left: 12,
    width: 327,
    borderTopWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.16)",
    borderStyle: "solid",
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
    left: 15,
  },
  depositMoneyRecent: {
    backgroundColor: Color.darkgray_500,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default DepositMoneyRecent;
