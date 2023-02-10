import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const BankAccount = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bankAccount}>
      <View
        style={[styles.bankAccountChild, styles.bankAccountChildPosition]}
      />
      <Text style={[styles.swiftCode, styles.swiftTypo, styles.swiftCodeTypo]}>
        Swift Code
      </Text>
      <Text
        style={[styles.accountNumber, styles.swiftTypo, styles.swiftCodeTypo]}
      >
        Account Number
      </Text>
      <Text style={[styles.fullNameOn, styles.swiftTypo, styles.swiftCodeTypo]}>
        Full name (On Account)
      </Text>
      <View style={[styles.rectangleParent, styles.rectanglePosition]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text
          style={[styles.enterSwiftCode, styles.swiftTypo, styles.continueTypo]}
        >
          Enter swift code
        </Text>
      </View>
      <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text
          style={[styles.enterSwiftCode, styles.swiftTypo, styles.continueTypo]}
        >
          Enter account number
        </Text>
      </View>
      <View style={[styles.rectangleContainer, styles.rectanglePosition]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text
          style={[styles.enterSwiftCode, styles.swiftTypo, styles.continueTypo]}
        >
          Enter full name
        </Text>
      </View>
      <View style={[styles.groupView, styles.groupViewLayout]}>
        <View style={[styles.rectangleView, styles.groupChildPosition]} />
        <Text style={[styles.continue, styles.swiftTypo, styles.continueTypo]}>
          Continue
        </Text>
        <Pressable
          style={[
            styles.rectanglePressable,
            styles.groupViewLayout,
            styles.bankAccountChildPosition,
          ]}
          onPress={() => navigation.navigate("PhoneNumber")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bankAccountChildPosition: {
    left: 0,
    top: 0,
  },
  swiftTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_lg,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  swiftCodeTypo: {
    color: Color.gray_100,
    fontWeight: "500",
    marginLeft: -153,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_lg,
  },
  rectanglePosition: {
    width: 305,
    height: 40,
    left: "50%",
    top: "50%",
    marginLeft: -153,
    position: "absolute",
  },
  groupChildPosition: {
    borderRadius: Border.br_xs,
    width: 305,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  continueTypo: {
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  groupViewLayout: {
    height: 46,
    width: 308,
    position: "absolute",
  },
  bankAccountChild: {
    width: 375,
    height: 100,
    backgroundColor: Color.blue_100,
    position: "absolute",
    left: 0,
    top: 0,
  },
  swiftCode: {
    marginTop: -256,
  },
  accountNumber: {
    marginTop: -167,
  },
  fullNameOn: {
    marginTop: -78,
  },
  groupChild: {
    marginTop: -20,
    marginLeft: -152.5,
    backgroundColor: Color.whitesmoke_500,
    height: 40,
  },
  enterSwiftCode: {
    marginTop: -12,
    marginLeft: -122.5,
    color: Color.silver_200,
  },
  rectangleParent: {
    marginTop: -225,
    height: 40,
  },
  rectangleGroup: {
    marginTop: -136,
    height: 40,
  },
  rectangleContainer: {
    marginTop: -47,
    height: 40,
  },
  rectangleView: {
    marginTop: -22,
    marginLeft: -151,
    height: 45,
    backgroundColor: Color.blue_100,
  },
  continue: {
    marginTop: -11,
    marginLeft: -34,
    fontWeight: "600",
    color: Color.iOSKeyBackgroundHighlight,
  },
  rectanglePressable: {
    backgroundColor: Color.gainsboro_700,
  },
  groupView: {
    marginTop: 303,
    marginLeft: -147,
    left: "50%",
    top: "50%",
    height: 46,
    width: 308,
  },
  bankAccount: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default BankAccount;
