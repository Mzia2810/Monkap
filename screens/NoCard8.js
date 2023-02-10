import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Image, Pressable, Text, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import ContainerMonkap from "../components/ContainerMonkap";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const NoCard8 = () => {
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
        <Pressable
          style={[styles.group, styles.groupLayout, styles.groupPosition1]}
          onPress={() => navigation.navigate("NoCard9")}
        >
          <Image
            style={[styles.vectorIcon, styles.groupPosition1]}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
          <View style={[styles.groupChild, styles.groupLayout]} />
        </Pressable>
        <View style={styles.rectangleParent}>
          <View style={[styles.groupItem, styles.groupPosition]} />
          <Text style={styles.continue}>Continue</Text>
          <View style={[styles.groupInner, styles.groupPosition]} />
        </View>
        <Text style={styles.chooseTheBank}>
          Choose the bank you want to link your e-wallet to
        </Text>
        <View style={[styles.afriklandFirstBank, styles.bankLayout]}>
          <View
            style={[styles.afriklandFirstBankChild, styles.bankItemShadowBox]}
          />
          <Image
            style={[styles.download41, styles.downloadIconPosition]}
            resizeMode="cover"
            source={require("../assets/download-4-11.png")}
          />
          <Text
            style={[
              styles.afriklandFirstBank1,
              styles.bankTypo,
              styles.bankTypo1,
              styles.bankPosition,
            ]}
          >
            Afrikland first bank
          </Text>
          <Pressable
            style={[styles.afriklandFirstBankItem, styles.bankItemShadowBox]}
            onPress={() => navigation.navigate("NoCard5")}
          />
        </View>
        <View style={[styles.ccaBank, styles.bankLayout]}>
          <View
            style={[styles.afriklandFirstBankChild, styles.bankItemShadowBox]}
          />
          <Text
            style={[
              styles.ccaBank1,
              styles.bankTypo,
              styles.bankTypo1,
              styles.bankPosition,
            ]}
          >
            CCA Bank
          </Text>
          <Image
            style={[styles.download31, styles.downloadIconPosition]}
            resizeMode="cover"
            source={require("../assets/download-3-1.png")}
          />
          <Pressable
            style={[styles.ccaBankItem, styles.bankItemShadowBox]}
            onPress={() => navigation.navigate("NoCard")}
          />
        </View>
        <View style={[styles.cbcBank, styles.bankLayout]}>
          <View
            style={[styles.afriklandFirstBankChild, styles.bankItemShadowBox]}
          />
          <Text
            style={[
              styles.ccaBank1,
              styles.bankTypo,
              styles.bankTypo1,
              styles.bankPosition,
            ]}
          >
            CBC Bank
          </Text>
          <Image
            style={styles.download1Icon}
            resizeMode="cover"
            source={require("../assets/download-1.png")}
          />
          <Pressable
            style={[styles.ccaBankItem, styles.bankItemShadowBox]}
            onPress={() => navigation.navigate("NoCard1")}
          />
        </View>
        <View style={[styles.yup, styles.yupPosition]}>
          <View
            style={[styles.afriklandFirstBankChild, styles.bankItemShadowBox]}
          />
          <Text style={[styles.yup1, styles.bankTypo, styles.bankTypo1]}>
            YUP
          </Text>
          <Image
            style={[styles.x630wa1Icon, styles.downloadIconPosition]}
            resizeMode="cover"
            source={require("../assets/1200x630wa-1.png")}
          />
          <Pressable
            style={[styles.ccaBankItem, styles.bankItemShadowBox]}
            onPress={() => navigation.navigate("NoCard2")}
          />
        </View>
        <View style={[styles.ubc, styles.yupPosition]}>
          <View
            style={[styles.afriklandFirstBankChild, styles.bankItemShadowBox]}
          />
          <Text
            style={[styles.ubc1, styles.bankTypo, styles.bankTypo1]}
          >{`UBC `}</Text>
          <Image
            style={[styles.ubcPlc1Icon, styles.downloadIconPosition]}
            resizeMode="cover"
            source={require("../assets/ubcplc-1.png")}
          />
          <Pressable
            style={[styles.ccaBankItem, styles.bankItemShadowBox]}
            onPress={() => navigation.navigate("NoCard7")}
          />
        </View>
        <View style={[styles.more, styles.yupPosition]}>
          <View
            style={[styles.afriklandFirstBankChild, styles.bankItemShadowBox]}
          />
          <Text style={[styles.more1, styles.bankTypo]}>MORE</Text>
          <Image
            style={styles.plusSignIcon}
            resizeMode="cover"
            source={require("../assets/plus-sign1.png")}
          />
        </View>
        <ContainerMonkap
          carouselImageUrls={{ uri: "c14-house22@3x.png" }}
          carouselImageUrls2={require("../assets/group35.png")}
          carouselImageUrls3={require("../assets/group1.png")}
          carouselImageUrls4={{ uri: "group37@3x.png" }}
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
  groupLayout: {
    height: 51,
    width: 55,
    position: "absolute",
  },
  groupPosition: {
    borderRadius: Border.br_xs,
    marginLeft: -152.5,
    marginTop: -22.5,
    height: 45,
    width: 305,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  bankLayout: {
    height: 90,
    width: 90,
    top: 291,
    position: "absolute",
  },
  bankItemShadowBox: {
    shadowOpacity: 1,
    elevation: 9,
    shadowRadius: 9,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_2xs,
    top: 0,
    left: 0,
    height: 90,
    width: 90,
    position: "absolute",
  },
  downloadIconPosition: {
    top: 10,
    position: "absolute",
  },
  bankTypo: {
    color: Color.iOSKeyLabel,
    fontWeight: "300",
    lineHeight: 10,
    letterSpacing: -0.4,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  bankTypo1: {
    top: 74,
    fontWeight: "300",
    lineHeight: 10,
    letterSpacing: -0.4,
    fontSize: FontSize.size_3xs,
  },
  bankPosition: {
    left: 0,
    top: 74,
    width: 90,
  },
  yupPosition: {
    top: 415,
    height: 90,
    width: 90,
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
    width: 360,
    height: 94,
    backgroundColor: Color.blue_100,
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
  groupItem: {
    backgroundColor: Color.blue_100,
  },
  continue: {
    marginTop: -11.5,
    marginLeft: -35.5,
    fontSize: FontSize.size_lg,
    color: Color.iOSKeyBackgroundHighlight,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupInner: {
    backgroundColor: Color.blue_200,
  },
  rectangleParent: {
    marginTop: 283,
    marginLeft: -152,
    height: 45,
    width: 305,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  chooseTheBank: {
    marginTop: -258,
    marginLeft: -142,
    fontSize: FontSize.size_4xl,
    color: Color.gray_100,
    width: 284,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  afriklandFirstBankChild: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  download41: {
    left: 10,
    width: 71,
    height: 56,
  },
  afriklandFirstBank1: {
    height: 16,
  },
  afriklandFirstBankItem: {
    backgroundColor: Color.gainsboro_600,
  },
  afriklandFirstBank: {
    left: 26,
  },
  ccaBank1: {
    height: 12,
  },
  download31: {
    left: 13,
    width: 64,
    height: 64,
  },
  ccaBankItem: {
    backgroundColor: Color.gray_2300,
  },
  ccaBank: {
    left: 138,
  },
  download1Icon: {
    top: 8,
    left: 7,
    width: 77,
    height: 60,
    position: "absolute",
  },
  cbcBank: {
    left: 250,
  },
  yup1: {
    left: 36,
  },
  x630wa1Icon: {
    left: 18,
    borderRadius: Border.br_3xl,
    height: 55,
    width: 55,
    top: 10,
  },
  yup: {
    left: 26,
  },
  ubc1: {
    left: 35,
  },
  ubcPlc1Icon: {
    left: 16,
    width: 59,
    height: 59,
  },
  ubc: {
    left: 138,
  },
  more1: {
    top: 67,
    left: 33,
  },
  plusSignIcon: {
    top: 11,
    left: 20,
    width: 50,
    height: 50,
    position: "absolute",
  },
  more: {
    left: 251,
  },
  noCard: {
    backgroundColor: Color.gainsboro_400,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default NoCard8;
