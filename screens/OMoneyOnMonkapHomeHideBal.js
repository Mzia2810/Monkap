import * as React from "react";
import { useState, useCallback } from "react";
import { Image, StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import RecentTractionsContainer from "../components/RecentTractionsContainer";
import ContainerBox from "../components/ContainerBox";
import WelcomeContainer from "../components/WelcomeContainer";
import OmoneyContainer from "../components/OmoneyContainer";
import MomoPayContainer from "../components/MomoPayContainer";
import ContainerMoMo from "../components/ContainerMoMo";
import HelloTawaContainer from "../components/HelloTawaContainer";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const OMoneyOnMonkapHomeHideBal = () => {
  const [tabArea4Visible, setTabArea4Visible] = useState(false);
  const navigation = useNavigation();

  const openTabArea4 = useCallback(() => {
    setTabArea4Visible(true);
  }, []);

  const closeTabArea4 = useCallback(() => {
    setTabArea4Visible(false);
  }, []);
  return (
    <>
      <View style={styles.omoneyOnMonkapHomeHideBal}>
        <Image
          style={[styles.fontistogoogleWalletIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/fontistogooglewallet.png")}
        />
        <View style={[styles.images1, styles.images1Position]} />
        <RecentTractionsContainer
          recentTransactionText="Recent Transactions"
          vectorLeft={58}
        />
        <View
          style={[styles.omoneyOnMonkapHomeHideBalChild, styles.omoneyLayout]}
        />
        <View style={[styles.tabArea, styles.tabLayout]} />
        <View style={[styles.tabArea1, styles.tabLayout]} />
        <View style={[styles.tabAreae, styles.tabLayout]} />
        <ContainerBox
          onRectanglePressablePress={() =>
            navigation.navigate("OMoneyOnMonkapHomeSeeBalance")
          }
        />
        <View
          style={[
            styles.rectangleParent,
            styles.parentLayout,
            styles.parentPosition,
          ]}
        >
          <View
            style={[
              styles.groupChild,
              styles.groupShadowBox,
              styles.groupChildShadowBox,
            ]}
          />
          <Text
            style={[styles.request, styles.requestTypo, styles.requestTypo1]}
          >
            Request
          </Text>
          <Image
            style={[styles.icons8RequestMoney502, styles.icons8Layout]}
            resizeMode="cover"
            source={require("../assets/icons8requestmoney50-2.png")}
          />
          <Pressable
            style={[styles.groupItem, styles.groupShadowBox]}
            onPress={() => navigation.navigate("OMoneyRequestMoneyFrequent")}
          />
        </View>
        <View style={[styles.rectangleGroup, styles.groupPosition]}>
          <View
            style={[
              styles.groupChild,
              styles.groupShadowBox,
              styles.groupChildShadowBox,
            ]}
          />
          <Text
            style={[styles.transfer, styles.requestTypo, styles.requestTypo1]}
          >
            Transfer
          </Text>
          <Image
            style={[styles.groupIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/group107.png")}
          />
          <Pressable
            style={[styles.groupItem, styles.groupShadowBox]}
            onPress={() => navigation.navigate("TransferRecent")}
          />
        </View>
        <Pressable
          style={[
            styles.groupParent,
            styles.parentLayout,
            styles.parentPosition,
          ]}
          onPress={() => navigation.navigate("OMDepositMoneyRecent")}
        >
          <View
            style={[
              styles.rectangleContainer,
              styles.parentLayout,
              styles.images1Position,
            ]}
          >
            <View
              style={[
                styles.rectangleView,
                styles.groupShadowBox,
                styles.groupChildShadowBox,
              ]}
            />
            <View style={styles.frameView} />
            <Image
              style={[styles.icons8RequestMoney5021, styles.icons8Layout]}
              resizeMode="cover"
              source={require("../assets/icons8requestmoney50-2.png")}
            />
          </View>
          <Text style={[styles.deposit, styles.requestTypo]}>deposit</Text>
        </Pressable>
        <View style={[styles.groupView, styles.groupPosition]}>
          <View
            style={[
              styles.groupChild,
              styles.groupShadowBox,
              styles.groupChildShadowBox,
            ]}
          />
          <Text
            style={[styles.cashOut, styles.requestTypo]}
          >{`cash out `}</Text>
          <Image
            style={[styles.groupIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/group107.png")}
          />
          <Pressable
            style={[styles.groupItem, styles.groupShadowBox]}
            onPress={() => navigation.navigate("OMCashoutMoneyRecent")}
          />
        </View>
        <WelcomeContainer
          welcomeMessage="Welcome to Your OMoney @ MoNkap"
          propWidth="unset"
          onTaAreaPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "MTNSplashScreen" })
          }
        />
        <View
          style={[styles.omoneyOnMonkapHomeHideBalItem, styles.omoneyLayout]}
        />
        <OmoneyContainer
          propLeft={3}
          onRectanglePressablePress={() =>
            navigation.navigate("OMRechargeVoice")
          }
        />
        <MomoPayContainer
          paymentMethod="OMoney pAY"
          paymentMethodImageUrl={require("../assets/paysvgrepocom-1-1.png")}
          paymentMethodLogoUrl={require("../assets/group108.png")}
          propLeft={86}
          onRectanglePressablePress={() => navigation.navigate("OMPay1")}
        />
        <ContainerMoMo
          carouselImageUrls={{ uri: "c14-house28@3x.png" }}
          carouselImageUrls2={{ uri: "group96@3x.png" }}
          carouselImageUrls3={require("../assets/group1.png")}
          onTabAreaPress={() => navigation.navigate("MoNkapHomeScreen2")}
          onTabAreaPress1={openTabArea4}
          onImageedit341319179892Press={() =>
            navigation.navigate("BottomTabsRoot", { screen: "LinkBank" })
          }
          onTabAreaPress2={() =>
            navigation.navigate("BottomTabsRoot", { screen: "MTNSplashScreen" })
          }
        />
        <HelloTawaContainer />
      </View>

      <Modal animationType="fade" transparent visible={tabArea4Visible}>
        <View style={styles.tabArea4Overlay}>
          <Pressable style={styles.tabArea4Bg} onPress={closeTabArea4} />
          <MyActivity onClose={closeTabArea4} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  images1Position: {
    right: 0,
    top: 0,
    left: 0,
  },
  omoneyLayout: {
    height: 1,
    width: 337,
    borderTopWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.16)",
    borderStyle: "solid",
    left: 12,
    position: "absolute",
  },
  tabLayout: {
    height: 39,
    backgroundColor: Color.gainsboro_700,
    position: "absolute",
  },
  parentLayout: {
    height: 40,
    position: "absolute",
  },
  parentPosition: {
    right: 187,
    height: 40,
  },
  groupShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: Border.br_xs,
    height: 40,
    right: 0,
    top: 0,
    position: "absolute",
  },
  groupChildShadowBox: {
    shadowColor: "rgba(0, 0, 0, 0.5)",
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: Border.br_xs,
  },
  requestTypo: {
    textAlign: "center",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBasic,
    textTransform: "uppercase",
    lineHeight: 23,
    letterSpacing: 0.6,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  requestTypo1: {
    top: 11,
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBasic,
    textTransform: "uppercase",
    lineHeight: 23,
    letterSpacing: 0.6,
    fontSize: FontSize.size_xl,
  },
  icons8Layout: {
    height: 25,
    width: 25,
    top: 8,
    overflow: "hidden",
    position: "absolute",
  },
  groupPosition: {
    left: 190,
    right: 30,
    height: 40,
    position: "absolute",
  },
  tabArea4Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  tabArea4Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  fontistogoogleWalletIcon: {
    top: 388,
    left: 168,
    width: 24,
    height: 24,
  },
  images1: {
    backgroundColor: Color.whitesmoke_900,
    left: 0,
    position: "absolute",
    height: 800,
  },
  omoneyOnMonkapHomeHideBalChild: {
    top: 491,
  },
  tabArea: {
    top: 574,
    right: 29,
    left: 32,
  },
  tabArea1: {
    top: 585,
    right: 218,
    left: 33,
  },
  tabAreae: {
    top: 583,
    right: 26,
    left: 225,
  },
  groupChild: {
    left: 0,
  },
  request: {
    left: 22,
  },
  icons8RequestMoney502: {
    left: 106,
  },
  groupItem: {
    shadowColor: "rgba(0, 0, 0, 0.94)",
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: Border.br_xs,
    left: 0,
  },
  rectangleParent: {
    top: 430,
    left: 33,
  },
  transfer: {
    left: 23,
  },
  groupIcon: {
    height: "58.75%",
    width: "15.89%",
    top: "22.5%",
    right: "4.11%",
    bottom: "18.75%",
    left: "80%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  rectangleGroup: {
    top: 431,
  },
  rectangleView: {
    left: 7,
  },
  frameView: {
    top: 1,
    left: 0,
    position: "absolute",
  },
  icons8RequestMoney5021: {
    left: 113,
  },
  rectangleContainer: {
    left: 0,
  },
  deposit: {
    top: 12,
    left: 30,
  },
  groupParent: {
    top: 504,
    left: 26,
  },
  cashOut: {
    top: 13,
    left: 21,
  },
  groupView: {
    top: 505,
  },
  omoneyOnMonkapHomeHideBalItem: {
    top: 420,
  },
  omoneyOnMonkapHomeHideBal: {
    backgroundColor: Color.darkgray_500,
    flex: 1,
    width: "100%",
    height: 800,
  },
});

export default OMoneyOnMonkapHomeHideBal;
