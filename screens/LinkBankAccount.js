import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily, Margin } from "../GlobalStyles";

const LinkBankAccount = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.linkBankAccount}>
      <View style={styles.linkBankAccountChild} />
      <Text style={styles.wouldYouLikeContainer}>
        <Text style={styles.wouldYouLike}>Would You like To Link Some</Text>
        <Text style={styles.accounts}>Accounts?</Text>
      </Text>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.bankAccount, styles.debitCardTypo]}>
          Bank Account
        </Text>
        <Pressable
          style={[styles.groupItem, styles.groupItemBg]}
          onPress={() => navigation.navigate("BankAccount")}
        />
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Text style={[styles.debitCard, styles.debitCardTypo]}>Debit Card</Text>
        <Pressable
          style={[
            styles.rectanglePressable,
            styles.rectangleLayout,
            styles.groupItemBg,
          ]}
          onPress={() => navigation.navigate("DebitCard")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    borderRadius: Border.br_xs,
    height: 45,
    width: 305,
    left: "50%",
    top: "50%",
    backgroundColor: Color.blue_100,
    position: "absolute",
  },
  debitCardTypo: {
    color: Color.iOSKeyBackgroundHighlight,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupItemBg: {
    backgroundColor: Color.gainsboro_700,
    left: 0,
  },
  rectangleLayout: {
    height: 46,
    width: 318,
    position: "absolute",
  },
  linkBankAccountChild: {
    width: 375,
    height: 100,
    backgroundColor: Color.blue_100,
    left: 0,
    position: "absolute",
    top: 0,
  },
  wouldYouLike: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  accounts: {
    margin: Margin.m_3xs,
  },
  wouldYouLikeContainer: {
    marginTop: -256,
    fontSize: FontSize.size_4xl,
    color: Color.gray_100,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    marginLeft: -153,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupChild: {
    marginTop: -22.5,
    marginLeft: -152.5,
  },
  bankAccount: {
    marginTop: -11.5,
    marginLeft: -53.5,
  },
  groupItem: {
    top: 3,
    height: 42,
    width: 305,
    backgroundColor: Color.gainsboro_700,
    position: "absolute",
  },
  rectangleParent: {
    marginTop: 238,
    height: 45,
    width: 305,
    left: "50%",
    top: "50%",
    marginLeft: -153,
    position: "absolute",
  },
  groupInner: {
    marginTop: -22,
    marginLeft: -146,
  },
  debitCard: {
    marginTop: -11,
    marginLeft: -34,
  },
  rectanglePressable: {
    height: 46,
    width: 318,
    backgroundColor: Color.gainsboro_700,
    top: 0,
  },
  rectangleGroup: {
    marginTop: 303,
    marginLeft: -166,
    left: "50%",
    top: "50%",
    height: 46,
    width: 318,
  },
  linkBankAccount: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default LinkBankAccount;
