import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Text, Modal, Pressable } from "react-native";
import VoiceActivationLoading from "../components/VoiceActivationLoading";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import RechargeContainer from "../components/RechargeContainer";
import MTNContainer from "../components/MTNContainer";
import ContainerHeader from "../components/ContainerHeader";
import WandaVoiceContainer from "../components/WandaVoiceContainer";
import BundleTypeVoiceContainer from "../components/BundleTypeVoiceContainer";
import BundlePriceDurationContainer from "../components/BundlePriceDurationContainer";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const MTNRechargeVoice = () => {
  const [tabAreaVisible, setTabAreaVisible] = useState(false);
  const [tabArea2Visible, setTabArea2Visible] = useState(false);
  const navigation = useNavigation();

  const openTabArea = useCallback(() => {
    setTabAreaVisible(true);
  }, []);

  const closeTabArea = useCallback(() => {
    setTabAreaVisible(false);
  }, []);

  const openTabArea2 = useCallback(() => {
    setTabArea2Visible(true);
  }, []);

  const closeTabArea2 = useCallback(() => {
    setTabArea2Visible(false);
  }, []);
  return (
    <>
      <View style={styles.mtnRechargeVoice}>
        <View style={styles.images1} />
        <RechargeContainer
          tabAreaBackgroundColor="#feca18"
          onTabAreaPress={openTabArea}
        />
        <View style={[styles.mtnRechargeVoiceChild, styles.childShadowBox]} />
        <MTNContainer
          carouselImageUrls={{ uri: "c14-house56@3x.png" }}
          carouselImageUrls2={{ uri: "group124@3x.png" }}
          carouselImageUrls3={{ uri: "group157@3x.png" }}
          propLeft={0}
          onTabAreaPress={() => navigation.navigate("MoNkapHomeScreen2")}
          onTabAreaPress1={openTabArea2}
          onTabAreaPress2={() => navigation.navigate("OMoneySplashScreen")}
          onImageedit341319179892Press={() =>
            navigation.navigate("BottomTabsRoot", { screen: "LinkBank" })
          }
        />
        <Text style={styles.activateAnotherBundle}>
          Activate Another Bundle
        </Text>
        <ContainerHeader
          omText="Mtn"
          rechargeBackgroundColor="#feca18"
          propLeft={103}
          onTaAreaPress={() =>
            navigation.navigate("MomoOnMonkapHomeHideBalance")
          }
        />
        <WandaVoiceContainer
          bonusImageUrl={require("../assets/ellipse-26.png")}
          bonusText="Wanda Voice: "
          activeBorderColor="#feca18"
          voiceUnit15000UColor="#feca18"
          myLineDetailsBackgroundColor="#ffce05"
          propBorderColor="#feca18"
          propBackgroundColor="#feca18"
          onTabAreaPress={() => navigation.navigate("MTNRechargeSms")}
          onTabAreaPress1={() => navigation.navigate("MTNRechargeData")}
        />
        <BundleTypeVoiceContainer propTop={427} propLeft={24} />
        <View style={[styles.otherBundles, styles.otherLayout]}>
          <View
            style={[
              styles.otherBundlesChild,
              styles.otherLayout,
              styles.childShadowBox,
            ]}
          />
          <Text style={styles.otherBundles1}>Other Bundles</Text>
          <Text style={[styles.mtnYamoInactiveContainer, styles.inactiveTypo1]}>
            <Text style={styles.mtnYamo}>{`MTN Yamo: `}</Text>
            <Text style={styles.inactive}>Inactive</Text>
          </Text>
          <Text style={[styles.mtnYamoInactiveContainer1, styles.inactiveTypo]}>
            <Text style={styles.mtnYamo}>{`MTN Yamo: `}</Text>
            <Text style={styles.inactive}>Inactive</Text>
          </Text>
          <Text style={[styles.classicInactive, styles.inactiveTypo1]}>
            <Text style={styles.mtnYamo}>{`Classic: `}</Text>
            <Text style={styles.inactive}>Inactive</Text>
          </Text>
          <Text style={[styles.classicInactive1, styles.inactiveTypo]}>
            <Text style={styles.mtnYamo}>{`Classic: `}</Text>
            <Text style={styles.inactive}>Inactive</Text>
          </Text>
        </View>
        <BundlePriceDurationContainer propTop={493} />
      </View>

      <Modal animationType="fade" transparent visible={tabAreaVisible}>
        <View style={styles.tabAreaOverlay}>
          <Pressable style={styles.tabAreaBg} onPress={closeTabArea} />
          <VoiceActivationLoading onClose={closeTabArea} />
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
  inactiveTypo1: {
    fontWeight: "700",
    left: "2.35%",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  inactiveTypo: {
    left: "52.35%",
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    textAlign: "left",
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
  mtnRechargeVoiceChild: {
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
    top: 394,
    left: 32,
    fontSize: FontSize.size_4xl,
    textAlign: "left",
    fontFamily: FontFamily.gentiumBookBasic,
    color: Color.iOSKeyLabel,
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
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  mtnYamo: {
    color: Color.iOSKeyLabel,
  },
  inactive: {
    color: Color.deeppink,
  },
  mtnYamoInactiveContainer: {
    top: "45.45%",
  },
  mtnYamoInactiveContainer1: {
    top: "44.16%",
  },
  classicInactive: {
    top: "74.03%",
  },
  classicInactive1: {
    top: "72.73%",
  },
  otherBundles: {
    top: 297,
    left: 10,
  },
  mtnRechargeVoice: {
    backgroundColor: Color.darkgray_500,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default MTNRechargeVoice;
