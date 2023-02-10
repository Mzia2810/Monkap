import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Image, Text, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import AwesomeContainer from "../components/AwesomeContainer";
import HeaderContainer from "../components/HeaderContainer";
import MTNContainer from "../components/MTNContainer";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const MoMoPay = () => {
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
      <View style={styles.momoPay}>
        <View style={[styles.images1, styles.images1Position]} />
        <AwesomeContainer
          carImageUrl={{
            uri: "69691715-mtnmmlogogenericmtnmobilemoneylogo-113@3x.png",
          }}
        />
        <Image
          style={styles.momoPayChild}
          resizeMode="cover"
          source={require("../assets/line-2211.png")}
        />
        <HeaderContainer
          taAreaBackgroundColor="#feca18"
          onTaAreaPress={() =>
            navigation.navigate("MomoOnMonkapHomeHideBalance")
          }
        />
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View
            style={[
              styles.groupChild,
              styles.groupChildLayout,
              styles.images1Position,
            ]}
          />
          <View style={styles.groupItem} />
          <Text style={[styles.utilities, styles.utilitiesTypo]}>
            Utilities
          </Text>
          <Pressable
            style={[styles.tabArea, styles.tabPosition]}
            onPress={() => navigation.navigate("MoMoPay1")}
          />
          <Text style={[styles.schoolFee, styles.utilitiesTypo]}>
            School Fee
          </Text>
          <View style={[styles.tabArea1, styles.tabPosition]} />
        </View>
        <MTNContainer
          carouselImageUrls={{ uri: "c14-house56@3x.png" }}
          carouselImageUrls2={{ uri: "group124@3x.png" }}
          carouselImageUrls3={{ uri: "group157@3x.png" }}
          propLeft={0}
          onTabAreaPress={() => navigation.navigate("MoNkapHomeScreen2")}
          onTabAreaPress1={openTabArea3}
          onTabAreaPress2={() => navigation.navigate("OMoneySplashScreen")}
          onImageedit341319179892Press={() =>
            navigation.navigate("BottomTabsRoot", { screen: "LinkBank" })
          }
        />
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
  images1Position: {
    top: 0,
    left: 0,
  },
  groupChildLayout: {
    height: 33,
    width: 336,
    position: "absolute",
  },
  utilitiesTypo: {
    textAlign: "center",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBasic,
    lineHeight: 22,
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
    top: 7,
    position: "absolute",
  },
  tabPosition: {
    backgroundColor: Color.gold_400,
    borderBottomLeftRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
    width: 168,
    height: 33,
    top: 0,
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
  images1: {
    right: 0,
    backgroundColor: Color.whitesmoke_900,
    left: 0,
    position: "absolute",
    height: 800,
  },
  momoPayChild: {
    top: 201,
    width: 335,
    height: 2,
    left: 12,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    left: 0,
  },
  groupItem: {
    borderTopRightRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_3xs,
    backgroundColor: Color.gold_100,
    width: 168,
    left: 168,
    height: 33,
    top: 0,
    position: "absolute",
  },
  utilities: {
    left: 55,
  },
  tabArea: {
    left: 0,
  },
  schoolFee: {
    left: 213,
  },
  tabArea1: {
    left: 168,
    backgroundColor: Color.gold_400,
    borderBottomLeftRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
  },
  rectangleParent: {
    top: 208,
    left: 12,
  },
  momoPay: {
    backgroundColor: Color.darkgray_500,
    flex: 1,
    width: "100%",
    height: 800,
  },
});

export default MoMoPay;
