import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Text, Image, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import RecentTractionsContainer from "../components/RecentTractionsContainer";
import DataContainer from "../components/DataContainer";
import WelcomeContainer from "../components/WelcomeContainer";
import OmoneyContainer from "../components/OmoneyContainer";
import ContainerMoMo from "../components/ContainerMoMo";
import HelloTawaContainer from "../components/HelloTawaContainer";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const OMoneyOnMonkapHomeSeeBala = () => {
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
      <View style={styles.omoneyOnMonkapHomeSeeBala}>
        <View style={[styles.images1, styles.images1Position]} />
        <RecentTractionsContainer
          recentTransactionText="Recent Tractions"
          vectorLeft={72}
        />
        <View
          style={[styles.omoneyOnMonkapHomeSeeBalaChild, styles.omoneyLayout]}
        />
        <DataContainer
          onRectanglePressablePress={() =>
            navigation.navigate("OMoneyOnMonkapHomeHideBalance")
          }
        />
        <View style={[styles.rectangleParent, styles.parentPosition]}>
          <View
            style={[
              styles.groupChild,
              styles.groupChildShadowBox,
              styles.childShadowBox,
            ]}
          />
          <Text
            style={[
              styles.requestTypo,
              styles.requestTypo1,
              styles.requestPosition,
              styles.requestPosition1,
            ]}
          >
            Request
          </Text>
          <Image
            style={styles.icons8RequestMoney502}
            resizeMode="cover"
            source={require("../assets/icons8requestmoney50-2.png")}
          />
          <Pressable
            style={[styles.groupItem, styles.groupChildShadowBox]}
            onPress={() => navigation.navigate("OMoneyRequestMoneyFrequent")}
          />
        </View>
        <View style={[styles.rectangleGroup, styles.groupPosition]}>
          <View
            style={[
              styles.groupChild,
              styles.groupChildShadowBox,
              styles.childShadowBox,
            ]}
          />
          <Text
            style={[
              styles.transfer,
              styles.requestTypo,
              styles.requestTypo1,
              styles.requestPosition1,
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
            style={[styles.groupItem, styles.groupChildShadowBox]}
            onPress={() => navigation.navigate("TransferRecent")}
          />
        </View>
        <Pressable
          style={[styles.groupParent, styles.parentPosition]}
          onPress={() => navigation.navigate("OMDepositMoneyRecent")}
        >
          <View style={[styles.rectangleContainer, styles.images1Position]}>
            <View
              style={[
                styles.groupChild,
                styles.groupChildShadowBox,
                styles.childShadowBox,
              ]}
            />
            <View style={styles.frameView} />
            <Image
              style={styles.icons8RequestMoney502}
              resizeMode="cover"
              source={require("../assets/icons8requestmoney50-2.png")}
            />
          </View>
          <Text
            style={[
              styles.depositPosition,
              styles.requestTypo,
              styles.requestTypo1,
              styles.requestPosition,
            ]}
          >
            deposit
          </Text>
        </Pressable>
        <View style={[styles.groupView, styles.groupPosition]}>
          <View
            style={[
              styles.groupChild,
              styles.groupChildShadowBox,
              styles.childShadowBox,
            ]}
          />
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
            style={[styles.groupItem, styles.groupChildShadowBox]}
            onPress={() => navigation.navigate("OMCashoutMoneyRecent")}
          />
        </View>
        <WelcomeContainer
          welcomeMessage="Welcome to Your OMoney @ MoNkap"
          propBackgroundColor="#ea9311"
          propLeft={55}
          propWidth={250}
          onTaAreaPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "MTNSplashScreen" })
          }
        />
        <View
          style={[styles.omoneyOnMonkapHomeSeeBalaItem, styles.omoneyLayout]}
        />
        <View style={[styles.momoPay, styles.payLayout]}>
          <View
            style={[
              styles.momoPayChild,
              styles.groupChildShadowBox,
              styles.childShadowBox,
            ]}
          />
          <Text style={[styles.omoneyPay, styles.requestTypo]}>OMoney pAY</Text>
          <Image
            style={[styles.paySvgrepoCom11, styles.payLayout]}
            resizeMode="cover"
            source={require("../assets/paysvgrepocom-1-1.png")}
          />
          <Image
            style={[styles.groupIcon2, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group131.png")}
          />
          <Pressable
            style={[styles.tabArea, styles.depositPosition]}
            onPress={() => navigation.navigate("OMPay1")}
          />
        </View>
        <OmoneyContainer
          propLeft={6}
          onRectanglePressablePress={() =>
            navigation.navigate("OMRechargeVoice")
          }
        />
        <ContainerMoMo
          carouselImageUrls={{ uri: "c14-house28@3x.png" }}
          carouselImageUrls2={{ uri: "group96@3x.png" }}
          carouselImageUrls3={require("../assets/group1.png")}
          onTabAreaPress={() => navigation.navigate("MoNkapHomeScreen2")}
          onTabAreaPress1={openTabArea2}
          onImageedit341319179892Press={() =>
            navigation.navigate("BottomTabsRoot", { screen: "LinkBank" })
          }
          onTabAreaPress2={() =>
            navigation.navigate("BottomTabsRoot", { screen: "MTNSplashScreen" })
          }
        />
        <HelloTawaContainer />
        <View style={styles.omoneyOnMonkapHomeSeeBalaInner} />
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
    position: "absolute",
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
  parentPosition: {
    left: 33,
    right: 187,
    height: 40,
    position: "absolute",
  },
  groupChildShadowBox: {
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
  childShadowBox: {
    shadowColor: "rgba(0, 0, 0, 0.5)",
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: Border.br_xs,
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
    left: 22,
    lineHeight: 23,
    letterSpacing: 0.6,
    fontSize: FontSize.size_xl,
  },
  requestPosition1: {
    top: 11,
    position: "absolute",
  },
  groupPosition: {
    left: 190,
    right: 30,
    height: 40,
    position: "absolute",
  },
  requestTypo: {
    textAlign: "center",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBasic,
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  payLayout: {
    height: 60,
    position: "absolute",
  },
  depositPosition: {
    top: 12,
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
    height: 800,
  },
  omoneyOnMonkapHomeSeeBalaChild: {
    top: 491,
  },
  groupChild: {
    height: 40,
    left: 0,
    top: 0,
  },
  icons8RequestMoney502: {
    top: 8,
    left: 106,
    width: 25,
    height: 25,
    position: "absolute",
    overflow: "hidden",
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
    height: 40,
    left: 0,
    top: 0,
  },
  rectangleParent: {
    top: 430,
    height: 40,
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
  frameView: {
    top: 1,
    left: 4,
    position: "absolute",
  },
  rectangleContainer: {
    height: 40,
    left: 0,
  },
  groupParent: {
    top: 504,
    height: 40,
  },
  cashOut: {
    top: 13,
    left: 21,
    position: "absolute",
  },
  groupView: {
    top: 505,
  },
  omoneyOnMonkapHomeSeeBalaItem: {
    top: 420,
  },
  momoPayChild: {
    top: 9,
    left: 2,
    height: 41,
  },
  omoneyPay: {
    top: 20,
    left: 88,
    fontSize: FontSize.size_4xl,
    letterSpacing: 4.6,
    lineHeight: 29,
    textTransform: "capitalize",
    position: "absolute",
  },
  paySvgrepoCom11: {
    left: 24,
    width: 59,
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
  tabArea: {
    right: 2,
    backgroundColor: Color.gainsboro_700,
    height: 39,
    left: 0,
  },
  momoPay: {
    top: 562,
    left: 29,
    right: 30,
    height: 60,
  },
  omoneyOnMonkapHomeSeeBalaInner: {
    top: 746,
    backgroundColor: Color.gold_100,
    width: 360,
    height: 54,
    display: "none",
    left: 0,
    position: "absolute",
  },
  omoneyOnMonkapHomeSeeBala: {
    backgroundColor: Color.darkgray_500,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default OMoneyOnMonkapHomeSeeBala;
