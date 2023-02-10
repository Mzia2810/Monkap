import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Image, Text, Pressable, Modal } from "react-native";
import SelectFromContactsNew from "../components/SelectFromContactsNew";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import RecentTransactionsContainer from "../components/RecentTransactionsContainer";
import RecipientContainer from "../components/RecipientContainer";
import SendButton from "../components/SendButton";
import ReasonContainer from "../components/ReasonContainer";
import MoneyContainer from "../components/MoneyContainer";
import ContainerMoMo from "../components/ContainerMoMo";
import HelloTawaContainer from "../components/HelloTawaContainer";
import SendMoneyReviewCodeHiddenConta from "../components/SendMoneyReviewCodeHiddenConta";
import {
  Margin,
  Border,
  FontFamily,
  Color,
  FontSize,
  Padding,
} from "../GlobalStyles";

const TransferCaution = () => {
  const [icons8Contacts1Visible, setIcons8Contacts1Visible] = useState(false);
  const [tabArea3Visible, setTabArea3Visible] = useState(false);
  const navigation = useNavigation();

  const openIcons8Contacts1 = useCallback(() => {
    setIcons8Contacts1Visible(true);
  }, []);

  const closeIcons8Contacts1 = useCallback(() => {
    setIcons8Contacts1Visible(false);
  }, []);

  const openTabArea3 = useCallback(() => {
    setTabArea3Visible(true);
  }, []);

  const closeTabArea3 = useCallback(() => {
    setTabArea3Visible(false);
  }, []);
  return (
    <>
      <View style={[styles.transferCaution, styles.keysIconLayout]}>
        <View style={styles.images1} />
        <RecentTransactionsContainer />
        <Image
          style={[styles.transferCautionChild, styles.transferPosition]}
          resizeMode="cover"
          source={require("../assets/line-21.png")}
        />
        <Text style={styles.enterAmountTo}>Enter Amount to send</Text>
        <Text style={styles.recentReceipients}>Recent Receipients</Text>
        <Image
          style={[styles.transferCautionItem, styles.transferPosition]}
          resizeMode="cover"
          source={require("../assets/line-22.png")}
        />
        <RecipientContainer
          carouselImageUrls={require("../assets/ellipse-18.png")}
          carouselImageUrls2={require("../assets/ellipse-19.png")}
          carouselImageUrls3={{ uri: "ellipse-1542@3x.png" }}
          ellipse19Left={5}
          ellipse19Width={290}
          propLeft={128}
          propLeft1={0}
          propLeft2={56}
          propLeft3={186}
          propLeft4={266}
        />
        <View style={styles.transferCautionInner} />
        <Text style={styles.showFrequent}>Show Frequent</Text>
        <Pressable
          style={styles.tabArea}
          onPress={() => navigation.navigate("TransferRecent")}
        />
        <SendButton propBackgroundColor="#ea9311" />
        <ReasonContainer
          carImageUrl={{ uri: "icons8contacts-11@3x.png" }}
          propBorderColor="#feca18"
          propLeft={2}
          propFontWeight="700"
          propBorderColor1="#feca18"
          propFontWeight1="700"
          propBackgroundColor="#feca18"
          propBorderColor2="#feca18"
          propBorderColor3="#feca18"
          propFontWeight2="700"
          onIcons8Contacts1Press={openIcons8Contacts1}
        />
        <MoneyContainer
          transactionType="Send Money"
          onTaAreaPress={() => navigation.navigate("TransferFrequent")}
        />
        <ContainerMoMo
          carouselImageUrls={{ uri: "c14-house27@3x.png" }}
          carouselImageUrls2={{ uri: "group27@3x.png" }}
          carouselImageUrls3={require("../assets/group1.png")}
          onTabAreaPress={() => navigation.navigate("MoNkapHomeScreen2")}
          onTabAreaPress1={openTabArea3}
          onImageedit341319179892Press={() =>
            navigation.navigate("BottomTabsRoot", { screen: "LinkBank" })
          }
          onTabAreaPress2={() =>
            navigation.navigate("BottomTabsRoot", { screen: "MTNSplashScreen" })
          }
        />
        <HelloTawaContainer />
        <Pressable
          style={[styles.blurBgd, styles.blurBgdPosition]}
          onPress={() => navigation.navigate("TransferFrequent")}
        />
        <View style={[styles.omCaution2, styles.blurBgdPosition]}>
          <SendMoneyReviewCodeHiddenConta
            propBackgroundColor="#ea9311"
            propBackgroundColor1="#ea9311"
            propBorderColor="#ea9311"
            propBorderColor1="#ea9311"
          />
          <View style={[styles.numeric, styles.blurBgdPosition]}>
            <View style={styles.numericKeyboardLayout}>
              <View style={styles.row1}>
                <View style={[styles.keys, styles.keysFlexBox]}>
                  <Text
                    style={[
                      styles.number,
                      styles.numberFlexBox,
                      styles.numberTypo,
                    ]}
                  >
                    1
                  </Text>
                  <Text style={[styles.letters, styles.numberFlexBox]} />
                </View>
                <View style={[styles.keys, styles.ml6, styles.keysFlexBox]}>
                  <Text
                    style={[
                      styles.number,
                      styles.numberFlexBox,
                      styles.numberTypo,
                    ]}
                  >
                    2
                  </Text>
                  <Text style={[styles.letters, styles.numberFlexBox]}>
                    A b c
                  </Text>
                </View>
                <View style={[styles.keys, styles.ml6, styles.keysFlexBox]}>
                  <Text
                    style={[
                      styles.number,
                      styles.numberFlexBox,
                      styles.numberTypo,
                    ]}
                  >
                    3
                  </Text>
                  <Text style={[styles.letters, styles.numberFlexBox]}>
                    D E F
                  </Text>
                </View>
              </View>
              <View style={[styles.row1, styles.mt8]}>
                <View style={[styles.keys, styles.keysFlexBox]}>
                  <Text
                    style={[
                      styles.number,
                      styles.numberFlexBox,
                      styles.numberTypo,
                    ]}
                  >
                    4
                  </Text>
                  <Text style={[styles.letters, styles.numberFlexBox]}>
                    G H I
                  </Text>
                </View>
                <View style={[styles.keys, styles.ml6, styles.keysFlexBox]}>
                  <Text
                    style={[
                      styles.number,
                      styles.numberFlexBox,
                      styles.numberTypo,
                    ]}
                  >
                    5
                  </Text>
                  <Text style={[styles.letters, styles.numberFlexBox]}>
                    J K L
                  </Text>
                </View>
                <View style={[styles.keys, styles.ml6, styles.keysFlexBox]}>
                  <Text
                    style={[
                      styles.number,
                      styles.numberFlexBox,
                      styles.numberTypo,
                    ]}
                  >
                    6
                  </Text>
                  <Text style={[styles.letters, styles.numberFlexBox]}>
                    M N O
                  </Text>
                </View>
              </View>
              <View style={[styles.row1, styles.mt8]}>
                <View style={[styles.keys, styles.keysFlexBox]}>
                  <Text
                    style={[
                      styles.number,
                      styles.numberFlexBox,
                      styles.numberTypo,
                    ]}
                  >
                    7
                  </Text>
                  <Text style={[styles.letters, styles.numberFlexBox]}>
                    P Q R S
                  </Text>
                </View>
                <View style={[styles.keys, styles.ml6, styles.keysFlexBox]}>
                  <Text
                    style={[
                      styles.number,
                      styles.numberFlexBox,
                      styles.numberTypo,
                    ]}
                  >
                    8
                  </Text>
                  <Text style={[styles.letters, styles.numberFlexBox]}>
                    T U V
                  </Text>
                </View>
                <View style={[styles.keys, styles.ml6, styles.keysFlexBox]}>
                  <Text
                    style={[
                      styles.number,
                      styles.numberFlexBox,
                      styles.numberTypo,
                    ]}
                  >
                    9
                  </Text>
                  <Text style={[styles.letters, styles.numberFlexBox]}>
                    W X Y Z
                  </Text>
                </View>
              </View>
              <View style={[styles.row1, styles.mt8]}>
                <Image
                  style={[
                    styles.keysIcon,
                    styles.keysFlexBox,
                    styles.keysIconLayout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/keys.png")}
                />
                <View style={[styles.keys, styles.ml6, styles.keysFlexBox]}>
                  <Text
                    style={[
                      styles.number9,
                      styles.numberFlexBox,
                      styles.numberTypo,
                    ]}
                  >
                    0
                  </Text>
                </View>
                <Image
                  style={[
                    styles.keysIcon,
                    styles.ml6,
                    styles.keysFlexBox,
                    styles.keysIconLayout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/keys1.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={icons8Contacts1Visible}>
        <View style={styles.icons8Contacts1Overlay}>
          <Pressable
            style={styles.icons8Contacts1Bg}
            onPress={closeIcons8Contacts1}
          />
          <SelectFromContactsNew onClose={closeIcons8Contacts1} />
        </View>
      </Modal>

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
  ml6: {
    marginLeft: Margin.m_sm,
  },
  mt8: {
    marginTop: Margin.m_md,
  },
  keysIconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  transferPosition: {
    width: 326,
    left: 12,
    position: "absolute",
  },
  blurBgdPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  keysFlexBox: {
    borderRadius: Border.br_xs,
    alignSelf: "stretch",
    flex: 1,
  },
  numberFlexBox: {
    width: 112,
    alignItems: "center",
    fontFamily: FontFamily.sFProText,
    textTransform: "uppercase",
    left: 0,
    justifyContent: "center",
    display: "flex",
    color: Color.iOSKeyLabel,
    textAlign: "center",
    position: "absolute",
  },
  numberTypo: {
    fontSize: FontSize.size_6xl,
    width: 112,
    alignItems: "center",
    fontFamily: FontFamily.sFProText,
    textTransform: "uppercase",
  },
  icons8Contacts1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  icons8Contacts1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
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
    right: -2,
    left: 2,
    backgroundColor: Color.whitesmoke_900,
    top: 0,
    position: "absolute",
    height: 800,
  },
  transferCautionChild: {
    top: 265,
    height: 3,
  },
  enterAmountTo: {
    top: 532,
    left: 43,
    letterSpacing: 1.8,
    lineHeight: 20,
    fontFamily: FontFamily.gentiumBasic,
    color: Color.gray_2200,
    textAlign: "center",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  recentReceipients: {
    top: 267,
    left: 32,
    fontSize: FontSize.size_lg,
    letterSpacing: 1.9,
    lineHeight: 22,
    textAlign: "left",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  transferCautionItem: {
    top: 201,
    height: 2,
  },
  transferCautionInner: {
    top: 368,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.16)",
    borderTopWidth: 1,
    width: 327,
    height: 1,
    left: 12,
    position: "absolute",
  },
  showFrequent: {
    top: 269,
    left: 247,
    textDecoration: "underline",
    fontStyle: "italic",
    color: Color.blue_100,
    alignItems: "flex-end",
    width: 95,
    height: 17,
    justifyContent: "center",
    display: "flex",
    fontFamily: FontFamily.gentiumBookBasic,
    textAlign: "center",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  tabArea: {
    top: 283,
    left: 254,
    backgroundColor: Color.gainsboro_700,
    width: 78,
    height: 35,
    position: "absolute",
  },
  blurBgd: {
    top: 54,
    backgroundColor: Color.whitesmoke_1100,
    height: 746,
  },
  number: {
    top: 2,
  },
  letters: {
    bottom: 4,
    fontSize: FontSize.size_3xs,
    fontWeight: "800",
  },
  keys: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  row1: {
    height: 47,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  keysIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  number9: {
    height: 44,
    top: 0,
  },
  numericKeyboardLayout: {
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_xs,
    alignSelf: "stretch",
  },
  numeric: {
    top: 336,
    backgroundColor: Color.iOSKeyboardBackground,
    paddingTop: Padding.p_lg,
    paddingBottom: Padding.p_sm,
    display: "none",
  },
  omCaution2: {
    top: 164,
    height: 637,
  },
  transferCaution: {
    backgroundColor: Color.darkgray_500,
    height: 800,
    flex: 1,
    width: "100%",
  },
});

export default TransferCaution;
