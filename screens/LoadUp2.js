import * as React from "react";
import { useState, useCallback } from "react";
import { Text, StyleSheet, View, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import ContainerWrapper from "../components/ContainerWrapper";
import ContainerMonkap from "../components/ContainerMonkap";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const LoadUp2 = () => {
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
      <View style={styles.loadUp2}>
        <Text style={[styles.addCash, styles.addPosition, styles.xaf200Typo]}>
          Add Cash
        </Text>
        <Text style={[styles.xaf200, styles.addPosition, styles.xaf200Typo]}>
          XAF 200
        </Text>
        <ContainerWrapper />
        <View style={[styles.rectangleParent, styles.groupChildPosition]}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Text style={[styles.add200, styles.addPosition]}>Add $200</Text>
        </View>
        <Pressable
          style={styles.loadUp2Child}
          onPress={() => navigation.navigate("MoNkapHomeScreen2")}
        />
        <ContainerMonkap
          carouselImageUrls={require("../assets/c14-house.png")}
          carouselImageUrls2={require("../assets/group.png")}
          carouselImageUrls3={require("../assets/group1.png")}
          carouselImageUrls4={require("../assets/group2.png")}
          propTop={755}
          propLeft={0}
          propColor="#0000ee"
          propHeight="62.56%"
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
  addPosition: {
    textAlign: "left",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  xaf200Typo: {
    color: Color.gray_100,
    fontFamily: FontFamily.gentiumBasic,
    fontWeight: "700",
    textAlign: "left",
    left: "50%",
    top: "50%",
  },
  groupChildPosition: {
    height: 45,
    width: 305,
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
  addCash: {
    marginTop: -320,
    marginLeft: -41,
    fontSize: FontSize.size_4xl,
  },
  xaf200: {
    marginTop: -115,
    marginLeft: -101,
    fontSize: FontSize.size_11xl,
  },
  groupChild: {
    marginTop: -22.5,
    marginLeft: -152.5,
    borderRadius: Border.br_xs,
    backgroundColor: Color.blue_100,
  },
  add200: {
    marginTop: -11.5,
    marginLeft: -36.5,
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    fontFamily: FontFamily.poppins,
    color: Color.iOSKeyBackgroundHighlight,
    textAlign: "left",
    left: "50%",
    top: "50%",
  },
  rectangleParent: {
    marginTop: 303,
    marginLeft: -153,
  },
  loadUp2Child: {
    top: 699,
    left: 29,
    backgroundColor: Color.gainsboro_700,
    width: 298,
    height: 49,
    position: "absolute",
  },
  loadUp2: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default LoadUp2;
