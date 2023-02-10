import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Image, Pressable, Text, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import SectionForm2 from "../components/SectionForm2";
import ExclusionSection from "../components/ExclusionSection";
import NjangiDashboardSection from "../components/NjangiDashboardSection";
import ContainerMonkap from "../components/ContainerMonkap";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const NjangiMainDaily4 = () => {
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
      <View style={styles.njangiMainDaily4}>
        <View style={styles.njangiMainDaily4Child} />
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
        <View style={[styles.njangiMainDaily4Inner, styles.groupParentLayout]}>
          <View style={[styles.groupParent, styles.groupParentLayout]}>
            <Pressable
              style={styles.manageNjangiesWrapper}
              onPress={() => navigation.navigate("ManageNjangi")}
            >
              <Text style={[styles.manageNjangies, styles.manageNjangiesTypo]}>
                Manage Njangies
              </Text>
            </Pressable>
            <SectionForm2 />
            <ExclusionSection
              njanguiErrorMessage="Sorry!! But you are not part of any monthly Njangui"
              propLeft={17}
            />
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
            <NjangiDashboardSection />
          </View>
        </View>
        <ContainerMonkap
          carouselImageUrls={{ uri: "c14-house17@3x.png" }}
          carouselImageUrls2={require("../assets/group35.png")}
          carouselImageUrls3={require("../assets/group1.png")}
          carouselImageUrls4={{ uri: "group37@3x.png" }}
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
          <Text style={[styles.createNewNjanigi, styles.manageNjangiesTypo]}>
            Create New Njanigi
          </Text>
          <Pressable
            style={[styles.tabArea1, styles.groupBg]}
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
    color: Color.whitesmoke_400,
    fontFamily: FontFamily.gentiumBookBasic,
    fontWeight: "700",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupParentLayout: {
    height: 644,
    width: 330,
    position: "absolute",
  },
  manageNjangiesTypo: {
    fontFamily: FontFamily.gentiumBasic,
    textAlign: "left",
    position: "absolute",
  },
  groupChild2Layout: {
    height: 52,
    width: 330,
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
  njangiMainDaily4Child: {
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
    marginLeft: -132,
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
    position: "absolute",
  },
  manageNjangies: {
    color: Color.blue_100,
    left: 0,
    fontSize: FontSize.size_base,
    top: 0,
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
    height: 44,
    top: 0,
  },
  groupChild2: {
    marginTop: -26,
    marginLeft: -165,
    borderRadius: Border.br_4xs,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  tabAreaParent: {
    top: 592,
    left: 0,
  },
  groupParent: {
    left: 0,
    top: 0,
  },
  njangiMainDaily4Inner: {
    top: 103,
    left: 15,
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
    fontStyle: "italic",
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
    right: "65.28%",
    bottom: "84%",
    left: "1.94%",
    position: "absolute",
  },
  njangiMainDaily4: {
    backgroundColor: Color.whitesmoke_400,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default NjangiMainDaily4;
