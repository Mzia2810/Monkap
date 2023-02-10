import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Text, Image, Modal, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import OrderCardContainer from "../components/OrderCardContainer";
import ContainerMonkap from "../components/ContainerMonkap";
import { Color, FontFamily, FontSize, Margin, Border } from "../GlobalStyles";

const DepositsTransfersPopup = () => {
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
      <View style={styles.depositsTransfersPopup}>
        <View
          style={[
            styles.depositsTransfersPopupChild,
            styles.childPosition,
            styles.childBg,
          ]}
        />
        <View
          style={[styles.depositsTransfersPopupItem, styles.depositsPosition1]}
        />
        <Text
          style={[
            styles.directDeposit,
            styles.directTypo,
            styles.recurringTypo,
          ]}
        >
          Direct Deposit
        </Text>
        <View style={[styles.rectangleParent, styles.childPosition]}>
          <View
            style={[styles.groupChild, styles.childPosition, styles.childBg]}
          />
          <Text
            style={[
              styles.recurring,
              styles.amountSpaceBlock,
              styles.directTypo,
              styles.recurringTypo,
            ]}
          >
            Recurring
          </Text>
        </View>
        <Text style={styles.depositsTransfers}>{`Deposits & Transfers`}</Text>
        <Image
          style={[styles.groupIcon, styles.groupPosition2]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <View style={[styles.parent, styles.groupPosition1]}>
          <Text
            style={[styles.text, styles.textPosition, styles.textSpaceBlock]}
          >
            041 215 663
          </Text>
          <Text style={[styles.swiftCode, styles.accountTypo]}>Swift Code</Text>
        </View>
        <View style={[styles.group, styles.groupPosition1]}>
          <Text
            style={[styles.text1, styles.textPosition, styles.textSpaceBlock]}
          >
            88 **** ****
          </Text>
          <Text style={[styles.account, styles.accountTypo]}>Account</Text>
        </View>
        <Text style={[styles.enableDirectDeposit, styles.directTypo]}>
          Enable Direct Deposit
        </Text>
        <Text style={[styles.autoAddEwallet, styles.offTypo]}>
          Auto Add eWallet
        </Text>
        <View style={[styles.amountParent, styles.parentPosition]}>
          <Text
            style={[styles.amount, styles.offTypo, styles.amountSpaceBlock]}
          >
            Amount
          </Text>
          <Text style={[styles.off, styles.offTypo]}>OFF</Text>
        </View>
        <View
          style={[styles.depositsTransfersPopupInner, styles.depositsPosition]}
        />
        <View style={[styles.rectangleView, styles.depositsPosition]} />
        <View
          style={[styles.depositsTransfersPopupChild1, styles.depositsPosition]}
        />
        <View style={[styles.autoAddEwalletParent, styles.parentPosition]}>
          <Text style={[styles.autoAddEwallet1, styles.textPosition]}>
            Auto Add eWallet
          </Text>
          <Text
            style={[styles.automaticallyAddFundsContainer, styles.accountTypo]}
          >
            <Text style={styles.automaticallyAddFunds}>
              Automatically add funds to the
            </Text>
            <Text style={styles.ewalletAppFrom}>
              eWallet App from your bank
            </Text>
          </Text>
          <View style={[styles.rectangleGroup, styles.groupPosition]}>
            <View style={[styles.groupItem, styles.groupPosition]} />
            <View style={[styles.groupInner, styles.groupPosition2]} />
          </View>
        </View>
        <View
          style={[
            styles.depositsTransfersPopupChild2,
            styles.depositsPosition1,
          ]}
        />
        <OrderCardContainer />
        <ContainerMonkap
          carouselImageUrls={require("../assets/c14-house.png")}
          carouselImageUrls2={require("../assets/group.png")}
          carouselImageUrls3={require("../assets/group1.png")}
          carouselImageUrls4={require("../assets/group2.png")}
          propOpacity={0.6}
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
  childPosition: {
    height: 42,
    width: 375,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  childBg: {
    backgroundColor: Color.whitesmoke_200,
    width: 375,
  },
  depositsPosition1: {
    marginTop: -406,
    width: 375,
    left: "50%",
    top: "50%",
    marginLeft: -188,
    position: "absolute",
  },
  directTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  recurringTypo: {
    color: Color.dimgray_200,
    textTransform: "uppercase",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
  },
  amountSpaceBlock: {
    marginTop: -12,
    marginLeft: -152.5,
  },
  groupPosition2: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupPosition1: {
    height: 50,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textPosition: {
    color: Color.gray_100,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textSpaceBlock: {
    marginTop: -25,
    color: Color.gray_100,
    fontSize: FontSize.size_4xl,
  },
  accountTypo: {
    color: Color.darkgray_100,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  offTypo: {
    color: Color.darkgray_300,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  parentPosition: {
    width: 305,
    marginLeft: -153,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  depositsPosition: {
    height: 1,
    backgroundColor: Color.whitesmoke_600,
    width: 305,
    marginLeft: -153,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupPosition: {
    height: 15,
    width: 26,
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
  depositsTransfersPopupChild: {
    marginTop: -306,
    marginLeft: -188,
  },
  depositsTransfersPopupItem: {
    backgroundColor: Color.blue_100,
    height: 100,
  },
  directDeposit: {
    marginTop: -297,
    marginLeft: -153,
  },
  groupChild: {
    marginTop: -21,
    marginLeft: -187.5,
  },
  recurring: {
    marginLeft: -152.5,
  },
  rectangleParent: {
    marginTop: -53,
    marginLeft: -188,
  },
  depositsTransfers: {
    marginTop: -359,
    marginLeft: -105,
    color: Color.iOSKeyBackgroundHighlight,
    fontWeight: "600",
    fontSize: FontSize.size_4xl,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupIcon: {
    marginTop: -350,
    width: 16,
    height: 13,
    marginLeft: -153,
  },
  text: {
    marginLeft: -56.5,
    fontWeight: "600",
  },
  swiftCode: {
    marginLeft: -37.5,
    marginTop: 4,
  },
  parent: {
    marginTop: -234,
    marginLeft: -57,
    width: 113,
  },
  text1: {
    marginLeft: -58.5,
    fontWeight: "500",
  },
  account: {
    marginLeft: -29.5,
    marginTop: 4,
  },
  group: {
    marginTop: -167,
    marginLeft: -61,
    width: 117,
  },
  enableDirectDeposit: {
    marginTop: -92,
    marginLeft: -86,
    color: "#00dc3e",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
  },
  autoAddEwallet: {
    marginTop: 104,
    fontSize: FontSize.size_xl,
    marginLeft: -153,
  },
  amount: {
    fontSize: FontSize.size_xl,
    marginLeft: -152.5,
  },
  off: {
    marginTop: -11,
    marginLeft: 126.5,
    fontSize: FontSize.size_base,
    color: Color.darkgray_300,
  },
  amountParent: {
    marginTop: 159,
    height: 24,
  },
  depositsTransfersPopupInner: {
    marginTop: -108,
  },
  rectangleView: {
    marginTop: 88,
  },
  depositsTransfersPopupChild1: {
    marginTop: 143,
  },
  autoAddEwallet1: {
    marginTop: -34.5,
    fontSize: FontSize.size_xl,
    marginLeft: -152.5,
    fontWeight: "500",
  },
  automaticallyAddFunds: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  ewalletAppFrom: {
    margin: Margin.m_3xs,
  },
  automaticallyAddFundsContainer: {
    marginTop: -7.5,
    marginLeft: -152.5,
  },
  groupItem: {
    marginLeft: -13,
    borderRadius: Border.br_md,
    backgroundColor: Color.silver_100,
    marginTop: -7.5,
  },
  groupInner: {
    marginTop: -5.5,
    marginLeft: -11,
    borderRadius: Border.br_6xl,
    width: 11,
    height: 11,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  rectangleGroup: {
    marginTop: 5.5,
    marginLeft: 126.5,
  },
  autoAddEwalletParent: {
    height: 69,
    marginTop: 4,
  },
  depositsTransfersPopupChild2: {
    backgroundColor: Color.gray_600,
    height: 812,
  },
  depositsTransfersPopup: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
});

export default DepositsTransfersPopup;
