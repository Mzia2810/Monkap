import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Image, Pressable, Text, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import JanCalendar from "../components/JanCalendar";
import ContainerMonkap from "../components/ContainerMonkap";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const AddTargetSavings1 = () => {
  const [tabArea1Visible, setTabArea1Visible] = useState(false);
  const [groupImageVisible, setGroupImageVisible] = useState(false);
  const navigation = useNavigation();

  const openTabArea1 = useCallback(() => {
    setTabArea1Visible(true);
  }, []);

  const closeTabArea1 = useCallback(() => {
    setTabArea1Visible(false);
  }, []);

  const openGroupImage = useCallback(() => {
    setGroupImageVisible(true);
  }, []);

  const closeGroupImage = useCallback(() => {
    setGroupImageVisible(false);
  }, []);
  return (
    <>
      <View style={styles.addTargetSavings}>
        <View
          style={[styles.addTargetSavingsChild, styles.letsSetUpPosition]}
        />
        <Pressable
          style={styles.group}
          onPress={() => navigation.navigate("MoNkapHomeScreen2")}
        >
          <Image
            style={[styles.vectorIcon, styles.letsSetUpPosition]}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
          <View style={styles.groupChild} />
        </Pressable>
        <View style={[styles.rectangleParent, styles.groupPosition]}>
          <View style={[styles.groupItem, styles.groupPosition]} />
          <Text style={[styles.activateSavingAccount, styles.continueTypo]}>
            Activate Saving Account
          </Text>
          <Pressable
            style={styles.groupInner}
            onPress={() => navigation.navigate("MonkapLoginWithPhone")}
          />
        </View>
        <Text style={[styles.whatAreYou, styles.xafTypo]}>
          What are you saving for ?
        </Text>
        <View style={[styles.targetAmoutParent, styles.parentLayout]}>
          <Text style={styles.purposeTypo}>Target Amout</Text>
          <View style={[styles.rectangleView, styles.groupChild3Layout]} />
          <Text
            style={[styles.enterATarget, styles.enterTypo, styles.enterLayout]}
          >
            Enter a Target Amount for this Savings
          </Text>
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupChild1, styles.groupLayout]} />
            <Text
              style={[
                styles.xaf,
                styles.xafPosition,
                styles.xafTypo,
                styles.xafClr,
              ]}
            >
              XAF
            </Text>
          </View>
        </View>
        <View style={[styles.rectangleContainer, styles.parentLayout]}>
          <View style={[styles.rectangleView, styles.groupChild3Layout]} />
          <Text
            style={[styles.selectADate, styles.xafPosition, styles.enterTypo]}
          >
            Select a date to complete this target savings
          </Text>
          <Text style={styles.purposeTypo}>Due Date</Text>
          <Pressable
            style={[styles.wrapper, styles.groupLayout]}
            onPress={openGroupImage}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/group-1141.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.purposeParent, styles.parentLayout]}>
          <Text style={[styles.purpose, styles.purposeTypo]}>Purpose</Text>
          <View style={[styles.groupChild3, styles.groupChild3Layout]} />
          <Text
            style={[
              styles.enterThePurpose,
              styles.enterTypo,
              styles.enterLayout,
            ]}
          >
            Enter the purpose for this savings
          </Text>
        </View>
        <View style={[styles.groupView, styles.groupPosition]}>
          <View style={[styles.groupItem, styles.groupPosition]} />
          <Text style={[styles.continue, styles.continueTypo]}>Continue</Text>
          <Pressable
            style={styles.groupInner}
            onPress={() => navigation.navigate("SavingFrequency")}
          />
        </View>
        <View style={[styles.monkapHasYourBackParent, styles.monkapPosition]}>
          <Text
            style={[
              styles.monkapHasYour,
              styles.monkapPosition,
              styles.xafTypo,
              styles.xafClr,
              styles.letsSetUpTypo,
            ]}
          >
            MoNkap Has Your Back
          </Text>
          <Text
            style={[
              styles.letsSetUp,
              styles.xafTypo,
              styles.xafClr,
              styles.letsSetUpTypo,
              styles.letsSetUpPosition,
            ]}
          >
            Lets Set Up your Target savings
          </Text>
        </View>
        <View style={styles.savingFor}>
          <Image
            style={styles.vectorIcon1}
            resizeMode="cover"
            source={require("../assets/vector21.png")}
          />
          <Image
            style={[styles.vectorIcon2, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/vector22.png")}
          />
          <Image
            style={[styles.xmlid241Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/xmlid-241.png")}
          />
          <Image
            style={[styles.shoeSvgrepoCom1Icon, styles.svgrepoIconPosition]}
            resizeMode="cover"
            source={require("../assets/shoesvgrepocom-1.png")}
          />
          <Image
            style={[styles.vectorIcon3, styles.vectorIconPosition]}
            resizeMode="cover"
            source={require("../assets/vector23.png")}
          />
          <Image
            style={[styles.vectorIcon4, styles.vectorIconPosition]}
            resizeMode="cover"
            source={require("../assets/vector24.png")}
          />
          <Image
            style={[styles.smartPhoneIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/smart-phone.png")}
          />
          <Text style={[styles.car, styles.carTypo]}>Car</Text>
          <Text style={[styles.wedding, styles.carTypo]}>Wedding</Text>
          <Text style={[styles.shoe, styles.shoeTypo]}>Shoe</Text>
          <Text style={[styles.land, styles.shoeTypo]}>land</Text>
          <Text style={[styles.dresses, styles.shoeTypo]}>Dresses</Text>
          <Text style={[styles.phone, styles.shoeTypo]}>Phone</Text>
          <Text style={[styles.general, styles.shoeTypo]}>General</Text>
          <Text style={[styles.bible, styles.shoeTypo]}>Bible</Text>
          <Text style={styles.house}>House</Text>
          <Text style={[styles.guiter, styles.shoeTypo]}>Guiter</Text>
          <Image
            style={styles.bankIcon}
            resizeMode="cover"
            source={require("../assets/bank.png")}
          />
          <Image
            style={[styles.houseSvgrepoComIcon, styles.svgrepoIconPosition]}
            resizeMode="cover"
            source={require("../assets/group52.png")}
          />
          <Image
            style={styles.plotSvgrepoComIcon}
            resizeMode="cover"
            source={require("../assets/plotsvgrepocom.png")}
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

      <Modal animationType="fade" transparent visible={groupImageVisible}>
        <View style={styles.groupImageOverlay}>
          <Pressable style={styles.groupImageBg} onPress={closeGroupImage} />
          <JanCalendar onClose={closeGroupImage} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  letsSetUpPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupPosition: {
    height: 45,
    width: 305,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  continueTypo: {
    textAlign: "left",
    fontWeight: "700",
    fontSize: FontSize.size_4xl,
    marginTop: -11.5,
    color: Color.iOSKeyBackgroundHighlight,
    fontFamily: FontFamily.gentiumBookBasic,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  xafTypo: {
    textAlign: "center",
    fontWeight: "700",
  },
  parentLayout: {
    height: 66,
    left: 27,
    width: 305,
    position: "absolute",
  },
  groupChild3Layout: {
    height: 40,
    borderWidth: 0.3,
    borderColor: "#0000ee",
    borderStyle: "solid",
    left: 0,
    top: 26,
    width: 305,
    position: "absolute",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  enterTypo: {
    height: 11,
    color: Color.silver_200,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
  },
  enterLayout: {
    width: 168,
    height: 11,
    color: Color.silver_200,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.gentiumBasic,
    position: "absolute",
  },
  groupLayout: {
    width: 66,
    height: 40,
    position: "absolute",
  },
  xafPosition: {
    left: 16,
    fontFamily: FontFamily.gentiumBasic,
    position: "absolute",
  },
  xafClr: {
    color: Color.iOSKeyBackgroundHighlight,
    textAlign: "center",
  },
  purposeTypo: {
    fontSize: FontSize.size_lg,
    left: 3,
    color: Color.iOSKeyLabel,
    top: 0,
    textAlign: "left",
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  monkapPosition: {
    width: 270,
    marginLeft: -135,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  letsSetUpTypo: {
    fontFamily: FontFamily.gentiumBookBasic,
    color: Color.iOSKeyBackgroundHighlight,
  },
  iconPosition: {
    bottom: "22.45%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  svgrepoIconPosition: {
    top: 3,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition: {
    bottom: "24.49%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  carTypo: {
    height: 9,
    width: 46,
    fontSize: FontSize.size_5xs,
    textAlign: "center",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBasic,
    position: "absolute",
  },
  shoeTypo: {
    top: 39,
    fontSize: FontSize.size_5xs,
    textAlign: "center",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBasic,
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
  addTargetSavingsChild: {
    marginTop: -406,
    marginLeft: -188,
    width: 375,
    height: 100,
    backgroundColor: Color.blue_100,
  },
  vectorIcon: {
    marginTop: -61.5,
    marginLeft: -56.5,
    width: 16,
    height: 13,
  },
  groupChild: {
    top: -57,
    left: -47,
    backgroundColor: Color.gainsboro_700,
    height: 57,
    width: 47,
    position: "absolute",
  },
  group: {
    marginTop: -320,
    marginLeft: -132,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    height: 57,
    width: 47,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupItem: {
    marginTop: -22.5,
    marginLeft: -152.5,
    borderRadius: Border.br_xs,
    backgroundColor: Color.blue_100,
  },
  activateSavingAccount: {
    marginLeft: -108.5,
  },
  groupInner: {
    left: 1,
    width: 304,
    top: 0,
    height: 45,
    backgroundColor: Color.gainsboro_700,
    position: "absolute",
  },
  rectangleParent: {
    marginTop: 291,
    marginLeft: -152,
    display: "none",
  },
  whatAreYou: {
    top: 112,
    left: 68,
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBasic,
    textAlign: "center",
    fontSize: FontSize.size_4xl,
    position: "absolute",
  },
  rectangleView: {
    borderRadius: Border.br_3xs,
  },
  enterATarget: {
    left: 94,
    top: 41,
    width: 168,
  },
  groupChild1: {
    borderTopLeftRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    borderWidth: 0.3,
    borderColor: "#0000ee",
    borderStyle: "solid",
    width: 66,
    left: 0,
    top: 0,
    backgroundColor: Color.blue_100,
  },
  xaf: {
    fontSize: FontSize.size_xl,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 17,
    top: 11,
  },
  rectangleGroup: {
    left: 0,
    width: 66,
    top: 26,
  },
  targetAmoutParent: {
    top: 298,
  },
  selectADate: {
    width: 192,
    top: 40,
    height: 11,
    color: Color.silver_200,
    fontSize: FontSize.size_3xs,
    left: 16,
  },
  groupImageOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupImageBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 239,
    width: 66,
    top: 26,
  },
  rectangleContainer: {
    top: 375,
  },
  purpose: {
    width: 126,
    height: 18,
  },
  groupChild3: {
    borderRadius: Border.br_xs,
  },
  enterThePurpose: {
    left: 69,
    top: 37,
  },
  purposeParent: {
    top: 224,
  },
  continue: {
    marginLeft: -40.5,
  },
  groupView: {
    marginTop: 290,
    marginLeft: -153,
  },
  monkapHasYour: {
    marginTop: -29.5,
    fontSize: FontSize.size_6xl,
    height: 24,
  },
  letsSetUp: {
    marginTop: 2.5,
    marginLeft: -126,
    fontSize: FontSize.size_base,
    width: 241,
    height: 27,
  },
  monkapHasYourBackParent: {
    marginTop: -377,
    height: 59,
  },
  vectorIcon1: {
    height: "59.65%",
    width: "13.81%",
    top: "19.16%",
    right: "86.19%",
    bottom: "21.2%",
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon2: {
    width: "7.15%",
    top: "14.29%",
    right: "65.83%",
    left: "27.03%",
    height: "63.27%",
  },
  xmlid241Icon: {
    height: "77.55%",
    width: "10.22%",
    top: "0%",
    right: "51.64%",
    left: "38.14%",
  },
  shoeSvgrepoCom1Icon: {
    left: 180,
    width: 41,
    height: 41,
  },
  vectorIcon3: {
    width: "11.71%",
    right: "6.61%",
    left: "81.68%",
    top: "12.24%",
    height: "63.27%",
  },
  vectorIcon4: {
    height: "71.43%",
    width: "10.51%",
    top: "4.08%",
    right: "-6.31%",
    left: "95.8%",
  },
  smartPhoneIcon: {
    height: "65.31%",
    width: "5.41%",
    right: "-13.21%",
    left: "107.81%",
    top: "12.24%",
  },
  car: {
    left: -25,
    top: 40,
  },
  wedding: {
    left: 121,
    top: 37,
  },
  shoe: {
    left: 188,
  },
  land: {
    left: 241,
  },
  dresses: {
    left: 279,
  },
  phone: {
    left: 359,
  },
  general: {
    left: -65,
  },
  bible: {
    left: 93,
  },
  house: {
    left: 45,
    fontSize: FontSize.size_5xs,
    top: 41,
    textAlign: "center",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBasic,
    position: "absolute",
  },
  guiter: {
    left: 321,
  },
  bankIcon: {
    top: 6,
    left: -71,
    width: 33,
    height: 33,
    position: "absolute",
  },
  houseSvgrepoComIcon: {
    left: 37,
    width: 38,
    height: 38,
  },
  plotSvgrepoComIcon: {
    left: 230,
    width: 32,
    height: 32,
    top: 11,
    position: "absolute",
    overflow: "hidden",
  },
  savingFor: {
    top: 146,
    left: 13,
    width: 333,
    height: 49,
    position: "absolute",
  },
  addTargetSavings: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
});

export default AddTargetSavings1;
