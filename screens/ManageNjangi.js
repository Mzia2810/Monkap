import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Image, Pressable, Text, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import JanCalendar from "../components/JanCalendar";
import ContainerMonkap from "../components/ContainerMonkap";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const ManageNjangi = () => {
  const [tabArea2Visible, setTabArea2Visible] = useState(false);
  const [groupImageVisible, setGroupImageVisible] = useState(false);
  const navigation = useNavigation();

  const openTabArea2 = useCallback(() => {
    setTabArea2Visible(true);
  }, []);

  const closeTabArea2 = useCallback(() => {
    setTabArea2Visible(false);
  }, []);

  const openGroupImage = useCallback(() => {
    setGroupImageVisible(true);
  }, []);

  const closeGroupImage = useCallback(() => {
    setGroupImageVisible(false);
  }, []);
  return (
    <>
      <View style={styles.manageNjangi}>
        <View style={[styles.manageNjangiChild, styles.managePosition]} />
        <Pressable
          style={styles.group}
          onPress={() => navigation.navigate("NjangiMainDaily1")}
        >
          <Image
            style={[styles.vectorIcon, styles.managePosition]}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
          <View style={styles.groupChild} />
        </Pressable>
        <View style={[styles.rectangleParent, styles.rectanglePosition]}>
          <View style={[styles.groupItem, styles.groupItemPosition]} />
          <Text style={[styles.activateSavingAccount, styles.continueTypo]}>
            Activate Saving Account
          </Text>
          <View style={styles.groupInner} />
        </View>
        <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
          <View style={[styles.groupItem, styles.groupItemPosition]} />
          <Text style={[styles.continue, styles.continueTypo]}>Continue</Text>
          <View style={styles.groupInner} />
        </View>
        <View style={[styles.monkapDigitalNjangiParent, styles.monkapPosition]}>
          <Text
            style={[
              styles.monkapDigitalNjangi,
              styles.xafTypo,
              styles.monkapPosition,
              styles.manageNjangiesTypo,
            ]}
          >
            MoNkap Digital Njangi
          </Text>
          <Text
            style={[
              styles.manageNjangies,
              styles.xafTypo,
              styles.manageNjangiesTypo,
              styles.managePosition,
            ]}
          >
            Manage Njangies
          </Text>
        </View>
        <View style={[styles.amountToContributeParent, styles.parentLayout]}>
          <Text style={[styles.amountToContribute, styles.playedTypo]}>
            Amount to Contribute
          </Text>
          <View style={[styles.groupChild2, styles.groupChildLayout]} />
          <Text style={[styles.pleaseEnterAn, styles.selectADateTypo]}>
            Please enter an amount
          </Text>
          <View
            style={[
              styles.rectangleContainer,
              styles.wrapperLayout,
              styles.wrapperPosition,
            ]}
          >
            <View style={[styles.groupChild3, styles.wrapperLayout]} />
            <Text
              style={[
                styles.xaf,
                styles.xafLayout,
                styles.xafPosition,
                styles.xafTypo,
              ]}
            >
              XAF
            </Text>
          </View>
        </View>
        <View style={[styles.groupView, styles.parentLayout]}>
          <View style={[styles.groupChild2, styles.groupChildLayout]} />
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
              styles.wrapperLayout,
              styles.wrapperPosition,
            ]}
            onPress={openGroupImage}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/group-1142.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.nameParent, styles.parentLayout]}>
          <Text style={[styles.amountToContribute, styles.playedTypo]}>
            Name
          </Text>
          <View style={[styles.groupChild5, styles.groupChildLayout]} />
          <Text style={styles.enterTheName}>Enter the name</Text>
        </View>
        <View style={[styles.sessionsParent, styles.parentLayout]}>
          <Text style={[styles.amountToContribute, styles.playedTypo]}>
            Sessions
          </Text>
          <Text style={styles.numberOfTimes}>
            (Number of times everyone has to “chop” the Njangui)
          </Text>
          <View style={[styles.groupChild2, styles.groupChildLayout]} />
          <Text style={styles.enterTheName}>number of sessions</Text>
        </View>
        <View style={[styles.rectangleParent1, styles.groupItemPosition]}>
          <View style={[styles.groupItem, styles.groupItemPosition]} />
          <Text style={[styles.continue, styles.continueTypo]}>Continue</Text>
          <Pressable
            style={styles.groupInner}
            onPress={() => navigation.navigate("NjangiMainDaily2")}
          />
        </View>
        <View style={[styles.period, styles.xafLayout]}>
          <Text style={styles.every1}>Every 1</Text>
          <Image
            style={styles.periodChild}
            resizeMode="cover"
            source={require("../assets/polygon-21.png")}
          />
          <Text style={[styles.played, styles.playedTypo]}>{`Played `}</Text>
        </View>
        <ContainerMonkap
          carouselImageUrls={require("../assets/c14-house10.png")}
          carouselImageUrls2={require("../assets/group35.png")}
          carouselImageUrls3={require("../assets/group1.png")}
          carouselImageUrls4={{ uri: "group37@3x.png" }}
          propTop={754}
          propColor="#000"
          propHeight="62.57%"
          onTabAreaPress={() => navigation.navigate("MoNkapHomeScreen2")}
          onTabAreaPress1={openTabArea2}
          onImageedit341319179892Press={() =>
            navigation.navigate("BottomTabsRoot", { screen: "LinkBank" })
          }
          onTabAreaPress2={() =>
            navigation.navigate("BottomTabsRoot", { screen: "MTNSplashScreen" })
          }
          onTabAreaPress3={() => navigation.navigate("OMoneySplashScreen")}
        />
      </View>

      <Modal animationType="fade" transparent visible={tabArea2Visible}>
        <View style={styles.tabArea2Overlay}>
          <Pressable style={styles.tabArea2Bg} onPress={closeTabArea2} />
          <MyActivity onClose={closeTabArea2} />
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
  managePosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  rectanglePosition: {
    display: "none",
    height: 45,
    width: 305,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupItemPosition: {
    height: 45,
    width: 305,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  continueTypo: {
    textAlign: "left",
    color: Color.iOSKeyBackgroundHighlight,
    fontWeight: "700",
    fontSize: FontSize.size_4xl,
    marginTop: -11.5,
    fontFamily: FontFamily.gentiumBookBasic,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  monkapPosition: {
    width: 270,
    marginLeft: -135,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  xafTypo: {
    textAlign: "center",
    color: Color.iOSKeyBackgroundHighlight,
    fontWeight: "700",
  },
  manageNjangiesTypo: {
    fontFamily: FontFamily.gentiumBookBasic,
    textAlign: "center",
  },
  parentLayout: {
    height: 66,
    left: 27,
    width: 305,
    position: "absolute",
  },
  playedTypo: {
    color: Color.iOSKeyLabel,
    fontSize: FontSize.size_lg,
    top: 0,
    textAlign: "left",
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  groupChildLayout: {
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
  selectADateTypo: {
    height: 11,
    color: Color.silver_200,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  wrapperLayout: {
    width: 66,
    height: 40,
    position: "absolute",
  },
  wrapperPosition: {
    top: 26,
    width: 66,
  },
  xafLayout: {
    height: 17,
    position: "absolute",
  },
  xafPosition: {
    left: 16,
    fontFamily: FontFamily.gentiumBasic,
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
  manageNjangiChild: {
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
  },
  continue: {
    marginLeft: -40.5,
  },
  rectangleGroup: {
    marginTop: 290,
    marginLeft: -153,
  },
  monkapDigitalNjangi: {
    marginTop: -24,
    fontSize: FontSize.size_6xl,
    height: 24,
  },
  manageNjangies: {
    marginTop: 8,
    marginLeft: -59,
    fontSize: FontSize.size_base,
  },
  monkapDigitalNjangiParent: {
    marginTop: -377,
    height: 48,
  },
  amountToContribute: {
    left: 3,
  },
  groupChild2: {
    borderRadius: Border.br_3xs,
  },
  pleaseEnterAn: {
    top: 41,
    left: 94,
    width: 168,
    fontFamily: FontFamily.gentiumBasic,
    height: 11,
  },
  groupChild3: {
    borderTopLeftRadius: Border.br_xs,
    borderBottomLeftRadius: Border.br_xs,
    borderWidth: 0.3,
    borderColor: "#0000ee",
    borderStyle: "solid",
    width: 66,
    left: 0,
    top: 0,
    backgroundColor: Color.blue_100,
  },
  xaf: {
    top: 11,
    fontSize: FontSize.size_xl,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 30,
  },
  rectangleContainer: {
    left: 0,
  },
  amountToContributeParent: {
    top: 188,
  },
  selectADate: {
    top: 40,
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
  groupView: {
    top: 316,
  },
  groupChild5: {
    borderRadius: Border.br_xs,
  },
  enterTheName: {
    top: 37,
    left: 19,
    color: Color.silver_200,
    fontFamily: FontFamily.gentiumBasic,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  nameParent: {
    top: 114,
  },
  numberOfTimes: {
    top: 4,
    left: 59,
    fontStyle: "italic",
    fontSize: FontSize.size_3xs,
    color: Color.iOSKeyLabel,
    textAlign: "left",
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  sessionsParent: {
    top: 390,
  },
  rectangleParent1: {
    marginTop: 263,
    marginLeft: -156,
  },
  every1: {
    left: 109,
    color: Color.gray_2900,
    fontSize: FontSize.size_lg,
    top: 0,
    textAlign: "left",
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  periodChild: {
    top: 5,
    left: 176,
    width: 12,
    height: 8,
    position: "absolute",
  },
  played: {
    left: 0,
  },
  period: {
    top: 271,
    width: 187,
    left: 27,
    height: 17,
  },
  manageNjangi: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
});

export default ManageNjangi;
