import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Image, Pressable, Text, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import ContainerMonkap from "../components/ContainerMonkap";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ViewScheduleVeterans = () => {
  const [tabArea3Visible, setTabArea3Visible] = useState(false);
  const navigation = useNavigation();

  const openTabArea3 = useCallback(() => {
    setTabArea3Visible(true);
  }, []);

  const closeTabArea3 = useCallback(() => {
    setTabArea3Visible(false);
  }, []);
  return (
    <>
      <View style={[styles.viewScheduleVeterans, styles.scheduleLayout]}>
        <View style={styles.viewScheduleVeteransChild} />
        <Pressable
          style={[styles.group, styles.groupLayout1, styles.groupPosition]}
          onPress={() => navigation.navigate("NjangiMainDaily1")}
        >
          <Image
            style={[styles.vectorIcon, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
          <View style={[styles.groupChild, styles.groupLayout1]} />
        </Pressable>
        <View style={[styles.rectangleParent, styles.rectanglePosition]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={[styles.activateSavingAccount, styles.continueTypo]}>
            Activate Saving Account
          </Text>
          <View style={[styles.groupInner, styles.groupLayout]} />
        </View>
        <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={[styles.continue, styles.continueTypo]}>Continue</Text>
          <View style={[styles.groupInner, styles.groupLayout]} />
        </View>
        <View style={styles.monkapDigitalNjangiParent}>
          <Text style={styles.monkapDigitalNjangi}>MoNkap Digital Njangi</Text>
          <Text style={styles.veteransNjangiDetails}>
            Veterans Njangi Details
          </Text>
        </View>
        <View style={[styles.schedulePlaying, styles.schedulePosition]}>
          <View
            style={[
              styles.schedulePlayingChild,
              styles.schedulePosition,
              styles.scheduleLayout,
            ]}
          />
          <View style={styles.rectangle} />
          <View style={styles.rectangle1} />
          <Text style={styles.playing}>Playing</Text>
          <Pressable
            style={[styles.tabArea, styles.tabPosition]}
            onPress={() => navigation.navigate("ViewScheduleVeterans1")}
          />
          <Text style={styles.schedule}>Schedule</Text>
          <View style={[styles.tabArea1, styles.tabPosition]} />
        </View>
        <Text style={[styles.text, styles.textTypo]}>{`17 - 05 - 2022 `}</Text>
        <Text style={[styles.sessions, styles.textTypo]}>10 sessions</Text>
        <Text style={[styles.nextPlayDate, styles.rulesTypo]}>
          Next Play Date
        </Text>
        <Text style={[styles.sessions1, styles.rulesTypo]}>Sessions</Text>
        <Text style={[styles.rules, styles.rulesTypo]}>Rules</Text>
        <Text style={styles.comments}>Comments</Text>
        <ContainerMonkap
          carouselImageUrls={require("../assets/c14-house10.png")}
          carouselImageUrls2={{ uri: "group38@3x.png" }}
          carouselImageUrls3={require("../assets/group39.png")}
          carouselImageUrls4={{ uri: "group47@3x.png" }}
          propColor="#000"
          propHeight="62.57%"
          onTabAreaPress={() => navigation.navigate("MoNkapHomeScreen2")}
          onTabAreaPress1={openTabArea3}
          onImageedit341319179892Press={() =>
            navigation.navigate("BottomTabsRoot", { screen: "LinkBank" })
          }
          onTabAreaPress2={() =>
            navigation.navigate("BottomTabsRoot", { screen: "MTNSplashScreen" })
          }
          onTabAreaPress3={() => navigation.navigate("OMoneySplashScreen")}
        />
        <View style={[styles.viewScheduleVeteransItem, styles.viewLayout]} />
        <View style={[styles.viewScheduleVeteransInner, styles.viewLayout]} />
        <View style={styles.viewScheduleVeteransChild1} />
      </View>

      <Modal animationType="fade" transparent visible={tabArea3Visible}>
        <View style={styles.tabArea3Overlay}>
          <Pressable style={styles.tabArea3Bg} onPress={closeTabArea3} />
          <MyActivity onClose={closeTabArea3} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  scheduleLayout: {
    width: "100%",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  groupLayout1: {
    height: 57,
    width: 47,
    position: "absolute",
  },
  groupPosition: {
    left: "50%",
    top: "50%",
  },
  rectanglePosition: {
    display: "none",
    height: 45,
    width: 305,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupLayout: {
    height: 45,
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
  schedulePosition: {
    right: "0%",
    position: "absolute",
  },
  tabPosition: {
    width: "25.07%",
    top: "20%",
    backgroundColor: Color.gainsboro_700,
    position: "absolute",
  },
  textTypo: {
    color: Color.blue_300,
    fontFamily: FontFamily.gentiumBasic,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  rulesTypo: {
    color: Color.gray_2900,
    left: 20,
    fontStyle: "italic",
    lineHeight: 12,
    fontFamily: FontFamily.gentiumBasic,
    fontSize: FontSize.size_base,
    textAlign: "center",
    position: "absolute",
  },
  viewLayout: {
    height: 1,
    width: 326,
    borderTopWidth: 0.5,
    borderColor: "#0000ee",
    borderStyle: "solid",
    left: 19,
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
  viewScheduleVeteransChild: {
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
    left: "50%",
    top: "50%",
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
    width: 305,
    height: 45,
    backgroundColor: Color.blue_100,
    left: "50%",
    top: "50%",
  },
  activateSavingAccount: {
    marginLeft: -108.5,
  },
  groupInner: {
    top: 0,
    left: 1,
    width: 304,
    backgroundColor: Color.gainsboro_700,
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
    textAlign: "center",
    width: 270,
    marginLeft: -135,
    color: Color.iOSKeyBackgroundHighlight,
    fontFamily: FontFamily.gentiumBookBasic,
    fontWeight: "700",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  veteransNjangiDetails: {
    marginTop: 8,
    marginLeft: -80,
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.iOSKeyBackgroundHighlight,
    fontFamily: FontFamily.gentiumBookBasic,
    fontWeight: "700",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  monkapDigitalNjangiParent: {
    marginTop: -377,
    height: 48,
    width: 270,
    marginLeft: -135,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  schedulePlayingChild: {
    height: "100%",
    top: "0%",
    bottom: "0%",
    left: "0%",
  },
  rectangle: {
    height: "88.57%",
    width: "97.49%",
    top: "8.57%",
    right: "1.39%",
    left: "1.11%",
    backgroundColor: Color.gainsboro_400,
    borderRadius: Border.br_6xl,
    bottom: "2.86%",
    position: "absolute",
  },
  rectangle1: {
    height: "65.71%",
    width: "44.01%",
    right: "53.76%",
    bottom: "14.29%",
    left: "2.23%",
    top: "20%",
    borderRadius: Border.br_6xl,
    position: "absolute",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  playing: {
    left: "69.92%",
    color: Color.gray_3000,
    lineHeight: 22,
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
    top: "25.71%",
    textAlign: "center",
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  tabArea: {
    height: "77.14%",
    right: "9.19%",
    left: "65.74%",
    bottom: "2.86%",
    width: "25.07%",
  },
  schedule: {
    left: "13.65%",
    color: Color.iOSKeyLabel,
    lineHeight: 22,
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
    top: "25.71%",
    textAlign: "left",
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  tabArea1: {
    height: "68.57%",
    right: "64.35%",
    bottom: "11.43%",
    left: "10.58%",
  },
  schedulePlaying: {
    height: "4.38%",
    width: "99.72%",
    top: "12.38%",
    bottom: "83.25%",
    left: "0.28%",
  },
  text: {
    top: 149,
    left: 256,
  },
  sessions: {
    top: 180,
    left: 268,
  },
  nextPlayDate: {
    top: 153,
  },
  sessions1: {
    top: 184,
  },
  rules: {
    top: 230,
  },
  comments: {
    top: 340,
    left: 27,
    fontStyle: "italic",
    lineHeight: 12,
    fontFamily: FontFamily.gentiumBasic,
    color: Color.gray_3000,
    fontSize: FontSize.size_base,
    textAlign: "center",
    position: "absolute",
  },
  viewScheduleVeteransItem: {
    top: 289,
  },
  viewScheduleVeteransInner: {
    top: 224,
  },
  viewScheduleVeteransChild1: {
    top: 322,
    borderRadius: Border.br_3xs,
    borderWidth: 0.5,
    width: 325,
    height: 56,
    borderColor: "#0000ee",
    borderStyle: "solid",
    left: 19,
    backgroundColor: Color.gainsboro_700,
    position: "absolute",
  },
  viewScheduleVeterans: {
    flex: 1,
    height: 800,
    overflow: "hidden",
  },
});

export default ViewScheduleVeterans;
