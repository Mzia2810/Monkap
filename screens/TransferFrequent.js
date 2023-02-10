import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Image, Text, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SelectFromContactsNew from "../components/SelectFromContactsNew";
import MyActivity from "../components/MyActivity";
import TransactionsContainer from "../components/TransactionsContainer";
import RecipientContainer from "../components/RecipientContainer";
import SendContainer from "../components/SendContainer";
import ReasonContainer from "../components/ReasonContainer";
import ContainerMoMo from "../components/ContainerMoMo";
import HelloTawaContainer from "../components/HelloTawaContainer";
import MoneyContainer from "../components/MoneyContainer";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const TransferFrequent = () => {
  const [icons8Contacts1Visible, setIcons8Contacts1Visible] = useState(false);
  const [tabArea3Visible, setTabArea3Visible] = useState(false);
  const navigation = useNavigation();

  const openIcons8Contacts1 = useCallback(() => {
    setIcons8Contacts1Visible(true);
  }, []);

  const closeIcons8Contacts1 = useCallback(() => {
    setIcons8Contacts1Visible(false);
  }, []);

  const openTabArea3 = useCallback(() => {
    setTabArea3Visible(true);
  }, []);

  const closeTabArea3 = useCallback(() => {
    setTabArea3Visible(false);
  }, []);
  return (
    <>
      <View style={styles.transferFrequent}>
        <View style={styles.images1} />
        <TransactionsContainer />
        <Image
          style={[styles.transferFrequentChild, styles.transferPosition]}
          resizeMode="cover"
          source={require("../assets/line-21.png")}
        />
        <Text style={[styles.enterAmountTo, styles.showFrequentTypo1]}>
          Enter Amount to send
        </Text>
        <Text style={[styles.recentReceipients, styles.showFrequentTypo]}>
          Recent Receipients
        </Text>
        <Image
          style={[styles.transferFrequentItem, styles.transferPosition]}
          resizeMode="cover"
          source={require("../assets/line-22.png")}
        />
        <RecipientContainer
          carouselImageUrls={require("../assets/ellipse-18.png")}
          carouselImageUrls2={require("../assets/ellipse-19.png")}
          carouselImageUrls3={{ uri: "ellipse-1542@3x.png" }}
          ellipse19Left={5}
          ellipse19Width={290}
          propLeft={128}
          propLeft1={0}
          propLeft2={56}
          propLeft3={186}
          propLeft4={266}
        />
        <View style={styles.transferFrequentInner} />
        <Text
          style={[
            styles.showFrequent,
            styles.showFrequentTypo,
            styles.showFrequentTypo1,
          ]}
        >
          Show Frequent
        </Text>
        <Pressable
          style={styles.tabArea}
          onPress={() => navigation.navigate("TransferRecent")}
        />
        <SendContainer
          actionText="Send Now"
          onTabAreaPress={() => navigation.navigate("TransferCaution")}
        />
        <ReasonContainer
          carImageUrl={require("../assets/icons8contacts-1.png")}
          propBorderColor="#feca18"
          propBorderColor1="#feca18"
          propBorderColor3="#feca18"
          onIcons8Contacts1Press={openIcons8Contacts1}
        />
        <ContainerMoMo
          carouselImageUrls={{ uri: "c14-house27@3x.png" }}
          carouselImageUrls2={{ uri: "group93@3x.png" }}
          carouselImageUrls3={require("../assets/group1.png")}
          onTabAreaPress={() => navigation.navigate("MoNkapHomeScreen2")}
          onTabAreaPress1={openTabArea3}
          onImageedit341319179892Press={() =>
            navigation.navigate("BottomTabsRoot", { screen: "LinkBank" })
          }
          onTabAreaPress2={() =>
            navigation.navigate("BottomTabsRoot", { screen: "MTNSplashScreen" })
          }
        />
        <HelloTawaContainer />
        <MoneyContainer
          transactionType="Send Money"
          onTaAreaPress={() =>
            navigation.navigate("OMoneyOnMonkapHomeHideBalance")
          }
        />
      </View>

      <Modal animationType="fade" transparent visible={icons8Contacts1Visible}>
        <View style={styles.icons8Contacts1Overlay}>
          <Pressable
            style={styles.icons8Contacts1Bg}
            onPress={closeIcons8Contacts1}
          />
          <SelectFromContactsNew onClose={closeIcons8Contacts1} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={tabArea3Visible}>
        <View style={styles.tabArea3Overlay}>
          <Pressable style={styles.tabArea3Bg} onPress={closeTabArea3} />
          <MyActivity onClose={closeTabArea3} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  transferPosition: {
    width: 326,
    left: 12,
    position: "absolute",
  },
  showFrequentTypo1: {
    textAlign: "center",
    fontSize: FontSize.size_base,
  },
  showFrequentTypo: {
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  icons8Contacts1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  icons8Contacts1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  tabArea3Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  tabArea3Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  images1: {
    top: 0,
    right: -2,
    left: 2,
    backgroundColor: Color.whitesmoke_900,
    position: "absolute",
    height: 800,
  },
  transferFrequentChild: {
    top: 265,
    height: 3,
  },
  enterAmountTo: {
    top: 532,
    left: 43,
    letterSpacing: 1.8,
    lineHeight: 20,
    fontFamily: FontFamily.gentiumBasic,
    color: Color.gray_2200,
    position: "absolute",
  },
  recentReceipients: {
    top: 267,
    left: 32,
    fontSize: FontSize.size_lg,
    letterSpacing: 1.9,
    lineHeight: 22,
    color: Color.iOSKeyLabel,
    textAlign: "left",
  },
  transferFrequentItem: {
    top: 201,
    height: 2,
  },
  transferFrequentInner: {
    top: 368,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.16)",
    borderTopWidth: 1,
    width: 327,
    height: 1,
    left: 12,
    position: "absolute",
  },
  showFrequent: {
    top: 269,
    left: 247,
    textDecoration: "underline",
    fontStyle: "italic",
    color: Color.blue_100,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    width: 95,
    height: 17,
  },
  tabArea: {
    top: 261,
    left: 255,
    backgroundColor: Color.gainsboro_700,
    width: 78,
    height: 35,
    position: "absolute",
  },
  transferFrequent: {
    backgroundColor: Color.darkgray_500,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default TransferFrequent;
