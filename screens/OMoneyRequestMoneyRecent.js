import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Image, Text, Pressable, Modal } from "react-native";
import RecentTransactionsShortNew from "../components/RecentTransactionsShortNew";
import { useNavigation } from "@react-navigation/native";
import SelectFromContactsNew from "../components/SelectFromContactsNew";
import MyActivity from "../components/MyActivity";
import TransactionsHistoryContainer from "../components/TransactionsHistoryContainer";
import OMRequestMoneyReview from "../components/OMRequestMoneyReview";
import RecentRequestContainer from "../components/RecentRequestContainer";
import AmountWrapper2 from "../components/AmountWrapper2";
import ContainerMoMo from "../components/ContainerMoMo";
import HelloTawaContainer from "../components/HelloTawaContainer";
import MoneyContainer from "../components/MoneyContainer";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const OMoneyRequestMoneyRecent = () => {
  const [transcHistContainerVisible, setTranscHistContainerVisible] =
    useState(false);
  const [icons8Contacts1ContainerVisible, setIcons8Contacts1ContainerVisible] =
    useState(false);
  const [tabArea2Visible, setTabArea2Visible] = useState(false);
  const navigation = useNavigation();
  const [tabAreaVisible, setTabAreaVisible] = useState(false);

  const openTranscHistContainer = useCallback(() => {
    setTranscHistContainerVisible(true);
  }, []);

  const closeTranscHistContainer = useCallback(() => {
    setTranscHistContainerVisible(false);
  }, []);

  const openIcons8Contacts1Container = useCallback(() => {
    setIcons8Contacts1ContainerVisible(true);
  }, []);

  const closeIcons8Contacts1Container = useCallback(() => {
    setIcons8Contacts1ContainerVisible(false);
  }, []);

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
      <View style={styles.omoneyRequestMoneyRecent}>
        <View style={styles.images1} />
        <TransactionsHistoryContainer
          transactionHistoryText="Recent Tramsactions"
          onTranscHistPress={openTranscHistContainer}
        />
        <Image
          style={styles.omoneyRequestMoneyRecentChild}
          resizeMode="cover"
          source={require("../assets/line-21.png")}
        />
        <View style={styles.sendBtn}>
          <View style={[styles.btnNext, styles.btnShadowBox]} />
          <Text style={styles.sendRequest}>Send Request</Text>
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
        <Image
          style={[styles.omoneyRequestMoneyRecentItem, styles.omoneyPosition]}
          resizeMode="cover"
          source={require("../assets/line-22.png")}
        />
        <View
          style={[styles.omoneyRequestMoneyRecentInner, styles.omoneyPosition]}
        />
        <RecentRequestContainer
          onRectanglePressablePress={() =>
            navigation.navigate("OMoneyRequestMoneyFrequent")
          }
        />
        <AmountWrapper2 onIcons8Contacts1Press={openIcons8Contacts1Container} />
        <ContainerMoMo
          carouselImageUrls={{ uri: "c14-house27@3x.png" }}
          carouselImageUrls2={{ uri: "group96@3x.png" }}
          carouselImageUrls3={require("../assets/group1.png")}
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
          transactionType="request Money"
          propLeft={92}
          onTaAreaPress={() =>
            navigation.navigate("OMoneyOnMonkapHomeHideBalance")
          }
        />
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={transcHistContainerVisible}
      >
        <View style={styles.transcHistContainerOverlay}>
          <Pressable
            style={styles.transcHistContainerBg}
            onPress={closeTranscHistContainer}
          />
          <RecentTransactionsShortNew onClose={closeTranscHistContainer} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={icons8Contacts1ContainerVisible}
      >
        <View style={styles.icons8Contacts1ContainerOverlay}>
          <Pressable
            style={styles.icons8Contacts1ContainerBg}
            onPress={closeIcons8Contacts1Container}
          />
          <SelectFromContactsNew onClose={closeIcons8Contacts1Container} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={tabArea2Visible}>
        <View style={styles.tabArea2Overlay}>
          <Pressable style={styles.tabArea2Bg} onPress={closeTabArea2} />
          <MyActivity onClose={closeTabArea2} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={tabAreaVisible}>
        <View style={styles.tabAreaOverlay}>
          <Pressable style={styles.tabAreaBg} onPress={closeTabArea} />
          <OMRequestMoneyReview onClose={closeTabArea} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
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
  omoneyPosition: {
    left: 12,
    position: "absolute",
  },
  transcHistContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  transcHistContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icons8Contacts1ContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  icons8Contacts1ContainerBg: {
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
  omoneyRequestMoneyRecentChild: {
    top: 280,
    left: 17,
    height: 3,
    width: 326,
    position: "absolute",
  },
  btnNext: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.orangeColor,
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
    position: "absolute",
  },
  sendRequest: {
    top: 10,
    left: 71,
    fontSize: FontSize.size_4xl,
    letterSpacing: 1.9,
    lineHeight: 24,
    textTransform: "uppercase",
    fontFamily: FontFamily.gentiumBookBasic,
    color: Color.iOSKeyLabel,
    textAlign: "center",
    width: 159,
    position: "absolute",
  },
  sendBtnChild: {
    left: 5,
    shadowColor: "rgba(0, 0, 0, 0.8)",
    shadowRadius: 4,
    elevation: 4,
    width: 286,
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
    left: 3,
    width: 288,
    height: 40,
  },
  sendBtn: {
    top: 593,
    left: 30,
    height: 42,
    width: 300,
    position: "absolute",
  },
  omoneyRequestMoneyRecentItem: {
    top: 201,
    height: 2,
    width: 326,
  },
  omoneyRequestMoneyRecentInner: {
    top: 400,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.16)",
    borderTopWidth: 1,
    width: 327,
    height: 1,
  },
  omoneyRequestMoneyRecent: {
    backgroundColor: Color.darkgray_500,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default OMoneyRequestMoneyRecent;
