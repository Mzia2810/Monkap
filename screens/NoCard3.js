import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Image, Pressable, Text, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import NextContainer from "../components/NextContainer";
import ContainerMonkap from "../components/ContainerMonkap";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const NoCard3 = () => {
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
        <View style={[styles.noCardChild, styles.groupPosition1]} />
        <View
          style={[styles.group, styles.groupLayout1, styles.groupPosition1]}
        >
          <Image
            style={[styles.vectorIcon, styles.groupPosition1]}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
          <Pressable
            style={[styles.groupChild, styles.groupLayout1]}
            onPress={() => navigation.navigate("NoCard4")}
          />
        </View>
        <View style={styles.noCardItem} />
        <Text style={styles.pleaseFillIn}>
          Please fill in the infomation below
        </Text>
        <Text style={[styles.cardAccount, styles.cardPosition]}>
          Card / Account number
        </Text>
        <Text style={[styles.cardAccount1, styles.cardPosition]}>
          Card / Account name
        </Text>
        <View style={[styles.noCardInner, styles.noCardInnerBorder]} />
        <View style={[styles.rectangleView, styles.noCardInnerBorder]} />
        <NextContainer
          actionText="Link Bank"
          propMarginTop={40}
          propMarginLeft={-149}
          propMarginLeft1={-35.5}
          onRectanglePressablePress={() =>
            navigation.navigate("MoNkapHomeScreen2")
          }
        />
        <View
          style={[
            styles.rectangleParent,
            styles.groupLayout,
            styles.groupPosition,
          ]}
        >
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={[styles.text, styles.textTypo]}>1</Text>
        </View>
        <View
          style={[
            styles.rectangleGroup,
            styles.groupLayout,
            styles.groupPosition,
          ]}
        >
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={[styles.text, styles.textTypo]}>4</Text>
        </View>
        <View
          style={[
            styles.rectangleContainer,
            styles.groupLayout,
            styles.groupPosition,
          ]}
        >
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={[styles.text, styles.textTypo]}>7</Text>
        </View>
        <View
          style={[
            styles.groupView,
            styles.groupViewPosition,
            styles.groupPosition,
          ]}
        >
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={[styles.text, styles.textTypo]}>00</Text>
        </View>
        <View
          style={[styles.rectangleParent1, styles.rectangleParentPosition1]}
        >
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={[styles.text, styles.textTypo]}>2</Text>
        </View>
        <View
          style={[styles.rectangleParent2, styles.rectangleParentPosition1]}
        >
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={[styles.text, styles.textTypo]}>5</Text>
        </View>
        <View
          style={[styles.rectangleParent3, styles.rectangleParentPosition1]}
        >
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={[styles.text, styles.textTypo]}>8</Text>
        </View>
        <View style={[styles.rectangleParent4, styles.groupViewPosition]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={[styles.text7, styles.textTypo]}>0</Text>
          <Image
            style={styles.rectangleIcon}
            resizeMode="cover"
            source={require("../assets/rectangle-73.png")}
          />
        </View>
        <View style={[styles.rectangleParent5, styles.rectangleParentPosition]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={[styles.text, styles.textTypo]}>3</Text>
        </View>
        <View style={[styles.rectangleParent6, styles.rectangleParentPosition]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={[styles.text, styles.textTypo]}>6</Text>
        </View>
        <View style={[styles.rectangleParent7, styles.rectangleParentPosition]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={[styles.text, styles.textTypo]}>9</Text>
        </View>
        <Image
          style={[styles.plusSignIcon, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/plus-sign.png")}
        />
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
  groupPosition1: {
    left: "50%",
    top: "50%",
  },
  groupLayout1: {
    height: 51,
    width: 55,
    position: "absolute",
  },
  cardPosition: {
    marginLeft: -159,
    textAlign: "left",
    color: Color.gray_100,
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_sm,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  noCardInnerBorder: {
    width: 317,
    borderWidth: 0.5,
    borderColor: "#0000ee",
    borderStyle: "solid",
    left: 21,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  groupLayout: {
    height: 50,
    position: "absolute",
  },
  groupPosition: {
    left: 10,
    width: 101,
  },
  textTypo: {
    color: Color.iOSKeyLabel,
    fontWeight: "600",
    fontSize: FontSize.size_4xl,
    top: 14,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  groupViewPosition: {
    top: 678,
    height: 50,
    position: "absolute",
  },
  rectangleParentPosition1: {
    left: 130,
    height: 50,
    width: 101,
    position: "absolute",
  },
  rectangleParentPosition: {
    left: 250,
    height: 50,
    width: 101,
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
    position: "absolute",
  },
  vectorIcon: {
    marginTop: -56.5,
    marginLeft: -62.5,
    width: 16,
    height: 13,
    position: "absolute",
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
  noCardItem: {
    top: 196,
    left: 12,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 9,
    elevation: 9,
    shadowOpacity: 1,
    width: 335,
    height: 179,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  pleaseFillIn: {
    marginTop: -252,
    marginLeft: -163,
    textAlign: "left",
    color: Color.gray_100,
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_sm,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  cardAccount: {
    marginTop: -193,
  },
  cardAccount1: {
    marginTop: -112,
  },
  noCardInner: {
    top: 233,
    height: 35,
  },
  rectangleView: {
    top: 314,
    height: 36,
  },
  groupItem: {
    top: 0,
    left: 0,
    borderRadius: Border.br_2xs,
    backgroundColor: Color.gainsboro_300,
    width: 101,
  },
  text: {
    left: 47,
  },
  rectangleParent: {
    width: 101,
    top: 504,
  },
  rectangleGroup: {
    top: 562,
    width: 101,
  },
  rectangleContainer: {
    top: 620,
    width: 101,
  },
  groupView: {
    width: 101,
  },
  rectangleParent1: {
    top: 504,
  },
  rectangleParent2: {
    top: 562,
  },
  rectangleParent3: {
    top: 620,
  },
  text7: {
    left: 48,
  },
  rectangleIcon: {
    top: 6,
    left: 118,
    width: 96,
    height: 38,
    position: "absolute",
  },
  rectangleParent4: {
    left: 132,
    width: 214,
  },
  rectangleParent5: {
    top: 504,
  },
  rectangleParent6: {
    top: 562,
  },
  rectangleParent7: {
    top: 620,
  },
  plusSignIcon: {
    top: 679,
    left: 284,
    width: 50,
  },
  noCard: {
    backgroundColor: Color.whitesmoke_400,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default NoCard3;
