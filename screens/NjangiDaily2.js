import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Image, Pressable, Text, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import MyNjangiesSection from "../components/MyNjangiesSection";
import VeteransSection from "../components/VeteransSection";
import KupexanDashboardSection from "../components/KupexanDashboardSection";
import ContainerMonkap from "../components/ContainerMonkap";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const NjangiDaily2 = () => {
  const [tabArea8Visible, setTabArea8Visible] = useState(false);
  const navigation = useNavigation();

  const openTabArea8 = useCallback(() => {
    setTabArea8Visible(true);
  }, []);

  const closeTabArea8 = useCallback(() => {
    setTabArea8Visible(false);
  }, []);
  return (
    <>
      <View style={styles.njangiDaily2}>
        <View style={styles.njangiDaily2Child} />
        <View style={[styles.group, styles.groupLayout, styles.groupPosition]}>
          <Image
            style={[styles.vectorIcon, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
          <Pressable
            style={[styles.groupChild, styles.groupBg, styles.groupLayout]}
            onPress={() => navigation.navigate("NjangiMainDaily2")}
          />
        </View>
        <View style={[styles.rectangleParent, styles.rectanglePosition]}>
          <View style={[styles.groupItem, styles.tabAreaLayout]} />
          <Text style={[styles.activateSavingAccount, styles.continueTypo]}>
            Activate Saving Account
          </Text>
          <View style={[styles.groupInner, styles.groupBg]} />
        </View>
        <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
          <View style={[styles.groupItem, styles.tabAreaLayout]} />
          <Text style={[styles.continue, styles.continueTypo]}>Continue</Text>
          <View style={[styles.groupInner, styles.groupBg]} />
        </View>
        <View
          style={[
            styles.monkapDigitalNjangiParent,
            styles.monkapLayout,
            styles.groupPosition,
          ]}
        >
          <Text
            style={[
              styles.monkapDigitalNjangi,
              styles.njangiTypo,
              styles.monkapLayout,
            ]}
          >
            MoNkap Digital Njangi
          </Text>
          <Text style={[styles.njangiDashboard, styles.njangiTypo]}>
            Njangi Dashboard
          </Text>
        </View>
        <View style={styles.groupParent}>
          <Pressable
            style={styles.manageNjangiesWrapper}
            onPress={() => navigation.navigate("ManageNjangi")}
          >
            <Text style={[styles.manageNjangies, styles.manageNjangiesTypo]}>
              Manage Njangies
            </Text>
          </Pressable>
          <MyNjangiesSection />
          <VeteransSection />
          <View style={[styles.tabAreaParent, styles.groupChild2Layout]}>
            <View style={[styles.tabArea, styles.tabAreaLayout]} />
            <View
              style={[
                styles.groupChild2,
                styles.groupChild2Layout,
                styles.groupPosition,
              ]}
            />
          </View>
          <KupexanDashboardSection />
          <Pressable
            style={styles.viewMore}
            onPress={() => navigation.navigate("ViewScheduleKupexan831")}
          >
            <Text style={[styles.viewMore1, styles.viewMore1Typo]}>
              View More
            </Text>
          </Pressable>
        </View>
        <ContainerMonkap
          carouselImageUrls={require("../assets/c14-house10.png")}
          carouselImageUrls2={require("../assets/group35.png")}
          carouselImageUrls3={require("../assets/group1.png")}
          carouselImageUrls4={{ uri: "group47@3x.png" }}
          propTop={754}
          propColor="#000"
          propHeight="62.57%"
          onTabAreaPress={() => navigation.navigate("MoNkapHomeScreen2")}
          onTabAreaPress1={openTabArea8}
          onImageedit341319179892Press={() =>
            navigation.navigate("BottomTabsRoot", { screen: "LinkBank" })
          }
          onTabAreaPress2={() =>
            navigation.navigate("BottomTabsRoot", { screen: "MTNSplashScreen" })
          }
          onTabAreaPress3={() => navigation.navigate("OMoneySplashScreen")}
        />
        <View style={styles.addNew}>
          <Image
            style={styles.addIcon}
            resizeMode="cover"
            source={require("../assets/add2.png")}
          />
          <Text
            style={[
              styles.createNewNjanigi,
              styles.viewMore1Typo,
              styles.manageNjangiesTypo,
            ]}
          >
            Create New Njanigi
          </Text>
          <Pressable
            style={[styles.tabArea1, styles.groupBg]}
            onPress={() => navigation.navigate("AddTargetSavings")}
          />
        </View>
      </View>

      <Modal animationType="fade" transparent visible={tabArea8Visible}>
        <View style={styles.tabArea8Overlay}>
          <Pressable style={styles.tabArea8Bg} onPress={closeTabArea8} />
          <MyActivity onClose={closeTabArea8} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 57,
    width: 47,
  },
  groupPosition: {
    left: "50%",
    top: "50%",
  },
  groupBg: {
    backgroundColor: Color.gainsboro_700,
    position: "absolute",
  },
  rectanglePosition: {
    display: "none",
    marginLeft: -153,
    height: 45,
    width: 305,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  tabAreaLayout: {
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  continueTypo: {
    color: Color.iOSKeyBackgroundHighlight,
    fontWeight: "700",
    fontSize: FontSize.size_4xl,
    marginTop: -11.5,
    textAlign: "left",
    fontFamily: FontFamily.gentiumBookBasic,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  monkapLayout: {
    width: 270,
    marginLeft: -135,
  },
  njangiTypo: {
    textAlign: "center",
    color: Color.whitesmoke_400,
    fontFamily: FontFamily.gentiumBookBasic,
    fontWeight: "700",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  manageNjangiesTypo: {
    fontFamily: FontFamily.gentiumBasic,
    position: "absolute",
  },
  groupChild2Layout: {
    height: 65,
    width: 330,
    position: "absolute",
  },
  viewMore1Typo: {
    fontStyle: "italic",
    textAlign: "left",
  },
  tabArea8Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  tabArea8Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  njangiDaily2Child: {
    marginTop: -400,
    marginLeft: -180,
    width: 360,
    height: 94,
    backgroundColor: Color.blue_100,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  vectorIcon: {
    marginTop: -61.5,
    marginLeft: -56.5,
    width: 16,
    height: 13,
    position: "absolute",
  },
  groupChild: {
    top: -57,
    left: -47,
  },
  group: {
    marginTop: -320,
    marginLeft: -128,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    position: "absolute",
  },
  groupItem: {
    marginTop: -22.5,
    marginLeft: -152.5,
    height: 45,
    width: 305,
    borderRadius: Border.br_xs,
    backgroundColor: Color.blue_100,
    left: "50%",
    top: "50%",
  },
  activateSavingAccount: {
    marginLeft: -108.5,
    textAlign: "left",
  },
  groupInner: {
    left: 1,
    width: 304,
    top: 0,
    height: 45,
  },
  rectangleParent: {
    marginTop: 291,
  },
  continue: {
    marginLeft: -40.5,
    textAlign: "left",
  },
  rectangleGroup: {
    marginTop: 290,
  },
  monkapDigitalNjangi: {
    marginTop: -24,
    fontSize: FontSize.size_6xl,
    height: 24,
  },
  njangiDashboard: {
    marginTop: 8,
    marginLeft: -62,
    fontSize: FontSize.size_base,
  },
  monkapDigitalNjangiParent: {
    marginTop: -377,
    height: 48,
    position: "absolute",
  },
  manageNjangies: {
    color: Color.blue_100,
    left: 0,
    fontSize: FontSize.size_base,
    top: 0,
    textAlign: "left",
  },
  manageNjangiesWrapper: {
    left: 225,
    width: 98,
    height: 16,
    top: 0,
    position: "absolute",
  },
  tabArea: {
    left: 11,
    width: 127,
    height: 55,
    top: 0,
  },
  groupChild2: {
    marginTop: -32.5,
    marginLeft: -165,
    borderRadius: Border.br_4xs,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  tabAreaParent: {
    top: 579,
    left: 0,
  },
  viewMore1: {
    fontSize: FontSize.size_lg,
    textDecoration: "underline",
    color: Color.blue_100,
    fontFamily: FontFamily.gentiumBookBasic,
    fontStyle: "italic",
  },
  viewMore: {
    left: 136,
    top: 516,
    position: "absolute",
  },
  groupParent: {
    top: 103,
    left: 15,
    height: 644,
    width: 330,
    position: "absolute",
  },
  addIcon: {
    height: "54.05%",
    width: "16.95%",
    top: "21.62%",
    right: "75.42%",
    bottom: "24.32%",
    left: "7.63%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  createNewNjanigi: {
    top: 11,
    left: 32,
    fontSize: FontSize.size_xs,
    color: Color.iOSKeyLabel,
  },
  tabArea1: {
    height: 37,
    left: 0,
    top: 0,
    width: 47,
    backgroundColor: Color.gainsboro_700,
  },
  addNew: {
    height: "4.63%",
    width: "32.78%",
    top: "11.38%",
    right: "65.56%",
    bottom: "84%",
    left: "1.67%",
    position: "absolute",
  },
  njangiDaily2: {
    backgroundColor: Color.whitesmoke_400,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default NjangiDaily2;
