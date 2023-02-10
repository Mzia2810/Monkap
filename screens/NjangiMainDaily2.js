import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Image, Pressable, Text, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import SectionForm3 from "../components/SectionForm3";
import ContainerMonkap from "../components/ContainerMonkap";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const NjangiMainDaily2 = () => {
  const [tabArea6Visible, setTabArea6Visible] = useState(false);
  const navigation = useNavigation();

  const openTabArea6 = useCallback(() => {
    setTabArea6Visible(true);
  }, []);

  const closeTabArea6 = useCallback(() => {
    setTabArea6Visible(false);
  }, []);
  return (
    <>
      <View style={styles.njangiMainDaily2}>
        <View style={[styles.njangiMainDaily2Child, styles.njangiPosition]} />
        <View style={[styles.group, styles.groupLayout, styles.njangiPosition]}>
          <Image
            style={[styles.vectorIcon, styles.njangiPosition]}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
          <Pressable
            style={[styles.groupChild, styles.groupLayout]}
            onPress={() => navigation.navigate("MoNkapHomeScreen2")}
          />
        </View>
        <View style={[styles.rectangleParent, styles.groupPosition]}>
          <View style={[styles.groupItem, styles.groupPosition]} />
          <Text style={[styles.activateSavingAccount, styles.continueTypo]}>
            Activate Saving Account
          </Text>
          <View style={[styles.groupInner, styles.tabPosition]} />
        </View>
        <View style={[styles.rectangleGroup, styles.groupPosition]}>
          <View style={[styles.groupItem, styles.groupPosition]} />
          <Text style={[styles.continue, styles.continueTypo]}>Continue</Text>
          <View style={[styles.groupInner, styles.tabPosition]} />
        </View>
        <View
          style={[
            styles.monkapDigitalNjangiParent,
            styles.monkapLayout,
            styles.njangiPosition,
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
        <SectionForm3 />
        <View style={styles.njangiMainDaily2Inner}>
          <View style={[styles.rectangleContainer, styles.groupChild2Position]}>
            <View
              style={[styles.groupChildPosition, styles.groupChild2Position]}
            />
            <Text style={[styles.njangies, styles.njangiesTypo]}>Njangies</Text>
          </View>
        </View>
        <View style={[styles.tabAreaParent, styles.groupChild3Layout]}>
          <View style={[styles.tabArea, styles.tabPosition]} />
          <View
            style={[
              styles.groupChild3,
              styles.groupChild3Layout,
              styles.groupChildPosition,
            ]}
          />
        </View>
        <View style={[styles.vectorParent, styles.vectorParentPosition]}>
          <Image
            style={[styles.rectangleIcon, styles.vectorParentPosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-4.png")}
          />
          <View style={styles.njangiDashboardWrapper}>
            <Text style={styles.njangiDashboard1}>Njangi Dashboard</Text>
          </View>
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
          onTabAreaPress1={openTabArea6}
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
          <Text style={[styles.createNewNjanigi, styles.njangiesTypo]}>
            Create New Njanigi
          </Text>
          <Pressable
            style={[styles.tabArea1, styles.tabPosition]}
            onPress={() => navigation.navigate("AddTargetSavings")}
          />
        </View>
      </View>

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
  njangiPosition: {
    left: "50%",
    top: "50%",
  },
  groupLayout: {
    height: 57,
    width: 47,
    position: "absolute",
  },
  groupPosition: {
    width: 305,
    height: 45,
    left: "50%",
    top: "50%",
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
  tabPosition: {
    top: 0,
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
  groupChild2Position: {
    marginTop: -44.5,
    height: 89,
    width: 330,
    position: "absolute",
  },
  njangiesTypo: {
    color: Color.iOSKeyLabel,
    top: 11,
    fontFamily: FontFamily.gentiumBasic,
    fontStyle: "italic",
    textAlign: "left",
    position: "absolute",
  },
  groupChild3Layout: {
    height: 52,
    width: 330,
    position: "absolute",
  },
  groupChildPosition: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    borderRadius: Border.br_4xs,
    marginLeft: -165,
    left: "50%",
    top: "50%",
  },
  vectorParentPosition: {
    height: 274,
    width: 330,
    marginLeft: -165,
    left: "50%",
    top: "50%",
    position: "absolute",
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
  njangiMainDaily2Child: {
    marginTop: -400,
    marginLeft: -180,
    width: 360,
    height: 94,
    backgroundColor: Color.blue_100,
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
    backgroundColor: Color.gainsboro_700,
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
    borderRadius: Border.br_xs,
    height: 45,
    backgroundColor: Color.blue_100,
  },
  activateSavingAccount: {
    marginLeft: -108.5,
  },
  groupInner: {
    left: 1,
    width: 304,
    height: 45,
    backgroundColor: Color.gainsboro_700,
  },
  rectangleParent: {
    marginTop: 291,
    marginLeft: -152,
    display: "none",
    height: 45,
  },
  continue: {
    marginLeft: -40.5,
  },
  rectangleGroup: {
    marginTop: 290,
    marginLeft: -153,
    display: "none",
    height: 45,
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
  njangies: {
    left: 142,
    fontSize: FontSize.size_base,
  },
  rectangleContainer: {
    marginLeft: -165,
    marginTop: -44.5,
    left: "50%",
    top: "50%",
  },
  njangiMainDaily2Inner: {
    marginTop: -110,
    height: 89,
    width: 330,
    marginLeft: -165,
    display: "none",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  tabArea: {
    left: 11,
    width: 127,
    height: 44,
    borderRadius: Border.br_xs,
  },
  groupChild3: {
    marginTop: -26,
  },
  tabAreaParent: {
    top: 695,
    left: 15,
    display: "none",
  },
  rectangleIcon: {
    marginTop: -137,
    borderRadius: Border.br_4xs,
    height: 274,
  },
  njangiDashboard1: {
    left: 10,
    fontSize: FontSize.size_xl,
    color: Color.gray_2900,
    fontFamily: FontFamily.gentiumBasic,
    fontStyle: "italic",
    top: 0,
    textAlign: "left",
    position: "absolute",
  },
  njangiDashboardWrapper: {
    top: 8,
    left: 100,
    width: 129,
    height: 35,
    position: "absolute",
  },
  vectorParent: {
    marginTop: -4,
    display: "none",
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
    left: 32,
    fontSize: FontSize.size_xs,
  },
  tabArea1: {
    left: 0,
    height: 37,
    backgroundColor: Color.gainsboro_700,
    width: 47,
    top: 0,
  },
  addNew: {
    height: "4.63%",
    width: "32.78%",
    top: "11.38%",
    right: "65.28%",
    bottom: "84%",
    left: "1.94%",
    position: "absolute",
  },
  njangiMainDaily2: {
    backgroundColor: Color.whitesmoke_400,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default NjangiMainDaily2;
