import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Image, Pressable, Text, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import JanCalendar from "../components/JanCalendar";
import ContainerMonkap from "../components/ContainerMonkap";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AddTargetSavings = () => {
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
          onPress={() => navigation.navigate("NjangiMainDaily2")}
        >
          <Image
            style={[styles.vectorIcon, styles.letsSetUpPosition]}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
          <View style={styles.groupChild} />
        </Pressable>
        <View style={[styles.rectangleParent, styles.rectangleParentPosition]}>
          <View style={[styles.groupItem, styles.groupPosition]} />
          <Text
            style={[
              styles.activateSavingAccount,
              styles.continueTypo,
              styles.continuePosition,
            ]}
          >
            Activate Saving Account
          </Text>
          <Pressable
            style={styles.groupInner}
            onPress={() => navigation.navigate("MonkapLoginWithPhone")}
          />
        </View>
        <Text
          style={[
            styles.createANjangui,
            styles.xafTypo,
            styles.numberOfTimesClr,
            styles.xafTypo1,
          ]}
        >
          Create a Njangui
        </Text>
        <View style={[styles.amountToContributeParent, styles.parentLayout]}>
          <Text style={[styles.amountToContribute, styles.playedTypo]}>
            Amount to Contribute
          </Text>
          <View style={styles.rectangleView} />
          <Text style={[styles.pleaseEnterAn, styles.selectADateTypo]}>
            Please enter an amount
          </Text>
          <View
            style={[
              styles.rectangleGroup,
              styles.groupLayout1,
              styles.wrapperPosition,
            ]}
          >
            <View
              style={[
                styles.groupChild1,
                styles.groupLayout1,
                styles.groupChildBorder,
              ]}
            />
            <Text
              style={[
                styles.xaf,
                styles.xafPosition,
                styles.xafTypo,
                styles.xafTypo1,
              ]}
            >
              XAF
            </Text>
          </View>
        </View>
        <View style={[styles.rectangleContainer, styles.parentLayout]}>
          <View style={styles.rectangleView} />
          <Text
            style={[
              styles.selectADate,
              styles.xafPosition,
              styles.selectADateTypo,
            ]}
          >
            Select a date to complete this target savings
          </Text>
          <Text style={[styles.amountToContribute, styles.playedTypo]}>
            Starting Date
          </Text>
          <Pressable
            style={[
              styles.wrapper,
              styles.groupLayout1,
              styles.wrapperPosition,
            ]}
            onPress={openGroupImage}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/group-114.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.nameParent, styles.parentLayout]}>
          <Text style={[styles.amountToContribute, styles.playedTypo]}>
            Name
          </Text>
          <View style={styles.rectangleView} />
          <Text style={[styles.enterTheNjangis, styles.description150Typo]}>
            Enter the Njangi’s name
          </Text>
        </View>
        <View style={[styles.sessionsParent, styles.parentLayout]}>
          <Text
            style={[styles.amountToContribute, styles.playedTypo]}
          >{`Sessions `}</Text>
          <Text
            style={[
              styles.numberOfTimes,
              styles.numberOfTimesClr,
              styles.continueTypo,
            ]}
          >
            (Number of times everyone has to “chop” the Njangui)
          </Text>
          <View style={styles.rectangleView} />
          <Text style={[styles.enterTheNjangis, styles.description150Typo]}>
            number of sessions
          </Text>
        </View>
        <View style={[styles.groupView, styles.groupLayout]}>
          <View
            style={[
              styles.groupChild5,
              styles.groupLayout,
              styles.groupChildBorder,
            ]}
          />
          <Text style={[styles.description150, styles.description150Typo]}>
            Description (150)
          </Text>
        </View>
        <View style={[styles.rectangleParent1, styles.groupChild6Layout]}>
          <View
            style={[
              styles.groupChild6,
              styles.groupChild6Layout,
              styles.groupChildBorder,
            ]}
          />
          <Text style={[styles.description150, styles.description150Typo]}>
            Rules and Regulations
          </Text>
        </View>
        <View style={[styles.rectangleParent2, styles.rectangleParentPosition]}>
          <View style={[styles.groupChild7, styles.groupPosition]} />
          <Text
            style={[
              styles.continue,
              styles.continueTypo,
              styles.continuePosition,
            ]}
          >
            Continue
          </Text>
          <Pressable
            style={styles.groupInner}
            onPress={() => navigation.navigate("NjangiMainDaily2")}
          />
        </View>
        <View style={[styles.monkapHasYourBackParent, styles.monkapPosition]}>
          <Text
            style={[
              styles.monkapHasYour,
              styles.monkapPosition,
              styles.xafTypo,
              styles.letsSetUpTypo,
            ]}
          >
            MoNkap Has Your Back
          </Text>
          <Text
            style={[
              styles.letsSetUp,
              styles.xafTypo,
              styles.letsSetUpTypo,
              styles.letsSetUpPosition,
            ]}
          >
            Lets Set Up your Target savings
          </Text>
        </View>
        <View style={styles.period}>
          <Text style={[styles.every1, styles.weekTypo]}>Every 1</Text>
          <Text style={[styles.week, styles.weekTypo]}>Week</Text>
          <Image
            style={[styles.periodChild, styles.periodLayout]}
            resizeMode="cover"
            source={require("../assets/polygon-2.png")}
          />
          <Image
            style={[styles.periodItem, styles.periodLayout]}
            resizeMode="cover"
            source={require("../assets/polygon-2.png")}
          />
          <Text style={[styles.played, styles.playedTypo]}>Played</Text>
        </View>
        <ContainerMonkap
          carouselImageUrls={{ uri: "c14-house22@3x.png" }}
          carouselImageUrls2={require("../assets/group35.png")}
          carouselImageUrls3={require("../assets/group1.png")}
          carouselImageUrls4={{ uri: "group47@3x.png" }}
          propHeight="62.57%"
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
  rectangleParentPosition: {
    height: 45,
    width: 305,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupPosition: {
    marginLeft: -152.5,
    marginTop: -22.5,
    height: 45,
    width: 305,
    backgroundColor: Color.blue_100,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  continueTypo: {
    textAlign: "left",
    fontFamily: FontFamily.gentiumBookBasic,
  },
  continuePosition: {
    fontWeight: "700",
    fontSize: FontSize.size_4xl,
    marginTop: -11.5,
    textAlign: "left",
    color: Color.iOSKeyBackgroundHighlight,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  xafTypo: {
    textAlign: "center",
    fontWeight: "700",
  },
  numberOfTimesClr: {
    color: Color.iOSKeyLabel,
    position: "absolute",
  },
  xafTypo1: {
    fontSize: FontSize.size_xl,
    textAlign: "center",
  },
  parentLayout: {
    width: 305,
    left: 27,
    height: 57,
    position: "absolute",
  },
  playedTypo: {
    fontSize: FontSize.size_sm,
    color: Color.iOSKeyLabel,
    top: 0,
    textAlign: "left",
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  selectADateTypo: {
    height: 11,
    color: Color.silver_200,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
  },
  groupLayout1: {
    width: 66,
    height: 40,
    position: "absolute",
  },
  wrapperPosition: {
    top: 17,
    width: 66,
  },
  groupChildBorder: {
    borderWidth: 0.3,
    borderColor: "#0000ee",
    borderStyle: "solid",
    left: 0,
    top: 0,
  },
  xafPosition: {
    left: 16,
    fontFamily: FontFamily.gentiumBasic,
    position: "absolute",
  },
  description150Typo: {
    color: Color.silver_200,
    fontFamily: FontFamily.gentiumBasic,
    textAlign: "left",
    position: "absolute",
  },
  groupLayout: {
    height: 71,
    width: 305,
    position: "absolute",
  },
  groupChild6Layout: {
    height: 46,
    width: 305,
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
    textAlign: "center",
    color: Color.iOSKeyBackgroundHighlight,
  },
  weekTypo: {
    color: Color.gray_2900,
    top: 18,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  periodLayout: {
    height: 12,
    width: 17,
    top: 14,
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
    marginTop: -400,
    marginLeft: -180,
    width: 360,
    height: 94,
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
    borderRadius: Border.br_xs,
  },
  activateSavingAccount: {
    marginLeft: -108.5,
    color: Color.iOSKeyBackgroundHighlight,
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
  createANjangui: {
    top: 112,
    left: 122,
    fontFamily: FontFamily.gentiumBasic,
  },
  amountToContribute: {
    left: 3,
  },
  rectangleView: {
    height: 40,
    borderWidth: 0.3,
    borderColor: "#0000ee",
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: 0,
    top: 17,
    width: 305,
    position: "absolute",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  pleaseEnterAn: {
    top: 32,
    left: 94,
    width: 168,
    fontFamily: FontFamily.gentiumBasic,
    position: "absolute",
  },
  groupChild1: {
    borderTopLeftRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.blue_100,
  },
  xaf: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 17,
    top: 11,
    color: Color.iOSKeyBackgroundHighlight,
  },
  rectangleGroup: {
    left: 0,
  },
  amountToContributeParent: {
    top: 224,
    left: 27,
  },
  selectADate: {
    top: 31,
    width: 192,
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
  },
  rectangleContainer: {
    top: 352,
    left: 27,
  },
  enterTheNjangis: {
    top: 28,
    left: 19,
    fontSize: FontSize.size_3xs,
  },
  nameParent: {
    top: 150,
    left: 27,
  },
  numberOfTimes: {
    top: 2,
    left: 51,
    fontStyle: "italic",
    fontSize: FontSize.size_3xs,
  },
  sessionsParent: {
    top: 426,
    left: 27,
  },
  groupChild5: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  description150: {
    left: 11,
    fontSize: FontSize.size_xs,
    top: 11,
  },
  groupView: {
    top: 507,
    left: 27,
  },
  groupChild6: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  rectangleParent1: {
    top: 593,
    left: 27,
  },
  groupChild7: {
    borderRadius: Border.br_3xs,
  },
  continue: {
    marginLeft: -40.5,
    color: Color.iOSKeyBackgroundHighlight,
  },
  rectangleParent2: {
    marginTop: 290,
    marginLeft: -153,
  },
  monkapHasYour: {
    marginTop: -29.5,
    fontSize: FontSize.size_6xl,
    height: 24,
    color: Color.iOSKeyBackgroundHighlight,
  },
  letsSetUp: {
    marginTop: 2.5,
    marginLeft: -126,
    fontSize: FontSize.size_base,
    width: 241,
    height: 27,
    color: Color.iOSKeyBackgroundHighlight,
  },
  monkapHasYourBackParent: {
    marginTop: -377,
    height: 59,
  },
  every1: {
    left: 0,
  },
  week: {
    left: 150,
  },
  periodChild: {
    left: 66,
  },
  periodItem: {
    left: 191,
  },
  played: {
    left: 0,
  },
  period: {
    top: 305,
    left: 30,
    width: 207,
    height: 33,
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

export default AddTargetSavings;
