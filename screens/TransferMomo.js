import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Image, Pressable, Text, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import SendMoneyMomoom from "../components/SendMoneyMomoom";
import AddContact from "../components/AddContact";
import ContainerMonkap from "../components/ContainerMonkap";
import ImageGallery from "../components/ImageGallery";
import DepositContainer from "../components/DepositContainer";
import RecentSection from "../components/RecentSection";
import RecipientSection from "../components/RecipientSection";
import RequestFormContainer from "../components/RequestFormContainer";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const TransferMomo = () => {
  const [tabArea1Visible, setTabArea1Visible] = useState(false);
  const [rectangle8Visible, setRectangle8Visible] = useState(false);
  const [icons8Contacts1Visible, setIcons8Contacts1Visible] = useState(false);
  const navigation = useNavigation();

  const openTabArea1 = useCallback(() => {
    setTabArea1Visible(true);
  }, []);

  const closeTabArea1 = useCallback(() => {
    setTabArea1Visible(false);
  }, []);

  const openRectangle8 = useCallback(() => {
    setRectangle8Visible(true);
  }, []);

  const closeRectangle8 = useCallback(() => {
    setRectangle8Visible(false);
  }, []);

  const openIcons8Contacts1 = useCallback(() => {
    setIcons8Contacts1Visible(true);
  }, []);

  const closeIcons8Contacts1 = useCallback(() => {
    setIcons8Contacts1Visible(false);
  }, []);
  return (
    <>
      <View style={styles.transferMomo}>
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
        <View style={[styles.rectangleParent, styles.groupChildPosition]}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Pressable
            style={[styles.group, styles.groupLayout, styles.groupPosition]}
            onPress={() => navigation.navigate("MoNkapHomeScreen2")}
          >
            <Image
              style={[styles.vectorIcon, styles.groupPosition]}
              resizeMode="cover"
              source={require("../assets/vector.png")}
            />
            <View style={[styles.groupItem, styles.groupLayout]} />
          </Pressable>
        </View>
        <ImageGallery
          carouselImageUrls={{ uri: "vector161@3x.png" }}
          carouselImageUrls2={{ uri: "vector162@3x.png" }}
          carouselImageUrls3={{ uri: "vector163@3x.png" }}
          carouselImageUrls4={{ uri: "vector164@3x.png" }}
          propLeft={15}
          propWidth={330}
          propBorderRadius={3}
        />
        <DepositContainer onRectanglePressablePress={openRectangle8} />
        <RecentSection
          propTop={312}
          onIcons8Contacts1Press={openIcons8Contacts1}
        />
        <RecipientSection />
        <RequestFormContainer
          carImageUrl={{ uri: "group273@3x.png" }}
          propTop="59.5%"
          propBottom="19.5%"
        />
        <Text style={[styles.transferMoney, styles.groupPosition]}>
          TRANSFER MONEY
        </Text>
        <Image
          style={styles.vectorIcon1}
          resizeMode="cover"
          source={require("../assets/vector33.png")}
        />
        <View style={styles.transferMomoChild} />
        <View style={[styles.momo, styles.momoPosition]}>
          <Text style={[styles.momo1, styles.momo1FlexBox, styles.momo1Typo]}>
            MoMo
          </Text>
          <Image
            style={styles.mtnMmLogoGenericMtnMobileIcon}
            resizeMode="cover"
            source={require("../assets/69691715-mtnmmlogogenericmtnmobilemoneylogo-12.png")}
          />
          <View style={[styles.tabArea, styles.tabAreaPosition]} />
        </View>
        <View style={[styles.omoney, styles.momoPosition]}>
          <Text style={[styles.omoney1, styles.momo1FlexBox, styles.momo1Typo]}>
            OMoney
          </Text>
          <View style={styles.orangeMoneyIcon}>
            <View
              style={[styles.orangeMoneyIconChild, styles.tabAreaPosition]}
            />
            <Image
              style={[styles.orangeMoneyIconItem, styles.orangeIconLayout]}
              resizeMode="cover"
              source={require("../assets/arrow-23.png")}
            />
            <Image
              style={[styles.orangeMoneyIconInner, styles.orangeIconLayout]}
              resizeMode="cover"
              source={require("../assets/arrow-33.png")}
            />
            <Text style={[styles.orangeMoney, styles.momo1FlexBox]}>
              Orange Money
            </Text>
          </View>
          <Pressable
            style={[styles.tabArea, styles.tabAreaPosition]}
            onPress={() => navigation.navigate("TransferOmoney")}
          />
        </View>
      </View>

      <Modal animationType="fade" transparent visible={tabArea1Visible}>
        <View style={styles.tabArea1Overlay}>
          <Pressable style={styles.tabArea1Bg} onPress={closeTabArea1} />
          <MyActivity onClose={closeTabArea1} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={rectangle8Visible}>
        <View style={styles.rectangle8Overlay}>
          <Pressable style={styles.rectangle8Bg} onPress={closeRectangle8} />
          <SendMoneyMomoom onClose={closeRectangle8} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={icons8Contacts1Visible}>
        <View style={styles.icons8Contacts1Overlay}>
          <Pressable
            style={styles.icons8Contacts1Bg}
            onPress={closeIcons8Contacts1}
          />
          <AddContact onClose={closeIcons8Contacts1} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
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
  groupPosition: {
    left: "50%",
    top: "50%",
  },
  momoPosition: {
    bottom: "63.13%",
    top: "30%",
    height: "6.88%",
    position: "absolute",
  },
  momo1FlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  momo1Typo: {
    fontFamily: FontFamily.gentiumBookBasic,
    lineHeight: 23,
    letterSpacing: 2,
    fontSize: FontSize.size_xl,
    left: "0%",
    top: "52.73%",
    textAlign: "center",
  },
  tabAreaPosition: {
    bottom: "0%",
    right: "0%",
    height: "100%",
    top: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  orangeIconLayout: {
    borderRadius: Border.br_5xl,
    width: "42.95%",
    height: "51.03%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
  rectangle8Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  rectangle8Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
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
  groupChild: {
    marginTop: -47,
    backgroundColor: Color.blue_100,
  },
  vectorIcon: {
    marginTop: -61.5,
    marginLeft: -56.5,
    width: 16,
    height: 13,
    position: "absolute",
  },
  groupItem: {
    top: -57,
    left: -47,
    backgroundColor: Color.gainsboro_700,
  },
  group: {
    marginTop: 29,
    marginLeft: -125,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
  },
  rectangleParent: {
    marginTop: -400,
  },
  transferMoney: {
    marginTop: -361,
    marginLeft: -65,
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.gentiumBasic,
    color: Color.iOSKeyBackgroundHighlight,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  vectorIcon1: {
    height: "3.75%",
    width: "7.78%",
    top: "4.5%",
    right: "69.44%",
    bottom: "91.75%",
    left: "22.78%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  transferMomoChild: {
    height: "0.13%",
    width: "13.89%",
    top: "36.19%",
    right: "52.08%",
    bottom: "63.69%",
    left: "34.03%",
    borderStyle: "solid",
    borderColor: "#0000ee",
    borderTopWidth: 1,
    position: "absolute",
  },
  momo1: {
    color: Color.blue_100,
  },
  mtnMmLogoGenericMtnMobileIcon: {
    width: "85.71%",
    right: "8.16%",
    bottom: "47.27%",
    left: "6.12%",
    top: "0%",
    height: "52.73%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  tabArea: {
    backgroundColor: Color.gainsboro_700,
  },
  momo: {
    width: "13.61%",
    right: "52.22%",
    left: "34.17%",
  },
  omoney1: {
    color: Color.gray_3000,
  },
  orangeMoneyIconChild: {
    borderRadius: Border.br_sm,
    backgroundColor: Color.gray_400,
  },
  orangeMoneyIconItem: {
    top: "9.64%",
    right: "5.51%",
    bottom: "39.33%",
    left: "51.54%",
  },
  orangeMoneyIconInner: {
    top: "15.19%",
    right: "51.54%",
    bottom: "33.78%",
    left: "5.51%",
  },
  orangeMoney: {
    height: "24.14%",
    width: "90.48%",
    top: "65.52%",
    left: "4.76%",
    fontSize: FontSize.size_7xs,
    lineHeight: 7,
    fontFamily: FontFamily.rubik,
    color: Color.orangeColor,
    fontWeight: "700",
  },
  orangeMoneyIcon: {
    width: "63.64%",
    top: "5.45%",
    right: "18.18%",
    bottom: "41.82%",
    left: "18.18%",
    height: "52.73%",
    position: "absolute",
  },
  omoney: {
    width: "18.33%",
    right: "27.78%",
    left: "53.89%",
  },
  transferMomo: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default TransferMomo;
