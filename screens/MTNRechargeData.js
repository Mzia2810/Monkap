import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Text, Image, Modal, Pressable } from "react-native";
import DataActivation from "../components/DataActivation";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import RechargeContainer from "../components/RechargeContainer";
import MTNContainer from "../components/MTNContainer";
import ContainerHeader from "../components/ContainerHeader";
import BundleDetailsContainer from "../components/BundleDetailsContainer";
import BundlePriceDurationContainer from "../components/BundlePriceDurationContainer";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const MTNRechargeData = () => {
  const [btnNext1Visible, setBtnNext1Visible] = useState(false);
  const [tabArea1Visible, setTabArea1Visible] = useState(false);
  const navigation = useNavigation();

  const openBtnNext1 = useCallback(() => {
    setBtnNext1Visible(true);
  }, []);

  const closeBtnNext1 = useCallback(() => {
    setBtnNext1Visible(false);
  }, []);

  const openTabArea1 = useCallback(() => {
    setTabArea1Visible(true);
  }, []);

  const closeTabArea1 = useCallback(() => {
    setTabArea1Visible(false);
  }, []);
  return (
    <>
      <View style={styles.mtnRechargeData}>
        <View style={styles.images1} />
        <RechargeContainer
          tabAreaBackgroundColor="#feca18"
          onTabAreaPress={openBtnNext1}
        />
        <View style={styles.mtnRechargeDataChild} />
        <MTNContainer
          carouselImageUrls={{ uri: "c14-house56@3x.png" }}
          carouselImageUrls2={{ uri: "group124@3x.png" }}
          carouselImageUrls3={{ uri: "group157@3x.png" }}
          propLeft={0}
          onTabAreaPress={() => navigation.navigate("MoNkapHomeScreen2")}
          onTabAreaPress1={openTabArea1}
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
        <View style={styles.bundleTypeData}>
          <Text
            style={[
              styles.chooseYourBundle,
              styles.bundleTypo,
              styles.otherBundles1Typo,
            ]}
          >
            Choose Your Bundle Type
          </Text>
          <View style={styles.classic}>
            <Image
              style={[styles.classicChild, styles.childLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-211.png")}
            />
            <Image
              style={styles.yellowIcon}
              resizeMode="cover"
              source={require("../assets/yellow.png")}
            />
            <Image
              style={styles.tabAreaIcon}
              resizeMode="cover"
              source={require("../assets/tab-area.png")}
            />
            <Text style={[styles.classic1, styles.classic1Typo]}>Classic</Text>
          </View>
          <View style={[styles.wandaNet, styles.mtnYamoPosition]}>
            <Image
              style={[styles.wandaNetChild, styles.childLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-211.png")}
            />
            <Image
              style={[styles.yellowIcon1, styles.yellowIconPosition]}
              resizeMode="cover"
              source={require("../assets/yellow.png")}
            />
            <Image
              style={[styles.tabAreaIcon1, styles.tabIconPosition]}
              resizeMode="cover"
              source={require("../assets/tab-area.png")}
            />
            <Text style={[styles.wandaNet1, styles.classic1Typo]}>
              Wanda Net
            </Text>
          </View>
          <View style={[styles.mtnYamo, styles.mtnYamoPosition]}>
            <Image
              style={[styles.mtnYamoChild, styles.childLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-211.png")}
            />
            <Image
              style={[styles.yellowIcon2, styles.yellowIconPosition]}
              resizeMode="cover"
              source={require("../assets/yellow.png")}
            />
            <Image
              style={[styles.tabAreaIcon2, styles.tabIconPosition]}
              resizeMode="cover"
              source={require("../assets/tab-area.png")}
            />
            <Text style={[styles.gigaSurf, styles.classic1Typo]}>
              GIGA Surf
            </Text>
          </View>
        </View>
        <Text style={[styles.activateAnotherBundle, styles.bundleTypo]}>
          Activate Another Bundle
        </Text>
        <View style={[styles.otherBundles, styles.otherLayout]}>
          <View style={[styles.otherBundlesChild, styles.otherLayout]} />
          <Text
            style={[
              styles.otherBundles1,
              styles.bundleTypo,
              styles.otherBundles1Typo,
            ]}
          >
            Other Bundles
          </Text>
          <Text
            style={[
              styles.gigaSurfInactiveContainer,
              styles.classicTypo,
              styles.inactivePosition,
            ]}
          >
            <Text style={styles.gigaSurf1}>{`GIGA Surf: `}</Text>
            <Text style={styles.inactive}>Inactive</Text>
          </Text>
          <Text
            style={[
              styles.classicInactive,
              styles.classicTypo,
              styles.inactivePosition,
            ]}
          >
            <Text style={styles.gigaSurf1}>{`Classic: `}</Text>
            <Text style={styles.inactive}>Inactive</Text>
          </Text>
          <Text style={[styles.classicInactive1, styles.classicTypo]}>
            <Text style={styles.gigaSurf1}>{`Classic: `}</Text>
            <Text style={styles.inactive}>Inactive</Text>
          </Text>
        </View>
        <BundleDetailsContainer
          gigaDataImageUrl={require("../assets/ellipse-25.png")}
          gigaDataText="Wanda Net: "
          activeBackgroundColor="unset"
          activeBorderColor="#feca18"
          rectangle8Color="#feca18"
          vectorBackgroundColor="#ffce05"
          propBorderColor="#feca18"
          propBackgroundColor="#feca18"
          onTabAreaPress={() => navigation.navigate("MTNRechargeVoice")}
          onTabAreaPress1={() => navigation.navigate("MTNRechargeSms")}
        />
        <BundlePriceDurationContainer />
      </View>

      <Modal animationType="fade" transparent visible={btnNext1Visible}>
        <View style={styles.btnNext1Overlay}>
          <Pressable style={styles.btnNext1Bg} onPress={closeBtnNext1} />
          <DataActivation onClose={closeBtnNext1} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={tabArea1Visible}>
        <View style={styles.tabArea1Overlay}>
          <Pressable style={styles.tabArea1Bg} onPress={closeTabArea1} />
          <MyActivity onClose={closeTabArea1} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  bundleTypo: {
    textAlign: "left",
    fontFamily: FontFamily.gentiumBookBasic,
    color: Color.iOSKeyLabel,
    position: "absolute",
  },
  otherBundles1Typo: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.gentiumBookBasic,
  },
  childLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "26.67%",
    top: "23.33%",
    height: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  classic1Typo: {
    top: "16.67%",
    textAlign: "left",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  mtnYamoPosition: {
    bottom: "1.79%",
    top: "44.64%",
    height: "53.57%",
    position: "absolute",
  },
  yellowIconPosition: {
    bottom: "-50%",
    top: "113.33%",
    height: "36.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    display: "none",
    position: "absolute",
    overflow: "hidden",
  },
  tabIconPosition: {
    bottom: "-83.33%",
    top: "83.33%",
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  otherLayout: {
    height: 77,
    width: 340,
    position: "absolute",
  },
  classicTypo: {
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.gentiumBookBasic,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  inactivePosition: {
    left: "2.35%",
    fontWeight: "700",
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
  tabArea1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  tabArea1Bg: {
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
  mtnRechargeDataChild: {
    top: 266,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderTopWidth: 1,
    width: 363,
    height: 1,
    display: "none",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    left: 0,
    position: "absolute",
  },
  chooseYourBundle: {
    top: "0%",
    left: "2.59%",
    fontStyle: "italic",
  },
  classicChild: {
    width: "20.55%",
    right: "68.49%",
    left: "10.96%",
  },
  yellowIcon: {
    width: "15.07%",
    top: "116.67%",
    right: "71.23%",
    bottom: "-53.33%",
    left: "13.7%",
    height: "36.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    display: "none",
    position: "absolute",
    overflow: "hidden",
  },
  tabAreaIcon: {
    width: "42.62%",
    top: "86.67%",
    right: "57.38%",
    bottom: "-86.67%",
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  classic1: {
    left: "36.99%",
  },
  classic: {
    width: "23.62%",
    top: "46.43%",
    right: "76.38%",
    bottom: "0%",
    left: "0%",
    height: "53.57%",
    position: "absolute",
  },
  wandaNetChild: {
    width: "14.85%",
    right: "77.23%",
    left: "7.92%",
  },
  yellowIcon1: {
    width: "10.89%",
    right: "-22.77%",
    left: "111.88%",
  },
  tabAreaIcon1: {
    width: "30.8%",
    right: "-32.78%",
    left: "101.98%",
  },
  wandaNet1: {
    left: "26.73%",
  },
  wandaNet: {
    width: "32.69%",
    right: "33.98%",
    left: "33.33%",
  },
  mtnYamoChild: {
    width: "16.13%",
    right: "75.27%",
    left: "8.6%",
  },
  yellowIcon2: {
    width: "11.83%",
    right: "-145.16%",
    left: "233.33%",
  },
  tabAreaIcon2: {
    width: "33.45%",
    right: "-156.03%",
    left: "222.58%",
  },
  gigaSurf: {
    left: "29.03%",
  },
  mtnYamo: {
    width: "30.1%",
    right: "2.91%",
    left: "66.99%",
  },
  bundleTypeData: {
    top: 428,
    left: 25,
    width: 309,
    height: 56,
    position: "absolute",
  },
  activateAnotherBundle: {
    top: 395,
    left: 33,
    fontSize: FontSize.size_4xl,
  },
  otherBundlesChild: {
    borderRadius: Border.br_2xs,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    height: 77,
    width: 340,
    left: 0,
    top: 0,
  },
  otherBundles1: {
    top: 7,
    left: 8,
  },
  gigaSurf1: {
    color: Color.iOSKeyLabel,
  },
  inactive: {
    color: Color.deeppink,
  },
  gigaSurfInactiveContainer: {
    top: "40.26%",
  },
  classicInactive: {
    top: "70.13%",
  },
  classicInactive1: {
    left: "52.35%",
    top: "40.26%",
  },
  otherBundles: {
    top: 298,
    left: 10,
  },
  mtnRechargeData: {
    backgroundColor: Color.darkgray_500,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default MTNRechargeData;
