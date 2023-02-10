import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Image, Pressable, Text, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import NextContainer from "../components/NextContainer";
import ContainerMonkap from "../components/ContainerMonkap";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const NoCard2 = () => {
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
            styles.groupPosition,
            styles.vectorIconPosition,
          ]}
        />
        <View style={[styles.group, styles.groupLayout, styles.groupPosition]}>
          <Image
            style={[
              styles.vectorIcon,
              styles.groupPosition,
              styles.vectorIconPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
          <Pressable
            style={[styles.groupChild, styles.groupLayout]}
            onPress={() => navigation.navigate("NoCard8")}
          />
        </View>
        <NextContainer
          actionText="Next"
          onRectanglePressablePress={() => navigation.navigate("NoCard4")}
        />
        <NextContainer
          actionText="SCAN"
          propMarginTop={213}
          onRectanglePressablePress={() => navigation.navigate("NoCard6")}
        />
        <Text style={[styles.scanTheQr, styles.orGoToTypo]}>
          Scan the QR Code your debit card link to this bank
        </Text>
        <Text style={[styles.orGoTo, styles.orGoToTypo]}>
          Or go to Next to manually link to this bank
        </Text>
        <View style={[styles.yup, styles.yupLayout]}>
          <View style={[styles.yupChild, styles.yupLayout]} />
          <Text style={styles.yup1}>YUP</Text>
          <Image
            style={styles.x630wa1Icon}
            resizeMode="cover"
            source={require("../assets/1200x630wa-1.png")}
          />
        </View>
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
  groupPosition: {
    left: "50%",
    top: "50%",
  },
  vectorIconPosition: {
    position: "absolute",
    top: "50%",
  },
  groupLayout: {
    height: 51,
    width: 55,
    position: "absolute",
  },
  orGoToTypo: {
    width: 284,
    color: Color.gray_100,
    fontWeight: "600",
    fontSize: FontSize.size_4xl,
    marginLeft: -142,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  yupLayout: {
    height: 90,
    width: 90,
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
    width: 360,
    height: 94,
  },
  vectorIcon: {
    marginTop: -56.5,
    marginLeft: -62.5,
    width: 16,
    height: 13,
  },
  groupChild: {
    top: -51,
    left: -55,
    backgroundColor: Color.gainsboro_700,
  },
  group: {
    marginTop: -321,
    marginLeft: -118,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
  },
  scanTheQr: {
    marginTop: -258,
  },
  orGoTo: {
    marginTop: -69,
  },
  yupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_2xs,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 9,
    elevation: 9,
    shadowOpacity: 1,
  },
  yup1: {
    top: 74,
    left: 36,
    fontSize: FontSize.size_3xs,
    letterSpacing: -0.4,
    lineHeight: 10,
    fontWeight: "300",
    color: Color.iOSKeyLabel,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  x630wa1Icon: {
    top: 10,
    left: 18,
    borderRadius: Border.br_3xl,
    height: 55,
    width: 55,
    position: "absolute",
  },
  yup: {
    top: 221,
    left: 135,
  },
  noCard: {
    backgroundColor: Color.gainsboro_400,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default NoCard2;
