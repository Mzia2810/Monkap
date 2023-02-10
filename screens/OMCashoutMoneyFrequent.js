import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Image, Text, Pressable, Modal } from "react-native";
import OMCashOutRequestReview from "../components/OMCashOutRequestReview";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import SendContainer from "../components/SendContainer";
import ContainerGrid from "../components/ContainerGrid";
import DepositPointContainer from "../components/DepositPointContainer";
import AmountContainer from "../components/AmountContainer";
import TransactionsContainer1 from "../components/TransactionsContainer1";
import ContainerMoMo from "../components/ContainerMoMo";
import HelloTawaContainer from "../components/HelloTawaContainer";
import MoneyContainer from "../components/MoneyContainer";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const OMCashoutMoneyFrequent = () => {
  const [tabAreaVisible, setTabAreaVisible] = useState(false);
  const [tabArea4Visible, setTabArea4Visible] = useState(false);
  const navigation = useNavigation();

  const openTabArea = useCallback(() => {
    setTabAreaVisible(true);
  }, []);

  const closeTabArea = useCallback(() => {
    setTabAreaVisible(false);
  }, []);

  const openTabArea4 = useCallback(() => {
    setTabArea4Visible(true);
  }, []);

  const closeTabArea4 = useCallback(() => {
    setTabArea4Visible(false);
  }, []);
  return (
    <>
      <View style={styles.omCashoutMoneyFrequent}>
        <View style={styles.images1} />
        <Image
          style={[styles.omCashoutMoneyFrequentChild, styles.cashoutPosition]}
          resizeMode="cover"
          source={require("../assets/line-21.png")}
        />
        <SendContainer
          actionText="Request CASH OUT"
          propTop={634}
          propLeft={18}
          propWidth={263}
          onTabAreaPress={openTabArea}
        />
        <Image
          style={[styles.omCashoutMoneyFrequentItem, styles.cashoutPosition]}
          resizeMode="cover"
          source={require("../assets/line-22.png")}
        />
        <ContainerGrid />
        <View
          style={[styles.omCashoutMoneyFrequentInner, styles.lineViewLayout]}
        />
        <View style={[styles.recentFrequent, styles.tabAreaLayout]}>
          <Text style={[styles.recentCashOut, styles.showFrequentTypo]}>
            Recent Cash Out Points
          </Text>
          <Text style={[styles.showFrequent, styles.showFrequentTypo]}>
            Show frequent
          </Text>
          <Pressable
            style={[styles.tabArea, styles.tabAreaLayout]}
            onPress={() => navigation.navigate("OMCashoutMoneyRecent")}
          />
        </View>
        <DepositPointContainer
          depositPointText="Cash Out Point"
          depositPointImageUrl={{ uri: "vector39@3x.png" }}
          propTop={31}
          propLeft={7}
          propTextAlign="center"
          onTabAreaPress={() => navigation.navigate("OMCashoutMoneyScan")}
        />
        <AmountContainer />
        <View style={[styles.lineView, styles.lineViewLayout]} />
        <TransactionsContainer1 />
        <ContainerMoMo
          carouselImageUrls={{ uri: "c14-house28@3x.png" }}
          carouselImageUrls2={{ uri: "group96@3x.png" }}
          carouselImageUrls3={require("../assets/group1.png")}
          onTabAreaPress={() => navigation.navigate("MoNkapHomeScreen2")}
          onTabAreaPress1={openTabArea4}
          onImageedit341319179892Press={() =>
            navigation.navigate("BottomTabsRoot", { screen: "LinkBank" })
          }
          onTabAreaPress2={() =>
            navigation.navigate("BottomTabsRoot", { screen: "MTNSplashScreen" })
          }
        />
        <HelloTawaContainer />
        <MoneyContainer
          transactionType="CASH OUT Money"
          propLeft={86}
          onTaAreaPress={() =>
            navigation.navigate("OMoneyOnMonkapHomeSeeBalance")
          }
        />
      </View>

      <Modal animationType="fade" transparent visible={tabAreaVisible}>
        <View style={styles.tabAreaOverlay}>
          <Pressable style={styles.tabAreaBg} onPress={closeTabArea} />
          <OMCashOutRequestReview onClose={closeTabArea} />
        </View>
      </Modal>

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
  cashoutPosition: {
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
  tabAreaLayout: {
    height: 35,
    position: "absolute",
  },
  showFrequentTypo: {
    fontFamily: FontFamily.gentiumBookBasic,
    fontSize: FontSize.size_base,
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
  omCashoutMoneyFrequentChild: {
    top: 280,
    height: 3,
  },
  omCashoutMoneyFrequentItem: {
    top: 201,
    height: 2,
  },
  omCashoutMoneyFrequentInner: {
    top: 400,
    left: 12,
    width: 327,
    borderTopWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.16)",
    borderStyle: "solid",
  },
  recentCashOut: {
    top: 10,
    letterSpacing: 1.8,
    lineHeight: 20,
    color: Color.iOSKeyLabel,
    textAlign: "left",
    left: 0,
  },
  showFrequent: {
    top: 11,
    left: 231,
    textDecoration: "underline",
    fontStyle: "italic",
    color: Color.blue_100,
    textAlign: "center",
  },
  tabArea: {
    left: 222,
    backgroundColor: Color.gainsboro_700,
    width: 95,
    top: 0,
  },
  recentFrequent: {
    top: 281,
    left: 24,
    width: 317,
  },
  lineView: {
    top: 534,
    left: 15,
  },
  omCashoutMoneyFrequent: {
    backgroundColor: Color.darkgray_500,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default OMCashoutMoneyFrequent;
