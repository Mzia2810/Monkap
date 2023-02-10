import * as React from "react";
import { useState, useCallback } from "react";
import { Image, StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import SendMoneyMonkapUser from "../components/SendMoneyMonkapUser";
import AddContact from "../components/AddContact";
import ContainerMonkap from "../components/ContainerMonkap";
import PaymentSection from "../components/PaymentSection";
import ImageGallery from "../components/ImageGallery";
import DepositContainer from "../components/DepositContainer";
import RecentSection from "../components/RecentSection";
import RequestFormContainer from "../components/RequestFormContainer";
import RecipientArea1 from "../components/RecipientArea1";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const TransferMonkapUser = () => {
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
      <View style={styles.transferMonkapUser}>
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
        <PaymentSection
          paymentText="TRANSFER MONEY"
          propMarginLeft={-65}
          onGroupPress={() => navigation.navigate("MoNkapHomeScreen2")}
        />
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
        <RecentSection onIcons8Contacts1Press={openIcons8Contacts1} />
        <RequestFormContainer
          carImageUrl={{ uri: "group273@3x.png" }}
          propTop="59.38%"
          propBottom="19.63%"
        />
        <RecipientArea1 />
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector33.png")}
        />
        <View style={[styles.momo, styles.momoPosition]}>
          <Text style={[styles.momo1, styles.momo1FlexBox]}>MoMo</Text>
          <Image
            style={styles.mtnMmLogoGenericMtnMobileIcon}
            resizeMode="cover"
            source={require("../assets/69691715-mtnmmlogogenericmtnmobilemoneylogo-12.png")}
          />
          <Pressable
            style={[styles.tabArea, styles.tabAreaPosition]}
            onPress={() => navigation.navigate("TransferMomo")}
          />
        </View>
        <View style={[styles.omoney, styles.momoPosition]}>
          <Text style={[styles.momo1, styles.momo1FlexBox]}>OMoney</Text>
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
          <SendMoneyMonkapUser onClose={closeRectangle8} />
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
  momoPosition: {
    bottom: "63.25%",
    top: "29.88%",
    height: "6.88%",
    position: "absolute",
  },
  momo1FlexBox: {
    textAlign: "center",
    position: "absolute",
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
  vectorIcon: {
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
  momo1: {
    top: "52.73%",
    fontSize: FontSize.size_xl,
    letterSpacing: 2,
    lineHeight: 23,
    fontFamily: FontFamily.gentiumBookBasic,
    color: Color.gray_3000,
    left: "0%",
    textAlign: "center",
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
    fontWeight: "700",
    fontFamily: FontFamily.rubik,
    color: Color.orangeColor,
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
  transferMonkapUser: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default TransferMonkapUser;
