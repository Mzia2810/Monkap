import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Image, Modal, Pressable } from "react-native";
import RecentTransactionsShortNew1 from "../components/RecentTransactionsShortNew1";
import RequestMoneyReview from "../components/RequestMoneyReview";
import { useNavigation } from "@react-navigation/native";
import SelectFromContactsNew1 from "../components/SelectFromContactsNew1";
import MyActivity from "../components/MyActivity";
import TransactionsHistoryContainer from "../components/TransactionsHistoryContainer";
import RequestContainer from "../components/RequestContainer";
import AwesomeContainer from "../components/AwesomeContainer";
import RecentRequestContainer from "../components/RecentRequestContainer";
import AmountWrapper1 from "../components/AmountWrapper1";
import MTNContainer from "../components/MTNContainer";
import MoneyContainer from "../components/MoneyContainer";
import { Color } from "../GlobalStyles";

const RequestMoneyFrequent = () => {
  const [transcHistContainerVisible, setTranscHistContainerVisible] =
    useState(false);
  const [tabAreaVisible, setTabAreaVisible] = useState(false);
  const [icons8Contacts1ContainerVisible, setIcons8Contacts1ContainerVisible] =
    useState(false);
  const [tabArea2Visible, setTabArea2Visible] = useState(false);
  const navigation = useNavigation();

  const openTranscHistContainer = useCallback(() => {
    setTranscHistContainerVisible(true);
  }, []);

  const closeTranscHistContainer = useCallback(() => {
    setTranscHistContainerVisible(false);
  }, []);

  const openTabArea = useCallback(() => {
    setTabAreaVisible(true);
  }, []);

  const closeTabArea = useCallback(() => {
    setTabAreaVisible(false);
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
  return (
    <>
      <View style={styles.requestMoneyFrequent}>
        <View style={styles.images1} />
        <TransactionsHistoryContainer
          transactionHistoryText="Recent Tramsactions"
          onTranscHistPress={openTranscHistContainer}
        />
        <Image
          style={styles.requestMoneyFrequentChild}
          resizeMode="cover"
          source={require("../assets/line-21.png")}
        />
        <RequestContainer
          propLeft={29}
          propWidth={301}
          propLeft1={2}
          onTabAreaPress={openTabArea}
        />
        <AwesomeContainer
          carImageUrl={require("../assets/69691715-mtnmmlogogenericmtnmobilemoneylogo-12.png")}
        />
        <Image
          style={[styles.requestMoneyFrequentItem, styles.requestPosition]}
          resizeMode="cover"
          source={require("../assets/line-22.png")}
        />
        <View
          style={[styles.requestMoneyFrequentInner, styles.requestPosition]}
        />
        <RecentRequestContainer
          onRectanglePressablePress={() =>
            navigation.navigate("RequestMoneyRecent")
          }
        />
        <AmountWrapper1 onIcons8Contacts1Press={openIcons8Contacts1Container} />
        <MTNContainer
          carouselImageUrls={{ uri: "c14-house27@3x.png" }}
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
          transactionType="request Money"
          propBackgroundColor="#feca18"
          propLeft={92}
          onTaAreaPress={() =>
            navigation.navigate("MomoOnMonkapHomeHideBalance")
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
          <RecentTransactionsShortNew1 onClose={closeTranscHistContainer} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={tabAreaVisible}>
        <View style={styles.tabAreaOverlay}>
          <Pressable style={styles.tabAreaBg} onPress={closeTabArea} />
          <RequestMoneyReview onClose={closeTabArea} />
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
          <SelectFromContactsNew1 onClose={closeIcons8Contacts1Container} />
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
  requestPosition: {
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
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: Color.whitesmoke_900,
    position: "absolute",
    height: 800,
  },
  requestMoneyFrequentChild: {
    top: 280,
    left: 17,
    height: 3,
    width: 326,
    position: "absolute",
  },
  requestMoneyFrequentItem: {
    top: 201,
    height: 2,
    width: 326,
  },
  requestMoneyFrequentInner: {
    top: 400,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.16)",
    borderTopWidth: 1,
    width: 327,
    height: 1,
  },
  requestMoneyFrequent: {
    backgroundColor: Color.darkgray_500,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default RequestMoneyFrequent;
