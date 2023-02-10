import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color, Margin } from "../GlobalStyles";

const EmailAddress = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.emailAddress}>
      <View style={styles.emailAddressChild} />
      <View style={styles.enterTheEwalletTagAssociaParent}>
        <Text style={styles.enterTheEwalletTagContainer}>
          <Text style={styles.enterTheEwalletTag}>Enter the #eWallet-tag</Text>
          <Text style={styles.associatedWithYour}>
            associated with your account
          </Text>
        </Text>
        <View style={[styles.rectangleParent, styles.rectanglePosition]}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <Text style={[styles.cashtag, styles.cashtagTypo]}>$Cashtag</Text>
        </View>
        <View
          style={[
            styles.rectangleGroup,
            styles.groupLayout,
            styles.rectanglePosition,
          ]}
        >
          <View style={[styles.groupItem, styles.groupPosition]} />
          <Text style={[styles.continue, styles.cashtagTypo]}>Continue</Text>
          <Pressable
            style={[styles.groupInner, styles.groupLayout]}
            onPress={() => navigation.navigate("EmailVerification")}
          />
        </View>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector147.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectanglePosition: {
    marginLeft: -152.5,
    width: 305,
    left: "50%",
    top: "50%",
  },
  groupPosition: {
    borderRadius: Border.br_xs,
    marginLeft: -152.5,
    width: 305,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  cashtagTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupLayout: {
    height: 46,
    position: "absolute",
  },
  emailAddressChild: {
    left: 0,
    width: 375,
    height: 100,
    backgroundColor: Color.blue_100,
    top: 0,
    position: "absolute",
  },
  enterTheEwalletTag: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  associatedWithYour: {
    margin: Margin.m_3xs,
  },
  enterTheEwalletTagContainer: {
    marginTop: -258.5,
    fontSize: FontSize.size_4xl,
    color: Color.gray_100,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    marginLeft: -152.5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupChild: {
    marginTop: -20,
    backgroundColor: Color.whitesmoke_500,
    height: 40,
  },
  cashtag: {
    marginTop: -12,
    marginLeft: -122.5,
    color: Color.silver_200,
  },
  rectangleParent: {
    marginTop: -183.5,
    height: 40,
    position: "absolute",
  },
  groupItem: {
    marginTop: -22,
    height: 45,
    backgroundColor: Color.blue_100,
  },
  continue: {
    marginTop: -11,
    marginLeft: -35.5,
    color: Color.iOSKeyBackgroundHighlight,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
  },
  groupInner: {
    left: 1,
    backgroundColor: Color.gainsboro_700,
    width: 301,
    top: 0,
  },
  rectangleGroup: {
    marginTop: 312.5,
  },
  vectorIcon: {
    marginTop: -358.5,
    marginLeft: 128.5,
    width: 24,
    height: 24,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  enterTheEwalletTagAssociaParent: {
    marginTop: -356,
    marginLeft: -153,
    height: 717,
    width: 305,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  emailAddress: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default EmailAddress;
