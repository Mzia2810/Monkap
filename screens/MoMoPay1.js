import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Image, Text, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import EneoBill from "../components/EneoBill";
import AwesomeContainer from "../components/AwesomeContainer";
import HeaderContainer from "../components/HeaderContainer";
import MTNContainer from "../components/MTNContainer";
import CableTVSection from "../components/CableTVSection";
import PaymentContainer from "../components/PaymentContainer";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const MoMoPay1 = () => {
  const [tabArea3Visible, setTabArea3Visible] = useState(false);
  const [groupContainer10Visible, setGroupContainer10Visible] = useState(false);
  const [groupContainer17Visible, setGroupContainer17Visible] = useState(false);
  const [groupContainer23Visible, setGroupContainer23Visible] = useState(false);
  const [groupContainer29Visible, setGroupContainer29Visible] = useState(false);
  const navigation = useNavigation();

  const openTabArea3 = useCallback(() => {
    setTabArea3Visible(true);
  }, []);

  const closeTabArea3 = useCallback(() => {
    setTabArea3Visible(false);
  }, []);

  const openGroupContainer10 = useCallback(() => {
    setGroupContainer10Visible(true);
  }, []);

  const closeGroupContainer10 = useCallback(() => {
    setGroupContainer10Visible(false);
  }, []);

  const openGroupContainer17 = useCallback(() => {
    setGroupContainer17Visible(true);
  }, []);

  const closeGroupContainer17 = useCallback(() => {
    setGroupContainer17Visible(false);
  }, []);

  const openGroupContainer23 = useCallback(() => {
    setGroupContainer23Visible(true);
  }, []);

  const closeGroupContainer23 = useCallback(() => {
    setGroupContainer23Visible(false);
  }, []);

  const openGroupContainer29 = useCallback(() => {
    setGroupContainer29Visible(true);
  }, []);

  const closeGroupContainer29 = useCallback(() => {
    setGroupContainer29Visible(false);
  }, []);
  return (
    <>
      <View style={styles.momoPay}>
        <View style={styles.images1} />
        <AwesomeContainer
          carImageUrl={{
            uri: "69691715-mtnmmlogogenericmtnmobilemoneylogo-113@3x.png",
          }}
        />
        <Image
          style={styles.momoPayChild}
          resizeMode="cover"
          source={require("../assets/line-2211.png")}
        />
        <HeaderContainer
          taAreaBackgroundColor="#feca18"
          onTaAreaPress={() =>
            navigation.navigate("MomoOnMonkapHomeHideBalance")
          }
        />
        <View style={styles.rectangleParent}>
          <View style={styles.groupChild} />
          <View style={styles.groupItem} />
          <Text style={[styles.utilities, styles.utilitiesTypo]}>
            Utilities
          </Text>
          <View style={[styles.tabArea, styles.tabLayout]} />
          <Text style={[styles.schoolFee, styles.utilitiesTypo]}>
            School Fee
          </Text>
          <Pressable
            style={[styles.tabArea1, styles.tabLayout]}
            onPress={() => navigation.navigate("MoMoPay")}
          />
        </View>
        <MTNContainer
          carouselImageUrls={{ uri: "c14-house56@3x.png" }}
          carouselImageUrls2={{ uri: "group124@3x.png" }}
          carouselImageUrls3={{ uri: "group157@3x.png" }}
          propLeft={0}
          onTabAreaPress={() => navigation.navigate("MoNkapHomeScreen2")}
          onTabAreaPress1={openTabArea3}
          onTabAreaPress2={() => navigation.navigate("OMoneySplashScreen")}
          onImageedit341319179892Press={() =>
            navigation.navigate("BottomTabsRoot", { screen: "LinkBank" })
          }
        />
        <View style={styles.utilities1}>
          <CableTVSection />
          <View style={[styles.rectangleGroup, styles.getBillPosition]}>
            <View style={[styles.groupInner, styles.groupInnerPosition]} />
            <Text style={[styles.searchForAgency, styles.getBill1Typo]}>
              search for agency
            </Text>
            <Image
              style={[styles.vectorIcon, styles.getBill1Position]}
              resizeMode="cover"
              source={require("../assets/vector87.png")}
            />
          </View>
          <View style={[styles.getBill, styles.getBillPosition]}>
            <View style={[styles.getBillChild, styles.groupInnerPosition]} />
            <Text
              style={[
                styles.getBill1,
                styles.getBill1Position,
                styles.getBill1Typo,
              ]}
            >
              GET BILL
            </Text>
          </View>
          <PaymentContainer
            onGroupPressablePress={openGroupContainer10}
            onGroupPressablePress1={openGroupContainer17}
            onGroupPressablePress2={openGroupContainer23}
            onGroupPressablePress3={openGroupContainer29}
          />
        </View>
      </View>

      <Modal animationType="fade" transparent visible={tabArea3Visible}>
        <View style={styles.tabArea3Overlay}>
          <Pressable style={styles.tabArea3Bg} onPress={closeTabArea3} />
          <MyActivity onClose={closeTabArea3} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={groupContainer10Visible}>
        <View style={styles.groupContainer10Overlay}>
          <Pressable
            style={styles.groupContainer10Bg}
            onPress={closeGroupContainer10}
          />
          <EneoBill onClose={closeGroupContainer10} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={groupContainer17Visible}>
        <View style={styles.groupContainer17Overlay}>
          <Pressable
            style={styles.groupContainer17Bg}
            onPress={closeGroupContainer17}
          />
          <EneoBill onClose={closeGroupContainer17} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={groupContainer23Visible}>
        <View style={styles.groupContainer23Overlay}>
          <Pressable
            style={styles.groupContainer23Bg}
            onPress={closeGroupContainer23}
          />
          <EneoBill onClose={closeGroupContainer23} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={groupContainer29Visible}>
        <View style={styles.groupContainer29Overlay}>
          <Pressable
            style={styles.groupContainer29Bg}
            onPress={closeGroupContainer29}
          />
          <EneoBill onClose={closeGroupContainer29} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  utilitiesTypo: {
    textAlign: "center",
    fontFamily: FontFamily.gentiumBasic,
    letterSpacing: 1.1,
    top: 7,
    color: Color.iOSKeyLabel,
    lineHeight: 22,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  tabLayout: {
    backgroundColor: Color.gold_400,
    width: 168,
    borderBottomLeftRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
    height: 33,
    top: 0,
    position: "absolute",
  },
  getBillPosition: {
    bottom: "79.55%",
    top: "14.17%",
    height: "6.28%",
    position: "absolute",
  },
  groupInnerPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    borderRadius: Border.br_3xs,
    position: "absolute",
    width: "100%",
  },
  getBill1Typo: {
    fontFamily: FontFamily.gentiumBookBasic,
    textAlign: "center",
  },
  getBill1Position: {
    top: "25.81%",
    position: "absolute",
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
  groupContainer10Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupContainer10Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  groupContainer17Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupContainer17Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  groupContainer23Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupContainer23Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  groupContainer29Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupContainer29Bg: {
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
  momoPayChild: {
    top: 201,
    width: 335,
    height: 2,
    left: 12,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    borderRadius: Border.br_3xs,
    height: 33,
    width: 336,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupItem: {
    backgroundColor: Color.gold_100,
    width: 168,
    borderBottomLeftRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
    height: 33,
    left: 0,
    top: 0,
    position: "absolute",
  },
  utilities: {
    left: 55,
  },
  tabArea: {
    left: 0,
  },
  schoolFee: {
    left: 213,
  },
  tabArea1: {
    left: 168,
  },
  rectangleParent: {
    top: 208,
    height: 33,
    width: 336,
    left: 12,
    position: "absolute",
  },
  groupInner: {
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  searchForAgency: {
    top: "16.13%",
    left: "11.16%",
    letterSpacing: 1.9,
    color: Color.gray_2200,
    fontFamily: FontFamily.gentiumBookBasic,
    lineHeight: 22,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  vectorIcon: {
    height: "61.29%",
    width: "6.61%",
    right: "5.37%",
    bottom: "12.9%",
    left: "88.02%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleGroup: {
    width: "67.22%",
    right: "29.44%",
    left: "3.33%",
  },
  getBillChild: {
    backgroundColor: Color.gainsboro_400,
  },
  getBill1: {
    height: "45.16%",
    width: "70.59%",
    left: "15.29%",
    fontSize: FontSize.size_sm,
    letterSpacing: 1.6,
    lineHeight: 19,
    color: Color.iOSKeyLabel,
    top: "25.81%",
    fontFamily: FontFamily.gentiumBookBasic,
  },
  getBill: {
    width: "24.17%",
    right: "3.33%",
    left: "72.5%",
  },
  utilities1: {
    top: 259,
    width: 360,
    height: 494,
    left: 0,
    position: "absolute",
  },
  momoPay: {
    backgroundColor: Color.darkgray_500,
    flex: 1,
    height: 800,
    width: "100%",
  },
});

export default MoMoPay1;
