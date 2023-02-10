import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Image, Pressable, Text, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import NextContainer from "../components/NextContainer";
import ContainerMonkap from "../components/ContainerMonkap";
import { Color, FontFamily, FontSize, Margin } from "../GlobalStyles";

const NoCard9 = () => {
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
            styles.vectorCardPosition,
            styles.vectorCardPosition1,
          ]}
        />
        <View
          style={[styles.group, styles.groupLayout, styles.vectorCardPosition]}
        >
          <Image
            style={[
              styles.vectorIcon,
              styles.vectorCardPosition,
              styles.vectorCardPosition1,
            ]}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
          <Pressable
            style={[styles.groupChild, styles.groupLayout]}
            onPress={() =>
              navigation.navigate("BottomTabsRoot", { screen: "LinkBank" })
            }
          />
        </View>
        <NextContainer
          actionText="Continue"
          propMarginLeft1={-35.5}
          onRectanglePressablePress={() => navigation.navigate("NoCard8")}
        />
        <View style={styles.linkYourBankAccountParent}>
          <Text style={styles.linkYourBank}>Link your bank account</Text>
          <Text
            style={[
              styles.ewalletAppUsesContainer,
              styles.containerPosition,
              styles.containerTypo,
            ]}
          >
            <Text style={styles.ewalletAppUses}>
              eWallet App uses plaid to link your bank
            </Text>
            <Text style={styles.accountbyLinkingYour}>
              account.By linking your bank,Plaid will have access to your login
              details and data collected from your accounts, and will share your
              data with eWallet App for reasons including:
            </Text>
          </Text>
        </View>
        <Image
          style={[
            styles.noCardItem,
            styles.vectorCardPosition,
            styles.vectorCardPosition1,
          ]}
          resizeMode="cover"
          source={require("../assets/group-59.png")}
        />
        <View style={[styles.vectorParent, styles.vectorPosition]}>
          <Image
            style={[styles.vectorIcon1, styles.vectorIconPosition]}
            resizeMode="cover"
            source={require("../assets/vector119.png")}
          />
          <Text
            style={[
              styles.transferingMoneyBetweenContainer,
              styles.containerPosition,
              styles.containerTypo,
            ]}
          >
            <Text style={styles.ewalletAppUses}>
              Transfering money between your bank
            </Text>
            <Text style={styles.accountbyLinkingYour}>
              account and eWallet App
            </Text>
          </Text>
        </View>
        <View style={[styles.vectorGroup, styles.vectorPosition]}>
          <Image
            style={[styles.vectorIcon1, styles.vectorIconPosition]}
            resizeMode="cover"
            source={require("../assets/vector119.png")}
          />
          <Text
            style={[
              styles.transferingMoneyBetweenContainer,
              styles.containerPosition,
              styles.containerTypo,
            ]}
          >
            Making sure you have enough money to complete transactions
          </Text>
        </View>
        <View
          style={[
            styles.vectorContainer,
            styles.vectorCardPosition,
            styles.vectorCardPosition1,
          ]}
        >
          <Image
            style={[styles.vectorIcon3, styles.vectorIconPosition]}
            resizeMode="cover"
            source={require("../assets/vector119.png")}
          />
          <Text
            style={[
              styles.helpingPreventFraud,
              styles.containerPosition,
              styles.containerTypo,
            ]}
          >
            Helping prevent fraud
          </Text>
        </View>
        <Text
          style={[
            styles.byClickingContinueyouContainer,
            styles.containerPosition,
          ]}
        >
          <Text style={styles.ewalletAppUses}>
            {`By clicking ‘Continue’,you agree that `}
            <Text style={styles.plaidsPrivacyPolicy}>
              Plaid’s Privacy Policy.
            </Text>
          </Text>
          <Text style={styles.accountbyLinkingYour}>
            <Text style={styles.plaidsPrivacyPolicy}>
              applies to your use of their services.
            </Text>
          </Text>
        </Text>
        <ContainerMonkap
          carouselImageUrls={{ uri: "c14-house70@3x.png" }}
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
  vectorCardPosition: {
    left: "50%",
    top: "50%",
  },
  vectorCardPosition1: {
    position: "absolute",
    top: "50%",
  },
  groupLayout: {
    height: 51,
    width: 55,
    position: "absolute",
  },
  containerPosition: {
    color: Color.darkgray_100,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  containerTypo: {
    fontSize: FontSize.size_base,
    color: Color.darkgray_100,
  },
  vectorPosition: {
    height: 42,
    width: 302,
    marginLeft: -153,
    left: "50%",
    top: "50%",
    position: "absolute",
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
  linkYourBank: {
    marginTop: -78,
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
  ewalletAppUses: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  accountbyLinkingYour: {
    margin: Margin.m_3xs,
  },
  ewalletAppUsesContainer: {
    marginTop: -48,
    marginLeft: -152.5,
    fontSize: FontSize.size_base,
    width: 305,
  },
  linkYourBankAccountParent: {
    marginTop: -224,
    height: 156,
    width: 305,
    marginLeft: -153,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  noCardItem: {
    marginTop: -274,
    width: 35,
    height: 35,
    marginLeft: -153,
  },
  vectorIcon1: {
    marginTop: -15,
    marginLeft: -151,
  },
  transferingMoneyBetweenContainer: {
    marginTop: -21,
    marginLeft: -128,
    width: 279,
  },
  vectorParent: {
    marginTop: -48,
  },
  vectorGroup: {
    marginTop: 9,
  },
  vectorIcon3: {
    marginTop: -4.5,
    marginLeft: -88,
  },
  helpingPreventFraud: {
    marginTop: -10.5,
    marginLeft: -65,
  },
  vectorContainer: {
    marginTop: 66,
    width: 176,
    height: 21,
    marginLeft: -153,
  },
  plaidsPrivacyPolicy: {
    textDecoration: "underline",
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

export default NoCard9;
