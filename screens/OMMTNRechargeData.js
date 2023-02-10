import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Text, Modal, Pressable } from "react-native";
import OMDataActivation from "../components/OMDataActivation";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import RechargeContainer from "../components/RechargeContainer";
import ContainerHeader from "../components/ContainerHeader";
import BundleDetailsContainer from "../components/BundleDetailsContainer";
import BundlePriceDurationContainer from "../components/BundlePriceDurationContainer";
import ContainerMoMo from "../components/ContainerMoMo";
import ActivateBundleContainer from "../components/ActivateBundleContainer";
import BundleContainer from "../components/BundleContainer";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const OMMTNRechargeData = () => {
  const [btnNext1Visible, setBtnNext1Visible] = useState(false);
  const [tabArea9Visible, setTabArea9Visible] = useState(false);
  const navigation = useNavigation();

  const openBtnNext1 = useCallback(() => {
    setBtnNext1Visible(true);
  }, []);

  const closeBtnNext1 = useCallback(() => {
    setBtnNext1Visible(false);
  }, []);

  const openTabArea9 = useCallback(() => {
    setTabArea9Visible(true);
  }, []);

  const closeTabArea9 = useCallback(() => {
    setTabArea9Visible(false);
  }, []);
  return (
    <>
      <View style={styles.omMtnRechargeData}>
        <View style={[styles.images1, styles.images1Position]} />
        <RechargeContainer onTabAreaPress={openBtnNext1} />
        <View style={[styles.omMtnRechargeDataChild, styles.images1Position]} />
        <ContainerHeader
          omText="om"
          onTaAreaPress={() =>
            navigation.navigate("OMoneyOnMonkapHomeHideBalance")
          }
        />
        <Text style={styles.activateAnotherBundle}>
          Activate Another Bundle
        </Text>
        <BundleDetailsContainer
          gigaDataImageUrl={require("../assets/ellipse-22.png")}
          gigaDataText="GiGa Data: "
          activeBackgroundColor="#ea9311"
          activeBorderColor="#ea9311"
          rectangle8Color="#ea9311"
          vectorBackgroundColor="#ea9311"
          propBorderColor="#ea9311"
          propBackgroundColor="#ea9311"
          onTabAreaPress={() => navigation.navigate("OMRechargeVoice")}
          onTabAreaPress1={() => navigation.navigate("OMMTNRechargeSms")}
        />
        <BundlePriceDurationContainer propTop={494} />
        <ContainerMoMo
          carouselImageUrls={{ uri: "c14-house34@3x.png" }}
          carouselImageUrls2={{ uri: "group96@3x.png" }}
          carouselImageUrls3={require("../assets/group33.png")}
          onTabAreaPress={() => navigation.navigate("MoNkapHomeScreen2")}
          onTabAreaPress1={openTabArea9}
          onImageedit341319179892Press={() =>
            navigation.navigate("BottomTabsRoot", { screen: "LinkBank" })
          }
          onTabAreaPress2={() =>
            navigation.navigate("BottomTabsRoot", { screen: "MTNSplashScreen" })
          }
        />
        <ActivateBundleContainer giGaDataTop={428} giGaDataLeft={24} />
        <BundleContainer propTop={298} />
      </View>

      <Modal animationType="fade" transparent visible={btnNext1Visible}>
        <View style={styles.btnNext1Overlay}>
          <Pressable style={styles.btnNext1Bg} onPress={closeBtnNext1} />
          <OMDataActivation onClose={closeBtnNext1} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={tabArea9Visible}>
        <View style={styles.tabArea9Overlay}>
          <Pressable style={styles.tabArea9Bg} onPress={closeTabArea9} />
          <MyActivity onClose={closeTabArea9} />
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
  btnNext1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  btnNext1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  tabArea9Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  tabArea9Bg: {
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
  omMtnRechargeDataChild: {
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
    top: 395,
    left: 33,
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.gentiumBookBasic,
    color: Color.iOSKeyLabel,
    textAlign: "left",
    position: "absolute",
  },
  omMtnRechargeData: {
    backgroundColor: Color.darkgray_500,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default OMMTNRechargeData;
