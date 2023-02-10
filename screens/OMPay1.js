import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Image, Text, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import EneoBill from "../components/EneoBill";
import MyProfile from "../components/MyProfile";
import HeaderContainer from "../components/HeaderContainer";
import CableTVSection from "../components/CableTVSection";
import PaymentContainer from "../components/PaymentContainer";
import ContainerMoMo from "../components/ContainerMoMo";
import HelloTawaContainer from "../components/HelloTawaContainer";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const OMPay1 = () => {
  const [groupContainer7Visible, setGroupContainer7Visible] = useState(false);
  const [groupContainer14Visible, setGroupContainer14Visible] = useState(false);
  const [groupContainer20Visible, setGroupContainer20Visible] = useState(false);
  const [groupContainer26Visible, setGroupContainer26Visible] = useState(false);
  const [tabArea7Visible, setTabArea7Visible] = useState(false);
  const navigation = useNavigation();

  const openGroupContainer7 = useCallback(() => {
    setGroupContainer7Visible(true);
  }, []);

  const closeGroupContainer7 = useCallback(() => {
    setGroupContainer7Visible(false);
  }, []);

  const openGroupContainer14 = useCallback(() => {
    setGroupContainer14Visible(true);
  }, []);

  const closeGroupContainer14 = useCallback(() => {
    setGroupContainer14Visible(false);
  }, []);

  const openGroupContainer20 = useCallback(() => {
    setGroupContainer20Visible(true);
  }, []);

  const closeGroupContainer20 = useCallback(() => {
    setGroupContainer20Visible(false);
  }, []);

  const openGroupContainer26 = useCallback(() => {
    setGroupContainer26Visible(true);
  }, []);

  const closeGroupContainer26 = useCallback(() => {
    setGroupContainer26Visible(false);
  }, []);

  const openTabArea7 = useCallback(() => {
    setTabArea7Visible(true);
  }, []);

  const closeTabArea7 = useCallback(() => {
    setTabArea7Visible(false);
  }, []);
  return (
    <>
      <View style={styles.omPay}>
        <View style={styles.images1} />
        <Image
          style={styles.omPayChild}
          resizeMode="cover"
          source={require("../assets/line-2211.png")}
        />
        <HeaderContainer
          onTaAreaPress={() =>
            navigation.navigate("OMoneyOnMonkapHomeHideBalance")
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
            onPress={() => navigation.navigate("OMPay")}
          />
        </View>
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
            onGroupPressablePress={openGroupContainer7}
            onGroupPressablePress1={openGroupContainer14}
            onGroupPressablePress2={openGroupContainer20}
            onGroupPressablePress3={openGroupContainer26}
          />
        </View>
        <ContainerMoMo
          carouselImageUrls={{ uri: "c14-house34@3x.png" }}
          carouselImageUrls2={{ uri: "group96@3x.png" }}
          carouselImageUrls3={require("../assets/group33.png")}
          propTop={754}
          onTabAreaPress={() => navigation.navigate("MoNkapHomeScreen2")}
          onTabAreaPress1={openTabArea7}
          onImageedit341319179892Press={() =>
            navigation.navigate("BottomTabsRoot", { screen: "LinkBank" })
          }
          onTabAreaPress2={() =>
            navigation.navigate("BottomTabsRoot", { screen: "MTNSplashScreen" })
          }
        />
        <HelloTawaContainer propTop={75} />
      </View>

      <Modal animationType="fade" transparent visible={groupContainer7Visible}>
        <View style={styles.groupContainer7Overlay}>
          <Pressable
            style={styles.groupContainer7Bg}
            onPress={closeGroupContainer7}
          />
          <EneoBill onClose={closeGroupContainer7} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={groupContainer14Visible}>
        <View style={styles.groupContainer14Overlay}>
          <Pressable
            style={styles.groupContainer14Bg}
            onPress={closeGroupContainer14}
          />
          <EneoBill onClose={closeGroupContainer14} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={groupContainer20Visible}>
        <View style={styles.groupContainer20Overlay}>
          <Pressable
            style={styles.groupContainer20Bg}
            onPress={closeGroupContainer20}
          />
          <EneoBill onClose={closeGroupContainer20} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={groupContainer26Visible}>
        <View style={styles.groupContainer26Overlay}>
          <Pressable
            style={styles.groupContainer26Bg}
            onPress={closeGroupContainer26}
          />
          <EneoBill onClose={closeGroupContainer26} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={tabArea7Visible}>
        <View style={styles.tabArea7Overlay}>
          <Pressable style={styles.tabArea7Bg} onPress={closeTabArea7} />
          <MyProfile onClose={closeTabArea7} />
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
  groupContainer7Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupContainer7Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  groupContainer14Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupContainer14Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  groupContainer20Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupContainer20Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  groupContainer26Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupContainer26Bg: {
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
    right: 0,
    backgroundColor: Color.whitesmoke_900,
    left: 0,
    top: 0,
    position: "absolute",
    height: 800,
  },
  omPayChild: {
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
    backgroundColor: Color.orangeColor,
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
  omPay: {
    backgroundColor: Color.darkgray_500,
    flex: 1,
    height: 800,
    width: "100%",
  },
});

export default OMPay1;
