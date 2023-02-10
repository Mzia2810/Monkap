import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Image, Pressable, Text, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import ContainerMonkap from "../components/ContainerMonkap";
import AddContact from "../components/AddContact";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ViewScheduleMabingo1 = () => {
  const [tabArea3Visible, setTabArea3Visible] = useState(false);
  const navigation = useNavigation();
  const [tabArea6Visible, setTabArea6Visible] = useState(false);

  const openTabArea3 = useCallback(() => {
    setTabArea3Visible(true);
  }, []);

  const closeTabArea3 = useCallback(() => {
    setTabArea3Visible(false);
  }, []);

  const openTabArea6 = useCallback(() => {
    setTabArea6Visible(true);
  }, []);

  const closeTabArea6 = useCallback(() => {
    setTabArea6Visible(false);
  }, []);
  return (
    <>
      <View style={styles.viewScheduleMabingo}>
        <View
          style={[
            styles.viewScheduleMabingoChild,
            styles.members1Layout,
            styles.groupPosition,
          ]}
        />
        <Pressable
          style={[styles.group, styles.groupLayout1, styles.groupPosition]}
          onPress={() => navigation.navigate("NjangiWeekly")}
        >
          <Image
            style={[styles.vectorIcon, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
          <View style={[styles.groupChild, styles.groupLayout1]} />
        </Pressable>
        <View
          style={[
            styles.rectangleParent,
            styles.groupItemLayout,
            styles.groupLayout,
          ]}
        >
          <View
            style={[
              styles.groupItem,
              styles.groupItemLayout,
              styles.groupLayout,
            ]}
          />
          <Text
            style={[
              styles.activateSavingAccount,
              styles.continueTypo,
              styles.continueTypo1,
            ]}
          >
            Activate Saving Account
          </Text>
          <View style={[styles.groupInner, styles.groupItemLayout]} />
        </View>
        <View
          style={[
            styles.rectangleGroup,
            styles.groupItemLayout,
            styles.groupLayout,
          ]}
        >
          <View
            style={[
              styles.groupItem,
              styles.groupItemLayout,
              styles.groupLayout,
            ]}
          />
          <Text
            style={[styles.continue, styles.continueTypo, styles.continueTypo1]}
          >
            Continue
          </Text>
          <View style={[styles.groupInner, styles.groupItemLayout]} />
        </View>
        <View style={[styles.monkapDigitalNjangiParent, styles.monkapPosition]}>
          <Text
            style={[
              styles.monkapDigitalNjangi,
              styles.monkapPosition,
              styles.continueTypo,
            ]}
          >
            MoNkap Digital Njangi
          </Text>
          <Text style={styles.mabingoNjangiDetails}>
            Mabingo Njangi Details
          </Text>
        </View>
        <View style={[styles.schedulePlaying, styles.schedulePosition]}>
          <View
            style={[styles.schedulePlayingChild, styles.schedulePosition]}
          />
          <View style={styles.rectangle} />
          <View style={styles.rectangle1} />
          <Text style={styles.playing}>Playing</Text>
          <View style={[styles.tabArea, styles.tabPosition]} />
          <Text style={styles.schedule}>Schedule</Text>
          <Pressable
            style={[styles.tabArea1, styles.tabPosition]}
            onPress={() => navigation.navigate("ViewScheduleMabingo")}
          />
        </View>
        <Text style={styles.text}>{`17 - 05 - 2022 `}</Text>
        <Text style={[styles.nextPlayDate, styles.nextPlayDateTypo]}>
          Next Play Date
        </Text>
        <Text style={[styles.members, styles.statusTypo]}>Members</Text>
        <Text style={[styles.status, styles.statusTypo]}>Status</Text>
        <View style={styles.paid}>
          <View style={[styles.paidChild, styles.paidChildPosition]} />
          <Text
            style={[styles.paid1, styles.paid1Typo, styles.paid1Position]}
          >{`Paid `}</Text>
        </View>
        <View style={styles.toBePaid}>
          <View style={[styles.toBePaidChild, styles.paidChildPosition]} />
          <Text style={[styles.paid1, styles.paid1Typo, styles.paid1Position]}>
            To be paid
          </Text>
        </View>
        <View style={[styles.members1, styles.members1Layout]}>
          <View style={styles.membersPosition}>
            <View style={[styles.membersChild, styles.membersPosition]} />
            <View
              style={[
                styles.daniel,
                styles.danielLayout,
                styles.danielPosition,
              ]}
            >
              <View style={[styles.danielChild, styles.danielLayout]} />
              <Image
                style={[styles.danielItem, styles.groupItemLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-15.png")}
              />
              <Text style={[styles.pending, styles.playedTypo]}>Pending</Text>
              <Text style={[styles.hillaryOkeng, styles.nextPlayDateTypo]}>
                Hillary Okeng
              </Text>
              <View style={[styles.ellipseParent, styles.groupChildLayout1]}>
                <Image
                  style={[styles.groupChildLayout, styles.ellipseIconPosition]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-40.png")}
                />
                <Image
                  style={[
                    styles.groupChild2,
                    styles.ellipseIconPosition,
                    styles.groupChildLayout1,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-39.png")}
                />
                <Text
                  style={[styles.text1, styles.textTypo, styles.textPosition]}
                >
                  75%
                </Text>
                <Text style={[styles.text2, styles.textTypo, styles.textTypo1]}>
                  25%
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.daniel1,
                styles.danielLayout,
                styles.danielPosition,
              ]}
            >
              <View style={[styles.danielChild, styles.danielLayout]} />
              <Image
                style={[styles.danielItem, styles.groupItemLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-151.png")}
              />
              <Text style={[styles.played, styles.playedTypo]}>Played</Text>
              <Text style={[styles.hillaryOkeng, styles.nextPlayDateTypo]}>
                Aldeniel Mabingo
              </Text>
              <View style={[styles.ellipseGroup, styles.groupChildLayout1]}>
                <Image
                  style={[styles.groupChild3, styles.groupChildLayout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-40.png")}
                />
                <Image
                  style={[styles.groupChild4, styles.groupChildLayout1]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-391.png")}
                />
                <Text
                  style={[styles.text3, styles.textTypo, styles.textPosition]}
                >
                  75%
                </Text>
                <Text style={[styles.text4, styles.textTypo, styles.textTypo1]}>
                  25%
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.daniel2,
                styles.danielLayout,
                styles.danielPosition,
              ]}
            >
              <View style={[styles.danielChild, styles.danielLayout]} />
              <Image
                style={[styles.danielItem, styles.groupItemLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-151.png")}
              />
              <Text style={[styles.pending, styles.playedTypo]}>Pending</Text>
              <Text style={[styles.hillaryOkeng, styles.nextPlayDateTypo]}>
                Tanwi Kalson
              </Text>
              <View style={[styles.ellipseParent, styles.groupChildLayout1]}>
                <Image
                  style={styles.ellipseIconPosition}
                  resizeMode="cover"
                  source={require("../assets/ellipse-402.png")}
                />
                <Image
                  style={[
                    styles.groupChild6,
                    styles.groupChildLayout1,
                    styles.paid1Position,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-392.png")}
                />
                <Text
                  style={[styles.text1, styles.textTypo, styles.textPosition]}
                >
                  50%
                </Text>
                <Text style={[styles.text2, styles.textTypo, styles.textTypo1]}>
                  50%
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.daniel3,
                styles.danielLayout,
                styles.danielPosition,
              ]}
            >
              <View style={[styles.danielChild, styles.danielLayout]} />
              <Image
                style={[styles.danielItem, styles.groupItemLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-151.png")}
              />
              <Text style={[styles.pending, styles.playedTypo]}>Pending</Text>
              <Text style={[styles.hillaryOkeng, styles.nextPlayDateTypo]}>
                Anafor Awoh
              </Text>
              <View style={[styles.ellipseGroup, styles.groupChildLayout1]}>
                <Image
                  style={[styles.groupChild3, styles.groupChildLayout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-403.png")}
                />
                <Image
                  style={[styles.groupChild8, styles.groupChildLayout1]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-391.png")}
                />
                <Text
                  style={[styles.text3, styles.textTypo, styles.textPosition]}
                >
                  75%
                </Text>
                <Text style={[styles.text4, styles.textTypo, styles.textTypo1]}>
                  25%
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.daniel4,
                styles.danielLayout,
                styles.danielPosition,
              ]}
            >
              <View style={[styles.danielChild, styles.danielLayout]} />
              <Image
                style={[styles.danielItem, styles.groupItemLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-15.png")}
              />
              <Text style={[styles.played, styles.playedTypo]}>Played</Text>
              <Text style={[styles.hillaryOkeng, styles.nextPlayDateTypo]}>
                Chi Mah
              </Text>
              <View style={[styles.ellipseGroup, styles.groupChildLayout1]}>
                <Image
                  style={[styles.groupChild3, styles.groupChildLayout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-40.png")}
                />
                <Image
                  style={[styles.groupChild4, styles.groupChildLayout1]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-391.png")}
                />
                <Text
                  style={[styles.text3, styles.textTypo, styles.textPosition]}
                >
                  75%
                </Text>
                <Text style={[styles.text4, styles.textTypo, styles.textTypo1]}>
                  25%
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.daniel5,
                styles.danielLayout,
                styles.danielPosition,
              ]}
            >
              <View style={[styles.danielChild, styles.danielLayout]} />
              <Image
                style={[styles.danielItem, styles.groupItemLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-15.png")}
              />
              <Text style={[styles.played, styles.playedTypo]}>Played</Text>
              <Text style={[styles.hillaryOkeng, styles.nextPlayDateTypo]}>
                Vifeih Ruth
              </Text>
              <View style={[styles.ellipseGroup, styles.groupChildLayout1]}>
                <Image
                  style={[styles.groupChild3, styles.groupChildLayout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-40.png")}
                />
                <Image
                  style={[styles.groupChild4, styles.groupChildLayout1]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-391.png")}
                />
                <Text
                  style={[styles.text3, styles.textTypo, styles.textPosition]}
                >
                  75%
                </Text>
                <Text style={[styles.text4, styles.textTypo, styles.textTypo1]}>
                  25%
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.daniel6,
                styles.danielLayout,
                styles.danielPosition,
              ]}
            >
              <View style={[styles.danielChild, styles.danielLayout]} />
              <Image
                style={[styles.danielItem, styles.groupItemLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-151.png")}
              />
              <Text style={[styles.played, styles.playedTypo]}>Played</Text>
              <Text style={[styles.hillaryOkeng, styles.nextPlayDateTypo]}>
                Hillary Okeng
              </Text>
              <View style={[styles.ellipseGroup, styles.groupChildLayout1]}>
                <Image
                  style={[styles.groupChild3, styles.groupChildLayout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-40.png")}
                />
                <Image
                  style={[styles.groupChild4, styles.groupChildLayout1]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-391.png")}
                />
                <Text
                  style={[styles.text3, styles.textTypo, styles.textPosition]}
                >
                  75%
                </Text>
                <Text style={[styles.text4, styles.textTypo, styles.textTypo1]}>
                  25%
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.daniel7,
                styles.danielLayout,
                styles.danielPosition,
              ]}
            >
              <View style={[styles.danielChild, styles.danielLayout]} />
              <Image
                style={[styles.danielItem, styles.groupItemLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-15.png")}
              />
              <Text style={[styles.played, styles.playedTypo]}>Played</Text>
              <Text style={[styles.hillaryOkeng, styles.nextPlayDateTypo]}>
                Hillary Okeng
              </Text>
              <View style={[styles.ellipseGroup, styles.groupChildLayout1]}>
                <Image
                  style={[styles.groupChild3, styles.groupChildLayout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-40.png")}
                />
                <Image
                  style={[styles.groupChild4, styles.groupChildLayout1]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-391.png")}
                />
                <Text
                  style={[styles.text3, styles.textTypo, styles.textPosition]}
                >
                  75%
                </Text>
                <Text style={[styles.text4, styles.textTypo, styles.textTypo1]}>
                  25%
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.daniel8,
                styles.danielLayout,
                styles.danielPosition,
              ]}
            >
              <View style={[styles.danielChild, styles.danielLayout]} />
              <Image
                style={[styles.danielItem, styles.groupItemLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-15.png")}
              />
              <Text style={[styles.played, styles.playedTypo]}>Played</Text>
              <Text style={[styles.hillaryOkeng, styles.nextPlayDateTypo]}>
                Hillary Okeng
              </Text>
              <View style={[styles.ellipseGroup, styles.groupChildLayout1]}>
                <Image
                  style={[styles.groupChild3, styles.groupChildLayout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-40.png")}
                />
                <Image
                  style={[styles.groupChild4, styles.groupChildLayout1]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-391.png")}
                />
                <Text
                  style={[styles.text3, styles.textTypo, styles.textPosition]}
                >
                  75%
                </Text>
                <Text style={[styles.text4, styles.textTypo, styles.textTypo1]}>
                  25%
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.daniel9,
                styles.danielLayout,
                styles.danielPosition,
              ]}
            >
              <View style={[styles.danielChild, styles.danielLayout]} />
              <Image
                style={[styles.danielItem, styles.groupItemLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-151.png")}
              />
              <Text style={[styles.played, styles.playedTypo]}>Played</Text>
              <Text style={[styles.hillaryOkeng, styles.nextPlayDateTypo]}>
                Hillary Okeng
              </Text>
              <View style={[styles.ellipseGroup, styles.groupChildLayout1]}>
                <Image
                  style={[styles.groupChild3, styles.groupChildLayout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-40.png")}
                />
                <Image
                  style={[styles.groupChild4, styles.groupChildLayout1]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-391.png")}
                />
                <Text
                  style={[styles.text3, styles.textTypo, styles.textPosition]}
                >
                  75%
                </Text>
                <Text style={[styles.text4, styles.textTypo, styles.textTypo1]}>
                  25%
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.daniel10,
                styles.danielLayout,
                styles.danielPosition,
              ]}
            >
              <View style={[styles.danielChild, styles.danielLayout]} />
              <Image
                style={[styles.danielItem, styles.groupItemLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-1510.png")}
              />
              <Text style={[styles.played, styles.playedTypo]}>Played</Text>
              <Text style={[styles.hillaryOkeng, styles.nextPlayDateTypo]}>
                Hillary Okeng
              </Text>
              <View style={[styles.ellipseGroup, styles.groupChildLayout1]}>
                <Image
                  style={styles.groupChild21}
                  resizeMode="cover"
                  source={require("../assets/ellipse-4010.png")}
                />
                <Image
                  style={[styles.groupChild4, styles.groupChildLayout1]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-3910.png")}
                />
                <Text
                  style={[styles.text3, styles.textTypo, styles.textPosition]}
                >
                  75%
                </Text>
                <Text style={[styles.text4, styles.textTypo, styles.textTypo1]}>
                  25%
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.daniel11,
                styles.danielLayout,
                styles.danielPosition,
              ]}
            >
              <View style={[styles.danielChild, styles.danielLayout]} />
              <Image
                style={[styles.danielItem, styles.groupItemLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-1511.png")}
              />
              <Text style={[styles.played, styles.playedTypo]}>Played</Text>
              <Text style={[styles.hillaryOkeng, styles.nextPlayDateTypo]}>
                Hillary Okeng
              </Text>
              <View style={[styles.ellipseGroup, styles.groupChildLayout1]}>
                <Image
                  style={[styles.groupChild23, styles.groupChildLayout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-4011.png")}
                />
                <Image
                  style={[styles.groupChild4, styles.groupChildLayout1]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-3911.png")}
                />
                <Text
                  style={[styles.text3, styles.textTypo, styles.textPosition]}
                >
                  75%
                </Text>
                <Text style={[styles.text4, styles.textTypo, styles.textTypo1]}>
                  25%
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.daniel12,
                styles.danielLayout,
                styles.danielPosition,
              ]}
            >
              <View style={[styles.danielChild, styles.danielLayout]} />
              <Image
                style={[styles.danielItem, styles.groupItemLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-1511.png")}
              />
              <Text style={[styles.played, styles.playedTypo]}>Played</Text>
              <Text style={[styles.hillaryOkeng, styles.nextPlayDateTypo]}>
                Hillary Okeng
              </Text>
              <View style={[styles.ellipseGroup, styles.groupChildLayout1]}>
                <Image
                  style={[styles.groupChild23, styles.groupChildLayout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-4011.png")}
                />
                <Image
                  style={[styles.groupChild4, styles.groupChildLayout1]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-3911.png")}
                />
                <Text
                  style={[styles.text3, styles.textTypo, styles.textPosition]}
                >
                  75%
                </Text>
                <Text style={[styles.text4, styles.textTypo, styles.textTypo1]}>
                  25%
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.daniel13,
                styles.danielLayout,
                styles.danielPosition,
              ]}
            >
              <View style={[styles.danielChild, styles.danielLayout]} />
              <Image
                style={[styles.danielItem, styles.groupItemLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-1511.png")}
              />
              <Text style={[styles.played, styles.playedTypo]}>Played</Text>
              <Text style={[styles.hillaryOkeng, styles.nextPlayDateTypo]}>
                Hillary Okeng
              </Text>
              <View style={[styles.ellipseGroup, styles.groupChildLayout1]}>
                <Image
                  style={[styles.groupChild23, styles.groupChildLayout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-4011.png")}
                />
                <Image
                  style={[styles.groupChild4, styles.groupChildLayout1]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-3911.png")}
                />
                <Text
                  style={[styles.text3, styles.textTypo, styles.textPosition]}
                >
                  75%
                </Text>
                <Text style={[styles.text4, styles.textTypo, styles.textTypo1]}>
                  25%
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.filter}>
            <View style={[styles.filterChild, styles.filterPosition]} />
            <Text style={[styles.filter1, styles.paid1Typo]}>Filter</Text>
            <View style={[styles.filterItem, styles.filterPosition]} />
            <Image
              style={styles.filterInner}
              resizeMode="cover"
              source={require("../assets/group-56.png")}
            />
            <Image
              style={[styles.groupIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/group3.png")}
            />
          </View>
        </View>
        <ContainerMonkap
          carouselImageUrls={{ uri: "c14-house17@3x.png" }}
          carouselImageUrls2={{ uri: "group38@3x.png" }}
          carouselImageUrls3={require("../assets/group39.png")}
          carouselImageUrls4={{ uri: "group37@3x.png" }}
          propColor="#000"
          propHeight="62.57%"
          onTabAreaPress={() => navigation.navigate("MoNkapHomeScreen2")}
          onTabAreaPress1={openTabArea3}
          onImageedit341319179892Press={() =>
            navigation.navigate("BottomTabsRoot", { screen: "LinkBank" })
          }
          onTabAreaPress2={() =>
            navigation.navigate("BottomTabsRoot", { screen: "MTNSplashScreen" })
          }
          onTabAreaPress3={() => navigation.navigate("OMoneySplashScreen")}
        />
        <View style={[styles.addNew, styles.addNewLayout]}>
          <Text style={[styles.addNewMember, styles.paid1Typo]}>
            Add New Member
          </Text>
          <Image
            style={[styles.addIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/add.png")}
          />
          <Pressable
            style={[styles.tabArea2, styles.addNewLayout]}
            onPress={openTabArea6}
          />
        </View>
      </View>

      <Modal animationType="fade" transparent visible={tabArea3Visible}>
        <View style={styles.tabArea3Overlay}>
          <Pressable style={styles.tabArea3Bg} onPress={closeTabArea3} />
          <MyActivity onClose={closeTabArea3} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={tabArea6Visible}>
        <View style={styles.tabArea6Overlay}>
          <Pressable style={styles.tabArea6Bg} onPress={closeTabArea6} />
          <AddContact onClose={closeTabArea6} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  members1Layout: {
    width: 360,
    position: "absolute",
  },
  groupPosition: {
    left: "50%",
    top: "50%",
  },
  groupLayout1: {
    height: 57,
    width: 47,
    position: "absolute",
  },
  groupItemLayout: {
    height: 45,
    position: "absolute",
  },
  groupLayout: {
    width: 305,
    height: 45,
    left: "50%",
    top: "50%",
  },
  continueTypo: {
    color: Color.iOSKeyBackgroundHighlight,
    fontFamily: FontFamily.gentiumBookBasic,
    fontWeight: "700",
  },
  continueTypo1: {
    fontSize: FontSize.size_4xl,
    marginTop: -11.5,
    textAlign: "left",
    fontFamily: FontFamily.gentiumBookBasic,
    fontWeight: "700",
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
  schedulePosition: {
    right: "0%",
    position: "absolute",
  },
  tabPosition: {
    width: "25.07%",
    top: "20%",
    backgroundColor: Color.gainsboro_700,
    position: "absolute",
  },
  nextPlayDateTypo: {
    fontFamily: FontFamily.gentiumBasic,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  statusTypo: {
    top: 200,
    fontStyle: "italic",
    fontFamily: FontFamily.gentiumBasic,
    color: Color.iOSKeyLabel,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  paidChildPosition: {
    height: 9,
    width: 18,
    left: 0,
    top: 2,
    position: "absolute",
  },
  paid1Typo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.gentiumBasic,
    color: Color.iOSKeyLabel,
    textAlign: "left",
    position: "absolute",
  },
  paid1Position: {
    left: 24,
    top: 0,
  },
  membersPosition: {
    height: 749,
    left: 0,
    top: 0,
    width: 360,
    position: "absolute",
  },
  danielLayout: {
    height: 50,
    width: 342,
    position: "absolute",
  },
  danielPosition: {
    left: 9,
    width: 342,
  },
  playedTypo: {
    top: 17,
    color: Color.blue_300,
    fontFamily: FontFamily.gentiumBasic,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout1: {
    height: 42,
    position: "absolute",
  },
  ellipseIconPosition: {
    left: 2,
    top: 0,
  },
  textTypo: {
    fontSize: FontSize.size_4xs,
    fontStyle: "italic",
    fontFamily: FontFamily.gentiumBasic,
    color: Color.iOSKeyLabel,
    textAlign: "left",
    position: "absolute",
  },
  textPosition: {
    top: 27,
    fontSize: FontSize.size_4xs,
  },
  textTypo1: {
    fontSize: FontSize.size_4xs,
    top: 2,
  },
  groupChildLayout: {
    height: 41,
    width: 44,
    position: "absolute",
  },
  filterPosition: {
    top: 1,
    position: "absolute",
  },
  iconLayout: {
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  addNewLayout: {
    height: 37,
    position: "absolute",
  },
  tabArea3Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  tabArea3Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  viewScheduleMabingoChild: {
    marginTop: -400,
    marginLeft: -180,
    height: 94,
    backgroundColor: Color.blue_100,
  },
  vectorIcon: {
    marginTop: -61.5,
    marginLeft: -56.5,
    width: 16,
    height: 13,
    position: "absolute",
  },
  groupChild: {
    top: -57,
    left: -47,
    backgroundColor: Color.gainsboro_700,
  },
  group: {
    marginTop: -320,
    marginLeft: -132,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
  },
  groupItem: {
    marginTop: -22.5,
    marginLeft: -152.5,
    borderRadius: Border.br_xs,
    backgroundColor: Color.blue_100,
  },
  activateSavingAccount: {
    marginLeft: -108.5,
    textAlign: "left",
  },
  groupInner: {
    left: 1,
    width: 304,
    top: 0,
    backgroundColor: Color.gainsboro_700,
  },
  rectangleParent: {
    marginTop: 291,
    marginLeft: -152,
    display: "none",
  },
  continue: {
    marginLeft: -40.5,
    textAlign: "left",
  },
  rectangleGroup: {
    marginTop: 290,
    marginLeft: -153,
    display: "none",
  },
  monkapDigitalNjangi: {
    marginTop: -24,
    fontSize: FontSize.size_6xl,
    height: 24,
    textAlign: "center",
  },
  mabingoNjangiDetails: {
    marginTop: 8,
    marginLeft: -73,
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.iOSKeyBackgroundHighlight,
    fontFamily: FontFamily.gentiumBookBasic,
    fontWeight: "700",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  monkapDigitalNjangiParent: {
    marginTop: -377,
    height: 48,
  },
  schedulePlayingChild: {
    height: "100%",
    top: "0%",
    bottom: "0%",
    left: "0%",
    width: "100%",
    right: "0%",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  rectangle: {
    height: "88.57%",
    width: "97.49%",
    top: "8.57%",
    right: "1.39%",
    left: "1.11%",
    backgroundColor: Color.gainsboro_400,
    borderRadius: Border.br_6xl,
    bottom: "2.86%",
    position: "absolute",
  },
  rectangle1: {
    height: "65.71%",
    width: "44.01%",
    right: "2.51%",
    bottom: "14.29%",
    left: "53.48%",
    top: "20%",
    borderRadius: Border.br_6xl,
    position: "absolute",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  playing: {
    left: "69.92%",
    color: Color.iOSKeyLabel,
    lineHeight: 22,
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
    top: "25.71%",
    textAlign: "center",
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  tabArea: {
    height: "77.14%",
    right: "9.19%",
    left: "65.74%",
    bottom: "2.86%",
    width: "25.07%",
  },
  schedule: {
    left: "13.65%",
    color: Color.gray_3000,
    lineHeight: 22,
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
    top: "25.71%",
    textAlign: "left",
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  tabArea1: {
    height: "68.57%",
    right: "64.35%",
    bottom: "11.43%",
    left: "10.58%",
  },
  schedulePlaying: {
    height: "4.38%",
    width: "99.72%",
    top: "12.38%",
    bottom: "83.25%",
    left: "0.28%",
  },
  text: {
    top: 149,
    left: 256,
    color: Color.blue_300,
    fontFamily: FontFamily.gentiumBasic,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  nextPlayDate: {
    top: 153,
    lineHeight: 12,
    color: Color.gray_2900,
    fontStyle: "italic",
    left: 20,
    textAlign: "center",
  },
  members: {
    left: 20,
  },
  status: {
    left: 298,
  },
  paidChild: {
    backgroundColor: Color.lime_200,
  },
  paid1: {
    fontStyle: "italic",
  },
  paid: {
    top: 201,
    left: 145,
    height: 14,
    width: 44,
    position: "absolute",
  },
  toBePaidChild: {
    backgroundColor: Color.orange_100,
  },
  toBePaid: {
    top: 202,
    left: 196,
    width: 71,
    height: 14,
    position: "absolute",
  },
  membersChild: {
    backgroundColor: Color.gainsboro_400,
  },
  danielChild: {
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    width: 342,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  danielItem: {
    top: 3,
    left: 11,
    width: 45,
  },
  pending: {
    left: 284,
  },
  hillaryOkeng: {
    top: 18,
    left: 61,
    color: Color.gray_2800,
    textAlign: "left",
  },
  groupChild2: {
    width: 44,
  },
  text1: {
    left: 35,
  },
  text2: {
    left: 0,
  },
  ellipseParent: {
    left: 168,
    width: 49,
    top: 4,
  },
  daniel: {
    top: 4,
  },
  played: {
    left: 293,
  },
  groupChild3: {
    left: 0,
    top: 0,
  },
  groupChild4: {
    left: 0,
    width: 44,
    top: 0,
  },
  text3: {
    left: 33,
    display: "none",
  },
  text4: {
    left: -2,
    display: "none",
  },
  ellipseGroup: {
    left: 170,
    top: 4,
    width: 44,
  },
  daniel1: {
    top: 57,
  },
  groupChild6: {
    width: 44,
  },
  daniel2: {
    top: 110,
  },
  groupChild8: {
    top: 167,
    left: 179,
    width: 44,
    display: "none",
  },
  daniel3: {
    top: 163,
  },
  daniel4: {
    top: 216,
  },
  daniel5: {
    top: 269,
  },
  daniel6: {
    top: 322,
  },
  daniel7: {
    top: 375,
  },
  daniel8: {
    top: 428,
  },
  daniel9: {
    top: 481,
  },
  groupChild21: {
    height: 1,
    left: 0,
    width: 44,
    top: 0,
    position: "absolute",
  },
  daniel10: {
    top: 534,
  },
  groupChild23: {
    top: 41,
    left: 44,
  },
  daniel11: {
    top: 587,
  },
  daniel12: {
    top: 640,
  },
  daniel13: {
    top: 693,
  },
  filterChild: {
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.whitesmoke_800,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 87,
    left: 0,
    height: 14,
  },
  filter1: {
    left: 21,
    letterSpacing: 0.9,
    lineHeight: 17,
    width: 32,
    top: 0,
    height: 13,
  },
  filterItem: {
    left: 68,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.42)",
    borderRightWidth: 1,
    width: 1,
    height: 15,
  },
  filterInner: {
    left: 74,
    width: 10,
    height: 6,
    top: 5,
    position: "absolute",
  },
  groupIcon: {
    width: "11.86%",
    right: "82.2%",
    left: "5.93%",
    height: 7,
    top: 5,
  },
  filter: {
    top: -1,
    left: 264,
    height: 15,
    width: 87,
    position: "absolute",
  },
  members1: {
    height: 539,
    top: 216,
    left: 0,
  },
  addNewMember: {
    top: 12,
    left: 30,
    width: 100,
    height: 14,
  },
  addIcon: {
    height: "62.16%",
    width: "17.69%",
    top: "18.92%",
    right: "79.23%",
    bottom: "18.92%",
    left: "3.08%",
    maxHeight: "100%",
  },
  tabArea6Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  tabArea6Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  tabArea2: {
    left: 0,
    top: 0,
    backgroundColor: Color.gainsboro_700,
    width: 47,
    height: 37,
  },
  addNew: {
    top: 165,
    left: 15,
    width: 130,
  },
  viewScheduleMabingo: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
});

export default ViewScheduleMabingo1;
