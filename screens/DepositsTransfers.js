import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Image, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import ContainerMonkap from "../components/ContainerMonkap";
import { Color, FontSize, FontFamily, Border, Margin } from "../GlobalStyles";

const DepositsTransfers = () => {
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
      <View style={styles.depositsTransfers}>
        <View style={styles.depositsTransfersChild} />
        <Text
          style={[styles.depositsTransfers1, styles.nextTypo]}
        >{`Deposits & Transfers`}</Text>
        <Text style={[styles.howOftenWouldContainer, styles.nextPosition]}>
          <Text style={styles.howOftenWould}>How often would you like</Text>
          <Text style={styles.toAddEwallet}>to add eWallet?</Text>
        </Text>
        <View style={[styles.rectangleParent, styles.rectanglePosition]}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <Text style={styles.daily}>Daily</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
          <View style={styles.groupPosition} />
          <Text style={[styles.weekly, styles.weeklyTypo]}>Weekly</Text>
        </View>
        <View style={[styles.rectangleContainer, styles.rectanglePosition]}>
          <View style={styles.groupPosition} />
          <Text style={[styles.monthly, styles.weeklyTypo]}>Monthly</Text>
        </View>
        <View style={[styles.groupView, styles.viewLayout]}>
          <View style={[styles.rectangleView, styles.viewLayout]} />
          <Text style={[styles.next, styles.nextPosition, styles.nextTypo]}>
            Next
          </Text>
          <Pressable
            style={[styles.rectanglePressable, styles.viewLayout]}
            onPress={() => navigation.navigate("DailyTransferAmount")}
          />
        </View>
        <View style={[styles.group, styles.groupLayout, styles.groupPosition1]}>
          <Image
            style={[styles.vectorIcon, styles.groupPosition1]}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
          <View style={[styles.groupChild1, styles.groupLayout]} />
        </View>
        <ContainerMonkap
          carouselImageUrls={require("../assets/c14-house.png")}
          carouselImageUrls2={require("../assets/group.png")}
          carouselImageUrls3={require("../assets/group1.png")}
          carouselImageUrls4={require("../assets/group12.png")}
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
  nextTypo: {
    textAlign: "left",
    color: Color.iOSKeyBackgroundHighlight,
    fontWeight: "600",
  },
  nextPosition: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppins,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  rectanglePosition: {
    height: 40,
    width: 305,
    marginLeft: -153,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupPosition: {
    backgroundColor: Color.whitesmoke_500,
    marginTop: -20,
    borderRadius: Border.br_xs,
    marginLeft: -152.5,
    height: 40,
    width: 305,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  weeklyTypo: {
    color: Color.gray_100,
    fontWeight: "500",
    marginTop: -12,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  viewLayout: {
    height: 45,
    position: "absolute",
  },
  groupLayout: {
    height: 58,
    width: 66,
    position: "absolute",
  },
  groupPosition1: {
    left: "50%",
    top: "50%",
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
  depositsTransfersChild: {
    marginTop: -406,
    marginLeft: -188,
    width: 375,
    height: 100,
    backgroundColor: Color.blue_100,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  depositsTransfers1: {
    marginTop: -361,
    marginLeft: -105,
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.poppins,
    color: Color.iOSKeyBackgroundHighlight,
    fontWeight: "600",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  howOftenWould: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  toAddEwallet: {
    margin: Margin.m_3xs,
  },
  howOftenWouldContainer: {
    marginTop: -239,
    marginLeft: -93,
    color: Color.darkgray_100,
    textAlign: "center",
  },
  groupChild: {
    borderStyle: "solid",
    borderColor: "#0000ee",
    borderWidth: 1,
  },
  daily: {
    marginLeft: -18.5,
    color: Color.blue_100,
    fontWeight: "500",
    marginTop: -12,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  rectangleParent: {
    marginTop: -172,
  },
  weekly: {
    marginLeft: -27.5,
  },
  rectangleGroup: {
    marginTop: -112,
  },
  monthly: {
    marginLeft: -30.5,
  },
  rectangleContainer: {
    marginTop: -52,
  },
  rectangleView: {
    marginTop: -22.5,
    borderRadius: Border.br_xs,
    marginLeft: -152.5,
    height: 45,
    width: 305,
    backgroundColor: Color.blue_100,
    left: "50%",
    top: "50%",
  },
  next: {
    marginTop: -11.5,
    marginLeft: -17.5,
    color: Color.iOSKeyBackgroundHighlight,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
  },
  rectanglePressable: {
    top: 0,
    left: 1,
    width: 304,
    backgroundColor: Color.gainsboro_700,
  },
  groupView: {
    marginTop: 8,
    width: 305,
    marginLeft: -153,
    height: 45,
    left: "50%",
    top: "50%",
  },
  vectorIcon: {
    marginTop: -65,
    marginLeft: -72,
    width: 16,
    height: 13,
    position: "absolute",
    left: "50%",
    top: "50%",
  },
  groupChild1: {
    top: -58,
    left: -66,
    backgroundColor: Color.gainsboro_700,
  },
  group: {
    marginTop: -316,
    marginLeft: -114,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
  },
  depositsTransfers: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default DepositsTransfers;
