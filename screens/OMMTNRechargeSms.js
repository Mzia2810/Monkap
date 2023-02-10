import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Text, Modal, Pressable } from "react-native";
import OMSMSActivation from "../components/OMSMSActivation";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import RechargeContainer from "../components/RechargeContainer";
import ContainerHeader from "../components/ContainerHeader";
import ActivateBundleContainer from "../components/ActivateBundleContainer";
import BundleDurationContainer from "../components/BundleDurationContainer";
import VoiceContainer from "../components/VoiceContainer";
import ContainerMoMo from "../components/ContainerMoMo";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const OMMTNRechargeSms = () => {
  const [tabAreaVisible, setTabAreaVisible] = useState(false);
  const [tabArea6Visible, setTabArea6Visible] = useState(false);
  const navigation = useNavigation();

  const openTabArea = useCallback(() => {
    setTabAreaVisible(true);
  }, []);

  const closeTabArea = useCallback(() => {
    setTabAreaVisible(false);
  }, []);

  const openTabArea6 = useCallback(() => {
    setTabArea6Visible(true);
  }, []);

  const closeTabArea6 = useCallback(() => {
    setTabArea6Visible(false);
  }, []);
  return (
    <>
      <View style={styles.omMtnRechargeSms}>
        <View style={styles.images1} />
        <RechargeContainer
          tabAreaBackgroundColor="#ea9311"
          onTabAreaPress={openTabArea}
        />
        <View style={[styles.omMtnRechargeSmsChild, styles.childShadowBox]} />
        <ContainerHeader
          omText="om"
          rechargeBackgroundColor="#ea9311"
          propLeft={111}
          onTaAreaPress={() =>
            navigation.navigate("OMoneyOnMonkapHomeHideBalance")
          }
        />
        <ActivateBundleContainer giGaDataTop={431} giGaDataLeft={20} />
        <BundleDurationContainer />
        <VoiceContainer
          carImageUrl={require("../assets/ellipse-2.png")}
          propBorderColor="#ea9311"
          propColor="#ea9311"
          propBackgroundColor="#ea9311"
          propBorderColor1="#ea9311"
          propBackgroundColor1="#ea9311"
          onTabAreaPress={() => navigation.navigate("OMRechargeVoice")}
          onTabAreaPress1={() => navigation.navigate("OMMTNRechargeData")}
        />
        <Text style={styles.activateAnotherBundle}>
          Activate Another Bundle
        </Text>
        <View style={[styles.otherBundles, styles.otherLayout]}>
          <View
            style={[
              styles.otherBundlesChild,
              styles.otherLayout,
              styles.childShadowBox,
            ]}
          />
          <Text style={[styles.otherBundles1, styles.youDontHaveTypo]}>
            Other Bundles
          </Text>
        </View>
        <Text style={[styles.youDontHave, styles.youDontHaveTypo]}>
          You don’t have any inactive bundle!!
        </Text>
        <ContainerMoMo
          carouselImageUrls={{ uri: "c14-house34@3x.png" }}
          carouselImageUrls2={{ uri: "group96@3x.png" }}
          carouselImageUrls3={require("../assets/group33.png")}
          onTabAreaPress={() => navigation.navigate("MoNkapHomeScreen2")}
          onTabAreaPress1={openTabArea6}
          onImageedit341319179892Press={() =>
            navigation.navigate("BottomTabsRoot", { screen: "LinkBank" })
          }
          onTabAreaPress2={() =>
            navigation.navigate("BottomTabsRoot", { screen: "MTNSplashScreen" })
          }
        />
      </View>

      <Modal animationType="fade" transparent visible={tabAreaVisible}>
        <View style={styles.tabAreaOverlay}>
          <Pressable style={styles.tabAreaBg} onPress={closeTabArea} />
          <OMSMSActivation onClose={closeTabArea} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={tabArea6Visible}>
        <View style={styles.tabArea6Overlay}>
          <Pressable style={styles.tabArea6Bg} onPress={closeTabArea6} />
          <MyActivity onClose={closeTabArea6} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  childShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    left: 0,
  },
  otherLayout: {
    height: 77,
    width: 340,
    position: "absolute",
  },
  youDontHaveTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
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
  tabArea6Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  tabArea6Bg: {
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
  omMtnRechargeSmsChild: {
    top: 266,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderTopWidth: 1,
    width: 363,
    height: 1,
    display: "none",
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    position: "absolute",
  },
  activateAnotherBundle: {
    top: 398,
    left: 26,
    fontSize: FontSize.size_4xl,
    textAlign: "left",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  otherBundlesChild: {
    borderRadius: Border.br_2xs,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 0,
    height: 77,
    width: 340,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  otherBundles1: {
    top: 7,
    left: 8,
  },
  otherBundles: {
    top: 298,
    left: 10,
  },
  youDontHave: {
    top: 334,
    left: 19,
  },
  omMtnRechargeSms: {
    backgroundColor: Color.darkgray_500,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default OMMTNRechargeSms;
