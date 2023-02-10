import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Image, Pressable, Text, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import NextContainer from "../components/NextContainer";
import ContainerMonkap from "../components/ContainerMonkap";
import { Color, FontFamily, FontSize, Margin } from "../GlobalStyles";

const NoCard4 = () => {
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
            styles.groupCardPosition,
            styles.vectorCardPosition,
          ]}
        />
        <View
          style={[styles.group, styles.groupLayout, styles.groupCardPosition]}
        >
          <Image
            style={[
              styles.vectorIcon,
              styles.groupCardPosition,
              styles.vectorCardPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
          <Pressable
            style={[styles.groupChild, styles.groupLayout]}
            onPress={() => navigation.navigate("NoCard5")}
          />
        </View>
        <NextContainer
          actionText="Continue"
          propMarginLeft1={-35.5}
          onRectanglePressablePress={() => navigation.navigate("NoCard3")}
        />
        <View style={styles.warningParent}>
          <Text style={styles.warning}>Warning!</Text>
          <Text
            style={[
              styles.activeCheckingAccount,
              styles.makeSureYourPosition,
              styles.makeSureYourTypo,
            ]}
          >
            Active checking account or domestic debit card
          </Text>
        </View>
        <Image
          style={[
            styles.noCardItem,
            styles.groupCardPosition,
            styles.vectorCardPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/group-59.png")}
        />
        <View
          style={[
            styles.vectorParent,
            styles.groupCardPosition,
            styles.vectorCardPosition,
          ]}
        >
          <Image
            style={[styles.vectorIcon1, styles.vectorIconPosition]}
            resizeMode="cover"
            source={require("../assets/vector119.png")}
          />
          <Text
            style={[
              styles.makeSureYour,
              styles.makeSureYourPosition,
              styles.makeSureYourTypo,
            ]}
          >
            Make sure your phone number and your personal infomations are
            identical with the ones registered at the bank
          </Text>
        </View>
        <View
          style={[
            styles.vectorGroup,
            styles.groupCardPosition,
            styles.vectorCardPosition,
          ]}
        >
          <Image
            style={[styles.vectorIcon2, styles.vectorIconPosition]}
            resizeMode="cover"
            source={require("../assets/vector119.png")}
          />
          <Text
            style={[
              styles.helpingPreventFraud,
              styles.makeSureYourPosition,
              styles.makeSureYourTypo,
            ]}
          >
            Helping prevent fraud
          </Text>
        </View>
        <Text
          style={[
            styles.byClickingContinueyouContainer,
            styles.makeSureYourPosition,
          ]}
        >
          <Text style={styles.byClickingContinueyouAgr}>
            {`By clicking ‘Continue’,you agree that `}
            <Text style={styles.plaidsPrivacyPolicy}>
              Plaid’s Privacy Policy.
            </Text>
          </Text>
          <Text style={styles.appliesToYourUseOfTheirS}>
            <Text style={styles.plaidsPrivacyPolicy}>
              applies to your use of their services.
            </Text>
          </Text>
        </Text>
        <ContainerMonkap
          carouselImageUrls={{ uri: "c14-house22@3x.png" }}
          carouselImageUrls2={require("../assets/group35.png")}
          carouselImageUrls3={require("../assets/group1.png")}
          carouselImageUrls4={{ uri: "group47@3x.png" }}
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
  groupCardPosition: {
    left: "50%",
    top: "50%",
  },
  vectorCardPosition: {
    position: "absolute",
    top: "50%",
  },
  groupLayout: {
    height: 51,
    width: 55,
    position: "absolute",
  },
  makeSureYourPosition: {
    color: Color.darkgray_100,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  makeSureYourTypo: {
    fontSize: FontSize.size_base,
    color: Color.darkgray_100,
  },
  vectorIconPosition: {
    height: 12,
    width: 14,
    left: "50%",
    top: "50%",
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
  warning: {
    marginTop: -36,
    fontSize: FontSize.size_4xl,
    fontWeight: "600",
    color: Color.gray_100,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    marginLeft: -152.5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  activeCheckingAccount: {
    marginTop: -6,
    marginLeft: -152.5,
    fontSize: FontSize.size_base,
    width: 305,
  },
  warningParent: {
    marginTop: -205,
    height: 72,
    width: 305,
    marginLeft: -153,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  noCardItem: {
    marginTop: -292,
    width: 35,
    height: 35,
    marginLeft: -153,
  },
  vectorIcon1: {
    marginTop: -25.5,
    marginLeft: -151,
  },
  makeSureYour: {
    marginTop: -31.5,
    marginLeft: -128,
    width: 279,
  },
  vectorParent: {
    marginTop: -115,
    width: 302,
    height: 63,
    marginLeft: -153,
  },
  vectorIcon2: {
    marginTop: -4.5,
    marginLeft: -88,
  },
  helpingPreventFraud: {
    marginTop: -10.5,
    marginLeft: -65,
  },
  vectorGroup: {
    marginTop: -40,
    width: 176,
    height: 21,
    marginLeft: -153,
  },
  plaidsPrivacyPolicy: {
    textDecoration: "underline",
  },
  byClickingContinueyouAgr: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  appliesToYourUseOfTheirS: {
    margin: Margin.m_3xs,
  },
  byClickingContinueyouContainer: {
    marginTop: 239,
    fontSize: FontSize.size_3xs,
    marginLeft: -153,
  },
  noCard: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default NoCard4;
