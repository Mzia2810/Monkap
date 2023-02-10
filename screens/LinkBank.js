import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Text, Image, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import ContainerMonkap from "../components/ContainerMonkap";
import { FontFamily, FontSize, Border, Color, Margin } from "../GlobalStyles";

const LinkBank = () => {
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
      <View style={styles.linkBank}>
        <View
          style={[
            styles.linkBankChild,
            styles.groupPosition,
            styles.vectorIconPosition,
          ]}
        />
        <Text style={[styles.linkBank1, styles.bankPosition]}>Link Bank</Text>
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
            onPress={() => navigation.navigate("MoNkapHomeScreen2")}
          />
        </View>
        <Text style={[styles.addABankContainer, styles.bankPosition]}>
          <Text style={styles.addABank}>Add a bank using your debit</Text>
          <Text style={styles.card}>card</Text>
        </Text>
        <View style={styles.rectangleParent}>
          <View style={styles.groupItem} />
          <Text style={[styles.debitCardNumber, styles.cardTypo]}>
            Debit Card Number
          </Text>
        </View>
        <Pressable
          style={[
            styles.rectangleGroup,
            styles.rectangleLayout,
            styles.groupPosition,
          ]}
          onPress={() => navigation.navigate("NoCard9")}
        >
          <View style={[styles.groupInner, styles.groupInnerPosition]} />
          <Text style={[styles.next, styles.cardTypo]}>Next</Text>
          <View style={[styles.rectangleView, styles.rectangleLayout]} />
        </Pressable>
        <View style={[styles.rectangleContainer, styles.groupInnerPosition]}>
          <View style={[styles.groupChild1, styles.groupChild1Position]} />
          <Text style={[styles.noCard, styles.cardTypo]}>No Card?</Text>
          <Pressable
            style={[styles.rectanglePressable, styles.groupChild1Position]}
            onPress={() => navigation.navigate("NoCard9")}
          />
        </View>
        <ContainerMonkap
          carouselImageUrls={{ uri: "c14-house70@3x.png" }}
          carouselImageUrls2={require("../assets/group35.png")}
          carouselImageUrls3={require("../assets/group33.png")}
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
  groupPosition: {
    left: "50%",
    top: "50%",
  },
  vectorIconPosition: {
    position: "absolute",
    top: "50%",
  },
  bankPosition: {
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupLayout: {
    height: 55,
    width: 88,
    position: "absolute",
  },
  cardTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  rectangleLayout: {
    height: 49,
    width: 310,
    position: "absolute",
  },
  groupInnerPosition: {
    height: 45,
    width: 305,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupChild1Position: {
    borderWidth: 2,
    borderColor: "#0000ee",
    borderStyle: "solid",
    marginTop: -22.5,
    height: 45,
    borderRadius: Border.br_xs,
    marginLeft: -152.5,
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
  linkBankChild: {
    marginTop: -406,
    marginLeft: -188,
    width: 375,
    height: 100,
    backgroundColor: Color.blue_100,
  },
  linkBank1: {
    marginTop: -361,
    marginLeft: -40,
    fontSize: FontSize.size_2xl,
    fontWeight: "500",
    color: Color.iOSKeyBackgroundHighlight,
  },
  vectorIcon: {
    marginTop: -58.5,
    marginLeft: -105,
    width: 16,
    height: 13,
  },
  groupChild: {
    top: -55,
    left: -88,
    backgroundColor: Color.gainsboro_700,
  },
  group: {
    marginTop: -321,
    marginLeft: -92,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
  },
  addABank: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  card: {
    margin: Margin.m_3xs,
  },
  addABankContainer: {
    marginTop: -285,
    fontSize: FontSize.size_4xl,
    color: Color.gray_100,
    fontWeight: "600",
    marginLeft: -153,
  },
  groupItem: {
    marginTop: -20,
    backgroundColor: Color.whitesmoke_500,
    borderRadius: Border.br_xs,
    marginLeft: -152.5,
    height: 40,
    width: 305,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  debitCardNumber: {
    marginTop: -12,
    marginLeft: -122.5,
    color: Color.silver_200,
  },
  rectangleParent: {
    marginTop: -210,
    height: 40,
    width: 305,
    marginLeft: -153,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupInner: {
    marginTop: -20.5,
    marginLeft: -150,
    borderRadius: Border.br_xs,
    backgroundColor: Color.blue_100,
  },
  next: {
    marginTop: -9.5,
    marginLeft: -15,
    fontWeight: "600",
    color: Color.iOSKeyBackgroundHighlight,
  },
  rectangleView: {
    top: 0,
    left: 0,
    backgroundColor: Color.gainsboro_700,
  },
  rectangleGroup: {
    marginTop: 216,
    marginLeft: -158,
  },
  groupChild1: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  noCard: {
    marginTop: -11.5,
    marginLeft: -35.5,
    color: Color.blue_100,
    fontWeight: "600",
  },
  rectanglePressable: {
    backgroundColor: Color.gray_2300,
  },
  rectangleContainer: {
    marginTop: 285,
    marginLeft: -153,
  },
  linkBank: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
});

export default LinkBank;
