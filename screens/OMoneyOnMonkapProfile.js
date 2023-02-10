import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Image, Text, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import ProfileContainer from "../components/ProfileContainer";
import NameContainer from "../components/NameContainer";
import ContainerMoMo from "../components/ContainerMoMo";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const OMoneyOnMonkapProfile = () => {
  const [tabArea2Visible, setTabArea2Visible] = useState(false);
  const navigation = useNavigation();

  const openTabArea2 = useCallback(() => {
    setTabArea2Visible(true);
  }, []);

  const closeTabArea2 = useCallback(() => {
    setTabArea2Visible(false);
  }, []);
  return (
    <>
      <View style={styles.omoneyOnMonkapProfile}>
        <View style={styles.inputNumber}>
          <View style={[styles.bgdColor, styles.bgdPosition]}>
            <View style={styles.bgdColorChild} />
            <Image
              style={[styles.bgdColorItem, styles.bgdPosition]}
              resizeMode="cover"
              source={require("../assets/ellipse-13.png")}
            />
          </View>
        </View>
        <ProfileContainer
          carImageUrl={require("../assets/rectangle-261.png")}
          vehicleImageUrl={require("../assets/rectangle-222.png")}
        />
        <NameContainer
          contactName="Kalson TAWA"
          contactPhoneNumber="Your name"
        />
        <NameContainer
          contactName="+237 94 37 94 85"
          contactPhoneNumber="Your  phone number"
          propTop={286}
          propLeft={29}
          propLeft1={30}
        />
        <View style={styles.password}>
          <Text
            style={[
              styles.passwordPincode,
              styles.country1FlexBox,
              styles.country1Typo,
            ]}
          >
            Password/ pincode
          </Text>
          <View style={[styles.passwordChild, styles.childLayout1]} />
        </View>
        <View style={[styles.city, styles.cityPosition]}>
          <Text style={[styles.bueaSouthwest, styles.cameroonTypo]}>
            Buea, SouthWest
          </Text>
          <Text style={[styles.cameroon, styles.cameroonTypo]}>Cameroon</Text>
          <Text
            style={[
              styles.cityRegion,
              styles.country1FlexBox,
              styles.country1Typo,
            ]}
          >
            City, Region
          </Text>
          <View style={[styles.cityChild, styles.childLayout1]} />
        </View>
        <View style={[styles.country, styles.cityPosition]}>
          <Text
            style={[
              styles.country1,
              styles.country1FlexBox,
              styles.country1Typo,
            ]}
          >
            {" "}
            Country
          </Text>
          <View style={[styles.countryChild, styles.childLayout1]} />
        </View>
        <View style={styles.tabArea} />
        <Text style={[styles.editProfile, styles.country1FlexBox]}>
          Edit profile
        </Text>
        <View style={styles.toSwap}>
          <Text style={[styles.swapToMove, styles.country1FlexBox]}>
            Swap to move to the next page
          </Text>
          <Image
            style={[styles.toSwapChild, styles.childLayout]}
            resizeMode="cover"
            source={require("../assets/arrow-8.png")}
          />
        </View>
        <View style={[styles.backArrow, styles.taAreaLayout]}>
          <Image
            style={[styles.backArrowChild, styles.childLayout]}
            resizeMode="cover"
            source={require("../assets/line-161.png")}
          />
          <Pressable
            style={[styles.taArea, styles.taAreaLayout]}
            onPress={() => navigation.navigate("OMoneyValidationSuccessful")}
          />
        </View>
        <ContainerMoMo
          carouselImageUrls={{ uri: "c14-house28@3x.png" }}
          carouselImageUrls2={{ uri: "group96@3x.png" }}
          carouselImageUrls3={require("../assets/group1.png")}
          onTabAreaPress={() => navigation.navigate("MoNkapHomeScreen2")}
          onTabAreaPress1={openTabArea2}
          onImageedit341319179892Press={() =>
            navigation.navigate("BottomTabsRoot", { screen: "LinkBank" })
          }
          onTabAreaPress2={() =>
            navigation.navigate("BottomTabsRoot", { screen: "MTNSplashScreen" })
          }
        />
      </View>

      <Modal animationType="fade" transparent visible={tabArea2Visible}>
        <View style={styles.tabArea2Overlay}>
          <Pressable style={styles.tabArea2Bg} onPress={closeTabArea2} />
          <MyActivity onClose={closeTabArea2} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  bgdPosition: {
    left: 0,
    position: "absolute",
  },
  country1FlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  country1Typo: {
    color: Color.silver_300,
    lineHeight: 16,
    letterSpacing: 0.7,
    fontSize: FontSize.size_2xs,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBookBasic,
    top: 0,
  },
  childLayout1: {
    height: 1,
    width: 325,
    borderTopWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.29)",
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  cityPosition: {
    left: 22,
    width: 324,
    position: "absolute",
  },
  cameroonTypo: {
    color: Color.gray_200,
    lineHeight: 23,
    letterSpacing: 1,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  childLayout: {
    height: 15,
    position: "absolute",
  },
  taAreaLayout: {
    height: 37,
    width: 52,
    left: 0,
    position: "absolute",
  },
  tabArea2Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  tabArea2Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  bgdColorChild: {
    top: 64,
    left: 166,
    backgroundColor: Color.gray_300,
    width: 375,
    height: 812,
    position: "absolute",
  },
  bgdColorItem: {
    top: 43,
    width: 733,
    height: 866,
  },
  bgdColor: {
    width: 782,
    height: 907,
    display: "none",
    top: 0,
  },
  inputNumber: {
    top: -64,
    left: -178,
    width: 0,
    height: 0,
    position: "absolute",
  },
  passwordPincode: {
    left: 30,
  },
  passwordChild: {
    top: 53,
  },
  password: {
    top: 357,
    left: 19,
    height: 53,
    width: 324,
    position: "absolute",
  },
  bueaSouthwest: {
    top: 20,
    left: 28,
  },
  cameroon: {
    top: 85,
    left: 27,
  },
  cityRegion: {
    left: 26,
  },
  cityChild: {
    top: 54,
  },
  city: {
    top: 421,
    height: 108,
  },
  country1: {
    left: 24,
  },
  countryChild: {
    top: 50,
  },
  country: {
    top: 490,
    height: 50,
  },
  tabArea: {
    top: 128,
    left: 274,
    width: 86,
    height: 22,
    backgroundColor: Color.gainsboro_700,
    position: "absolute",
  },
  editProfile: {
    top: 131,
    left: 282,
    fontSize: FontSize.size_sm,
    textDecoration: "underline",
    letterSpacing: 0.8,
    lineHeight: 19,
    color: Color.dimgray_100,
    fontFamily: FontFamily.gentiumBookBasic,
    textAlign: "center",
  },
  swapToMove: {
    left: 14,
    fontSize: FontSize.size_xs,
    letterSpacing: 1.1,
    lineHeight: 14,
    fontFamily: FontFamily.rubik,
    color: Color.gray_3200,
    width: 118,
    top: 0,
  },
  toSwapChild: {
    top: 12,
    left: -1,
    width: 17,
  },
  toSwap: {
    top: 636,
    left: 201,
    width: 132,
    height: 28,
    position: "absolute",
  },
  backArrowChild: {
    top: 11,
    left: 9,
    width: 28,
  },
  taArea: {
    backgroundColor: Color.gainsboro_700,
    top: 0,
  },
  backArrow: {
    top: 10,
  },
  omoneyOnMonkapProfile: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default OMoneyOnMonkapProfile;
