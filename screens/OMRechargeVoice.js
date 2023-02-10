import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Text, Modal, Pressable } from "react-native";
import OMVoiceActivationLoadin from "../components/OMVoiceActivationLoadin";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import RechargeContainer from "../components/RechargeContainer";
import ContainerHeader from "../components/ContainerHeader";
import WandaVoiceContainer from "../components/WandaVoiceContainer";
import ActivateBundleContainer from "../components/ActivateBundleContainer";
import BundleContainer from "../components/BundleContainer";
import ContainerMoMo from "../components/ContainerMoMo";
import BundlePriceDurationContainer from "../components/BundlePriceDurationContainer";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const OMRechargeVoice = () => {
  const [tabAreaVisible, setTabAreaVisible] = useState(false);
  const [tabArea7Visible, setTabArea7Visible] = useState(false);
  const navigation = useNavigation();

  const openTabArea = useCallback(() => {
    setTabAreaVisible(true);
  }, []);

  const closeTabArea = useCallback(() => {
    setTabAreaVisible(false);
  }, []);

  const openTabArea7 = useCallback(() => {
    setTabArea7Visible(true);
  }, []);

  const closeTabArea7 = useCallback(() => {
    setTabArea7Visible(false);
  }, []);
  return (
    <>
      <View style={styles.omRechargeVoice}>
        <View style={[styles.images1, styles.images1Position]} />
        <RechargeContainer onTabAreaPress={openTabArea} />
        <View style={[styles.omRechargeVoiceChild, styles.images1Position]} />
        <Text style={styles.activateAnotherBundle}>
          Activate Another Bundle
        </Text>
        <ContainerHeader
          omText="om"
          onTaAreaPress={() =>
            navigation.navigate("OMoneyOnMonkapHomeHideBalance")
          }
        />
        <WandaVoiceContainer
          bonusImageUrl={require("../assets/ellipse-23.png")}
          bonusText="Orange Bonus: "
          activeBorderColor="#ea9311"
          voiceUnit15000UColor="#ea9311"
          myLineDetailsBackgroundColor="#ea9311"
          propBorderColor="#ea9311"
          propBackgroundColor="#ea9311"
          onTabAreaPress={() => navigation.navigate("OMMTNRechargeSms")}
          onTabAreaPress1={() => navigation.navigate("OMMTNRechargeData")}
        />
        <ActivateBundleContainer giGaDataTop={427} giGaDataLeft={24} />
        <BundleContainer propTop={297} />
        <ContainerMoMo
          carouselImageUrls={{ uri: "c14-house34@3x.png" }}
          carouselImageUrls2={{ uri: "group96@3x.png" }}
          carouselImageUrls3={require("../assets/group33.png")}
          onTabAreaPress={() => navigation.navigate("MoNkapHomeScreen2")}
          onTabAreaPress1={openTabArea7}
          onImageedit341319179892Press={() =>
            navigation.navigate("BottomTabsRoot", { screen: "LinkBank" })
          }
          onTabAreaPress2={() =>
            navigation.navigate("BottomTabsRoot", { screen: "MTNSplashScreen" })
          }
        />
        <BundlePriceDurationContainer propTop={493} />
      </View>

      <Modal animationType="fade" transparent visible={tabAreaVisible}>
        <View style={styles.tabAreaOverlay}>
          <Pressable style={styles.tabAreaBg} onPress={closeTabArea} />
          <OMVoiceActivationLoadin onClose={closeTabArea} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={tabArea7Visible}>
        <View style={styles.tabArea7Overlay}>
          <Pressable style={styles.tabArea7Bg} onPress={closeTabArea7} />
          <MyActivity onClose={closeTabArea7} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  images1Position: {
    left: 0,
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
  tabArea7Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  tabArea7Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  images1: {
    top: 0,
    right: 0,
    backgroundColor: Color.whitesmoke_900,
    height: 800,
  },
  omRechargeVoiceChild: {
    top: 266,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderTopWidth: 1,
    width: 363,
    height: 1,
    display: "none",
  },
  activateAnotherBundle: {
    top: 394,
    left: 32,
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.gentiumBookBasic,
    color: Color.iOSKeyLabel,
    textAlign: "left",
    position: "absolute",
  },
  omRechargeVoice: {
    backgroundColor: Color.darkgray_500,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default OMRechargeVoice;
