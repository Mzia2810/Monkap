import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Text, Image, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import ContainerMonkap from "../components/ContainerMonkap";
import { Color, FontFamily, FontSize, Margin, Border } from "../GlobalStyles";

const DepositsTransfers1 = () => {
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
      <View style={styles.depositsTransfers}>
        <View
          style={[
            styles.depositsTransfersChild,
            styles.childPosition,
            styles.childBg,
          ]}
        />
        <Text style={styles.directDeposit}>Direct Deposit</Text>
        <View style={[styles.rectangleParent, styles.childPosition]}>
          <View
            style={[styles.groupChild, styles.childPosition, styles.childBg]}
          />
          <Text style={[styles.recurring, styles.recurringPosition]}>
            Recurring
          </Text>
        </View>
        <View style={[styles.rectangleGroup, styles.groupPosition]}>
          <View style={[styles.groupItem, styles.groupPosition]} />
          <Text
            style={styles.depositsTransfers1}
          >{`Deposits & Transfers`}</Text>
          <Pressable
            style={[
              styles.group,
              styles.groupLayout,
              styles.groupParentPosition,
            ]}
            onPress={() => navigation.navigate("MoNkapHomeScreen2")}
          >
            <Image
              style={[
                styles.vectorIcon,
                styles.groupParentPosition,
                styles.vectorIconPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/vector.png")}
            />
            <View style={[styles.groupInner, styles.groupLayout]} />
          </Pressable>
        </View>
        <View style={[styles.parent, styles.parentPosition]}>
          <Text
            style={[styles.text, styles.textPosition, styles.textSpaceBlock]}
          >
            041 215 663
          </Text>
          <Text
            style={[
              styles.swiftCode,
              styles.accountTypo,
              styles.accountSpaceBlock,
            ]}
          >
            Swift Code
          </Text>
        </View>
        <View style={[styles.container, styles.parentPosition]}>
          <Text
            style={[styles.text1, styles.textPosition, styles.textSpaceBlock]}
          >
            88 **** ****
          </Text>
          <Text
            style={[
              styles.account,
              styles.accountTypo,
              styles.accountSpaceBlock,
            ]}
          >
            Account
          </Text>
        </View>
        <Text style={[styles.autoAddEwallet, styles.offPosition]}>
          Auto Add eWallet
        </Text>
        <View
          style={[
            styles.amountParent,
            styles.groupParentPosition,
            styles.vectorIconPosition,
          ]}
        >
          <Text style={[styles.amount, styles.offPosition]}>Amount</Text>
          <Text style={[styles.off, styles.offPosition]}>OFF</Text>
        </View>
        <View style={[styles.depositsTransfersItem, styles.depositsPosition]} />
        <View
          style={[styles.depositsTransfersInner, styles.depositsPosition]}
        />
        <View style={[styles.rectangleView, styles.depositsPosition]} />
        <View style={styles.autoAddEwalletParent}>
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
          <View style={[styles.rectangleContainer, styles.groupChild1Position]}>
            <View style={[styles.groupChild1, styles.groupChild1Position]} />
            <View
              style={[
                styles.groupChild2,
                styles.groupParentPosition,
                styles.vectorIconPosition,
              ]}
            />
          </View>
        </View>
        <View
          style={[
            styles.enableDirectDepositParent,
            styles.rectanglePressableLayout,
            styles.groupParentPosition,
          ]}
        >
          <Text style={[styles.enableDirectDeposit, styles.recurringPosition]}>
            Enable Direct Deposit
          </Text>
          <Pressable
            style={[styles.rectanglePressable, styles.rectanglePressableLayout]}
            onPress={() => navigation.navigate("DepositsTransfersPopup")}
          />
        </View>
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
  recurringPosition: {
    marginTop: -12,
    textAlign: "left",
    fontFamily: FontFamily.gentiumBasic,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupPosition: {
    height: 94,
    width: 360,
    marginLeft: -180,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupLayout: {
    height: 57,
    width: 47,
    position: "absolute",
  },
  groupParentPosition: {
    left: "50%",
    top: "50%",
  },
  vectorIconPosition: {
    position: "absolute",
    top: "50%",
  },
  parentPosition: {
    height: 45,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textPosition: {
    color: Color.gray_100,
    textAlign: "left",
    fontFamily: FontFamily.gentiumBasic,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textSpaceBlock: {
    marginTop: -22.5,
    color: Color.gray_100,
    fontSize: FontSize.size_4xl,
  },
  accountTypo: {
    color: Color.darkgray_100,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.gentiumBasic,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  accountSpaceBlock: {
    marginTop: 6.5,
    color: Color.darkgray_100,
  },
  offPosition: {
    color: Color.darkgray_300,
    textAlign: "left",
    fontFamily: FontFamily.gentiumBasic,
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
  groupChild1Position: {
    height: 15,
    width: 26,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  rectanglePressableLayout: {
    height: 54,
    width: 188,
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
  depositsTransfersChild: {
    marginTop: -306,
    marginLeft: -188,
  },
  directDeposit: {
    marginTop: -297,
    textAlign: "left",
    fontFamily: FontFamily.gentiumBasic,
    color: Color.dimgray_200,
    textTransform: "uppercase",
    fontSize: FontSize.size_lg,
    marginLeft: -153,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupChild: {
    marginTop: -21,
    marginLeft: -187.5,
  },
  recurring: {
    marginLeft: -152.5,
    color: Color.dimgray_200,
    textTransform: "uppercase",
    fontSize: FontSize.size_lg,
    marginTop: -12,
  },
  rectangleParent: {
    marginTop: -53,
    marginLeft: -188,
  },
  groupItem: {
    marginTop: -47,
    backgroundColor: Color.blue_100,
  },
  depositsTransfers1: {
    marginTop: -8,
    marginLeft: -92,
    color: Color.iOSKeyBackgroundHighlight,
    fontWeight: "700",
    fontSize: FontSize.size_4xl,
    textAlign: "left",
    fontFamily: FontFamily.gentiumBasic,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  vectorIcon: {
    marginTop: -61.5,
    marginLeft: -56.5,
    width: 16,
    height: 13,
  },
  groupInner: {
    top: -57,
    left: -47,
    backgroundColor: Color.gainsboro_700,
  },
  group: {
    marginTop: 34,
    marginLeft: -120,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
  },
  rectangleGroup: {
    marginTop: -400,
  },
  text: {
    marginLeft: -51,
    fontWeight: "700",
  },
  swiftCode: {
    marginLeft: -32,
  },
  parent: {
    marginTop: -234,
    marginLeft: -57,
    width: 102,
  },
  text1: {
    marginLeft: -50,
  },
  account: {
    marginLeft: -21,
  },
  container: {
    marginTop: -167,
    marginLeft: -61,
    width: 100,
  },
  autoAddEwallet: {
    marginTop: 104,
    fontSize: FontSize.size_xl,
    marginLeft: -153,
  },
  amount: {
    marginTop: -9.5,
    marginLeft: -150.5,
    fontSize: FontSize.size_xl,
  },
  off: {
    marginTop: -8.5,
    marginLeft: 128.5,
    fontSize: FontSize.size_base,
    color: Color.darkgray_300,
  },
  amountParent: {
    marginTop: 159,
    width: 301,
    height: 19,
    marginLeft: -153,
  },
  depositsTransfersItem: {
    marginTop: -108,
  },
  depositsTransfersInner: {
    marginTop: 88,
  },
  rectangleView: {
    marginTop: 143,
  },
  autoAddEwallet1: {
    marginTop: -29.5,
    fontSize: FontSize.size_xl,
    marginLeft: -152.5,
  },
  automaticallyAddFunds: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  ewalletAppFrom: {
    margin: Margin.m_3xs,
  },
  automaticallyAddFundsContainer: {
    marginTop: -2.5,
    marginLeft: -152.5,
  },
  groupChild1: {
    marginTop: -7.5,
    marginLeft: -13,
    borderRadius: Border.br_md,
    backgroundColor: Color.silver_100,
  },
  groupChild2: {
    marginTop: -5.5,
    marginLeft: -11,
    borderRadius: Border.br_6xl,
    width: 11,
    height: 11,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  rectangleContainer: {
    marginTop: 10.5,
    marginLeft: 126.5,
  },
  autoAddEwalletParent: {
    marginTop: 4,
    height: 59,
    width: 305,
    marginLeft: -153,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  enableDirectDeposit: {
    marginLeft: -89,
    color: Color.blue_100,
    fontSize: FontSize.size_xl,
  },
  rectanglePressable: {
    top: 0,
    left: 0,
    backgroundColor: Color.gainsboro_700,
  },
  enableDirectDepositParent: {
    marginTop: -107,
    marginLeft: -78,
  },
  depositsTransfers: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
});

export default DepositsTransfers1;
