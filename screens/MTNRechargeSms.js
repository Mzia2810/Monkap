import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Text, Modal, Pressable } from "react-native";
import SMSActivation from "../components/SMSActivation";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import RechargeContainer from "../components/RechargeContainer";
import MTNContainer from "../components/MTNContainer";
import ContainerHeader from "../components/ContainerHeader";
import BundleTypeVoiceContainer from "../components/BundleTypeVoiceContainer";
import BundleDurationContainer from "../components/BundleDurationContainer";
import VoiceContainer from "../components/VoiceContainer";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const MTNRechargeSms = () => {
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
      <View style={styles.mtnRechargeSms}>
        <View style={styles.images1} />
        <RechargeContainer
          tabAreaBackgroundColor="#feca18"
          onTabAreaPress={openTabArea}
        />
        <View style={[styles.mtnRechargeSmsChild, styles.childShadowBox]} />
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
        <ContainerHeader
          omText="Mtn"
          rechargeBackgroundColor="#feca18"
          propLeft={103}
          onTaAreaPress={() =>
            navigation.navigate("MomoOnMonkapHomeHideBalance")
          }
        />
        <BundleTypeVoiceContainer propTop={431} propLeft={20} />
        <BundleDurationContainer />
        <VoiceContainer
          carImageUrl={require("../assets/ellipse-24.png")}
          propBorderColor="#feca18"
          propColor="#feca18"
          propBackgroundColor="#ffce05"
          propBorderColor1="#feca18"
          propBackgroundColor1="#feca18"
          onTabAreaPress={() => navigation.navigate("MTNRechargeVoice")}
          onTabAreaPress1={() => navigation.navigate("MTNRechargeData")}
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
      </View>

      <Modal animationType="fade" transparent visible={tabAreaVisible}>
        <View style={styles.tabAreaOverlay}>
          <Pressable style={styles.tabAreaBg} onPress={closeTabArea} />
          <SMSActivation onClose={closeTabArea} />
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
  mtnRechargeSmsChild: {
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
  mtnRechargeSms: {
    backgroundColor: Color.darkgray_500,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default MTNRechargeSms;
