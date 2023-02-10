import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Image, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import ContainerMonkap from "../components/ContainerMonkap";
import PaymentSection from "../components/PaymentSection";
import ImageGallery from "../components/ImageGallery";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Pay = () => {
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
      <View style={styles.pay}>
        <ContainerMonkap
          carouselImageUrls={require("../assets/c14-house.png")}
          carouselImageUrls2={require("../assets/group.png")}
          carouselImageUrls3={require("../assets/group1.png")}
          carouselImageUrls4={require("../assets/group2.png")}
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
        <PaymentSection
          paymentText="PAY"
          propMarginLeft={-18}
          propMarginTop={-8}
          onGroupPress={() => navigation.navigate("MoNkapHomeScreen2")}
        />
        <ImageGallery
          carouselImageUrls={{ uri: "vector100@3x.png" }}
          carouselImageUrls2={{ uri: "vector101@3x.png" }}
          carouselImageUrls3={{ uri: "vector102@3x.png" }}
          carouselImageUrls4={{ uri: "vector103@3x.png" }}
          propLeft={16}
          propWidth={327}
          propBorderRadius={4}
        />
        <View style={styles.rectangleParent}>
          <View style={styles.groupChild} />
          <View style={styles.groupItem} />
          <Text style={[styles.utilities, styles.utilitiesTypo]}>
            Utilities
          </Text>
          <Pressable
            style={[styles.tabArea, styles.tabPosition]}
            onPress={() => navigation.navigate("Pay1")}
          />
          <Text style={[styles.schoolFee, styles.utilitiesTypo]}>
            School Fee
          </Text>
          <View style={[styles.tabArea1, styles.tabPosition]} />
        </View>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector137.png")}
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
  utilitiesTypo: {
    textAlign: "center",
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
    top: 0,
    height: 33,
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
  groupChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    left: 0,
    top: 0,
    height: 33,
    width: 336,
    position: "absolute",
  },
  groupItem: {
    borderTopRightRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_3xs,
    backgroundColor: Color.blue_100,
    width: 168,
    left: 168,
    top: 0,
    height: 33,
    position: "absolute",
  },
  utilities: {
    left: 55,
    color: Color.iOSKeyLabel,
  },
  tabArea: {
    left: 0,
  },
  schoolFee: {
    left: 211,
    fontWeight: "700",
    color: Color.iOSKeyBackgroundHighlight,
  },
  tabArea1: {
    left: 168,
    backgroundColor: Color.gold_400,
    borderBottomLeftRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
  },
  rectangleParent: {
    top: 221,
    left: 10,
    height: 33,
    width: 336,
    position: "absolute",
  },
  vectorIcon: {
    height: "4.25%",
    width: "8.06%",
    top: "4.25%",
    right: "59.17%",
    bottom: "91.5%",
    left: "32.78%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  pay: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Pay;
