import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Text, Image, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import RecentTractionsContainer from "../components/RecentTractionsContainer";
import DataContainer from "../components/DataContainer";
import WelcomeContainer from "../components/WelcomeContainer";
import GreetingContainer from "../components/GreetingContainer";
import MTNContainer from "../components/MTNContainer";
import MtnDataContainer from "../components/MtnDataContainer";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const MomoOnMonkapHomeSeeBalanc = () => {
  const [tabArea2Visible, setTabArea2Visible] = useState(false);
  const navigation = useNavigation();

  const openTabArea2 = useCallback(() => {
    setTabArea2Visible(true);
  }, []);

  const closeTabArea2 = useCallback(() => {
    setTabArea2Visible(false);
  }, []);
  return (
    <>
      <View style={styles.momoOnMonkapHomeSeeBalanc}>
        <View style={[styles.images1, styles.images1Position]} />
        <RecentTractionsContainer
          recentTransactionText="Recent Transactions"
          vectorLeft={58}
        />
        <View
          style={[styles.momoOnMonkapHomeSeeBalancChild, styles.momoLayout]}
        />
        <DataContainer
          onRectanglePressablePress={() =>
            navigation.navigate("MomoOnMonkapHomeHideBalance")
          }
        />
        <View
          style={[
            styles.rectangleParent,
            styles.parentLayout,
            styles.parentPosition,
          ]}
        >
          <View style={[styles.groupChild, styles.groupShadowBox]} />
          <Text
            style={[
              styles.request,
              styles.requestTypo,
              styles.requestTypo1,
              styles.requestPosition,
            ]}
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
            onPress={() => navigation.navigate("RequestMoneyRecent")}
          />
        </View>
        <View style={[styles.rectangleGroup, styles.groupPosition]}>
          <View style={[styles.groupChild, styles.groupShadowBox]} />
          <Text
            style={[
              styles.transfer,
              styles.requestTypo,
              styles.requestTypo1,
              styles.requestPosition,
            ]}
          >
            transfer
          </Text>
          <Image
            style={[styles.groupIcon, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group107.png")}
          />
          <Pressable
            style={[styles.groupItem, styles.groupShadowBox]}
            onPress={() => navigation.navigate("TransferRecent1")}
          />
        </View>
        <Pressable
          style={[
            styles.groupParent,
            styles.parentLayout,
            styles.parentPosition,
          ]}
          onPress={() => navigation.navigate("DepositMoneyRecent")}
        >
          <View
            style={[
              styles.rectangleContainer,
              styles.parentLayout,
              styles.images1Position,
            ]}
          >
            <View style={[styles.rectangleView, styles.groupShadowBox]} />
            <View style={styles.frameView} />
            <Image
              style={[styles.icons8RequestMoney5021, styles.icons8Layout]}
              resizeMode="cover"
              source={require("../assets/icons8requestmoney50-2.png")}
            />
          </View>
          <Text
            style={[
              styles.deposit,
              styles.depositPosition,
              styles.requestTypo,
              styles.requestTypo1,
            ]}
          >
            deposit
          </Text>
        </Pressable>
        <View style={[styles.groupView, styles.groupPosition]}>
          <View style={[styles.groupChild, styles.groupShadowBox]} />
          <Text
            style={[styles.cashOut, styles.requestTypo, styles.requestTypo1]}
          >
            Cash OUt
          </Text>
          <Image
            style={[styles.groupIcon, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group107.png")}
          />
          <Pressable
            style={[styles.groupItem, styles.groupShadowBox]}
            onPress={() => navigation.navigate("CashoutMoneyRecent")}
          />
        </View>
        <WelcomeContainer
          welcomeMessage="Welcome to Your MoMo @ MoNkap"
          propBackgroundColor="#feca18"
          propLeft={62}
          propWidth="unset"
          onTaAreaPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "MTNSplashScreen" })
          }
        />
        <View
          style={[styles.momoOnMonkapHomeSeeBalancItem, styles.momoLayout]}
        />
        <GreetingContainer />
        <View style={[styles.momoPay, styles.payLayout]}>
          <View style={[styles.momoPayChild, styles.momoPosition]} />
          <Text style={[styles.momoPay1, styles.requestTypo]}>MoMo pAY</Text>
          <View style={[styles.tabArea, styles.depositPosition]} />
          <Image
            style={[styles.paySvgrepoCom11, styles.payLayout]}
            resizeMode="cover"
            source={require("../assets/paysvgrepocom-1-11.png")}
          />
          <Image
            style={[styles.groupIcon2, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group191.png")}
          />
          <Pressable
            style={[styles.momoPayItem, styles.momoPosition]}
            onPress={() => navigation.navigate("MoMoPay1")}
          />
        </View>
        <MTNContainer
          carouselImageUrls={{ uri: "c14-house28@3x.png" }}
          carouselImageUrls2={{ uri: "group124@3x.png" }}
          carouselImageUrls3={{ uri: "group24@3x.png" }}
          propLeft={0}
          onTabAreaPress={() => navigation.navigate("MoNkapHomeScreen2")}
          onTabAreaPress1={openTabArea2}
          onTabAreaPress2={() => navigation.navigate("OMoneySplashScreen")}
          onImageedit341319179892Press={() =>
            navigation.navigate("BottomTabsRoot", { screen: "LinkBank" })
          }
        />
        <MtnDataContainer
          onTabAreaPress={() => navigation.navigate("MTNRechargeVoice")}
        />
        <View style={styles.momoOnMonkapHomeSeeBalancInner} />
      </View>

      <Modal animationType="fade" transparent visible={tabArea2Visible}>
        <View style={styles.tabArea2Overlay}>
          <Pressable style={styles.tabArea2Bg} onPress={closeTabArea2} />
          <MyActivity onClose={closeTabArea2} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  images1Position: {
    right: 0,
    left: 0,
    top: 0,
  },
  momoLayout: {
    height: 1,
    width: 337,
    borderTopWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.16)",
    borderStyle: "solid",
    left: 12,
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
  requestTypo: {
    textAlign: "center",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBasic,
  },
  requestTypo1: {
    textTransform: "uppercase",
    lineHeight: 23,
    letterSpacing: 0.6,
    fontSize: FontSize.size_xl,
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBasic,
  },
  requestPosition: {
    top: 11,
    lineHeight: 23,
    letterSpacing: 0.6,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  icons8Layout: {
    height: 25,
    width: 25,
    top: 8,
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition: {
    left: 190,
    right: 30,
    height: 40,
    position: "absolute",
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  depositPosition: {
    top: 12,
    position: "absolute",
  },
  payLayout: {
    height: 60,
    position: "absolute",
  },
  momoPosition: {
    height: 41,
    left: 2,
    top: 9,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: Border.br_xs,
    right: 0,
    position: "absolute",
  },
  tabArea2Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  tabArea2Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  images1: {
    backgroundColor: Color.whitesmoke_900,
    left: 0,
    position: "absolute",
    height: 800,
    right: 0,
  },
  momoOnMonkapHomeSeeBalancChild: {
    top: 491,
  },
  groupChild: {
    shadowColor: "rgba(0, 0, 0, 0.5)",
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
  },
  rectangleGroup: {
    top: 431,
  },
  rectangleView: {
    left: 7,
    shadowColor: "rgba(0, 0, 0, 0.5)",
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
    left: 29,
  },
  groupParent: {
    top: 504,
    left: 26,
  },
  cashOut: {
    top: 13,
    left: 21,
    position: "absolute",
  },
  groupView: {
    top: 505,
  },
  momoOnMonkapHomeSeeBalancItem: {
    top: 420,
  },
  momoPayChild: {
    shadowColor: "rgba(0, 0, 0, 0.5)",
  },
  momoPay1: {
    top: 17,
    left: 100,
    fontSize: FontSize.size_4xl,
    letterSpacing: 4.6,
    lineHeight: 29,
    textTransform: "capitalize",
    position: "absolute",
  },
  tabArea: {
    right: 2,
    backgroundColor: Color.gainsboro_700,
    height: 39,
    left: 0,
  },
  paySvgrepoCom11: {
    left: 24,
    width: 59,
    height: 60,
    top: 0,
    overflow: "hidden",
  },
  groupIcon2: {
    height: "46.67%",
    width: "10.85%",
    top: "26.67%",
    right: "6.76%",
    bottom: "26.67%",
    left: "82.39%",
  },
  momoPayItem: {
    shadowColor: "rgba(0, 0, 0, 0.94)",
  },
  momoPay: {
    top: 562,
    left: 29,
    right: 30,
    height: 60,
  },
  momoOnMonkapHomeSeeBalancInner: {
    top: 746,
    backgroundColor: Color.gold_100,
    width: 360,
    height: 54,
    display: "none",
    left: 0,
    position: "absolute",
  },
  momoOnMonkapHomeSeeBalanc: {
    backgroundColor: Color.darkgray_500,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default MomoOnMonkapHomeSeeBalanc;
