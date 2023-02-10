import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import NameContainer from "../components/NameContainer";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const MonkapProfile = () => {
  return (
    <View style={styles.monkapProfile}>
      <View style={styles.inputNumber}>
        <View style={[styles.bgdColor, styles.bgdColorPosition]}>
          <View style={styles.bgdColorChild} />
          <Image
            style={styles.bgdColorItem}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.btmNavIcon, styles.bgdColorPosition]}
        resizeMode="cover"
        source={require("../assets/btm-nav.png")}
      />
      <View style={[styles.profile, styles.profilePosition]}>
        <Image
          style={[styles.profileChild, styles.profilePosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-23.png")}
        />
        <Image
          style={styles.profileItem}
          resizeMode="cover"
          source={require("../assets/rectangle-22.png")}
        />
        <Image
          style={styles.profileInner}
          resizeMode="cover"
          source={require("../assets/ellipse-21.png")}
        />
        <Text style={styles.kalsonTanwi}>Kalson TANWI</Text>
        <Text style={[styles.lastVisit23082022, styles.swapToMoveTypo]}>
          Last visit 23/08/2022
        </Text>
      </View>
      <NameContainer contactName="Kalson TAWA" contactPhoneNumber="Your name" />
      <NameContainer
        contactName="+237 94 37 94 85"
        contactPhoneNumber="Your  phone number"
        propTop={286}
        propLeft={44}
        propLeft1={30}
      />
      <View style={styles.password}>
        <Text style={[styles.passwordPincode, styles.country1Typo]}>
          Password/ pincode
        </Text>
        <Text style={[styles.changePincode, styles.editProfileTypo]}>
          Change pincode
        </Text>
        <View style={[styles.passwordChild, styles.childLayout]} />
      </View>
      <View style={[styles.city, styles.cityPosition]}>
        <Text style={[styles.bueaSouthwest, styles.cameroonTypo]}>
          Buea, SouthWest
        </Text>
        <Text style={[styles.cameroon, styles.cameroonTypo]}>Cameroon</Text>
        <Text style={[styles.cityRegion, styles.country1Typo]}>
          City, Region
        </Text>
        <View style={[styles.cityChild, styles.childLayout]} />
      </View>
      <View style={[styles.country, styles.cityPosition]}>
        <Text style={[styles.country1, styles.country1Typo]}> Country</Text>
        <View style={[styles.countryChild, styles.childLayout]} />
      </View>
      <View style={styles.tabArea} />
      <Text style={[styles.editProfile, styles.editProfileTypo]}>
        Edit profile
      </Text>
      <View style={styles.toSwap}>
        <Text style={[styles.swapToMove, styles.swapToMoveTypo]}>
          Swap to move to the next page
        </Text>
        <Image
          style={styles.toSwapChild}
          resizeMode="cover"
          source={require("../assets/arrow-8.png")}
        />
      </View>
      <Image
        style={[styles.monkapProfileChild, styles.monkapChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-27.png")}
      />
      <Image
        style={[styles.monkapProfileItem, styles.monkapChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-27.png")}
      />
      <Image
        style={[styles.monkapProfileInner, styles.monkapChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-27.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.monkapChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-27.png")}
      />
      <Image
        style={[styles.monkapProfileChild1, styles.monkapChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-27.png")}
      />
      <Image
        style={[styles.monkapProfileChild2, styles.monkapChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-27.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bgdColorPosition: {
    display: "none",
    position: "absolute",
  },
  profilePosition: {
    width: 363,
    left: 0,
    position: "absolute",
  },
  swapToMoveTypo: {
    lineHeight: 14,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  country1Typo: {
    color: Color.silver_300,
    lineHeight: 16,
    fontSize: FontSize.size_2xs,
    letterSpacing: 0.7,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBookBasic,
    top: 0,
    position: "absolute",
  },
  editProfileTypo: {
    color: Color.darkgray_400,
    textDecoration: "underline",
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  childLayout: {
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
  monkapChildLayout: {
    height: 10,
    width: 10,
    top: 390,
    position: "absolute",
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
    left: 0,
    position: "absolute",
  },
  bgdColor: {
    width: 782,
    height: 907,
    left: 0,
    top: 0,
  },
  inputNumber: {
    top: -64,
    left: -178,
    width: 0,
    height: 0,
    position: "absolute",
  },
  btmNavIcon: {
    top: 740,
    left: 1,
    width: 359,
    height: 60,
  },
  profileChild: {
    height: 122,
    top: 0,
  },
  profileItem: {
    top: 1,
    width: 360,
    height: 121,
    left: 0,
    position: "absolute",
  },
  profileInner: {
    top: 56,
    left: 18,
    width: 88,
    height: 88,
    position: "absolute",
  },
  kalsonTanwi: {
    top: 69,
    left: 112,
    fontSize: FontSize.size_4xl,
    letterSpacing: 1.3,
    lineHeight: 29,
    color: Color.iOSKeyBackgroundHighlight,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  lastVisit23082022: {
    top: 100,
    left: 114,
    fontSize: FontSize.size_3xs,
    color: "rgba(0, 0, 0, 0.62)",
    letterSpacing: 0.7,
    lineHeight: 14,
  },
  profile: {
    height: 144,
    top: 30,
    width: 363,
  },
  passwordPincode: {
    left: 30,
  },
  changePincode: {
    left: 229,
    fontWeight: "700",
    textAlign: "left",
    lineHeight: 16,
    fontSize: FontSize.size_2xs,
    textDecoration: "underline",
    letterSpacing: 0.7,
    top: 30,
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
    left: 33,
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
    backgroundColor: Color.gainsboro_700,
    width: 86,
    height: 22,
    position: "absolute",
  },
  editProfile: {
    top: 131,
    left: 282,
    fontSize: FontSize.size_sm,
    letterSpacing: 0.8,
    lineHeight: 19,
    textAlign: "center",
  },
  swapToMove: {
    left: 14,
    fontSize: FontSize.size_xs,
    letterSpacing: 1.1,
    color: Color.gray_3200,
    width: 118,
    top: 0,
  },
  toSwapChild: {
    top: 12,
    left: -1,
    width: 17,
    height: 15,
    position: "absolute",
  },
  toSwap: {
    top: 636,
    left: 201,
    width: 132,
    height: 28,
    position: "absolute",
  },
  monkapProfileChild: {
    left: 50,
  },
  monkapProfileItem: {
    left: 63,
  },
  monkapProfileInner: {
    left: 76,
  },
  ellipseIcon: {
    left: 89,
  },
  monkapProfileChild1: {
    left: 102,
  },
  monkapProfileChild2: {
    left: 115,
  },
  monkapProfile: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default MonkapProfile;
