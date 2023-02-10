import * as React from "react";
import { useState, useCallback } from "react";
import { Image, StyleSheet, View, Modal, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import ContainerMonkap from "../components/ContainerMonkap";
import PaymentSection from "../components/PaymentSection";
import ImageGallery from "../components/ImageGallery";
import DepositFormContainer from "../components/DepositFormContainer";
import { Color } from "../GlobalStyles";

const Deposit = () => {
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
      <View style={styles.deposit}>
        <ContainerMonkap
          carouselImageUrls={require("../assets/c14-house.png")}
          carouselImageUrls2={require("../assets/group.png")}
          carouselImageUrls3={require("../assets/group1.png")}
          carouselImageUrls4={require("../assets/group12.png")}
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
          paymentText="Deposit"
          propMarginLeft={-6}
          propMarginTop={-11}
          onGroupPress={() => navigation.navigate("MoNkapHomeScreen2")}
        />
        <ImageGallery
          carouselImageUrls={{ uri: "vector100@3x.png" }}
          carouselImageUrls2={{ uri: "vector101@3x.png" }}
          carouselImageUrls3={{ uri: "vector102@3x.png" }}
          carouselImageUrls4={{ uri: "vector103@3x.png" }}
        />
        <DepositFormContainer />
        <Image
          style={styles.depositChild}
          resizeMode="cover"
          source={require("../assets/group-233.png")}
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
  depositChild: {
    position: "absolute",
    height: "3.35%",
    width: "8.27%",
    top: "4%",
    right: "55.06%",
    bottom: "92.65%",
    left: "36.67%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  deposit: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Deposit;
