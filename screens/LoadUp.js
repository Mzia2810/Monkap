import * as React from "react";
import { useState, useCallback } from "react";
import { Text, StyleSheet, Image, View, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import XAFContainer from "../components/XAFContainer";
import ContainerMonkap from "../components/ContainerMonkap";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const LoadUp = () => {
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
      <View style={styles.loadUp}>
        <Text
          style={[
            styles.ewallet,
            styles.text2Typo,
            styles.xaf000Typo,
            styles.text2Position,
          ]}
        >
          eWallet
        </Text>
        <Image
          style={[styles.loadUpChild, styles.loadChildPosition2]}
          resizeMode="cover"
          source={require("../assets/ellipse-111.png")}
        />
        <View style={[styles.loadUpItem, styles.loadPosition]} />
        <View
          style={[
            styles.loadUpInner,
            styles.loadUpInnerLayout,
            styles.groupPosition4,
            styles.groupPosition5,
          ]}
        >
          <View style={[styles.xaf000Position, styles.loadUpInnerLayout]}>
            <Text
              style={[
                styles.xaf000,
                styles.xaf000Position,
                styles.text2Typo,
                styles.xaf000Typo,
              ]}
            >
              XAF 0.00
            </Text>
            <Text
              style={[
                styles.totalBalance,
                styles.textTypo,
                styles.groupPosition4,
                styles.groupPosition5,
              ]}
            >
              Total Balance
            </Text>
          </View>
        </View>
        <View style={[styles.groupParent, styles.groupPosition3]}>
          <View style={[styles.rectangleParent, styles.rectanglePosition]}>
            <View style={[styles.groupChild, styles.groupPosition2]} />
            <Text
              style={[styles.loadUp1, styles.addTypo, styles.payOutPosition]}
            >
              Load Up
            </Text>
          </View>
          <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
            <View style={[styles.groupItem, styles.groupPosition2]} />
            <Text
              style={[styles.payOut, styles.addTypo, styles.payOutPosition]}
            >
              Pay Out
            </Text>
          </View>
        </View>
        <View style={[styles.groupContainer, styles.parentGroupPosition]}>
          <View style={[styles.parent, styles.parentGroupPosition]}>
            <Text
              style={[
                styles.text,
                styles.textTypo,
                styles.textClr,
                styles.groupPosition4,
                styles.groupPosition5,
              ]}
            >
              041 215 663
            </Text>
            <Text style={[styles.swiftCode, styles.accountPosition]}>
              Swift Code
            </Text>
          </View>
          <View
            style={[
              styles.groupWrapper,
              styles.groupLayout,
              styles.groupPosition4,
              styles.groupPosition5,
            ]}
          >
            <View style={[styles.groupPosition1, styles.groupLayout]}>
              <Text
                style={[styles.groupPosition1, styles.textTypo, styles.textClr]}
              >
                88 **** ****
              </Text>
              <Text style={[styles.account, styles.accountPosition]}>
                Account
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.groupView, styles.parentGroupPosition]}>
          <Image
            style={styles.groupInner}
            resizeMode="cover"
            source={require("../assets/group-22.png")}
          />
          <Text
            style={[
              styles.depositsTransfers,
              styles.addPosition,
              styles.linkBankTypo,
              styles.linkBankSpaceBlock,
            ]}
          >{`Deposits & Transfers`}</Text>
          <Image
            style={[
              styles.vectorIcon,
              styles.vectorIconPosition,
              styles.vectorIconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/vector148.png")}
          />
        </View>
        <View style={[styles.rectangleView, styles.loadChildPosition]} />
        <View style={[styles.loadUpChild1, styles.loadChildPosition]} />
        <View style={[styles.loadUpChild2, styles.loadChildPosition]} />
        <View style={[styles.loadUpChild3, styles.loadChildPosition]} />
        <View style={[styles.rectangleContainer, styles.parentGroupPosition]}>
          <View style={[styles.groupChild1, styles.groupChildLayout]} />
          <Text
            style={[
              styles.depositsTransfers,
              styles.addPosition,
              styles.linkBankTypo,
              styles.linkBankSpaceBlock,
            ]}
          >
            MTN MOMO
          </Text>
          <Image
            style={[
              styles.vectorIcon,
              styles.vectorIconPosition,
              styles.vectorIconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/vector148.png")}
          />
          <Image
            style={[styles.groupIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/group275.png")}
          />
        </View>
        <View style={[styles.loadUpChild4, styles.groupChildLayout]} />
        <Text
          style={[styles.orangeMoney, styles.addPosition, styles.linkBankTypo]}
        >
          Orange Money
        </Text>
        <Image
          style={[
            styles.vectorIcon2,
            styles.vectorIconPosition,
            styles.vectorIconLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/vector148.png")}
        />
        <View style={[styles.rectangleParent1, styles.parentGroupPosition]}>
          <View style={[styles.groupChild2, styles.groupChildLayout]} />
          <Text
            style={[
              styles.linkBank,
              styles.addPosition,
              styles.linkBankTypo,
              styles.linkBankSpaceBlock,
            ]}
          >
            Link Bank
          </Text>
          <Image
            style={[styles.vectorIcon3, styles.vectorIconPosition]}
            resizeMode="cover"
            source={require("../assets/vector149.png")}
          />
        </View>
        <View style={[styles.rectangleParent2, styles.parentGroupPosition]}>
          <View style={[styles.groupChild1, styles.groupChildLayout]} />
          <Text
            style={[
              styles.depositsTransfers,
              styles.addPosition,
              styles.linkBankTypo,
              styles.linkBankSpaceBlock,
            ]}
          >
            Limits
          </Text>
          <Image
            style={[
              styles.vectorIcon,
              styles.vectorIconPosition,
              styles.vectorIconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/vector148.png")}
          />
          <View style={styles.groupGroup}>
            <Image
              style={[styles.groupIcon1, styles.groupPosition]}
              resizeMode="cover"
              source={require("../assets/group276.png")}
            />
            <View style={[styles.groupChild4, styles.groupPosition]} />
          </View>
        </View>
        <View style={[styles.loadUpChild5, styles.loadChildPosition1]} />
        <Image
          style={[
            styles.groupIcon2,
            styles.groupIconLayout,
            styles.groupIconLayout1,
            styles.groupPosition4,
            styles.groupPosition5,
          ]}
          resizeMode="cover"
          source={require("../assets/group277.png")}
        />
        <Image
          style={[
            styles.loadUpChild6,
            styles.groupIconLayout,
            styles.groupIconLayout1,
            styles.groupPosition4,
            styles.groupPosition5,
          ]}
          resizeMode="cover"
          source={require("../assets/group-28.png")}
        />
        <Image
          style={[
            styles.xaf90Position,
            styles.groupIconLayout,
            styles.groupIconLayout1,
          ]}
          resizeMode="cover"
          source={require("../assets/group257.png")}
        />
        <Image
          style={[styles.loadUpChild7, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group-31.png")}
        />
        <Image
          style={[
            styles.groupIconLayout,
            styles.groupIconLayout1,
            styles.loadChildPosition2,
          ]}
          resizeMode="cover"
          source={require("../assets/group-30.png")}
        />
        <Image
          style={[styles.vectorIcon5, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/vector193.png")}
        />
        <View style={[styles.loadUpChild9, styles.loadChildPosition1]} />
        <View style={[styles.loadUpChild10, styles.loadPosition]} />
        <Text
          style={[
            styles.loadUp2,
            styles.text2Typo,
            styles.xaf000Typo,
            styles.text2Position,
          ]}
        >
          Load Up
        </Text>
        <XAFContainer
          xAF10="XAF 10"
          xAF20="XAF 20"
          xAF30="XAF 30"
          xAF40="XAF 40"
          propMarginTop={52}
          propMarginLeft={-19}
          propMarginLeft1={-20}
        />
        <XAFContainer
          xAF10="XAF 50"
          xAF20="XAF 60"
          xAF30="XAF 70"
          xAF40="XAF 80"
          propMarginTop={109}
          propMarginLeft={-21}
          propMarginLeft1={-21}
        />
        <View style={styles.groupParent1}>
          <View
            style={[styles.rectangleParent3, styles.rectangleParentPosition]}
          >
            <View
              style={[styles.groupChild5, styles.rectangleParentPosition]}
            />
            <Text style={[styles.xaf90, styles.xaf90Position, styles.xafTypo]}>
              XAF 90
            </Text>
          </View>
          <View
            style={[styles.rectangleParent4, styles.rectangleParentPosition]}
          >
            <View
              style={[styles.groupChild5, styles.rectangleParentPosition]}
            />
            <Text
              style={[
                styles.xaf100,
                styles.xafTypo,
                styles.groupPosition4,
                styles.groupPosition5,
              ]}
            >
              XAF 100
            </Text>
          </View>
          <View
            style={[styles.rectangleParent5, styles.rectangleParentPosition]}
          >
            <View
              style={[styles.groupChild5, styles.rectangleParentPosition]}
            />
            <Text
              style={[
                styles.xaf100,
                styles.xafTypo,
                styles.groupPosition4,
                styles.groupPosition5,
              ]}
            >
              XAF 150
            </Text>
          </View>
          <View
            style={[styles.rectangleParent6, styles.rectangleParentPosition]}
          >
            <View
              style={[styles.groupChild5, styles.rectangleParentPosition]}
            />
            <Text
              style={[styles.text2, styles.text2Typo, styles.text2Position]}
            >
              . . .
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.rectangleParent7,
            styles.rectangleLayout,
            styles.groupPosition4,
          ]}
        >
          <View style={[styles.groupChild9, styles.groupPosition3]} />
          <Text style={[styles.add, styles.addPosition, styles.addTypo]}>
            Add
          </Text>
          <Pressable
            style={[styles.rectanglePressable, styles.rectangleLayout]}
            onPress={() => navigation.navigate("LoadUp2")}
          />
        </View>
        <ContainerMonkap
          carouselImageUrls={{ uri: "c14-house1@3x.png" }}
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
  text2Typo: {
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    color: Color.gray_100,
  },
  xaf000Typo: {
    fontWeight: "600",
    fontFamily: FontFamily.poppins,
  },
  text2Position: {
    fontSize: FontSize.size_4xl,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  loadChildPosition2: {
    marginLeft: 128,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  loadPosition: {
    height: 454,
    marginTop: -48,
    width: 375,
    marginLeft: -188,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  loadUpInnerLayout: {
    height: 75,
    width: 175,
  },
  groupPosition4: {
    left: "50%",
    top: "50%",
  },
  groupPosition5: {
    position: "absolute",
    top: "50%",
  },
  xaf000Position: {
    marginLeft: -87.5,
    marginTop: -37.5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textTypo: {
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
  },
  groupPosition3: {
    height: 45,
    width: 305,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  rectanglePosition: {
    width: 145,
    marginTop: -22.5,
    height: 45,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupPosition2: {
    marginLeft: -72.5,
    borderRadius: Border.br_xs,
    width: 145,
    marginTop: -22.5,
    height: 45,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  addTypo: {
    fontSize: FontSize.size_lg,
    fontWeight: "600",
  },
  payOutPosition: {
    marginTop: -11.5,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.gray_100,
    fontFamily: FontFamily.poppins,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  parentGroupPosition: {
    height: 42,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textClr: {
    color: Color.gray_100,
    fontSize: FontSize.size_xl,
  },
  accountPosition: {
    color: Color.darkgray_100,
    marginTop: 3,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupLayout: {
    width: 94,
    height: 42,
  },
  addPosition: {
    color: Color.iOSKeyBackgroundHighlight,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  linkBankTypo: {
    fontSize: FontSize.size_2xl,
    color: Color.iOSKeyBackgroundHighlight,
    fontWeight: "500",
  },
  linkBankSpaceBlock: {
    marginTop: -13,
    fontSize: FontSize.size_2xl,
  },
  vectorIconPosition: {
    height: 14,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  vectorIconLayout: {
    width: 8,
    height: 14,
  },
  loadChildPosition: {
    height: 2,
    backgroundColor: Color.mediumblue_100,
    borderRadius: Border.br_2xl,
    marginLeft: -154,
    width: 305,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupChildLayout: {
    borderRadius: Border.br_xl,
    width: 42,
    height: 42,
    left: "50%",
    top: "50%",
    position: "absolute",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  iconPosition: {
    height: 18,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupPosition: {
    marginLeft: -7.68,
    width: 15,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  loadChildPosition1: {
    width: 375,
    marginLeft: -188,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupIconLayout: {
    height: 23,
    marginTop: 365,
  },
  groupIconLayout1: {
    width: 23,
    height: 23,
    marginTop: 365,
  },
  rectangleParentPosition: {
    width: 56,
    marginTop: -20,
    height: 40,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  xaf90Position: {
    marginLeft: -21,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  xafTypo: {
    fontSize: FontSize.size_xs,
    marginTop: -9,
    textAlign: "left",
    color: Color.gray_100,
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
  },
  rectangleLayout: {
    height: 46,
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
  ewallet: {
    marginTop: -362,
    marginLeft: -153,
  },
  loadUpChild: {
    marginTop: -359,
    width: 24,
    height: 24,
  },
  loadUpItem: {
    borderTopLeftRadius: Border.br_xs,
    borderTopRightRadius: Border.br_xs,
    backgroundColor: Color.blue_100,
  },
  xaf000: {
    fontSize: FontSize.size_10xl,
  },
  totalBalance: {
    marginTop: 13.5,
    marginLeft: -55.5,
    color: Color.darkgray_600,
  },
  loadUpInner: {
    marginTop: -298,
    marginLeft: -88,
  },
  groupChild: {
    backgroundColor: Color.gainsboro_200,
    borderRadius: Border.br_xs,
  },
  loadUp1: {
    marginLeft: -30.5,
  },
  rectangleParent: {
    marginLeft: -152.5,
  },
  groupItem: {
    backgroundColor: Color.gainsboro_300,
    borderRadius: Border.br_xs,
  },
  payOut: {
    marginLeft: -29.5,
  },
  rectangleGroup: {
    marginLeft: 7.5,
  },
  groupParent: {
    marginTop: -194,
    marginLeft: -153,
  },
  text: {
    marginLeft: -45,
    marginTop: -21,
  },
  swiftCode: {
    marginLeft: -32,
  },
  parent: {
    marginLeft: -119.5,
    width: 90,
    marginTop: -21,
  },
  groupPosition1: {
    marginLeft: -47,
    marginTop: -21,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  account: {
    marginLeft: -25,
  },
  groupWrapper: {
    marginLeft: 25.5,
    marginTop: -21,
  },
  groupContainer: {
    marginTop: -120,
    marginLeft: -120,
    width: 239,
  },
  groupInner: {
    width: 42,
    marginTop: -21,
    height: 42,
    marginLeft: -152.5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  depositsTransfers: {
    marginLeft: -94.5,
  },
  vectorIcon: {
    marginLeft: 144.5,
    marginTop: -6,
    width: 8,
  },
  groupView: {
    marginTop: -24,
    marginLeft: -154,
    width: 305,
  },
  rectangleView: {
    marginTop: 33,
  },
  loadUpChild1: {
    marginTop: 107,
  },
  loadUpChild2: {
    marginTop: 181,
  },
  loadUpChild3: {
    marginTop: 255,
  },
  groupChild1: {
    marginTop: -21,
    marginLeft: -152.5,
  },
  groupIcon: {
    marginLeft: -137.5,
    width: 13,
    marginTop: -9,
  },
  rectangleContainer: {
    marginTop: 50,
    marginLeft: -154,
    width: 305,
  },
  loadUpChild4: {
    marginTop: 124,
    marginLeft: -154,
  },
  orangeMoney: {
    marginTop: 132,
    marginLeft: -96,
  },
  vectorIcon2: {
    marginTop: 139,
    marginLeft: 143,
  },
  groupChild2: {
    marginLeft: -69,
    marginTop: -21,
  },
  linkBank: {
    marginLeft: -11,
  },
  vectorIcon3: {
    marginTop: -7,
    marginLeft: -55,
    width: 14,
  },
  rectangleParent1: {
    marginTop: 272,
    width: 138,
    marginLeft: -154,
  },
  groupIcon1: {
    marginTop: -2.99,
    height: 9,
  },
  groupChild4: {
    marginTop: -5.65,
    backgroundColor: Color.darkgray_100,
    height: 1,
    borderRadius: Border.br_2xl,
    marginLeft: -7.68,
  },
  groupGroup: {
    marginLeft: -139.5,
    height: 11,
    width: 15,
    marginTop: -6,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  rectangleParent2: {
    marginTop: 198,
    marginLeft: -154,
    width: 305,
  },
  loadUpChild5: {
    marginTop: 346,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {
      width: 25,
      height: 0,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 60,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  groupIcon2: {
    marginLeft: -153,
  },
  loadUpChild6: {
    marginLeft: -87,
  },
  loadUpChild7: {
    marginLeft: 45,
    width: 40,
    height: 23,
    marginTop: 365,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  vectorIcon5: {
    marginTop: 136,
    marginLeft: -137,
    width: 9,
  },
  loadUpChild9: {
    marginTop: -406,
    backgroundColor: Color.gray_600,
    height: 812,
  },
  loadUpChild10: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  loadUp2: {
    marginTop: -27,
    marginLeft: -41,
  },
  groupChild5: {
    marginLeft: -28,
    backgroundColor: Color.gainsboro_100,
    borderRadius: Border.br_xs,
  },
  xaf90: {
    marginTop: -9,
  },
  rectangleParent3: {
    marginLeft: -133,
    marginTop: -20,
  },
  xaf100: {
    marginLeft: -23,
    marginTop: -9,
  },
  rectangleParent4: {
    marginLeft: -63,
  },
  rectangleParent5: {
    marginLeft: 7,
  },
  text2: {
    marginTop: -19,
    marginLeft: -13,
    fontWeight: "800",
  },
  rectangleParent6: {
    marginLeft: 77,
  },
  groupParent1: {
    marginTop: 166,
    width: 266,
    height: 40,
    marginLeft: -133,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupChild9: {
    marginTop: -22,
    borderRadius: Border.br_xs,
    marginLeft: -152.5,
    backgroundColor: Color.blue_100,
  },
  add: {
    marginTop: -11,
    marginLeft: -15.5,
  },
  rectanglePressable: {
    top: 0,
    left: 0,
    backgroundColor: Color.gainsboro_700,
    width: 304,
  },
  rectangleParent7: {
    marginTop: 260,
    width: 305,
    marginLeft: -153,
  },
  loadUp: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
});

export default LoadUp;
