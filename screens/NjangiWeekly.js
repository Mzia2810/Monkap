import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Image, Pressable, Text, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import SectionForm from "../components/SectionForm";
import MabingoSection from "../components/MabingoSection";
import ContainerMonkap from "../components/ContainerMonkap";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const NjangiWeekly = () => {
  const [tabArea10Visible, setTabArea10Visible] = useState(false);
  const navigation = useNavigation();

  const openTabArea10 = useCallback(() => {
    setTabArea10Visible(true);
  }, []);

  const closeTabArea10 = useCallback(() => {
    setTabArea10Visible(false);
  }, []);
  return (
    <>
      <View style={styles.njangiWeekly}>
        <View style={styles.njangiWeeklyChild} />
        <View style={[styles.group, styles.groupLayout1, styles.groupPosition]}>
          <Image
            style={[styles.vectorIcon, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
          <Pressable
            style={[styles.groupChild, styles.groupBg, styles.groupLayout1]}
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
        <View style={styles.tabAreaParent}>
          <View style={[styles.tabArea, styles.tabAreaLayout]} />
          <Pressable
            style={styles.manageNjangiesWrapper}
            onPress={() => navigation.navigate("ManageNjangi")}
          >
            <Text style={styles.manageNjangies}>Manage Njangies</Text>
          </Pressable>
          <SectionForm />
          <View style={[styles.tabAreaGroup, styles.groupLayout]}>
            <View style={[styles.tabArea1, styles.tabPosition]} />
            <View
              style={[
                styles.groupChild2,
                styles.groupChildPosition,
                styles.groupLayout,
              ]}
            />
          </View>
          <View style={[styles.njangiParent, styles.njangiLayout]}>
            <View style={[styles.njangi, styles.njangiLayout]}>
              <Text style={[styles.mabingo, styles.mabingoTypo]}>Mabingo</Text>
              <Text style={[styles.members, styles.mabingoTypo]}>
                20 Members
              </Text>
            </View>
            <Text style={[styles.weeklyNjangies1, styles.weeklyNjangies1Typo]}>
              Weekly Njangies [1]
            </Text>
          </View>
          <View style={[styles.tabAreaContainer, styles.groupChild3Layout]}>
            <View style={[styles.tabArea2, styles.tabPosition]} />
            <View
              style={[
                styles.groupChild3,
                styles.groupChild3Layout,
                styles.groupChildPosition,
              ]}
            />
          </View>
          <MabingoSection />
        </View>
        <ContainerMonkap
          carouselImageUrls={require("../assets/c14-house10.png")}
          carouselImageUrls2={require("../assets/group35.png")}
          carouselImageUrls3={require("../assets/group1.png")}
          carouselImageUrls4={{ uri: "group37@3x.png" }}
          propTop={754}
          propColor="#000"
          propHeight="62.57%"
          onTabAreaPress={() => navigation.navigate("MoNkapHomeScreen2")}
          onTabAreaPress1={openTabArea10}
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
          <Text style={[styles.createNewNjanigi, styles.weeklyNjangies1Typo]}>
            Create New Njanigi
          </Text>
          <Pressable
            style={[styles.tabArea3, styles.groupBg]}
            onPress={() => navigation.navigate("AddTargetSavings")}
          />
        </View>
      </View>

      <Modal animationType="fade" transparent visible={tabArea10Visible}>
        <View style={styles.tabArea10Overlay}>
          <Pressable style={styles.tabArea10Bg} onPress={closeTabArea10} />
          <MyActivity onClose={closeTabArea10} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  groupLayout1: {
    height: 57,
    width: 47,
  },
  groupPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupBg: {
    backgroundColor: Color.gainsboro_700,
    position: "absolute",
  },
  rectanglePosition: {
    display: "none",
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
    textAlign: "left",
    color: Color.iOSKeyBackgroundHighlight,
    fontFamily: FontFamily.gentiumBookBasic,
    fontWeight: "700",
    fontSize: FontSize.size_4xl,
    marginTop: -11.5,
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
    color: Color.iOSKeyBackgroundHighlight,
    fontFamily: FontFamily.gentiumBookBasic,
    fontWeight: "700",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupLayout: {
    height: 62,
    width: 330,
    position: "absolute",
  },
  tabPosition: {
    width: 127,
    left: 11,
    top: 0,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  groupChildPosition: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    borderRadius: Border.br_4xs,
    marginLeft: -165,
    left: "50%",
    top: "50%",
  },
  njangiLayout: {
    width: 298,
    position: "absolute",
  },
  mabingoTypo: {
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBasic,
    top: 0,
    textAlign: "left",
    position: "absolute",
  },
  weeklyNjangies1Typo: {
    fontStyle: "italic",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBasic,
    textAlign: "left",
    position: "absolute",
  },
  groupChild3Layout: {
    height: 87,
    width: 330,
    position: "absolute",
  },
  tabArea10Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  tabArea10Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  njangiWeeklyChild: {
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
  },
  groupChild: {
    top: -57,
    left: -47,
  },
  group: {
    marginTop: -320,
    marginLeft: -132,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
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
  },
  groupInner: {
    left: 1,
    width: 304,
    top: 0,
    height: 45,
  },
  rectangleParent: {
    marginTop: 291,
    marginLeft: -152,
  },
  continue: {
    marginLeft: -40.5,
  },
  rectangleGroup: {
    marginTop: 290,
    marginLeft: -153,
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
  },
  tabArea: {
    width: 125,
    height: 144,
    left: 11,
    top: 20,
  },
  manageNjangies: {
    color: Color.blue_100,
    fontFamily: FontFamily.gentiumBasic,
    left: 0,
    fontSize: FontSize.size_base,
    top: 0,
    textAlign: "left",
    position: "absolute",
  },
  manageNjangiesWrapper: {
    left: 225,
    width: 98,
    height: 16,
    top: 0,
    position: "absolute",
  },
  tabArea1: {
    height: 52,
  },
  groupChild2: {
    marginTop: -31,
  },
  tabAreaGroup: {
    top: 187,
    left: 0,
  },
  mabingo: {
    fontSize: FontSize.size_xl,
    textDecoration: "underline",
    left: 0,
  },
  members: {
    left: 228,
    fontSize: FontSize.size_base,
  },
  njangi: {
    height: 19,
    left: 0,
    top: 20,
  },
  weeklyNjangies1: {
    left: 97,
    width: 107,
    height: 12,
    fontSize: FontSize.size_base,
    top: 0,
  },
  njangiParent: {
    top: 195,
    height: 39,
    left: 11,
  },
  tabArea2: {
    height: 73,
  },
  groupChild3: {
    marginTop: -43.5,
  },
  tabAreaContainer: {
    top: 557,
    left: 0,
  },
  tabAreaParent: {
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
  },
  tabArea3: {
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
  njangiWeekly: {
    backgroundColor: Color.whitesmoke_400,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default NjangiWeekly;
