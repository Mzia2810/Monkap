import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color, Margin } from "../GlobalStyles";

const InviteFriends1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.inviteFriends}>
      <View style={styles.inviteFriendsChild} />
      <View
        style={[
          styles.getFreeTransferCreditsWhenParent,
          styles.vectorIcon1Position,
        ]}
      >
        <Text style={styles.getFreeTransferContainer}>
          <Text style={styles.getFreeTransfer}>
            Get Free Transfer Credits When
          </Text>
          <Text style={styles.youInviteFriends}>You Invite Friends</Text>
        </Text>
        <Text style={styles.allowContactAccessContainer}>
          <Text style={styles.getFreeTransfer}>
            Allow Contact Access to Easily Invite
          </Text>
          <Text style={styles.youInviteFriends}>Your Friends.</Text>
        </Text>
        <View style={[styles.rectangleParent, styles.rectanglePosition]}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <Text style={[styles.continue, styles.skipPosition]}>Continue</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
          <Pressable
            style={[styles.groupItem, styles.groupPosition]}
            onPress={() => navigation.navigate("InviteFriends")}
          />
          <Text style={[styles.skip, styles.skipPosition]}>Skip</Text>
          <View style={styles.groupInner} />
        </View>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector169.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIcon1Position]}
          resizeMode="cover"
          source={require("../assets/vector170.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon1Position: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  rectanglePosition: {
    height: 45,
    width: 305,
    marginLeft: -158,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupPosition: {
    borderRadius: Border.br_xs,
    marginLeft: -152.5,
    marginTop: -22.5,
    height: 45,
    width: 305,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  skipPosition: {
    marginTop: -11.5,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  inviteFriendsChild: {
    top: 0,
    left: 0,
    width: 375,
    height: 100,
    backgroundColor: Color.blue_100,
    position: "absolute",
  },
  getFreeTransfer: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  youInviteFriends: {
    margin: Margin.m_3xs,
  },
  getFreeTransferContainer: {
    marginTop: -201.5,
    fontSize: FontSize.size_4xl,
    color: Color.gray_100,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    marginLeft: -158,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  allowContactAccessContainer: {
    marginTop: -133.5,
    color: Color.silver_200,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    marginLeft: -158,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.blue_100,
  },
  continue: {
    marginLeft: -35.5,
    color: Color.iOSKeyBackgroundHighlight,
  },
  rectangleParent: {
    marginTop: 245.5,
  },
  groupItem: {
    borderStyle: "solid",
    borderColor: "#0000ee",
    borderWidth: 2,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  skip: {
    marginLeft: -16.5,
    color: Color.blue_100,
  },
  groupInner: {
    top: 4,
    left: 1,
    backgroundColor: Color.gainsboro_700,
    width: 304,
    height: 41,
    position: "absolute",
  },
  rectangleGroup: {
    marginTop: 310.5,
  },
  vectorIcon: {
    marginTop: -232.5,
    width: 38,
    height: 23,
    marginLeft: -158,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  vectorIcon1: {
    marginTop: -347.51,
    marginLeft: 125.99,
    width: 19,
    height: 19,
  },
  getFreeTransferCreditsWhenParent: {
    marginTop: -361,
    marginLeft: -153,
    width: 316,
    height: 711,
  },
  inviteFriends: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
});

export default InviteFriends1;
