import * as React from "react";
import { useMemo } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageSourcePropType,
} from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const RequestFormContainer = ({ carImageUrl, propTop, propBottom }) => {
  const formToFillStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("bottom", propBottom),
    };
  }, [propTop, propBottom]);

  return (
    <View style={[styles.formToFill, formToFillStyle]}>
      <View style={[styles.formToFillChild, styles.childBg]} />
      <View style={[styles.rectangleParent, styles.amountPosition]}>
        <View
          style={[
            styles.groupChild,
            styles.groupBorder,
            styles.groupChildPosition,
            styles.childBg,
          ]}
        />
        <Text style={[styles.reason, styles.reasonTypo, styles.reasonClr]}>
          Reason
        </Text>
        <Text
          style={[styles.enterYourMotive, styles.enterClr, styles.reasonTypo]}
        >
          Enter your motive for transfer
        </Text>
      </View>
      <View style={[styles.amount, styles.amountPosition]}>
        <View style={styles.rectangleGroup}>
          <View
            style={[
              styles.groupChild,
              styles.groupBorder,
              styles.groupChildPosition,
              styles.childBg,
            ]}
          />
          <Text
            style={[
              styles.amount1,
              styles.amountTypo,
              styles.reasonClr,
              styles.xafTypo,
            ]}
          >
            Amount
          </Text>
          <View style={[styles.rectangleContainer, styles.groupChildPosition]}>
            <View style={[styles.groupInner, styles.groupBorder]} />
            <Text style={[styles.xaf, styles.amountTypo, styles.xafTypo]}>
              XAF
            </Text>
            <Image
              style={styles.groupIcon}
              resizeMode="cover"
              source={carImageUrl}
            />
          </View>
          <Text
            style={[styles.enterAmountTo, styles.amountTypo, styles.enterClr]}
          >
            Enter amount to Request
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childBg: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    left: "0%",
    width: "100%",
  },
  amountPosition: {
    left: "4.24%",
    right: "4.85%",
    width: "90.91%",
    height: "33.33%",
    position: "absolute",
  },
  groupBorder: {
    borderColor: "#0000ee",
    borderStyle: "solid",
    position: "absolute",
  },
  groupChildPosition: {
    top: "35.71%",
    height: "64.29%",
    bottom: "0%",
    right: "0%",
  },
  reasonTypo: {
    textAlign: "left",
    lineHeight: 20,
    letterSpacing: 1.8,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  reasonClr: {
    color: Color.iOSKeyLabel,
    top: "0%",
  },
  enterClr: {
    color: Color.gray_2200,
    top: "55.36%",
  },
  amountTypo: {
    textAlign: "center",
    lineHeight: 20,
    letterSpacing: 1.8,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  xafTypo: {
    fontFamily: FontFamily.gentiumBookBasic,
    textAlign: "center",
  },
  formToFillChild: {
    borderRadius: Border.br_3xs,
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_2xs,
    borderWidth: 0.3,
  },
  reason: {
    left: "0.33%",
  },
  enterYourMotive: {
    left: "1%",
  },
  rectangleParent: {
    top: "52.98%",
    bottom: "13.69%",
  },
  amount1: {
    left: "0.38%",
  },
  groupInner: {
    height: "102.78%",
    width: "101.23%",
    top: "-1.39%",
    right: "-0.62%",
    bottom: "-1.39%",
    left: "-0.62%",
    borderTopRightRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_3xs,
    backgroundColor: Color.blue_100,
    borderWidth: 1,
  },
  xaf: {
    height: "52.78%",
    width: "40.74%",
    top: "33.33%",
    left: "16.05%",
    fontWeight: "700",
    color: Color.iOSKeyBackgroundHighlight,
  },
  groupIcon: {
    height: "65.28%",
    width: "27.47%",
    top: "19.44%",
    right: "9.57%",
    bottom: "15.28%",
    left: "62.96%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  rectangleContainer: {
    width: "27%",
    left: "73%",
    position: "absolute",
  },
  enterAmountTo: {
    left: "2.67%",
    fontFamily: FontFamily.gentiumBasic,
  },
  rectangleGroup: {
    left: "0%",
    width: "100%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  amount: {
    top: "10.71%",
    bottom: "55.95%",
  },
  formToFill: {
    height: "21%",
    width: "91.67%",
    top: "59.5%",
    right: "4.17%",
    bottom: "19.5%",
    left: "4.17%",
    position: "absolute",
  },
});

export default RequestFormContainer;
