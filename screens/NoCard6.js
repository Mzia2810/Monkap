import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Image, Pressable, Text, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import ContainerMonkap from "../components/ContainerMonkap";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const NoCard6 = () => {
  const [tabArea1Visible, setTabArea1Visible] = useState(false);
  const navigation = useNavigation();

  const openTabArea1 = useCallback(() => {
    setTabArea1Visible(true);
  }, []);

  const closeTabArea1 = useCallback(() => {
    setTabArea1Visible(false);
  }, []);
  return (
    <>
      <View style={styles.noCard}>
        <View
          style={[
            styles.noCardChild,
            styles.noCardChildLayout,
            styles.groupPosition,
          ]}
        />
        <View style={[styles.group, styles.groupLayout, styles.groupPosition]}>
          <Image
            style={[styles.vectorIcon, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
          <Pressable
            style={[styles.groupChild, styles.groupChildBg, styles.groupLayout]}
            onPress={() => navigation.navigate("NoCard5")}
          />
        </View>
        <Text style={[styles.scanning, styles.groupPosition]}>Scanning...</Text>
        <Image
          style={styles.qrCodeCosE1Icon}
          resizeMode="cover"
          source={require("../assets/qr-code-cos-e-1.png")}
        />
        <View style={[styles.noCardItem, styles.groupChildBg]} />
        <Image
          style={[styles.noCardInner, styles.noCardInnerLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-65.png")}
        />
        <Image
          style={[styles.rectangleIcon, styles.noCardInnerLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-66.png")}
        />
        <Image
          style={[styles.noCardChild1, styles.cardChildPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-67.png")}
        />
        <Image
          style={[styles.noCardChild2, styles.cardChildPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-68.png")}
        />
        <View style={[styles.rectangleView, styles.noCardChildLayout]} />
        <ContainerMonkap
          carouselImageUrls={{ uri: "c14-house22@3x.png" }}
          carouselImageUrls2={require("../assets/group35.png")}
          carouselImageUrls3={require("../assets/group1.png")}
          carouselImageUrls4={{ uri: "group37@3x.png" }}
          propHeight="62.57%"
          onTabAreaPress={() => navigation.navigate("MoNkapHomeScreen2")}
          onTabAreaPress1={openTabArea1}
          onImageedit341319179892Press={() =>
            navigation.navigate("BottomTabsRoot", { screen: "LinkBank" })
          }
          onTabAreaPress2={() =>
            navigation.navigate("BottomTabsRoot", { screen: "MTNSplashScreen" })
          }
          onTabAreaPress3={() => navigation.navigate("OMoneySplashScreen")}
        />
      </View>

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
  noCardChildLayout: {
    width: 360,
    position: "absolute",
  },
  groupPosition: {
    left: "50%",
    top: "50%",
  },
  groupLayout: {
    height: 51,
    width: 55,
  },
  groupChildBg: {
    backgroundColor: Color.gainsboro_700,
    position: "absolute",
  },
  noCardInnerLayout: {
    height: 60,
    width: 60,
    top: 228,
    position: "absolute",
  },
  cardChildPosition: {
    top: 481,
    height: 60,
    width: 60,
    position: "absolute",
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
  noCardChild: {
    marginTop: -400,
    marginLeft: -180,
    backgroundColor: Color.blue_100,
    height: 94,
  },
  vectorIcon: {
    marginTop: -56.5,
    marginLeft: -62.5,
    width: 16,
    height: 13,
    position: "absolute",
  },
  groupChild: {
    top: -51,
    left: -55,
  },
  group: {
    marginTop: -321,
    marginLeft: -118,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    position: "absolute",
  },
  scanning: {
    marginTop: 324,
    marginLeft: -36,
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    fontFamily: FontFamily.poppins,
    color: Color.iOSKeyLabel,
    textAlign: "left",
    position: "absolute",
  },
  qrCodeCosE1Icon: {
    top: 256,
    left: 52,
    width: 255,
    height: 255,
    position: "absolute",
  },
  noCardItem: {
    top: 253,
    left: 51,
    width: 256,
    height: 258,
  },
  noCardInner: {
    left: 25,
  },
  rectangleIcon: {
    left: 272,
  },
  noCardChild1: {
    left: 272,
  },
  noCardChild2: {
    left: 25,
  },
  rectangleView: {
    top: 362,
    left: 0,
    backgroundColor: "#e10505",
    height: 17,
  },
  noCard: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default NoCard6;
