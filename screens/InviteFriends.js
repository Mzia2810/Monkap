import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const InviteFriends = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.inviteFriends}
      onPress={() => navigation.navigate("MoNkapHomeScreen2")}
    >
      <View style={styles.inviteFriendsChild} />
      <View
        style={[
          styles.inviteFriendsInner,
          styles.inviteFriendsInnerLayout,
          styles.welcomeToXafPosition,
        ]}
      >
        <View
          style={[styles.groupIconPosition, styles.inviteFriendsInnerLayout]}
        >
          <Text style={[styles.welcomeToXaf, styles.welcomeToXafPosition]}>
            Welcome to XAF eWallet-tag
          </Text>
          <Image
            style={[styles.groupIcon, styles.groupIconPosition]}
            resizeMode="cover"
            source={require("../assets/group266.png")}
          />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  inviteFriendsInnerLayout: {
    height: 101,
    width: 292,
    marginLeft: -146,
  },
  welcomeToXafPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupIconPosition: {
    marginTop: -50.5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  inviteFriendsChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.blue_100,
    width: 375,
    height: 100,
    position: "absolute",
  },
  welcomeToXaf: {
    marginTop: 20.5,
    fontSize: FontSize.size_4xl,
    fontWeight: "500",
    fontFamily: FontFamily.poppins,
    color: Color.gray_100,
    textAlign: "left",
    marginLeft: -146,
    top: "50%",
  },
  groupIcon: {
    marginLeft: -27,
    width: 55,
    height: 55,
  },
  inviteFriendsInner: {
    marginTop: -50,
  },
  inviteFriends: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default InviteFriends;
