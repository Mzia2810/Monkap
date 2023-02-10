import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Text, Image, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import PaymentMethodContainer from "../components/PaymentMethodContainer";
import ContainerMonkap from "../components/ContainerMonkap";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const TargetSavingsPaymentMethods = () => {
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
      <View
        style={[styles.targetSavingsPaymentMethods, styles.groupIconLayout]}
      >
        <View
          style={[
            styles.targetSavingsPaymentMethodsChild,
            styles.groupPosition,
          ]}
        />
        <View
          style={[
            styles.monkapHasYourBackParent,
            styles.monkapLayout,
            styles.groupPosition,
          ]}
        >
          <Text
            style={[
              styles.monkapHasYour,
              styles.nextPosition,
              styles.monkapLayout,
            ]}
          >
            MoNkap Has Your Back
          </Text>
          <Text style={[styles.howWillYou, styles.nextPosition]}>
            How will you be making contributions?
          </Text>
        </View>
        <Pressable
          style={[styles.group, styles.groupLayout1, styles.groupPosition]}
          onPress={() => navigation.navigate("SavingFrequency")}
        >
          <Image
            style={[styles.vectorIcon, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
          <View style={[styles.groupChild, styles.groupLayout1]} />
        </Pressable>
        <View
          style={[
            styles.rectangleParent,
            styles.groupLayout,
            styles.groupItemLayout,
          ]}
        >
          <View
            style={[
              styles.groupItem,
              styles.groupLayout,
              styles.groupItemLayout,
            ]}
          />
          <Text style={[styles.next, styles.nextPosition]}>NEXT</Text>
          <Pressable
            style={[styles.groupInner, styles.groupLayout]}
            onPress={() => navigation.navigate("TargetSavingsMultiple")}
          />
        </View>
        <PaymentMethodContainer />
        <View style={styles.houseSvgrepoCom}>
          <Image
            style={[styles.groupIcon, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group32.png")}
          />
          <Text style={[styles.house, styles.houseClr]}>House</Text>
        </View>
        <ContainerMonkap
          carouselImageUrls={require("../assets/c14-house.png")}
          carouselImageUrls2={require("../assets/group.png")}
          carouselImageUrls3={require("../assets/group1.png")}
          carouselImageUrls4={require("../assets/group12.png")}
          onTabAreaPress={() => navigation.navigate("MoNkapHomeScreen2")}
          onTabAreaPress1={openTabArea3}
          onImageedit341319179892Press={() =>
            navigation.navigate("BottomTabsRoot", { screen: "LinkBank" })
          }
          onTabAreaPress2={() =>
            navigation.navigate("BottomTabsRoot", { screen: "MTNSplashScreen" })
          }
          onTabAreaPress3={() => navigation.navigate("OMoneySplashScreen")}
        />
        <View style={[styles.paymentAmount, styles.paymentLayout]}>
          <View
            style={[
              styles.paymentAmountChild,
              styles.rectangleViewBg,
              styles.paymentLayout,
            ]}
          />
          <View style={[styles.amountParent, styles.amountParentLayout]}>
            <Text style={styles.amount}>Amount</Text>
            <View
              style={[
                styles.rectangleView,
                styles.amountParentLayout,
                styles.rectangleViewBg,
              ]}
            />
            <Text style={styles.enterTheAmount}>Enter the amount</Text>
          </View>
          <Text style={[styles.howMuchWill, styles.houseClr]}>
            How much will you saving toward buying a house
          </Text>
        </View>
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
  groupIconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  groupPosition: {
    left: "50%",
    top: "50%",
  },
  monkapLayout: {
    width: 270,
    marginLeft: -135,
  },
  nextPosition: {
    color: Color.iOSKeyBackgroundHighlight,
    fontWeight: "700",
    fontFamily: FontFamily.gentiumBookBasic,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupLayout1: {
    height: 57,
    width: 47,
    position: "absolute",
  },
  groupLayout: {
    height: 45,
    position: "absolute",
  },
  groupItemLayout: {
    width: 305,
    height: 45,
    left: "50%",
    top: "50%",
  },
  houseClr: {
    color: Color.iOSKeyLabel,
    position: "absolute",
  },
  paymentLayout: {
    height: 129,
    width: 345,
    position: "absolute",
  },
  rectangleViewBg: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    borderRadius: Border.br_3xs,
    left: 0,
  },
  amountParentLayout: {
    width: 322,
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
  targetSavingsPaymentMethodsChild: {
    marginTop: -406,
    marginLeft: -188,
    width: 375,
    height: 100,
    backgroundColor: Color.blue_100,
    position: "absolute",
  },
  monkapHasYour: {
    marginTop: -29,
    fontSize: FontSize.size_6xl,
    height: 24,
    textAlign: "center",
  },
  howWillYou: {
    marginTop: 3,
    marginLeft: -128,
    fontSize: FontSize.size_base,
    width: 255,
    height: 26,
    textAlign: "center",
  },
  monkapHasYourBackParent: {
    marginTop: -376,
    height: 58,
    position: "absolute",
  },
  vectorIcon: {
    marginTop: -61.5,
    marginLeft: -56.5,
    width: 16,
    height: 13,
    position: "absolute",
  },
  groupChild: {
    top: -57,
    left: -47,
    backgroundColor: Color.gainsboro_700,
  },
  group: {
    marginTop: -328,
    marginLeft: -133,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
  },
  groupItem: {
    marginTop: -22.5,
    marginLeft: -152.5,
    borderRadius: Border.br_xs,
    backgroundColor: Color.blue_100,
  },
  next: {
    marginTop: -11.5,
    marginLeft: -24.5,
    fontSize: FontSize.size_4xl,
    textAlign: "left",
  },
  groupInner: {
    left: 1,
    width: 304,
    top: 0,
    backgroundColor: Color.gainsboro_700,
  },
  rectangleParent: {
    marginTop: 290,
    marginLeft: -152,
  },
  groupIcon: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
  },
  house: {
    top: 39,
    left: 9,
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.gentiumBasic,
    textAlign: "center",
  },
  houseSvgrepoCom: {
    width: "10.56%",
    top: 101,
    right: "44.72%",
    left: "44.72%",
    height: 38,
    position: "absolute",
  },
  paymentAmountChild: {
    top: 0,
  },
  amount: {
    fontSize: FontSize.size_lg,
    left: 0,
    color: Color.iOSKeyLabel,
    top: 0,
    textAlign: "left",
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  rectangleView: {
    top: 20,
    borderStyle: "solid",
    borderColor: "#0000ee",
    borderWidth: 0.3,
    height: 34,
  },
  enterTheAmount: {
    top: 31,
    left: 27,
    fontSize: FontSize.size_3xs,
    color: Color.silver_200,
    fontFamily: FontFamily.gentiumBasic,
    textAlign: "left",
    position: "absolute",
  },
  amountParent: {
    top: 56,
    height: 54,
    left: 12,
  },
  howMuchWill: {
    top: 11,
    fontSize: FontSize.size_xl,
    lineHeight: 16,
    width: 268,
    left: 12,
    textAlign: "left",
    fontFamily: FontFamily.gentiumBookBasic,
    color: Color.iOSKeyLabel,
  },
  paymentAmount: {
    top: 161,
    left: 7,
  },
  targetSavingsPaymentMethods: {
    backgroundColor: Color.whitesmoke_400,
    flex: 1,
    height: 800,
  },
});

export default TargetSavingsPaymentMethods;
