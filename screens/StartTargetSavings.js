import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Margin } from "../GlobalStyles";

const StartTargetSavings = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.startTargetSavings}>
      <View style={[styles.startTargetSavingsChild, styles.groupPosition]} />
      <Pressable
        style={[styles.group, styles.groupLayout1, styles.groupPosition]}
        onPress={() => navigation.navigate("MoNkapHomeScreen2")}
      >
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <View style={[styles.groupChild, styles.groupLayout1]} />
      </Pressable>
      <View
        style={[
          styles.rectangleParent,
          styles.groupLayout,
          styles.groupItemLayout,
        ]}
      >
        <View
          style={[styles.groupItem, styles.groupLayout, styles.groupItemLayout]}
        />
        <Text style={[styles.startATarget, styles.startATargetTypo]}>
          Start a Target Savings
        </Text>
        <Pressable
          style={[styles.groupInner, styles.groupLayout]}
          onPress={() => navigation.navigate("AddTargetSavings1")}
        />
      </View>
      <Image
        style={[styles.startTargetSavingsItem, styles.startLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-33.png")}
      />
      <Image
        style={[styles.startTargetSavingsInner, styles.startLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-34.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.startLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-34.png")}
      />
      <Text
        style={[
          styles.enjoyTheBestContainer,
          styles.wetherYouAreFlexBox,
          styles.wetherYouAreTypo,
        ]}
      >
        <Text style={styles.enjoyTheBest}>
          Enjoy the best and reliable saving
        </Text>
        <Text style={styles.bySecuringYour}>
          by securing your money for the future
        </Text>
      </Text>
      <Text
        style={[
          styles.wetherYouAre,
          styles.wetherYouAreFlexBox,
          styles.wetherYouAreTypo,
        ]}
      >
        Wether you are planning to buy a phone, a plot, build a house , prepare
        for your kids back to school, plan for a trip........ MoNkap is a patner
        you can rely on.
      </Text>
      <Text
        style={[
          styles.savingForYour,
          styles.wetherYouAreFlexBox,
          styles.wetherYouAreTypo,
        ]}
      >
        Saving for your target projects have never been this easy
      </Text>
      <Text
        style={[
          styles.welcomeToMonkap,
          styles.wetherYouAreFlexBox,
          styles.startATargetTypo,
        ]}
      >
        Welcome to MoNkap Target Saving
      </Text>
      <View style={styles.icons8MoneyBox641Parent}>
        <Image
          style={styles.icons8MoneyBox641}
          resizeMode="cover"
          source={require("../assets/icons8moneybox64-1.png")}
        />
        <Text style={[styles.smallProjects, styles.projectsTypo]}>
          Small Projects
        </Text>
      </View>
      <View style={styles.icons8MoneyBox551Parent}>
        <Image
          style={styles.icons8MoneyBox551}
          resizeMode="cover"
          source={require("../assets/icons8moneybox55-1.png")}
        />
        <Text style={[styles.bigProjects, styles.projectsTypo]}>
          Big Projects
        </Text>
      </View>
      <View style={styles.weDeyWithYouParent}>
        <Text style={[styles.weDeyWith, styles.projectsTypo]}>
          We dey with you
        </Text>
        <Image
          style={styles.arrowIcon}
          resizeMode="cover"
          source={require("../assets/arrow-9.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    left: "50%",
    top: "50%",
  },
  groupLayout1: {
    height: 57,
    width: 47,
    position: "absolute",
  },
  groupLayout: {
    height: 45,
    position: "absolute",
  },
  groupItemLayout: {
    width: 305,
    height: 45,
    left: "50%",
    top: "50%",
  },
  startATargetTypo: {
    color: Color.iOSKeyBackgroundHighlight,
    fontFamily: FontFamily.gentiumBookBasic,
    fontWeight: "700",
    left: "50%",
    top: "50%",
  },
  startLayout: {
    width: 13,
    top: 661,
    height: 13,
    position: "absolute",
  },
  wetherYouAreFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  wetherYouAreTypo: {
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBasic,
    fontSize: FontSize.size_xl,
    textAlign: "center",
  },
  projectsTypo: {
    color: Color.blue_100,
    left: 0,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBasic,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  startTargetSavingsChild: {
    marginTop: -406,
    marginLeft: -188,
    width: 375,
    height: 100,
    backgroundColor: Color.blue_100,
    position: "absolute",
  },
  vectorIcon: {
    marginTop: -61.5,
    marginLeft: -56.5,
    width: 16,
    height: 13,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupChild: {
    top: -57,
    left: -47,
    backgroundColor: Color.gainsboro_700,
  },
  group: {
    marginTop: -324,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    marginLeft: -121,
  },
  groupItem: {
    marginTop: -22.5,
    marginLeft: -152.5,
    borderRadius: Border.br_xs,
    backgroundColor: Color.blue_100,
  },
  startATarget: {
    marginTop: -11.5,
    marginLeft: -105.5,
    fontSize: FontSize.size_4xl,
    textAlign: "left",
    position: "absolute",
  },
  groupInner: {
    left: 1,
    width: 304,
    top: 0,
    backgroundColor: Color.gainsboro_700,
  },
  rectangleParent: {
    marginTop: 290,
    marginLeft: -152,
  },
  startTargetSavingsItem: {
    left: 155,
  },
  startTargetSavingsInner: {
    left: 173,
  },
  ellipseIcon: {
    left: 191,
  },
  enjoyTheBest: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  bySecuringYour: {
    margin: Margin.m_3xs,
  },
  enjoyTheBestContainer: {
    top: 337,
    left: 54,
  },
  wetherYouAre: {
    top: 451,
    left: 41,
    width: 278,
    height: 81,
  },
  savingForYour: {
    top: 126,
    left: 39,
    width: 282,
    height: 20,
  },
  welcomeToMonkap: {
    marginTop: -376,
    fontSize: FontSize.size_6xl,
    width: 241,
    height: 27,
    marginLeft: -121,
  },
  icons8MoneyBox641: {
    left: 10,
    width: 75,
    height: 71,
    top: 0,
    position: "absolute",
  },
  smallProjects: {
    top: 73,
  },
  icons8MoneyBox641Parent: {
    top: 190,
    left: 45,
    width: 94,
    height: 92,
    position: "absolute",
  },
  icons8MoneyBox551: {
    left: 2,
    width: 70,
    height: 65,
    top: 0,
    position: "absolute",
  },
  bigProjects: {
    top: 67,
  },
  icons8MoneyBox551Parent: {
    top: 191,
    left: 237,
    width: 78,
    height: 86,
    position: "absolute",
  },
  weDeyWith: {
    fontStyle: "italic",
    top: 0,
  },
  arrowIcon: {
    top: 15,
    left: 9,
    width: 83,
    height: 29,
    position: "absolute",
  },
  weDeyWithYouParent: {
    top: 212,
    left: 132,
    width: 99,
    height: 30,
    position: "absolute",
  },
  startTargetSavings: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default StartTargetSavings;
