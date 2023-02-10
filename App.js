/** @format */

const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import SplashScreenMoNkap from "./screens/SplashScreenMoNkap";
import MonkapProfile from "./screens/MonkapProfile";
import ViewScheduleVeterans from "./screens/ViewScheduleVeterans";
import ViewScheduleVeterans1 from "./screens/ViewScheduleVeterans1";
import NjangiMainDaily1 from "./screens/NjangiMainDaily1";
import ViewScheduleMabingo from "./screens/ViewScheduleMabingo";
import ViewScheduleMabingo1 from "./screens/ViewScheduleMabingo1";
import NjangiWeekly from "./screens/NjangiWeekly";
import NjangiMainDaily3 from "./screens/NjangiMainDaily3";
import NjangiMainDaily4 from "./screens/NjangiMainDaily4";
import AddTargetSavings from "./screens/AddTargetSavings";
import NjangiMainDaily2 from "./screens/NjangiMainDaily2";
import TargetSavingsFirst from "./screens/TargetSavingsFirst";
import TargetSavingsMultiple from "./screens/TargetSavingsMultiple";
import TargetSavingsPaymentMethods from "./screens/TargetSavingsPaymentMethods";
import SaveDaily from "./screens/SaveDaily";
import SaveWeekly from "./screens/SaveWeekly";
import SaveMonthly from "./screens/SaveMonthly";
import SaveIrregularly from "./screens/SaveIrregularly";
import SavingFrequency from "./screens/SavingFrequency";
import AddTargetSavings1 from "./screens/AddTargetSavings1";
import StartTargetSavings from "./screens/StartTargetSavings";
import TransferOthers from "./screens/TransferOthers";
import TransferMomo from "./screens/TransferMomo";
import TransferOmoney from "./screens/TransferOmoney";
import TransferMonkapUser from "./screens/TransferMonkapUser";
import Deposit from "./screens/Deposit";
import OMoneyOnMonkapProfile from "./screens/OMoneyOnMonkapProfile";
import OMoneyValidationSuccessful from "./screens/OMoneyValidationSuccessful";
import OMoneyValidation from "./screens/OMoneyValidation";
import OMoneyRegistration from "./screens/OMoneyRegistration";
import OMCashoutMoneyFrequent from "./screens/OMCashoutMoneyFrequent";
import SendCashoutRequest from "./screens/SendCashoutRequest";
import OMCashoutMoneyScan from "./screens/OMCashoutMoneyScan";
import OMoneyRequestMoneyRecent from "./screens/OMoneyRequestMoneyRecent";
import OMoneyRequestMoneyFrequent from "./screens/OMoneyRequestMoneyFrequent";
import TransferFrequent from "./screens/TransferFrequent";
import TransferCaution from "./screens/TransferCaution";
import TransferRecent from "./screens/TransferRecent";
import OMDepositRequest from "./screens/OMDepositRequest";
import OMDepositMoneyFrequent from "./screens/OMDepositMoneyFrequent";
import OMDepositMoneyScan from "./screens/OMDepositMoneyScan";
import OMDepositMoneyRecent from "./screens/OMDepositMoneyRecent";
import OMoneyOnMonkapHomeSeeBala from "./screens/OMoneyOnMonkapHomeSeeBala";
import OMCashoutMoneyRecent from "./screens/OMCashoutMoneyRecent";
import OMMTNRechargeSms from "./screens/OMMTNRechargeSms";
import OMMTNRechargeData from "./screens/OMMTNRechargeData";
import OMRechargeVoice from "./screens/OMRechargeVoice";
import OMPay from "./screens/OMPay";
import OMPay1 from "./screens/OMPay1";
import MomoOnMonkapProfile from "./screens/MomoOnMonkapProfile";
import MonoValidationSuccessful from "./screens/MonoValidationSuccessful";
import MomoValidation from "./screens/MomoValidation";
import MomoRegistration from "./screens/MomoRegistration";
import CashoutMoneyFrequent from "./screens/CashoutMoneyFrequent";
import RequestMoneyFrequent from "./screens/RequestMoneyFrequent";
import RequestMoneyRecent from "./screens/RequestMoneyRecent";
import TransferFrequent1 from "./screens/TransferFrequent1";
import TransferCaution1 from "./screens/TransferCaution1";
import TransferRecent1 from "./screens/TransferRecent1";
import DepositMoneyFrequent from "./screens/DepositMoneyFrequent";
import SendCashoutRequest1 from "./screens/SendCashoutRequest1";
import CashoutMoneyScan from "./screens/CashoutMoneyScan";
import DepositMoneyRecent from "./screens/DepositMoneyRecent";
import MomoOnMonkapHomeSeeBalanc from "./screens/MomoOnMonkapHomeSeeBalanc";
import CashoutMoneyRecent from "./screens/CashoutMoneyRecent";
import MTNRechargeSms from "./screens/MTNRechargeSms";
import MTNRechargeData from "./screens/MTNRechargeData";
import MTNRechargeVoice from "./screens/MTNRechargeVoice";
import MoMoPay from "./screens/MoMoPay";
import MoMoPay1 from "./screens/MoMoPay1";
import NoCard from "./screens/NoCard";
import NoCard1 from "./screens/NoCard1";
import NoCard2 from "./screens/NoCard2";
import NoCard3 from "./screens/NoCard3";
import NoCard4 from "./screens/NoCard4";
import NoCard5 from "./screens/NoCard5";
import NoCard6 from "./screens/NoCard6";
import NoCard7 from "./screens/NoCard7";
import NoCard8 from "./screens/NoCard8";
import NoCard9 from "./screens/NoCard9";
import LinkBank from "./screens/LinkBank";
import MomoOnMonkapHomeHideBalan from "./screens/MomoOnMonkapHomeHideBalan";
import MTNSplashScreen from "./screens/MTNSplashScreen";
import OMoneyOnMonkapHomeHideBal from "./screens/OMoneyOnMonkapHomeHideBal";
import OMoneySplashScreen from "./screens/OMoneySplashScreen";
import Pay from "./screens/Pay";
import Pay1 from "./screens/Pay1";
import UsePhone from "./screens/UsePhone";
import UsePhone1 from "./screens/UsePhone1";
import Help from "./screens/Help";
import MoNkapHomeScreen from "./screens/MoNkapHomeScreen";
import MoNkapHomeScreen1 from "./screens/MoNkapHomeScreen1";
import LinkBanks from "./screens/LinkBanks";
import Register from "./screens/Register";
import Register1 from "./screens/Register1";
import DepositeAndTransfer from "./screens/DepositeAndTransfer";
import DebitCard from "./screens/DebitCard";
import BankAccount from "./screens/BankAccount";
import InviteFriends from "./screens/InviteFriends";
import InviteFriends1 from "./screens/InviteFriends1";
import LinkBankAccount from "./screens/LinkBankAccount";
import GroupScreen from "./screens/GroupScreen";
import MonkapLoginWithEmail from "./screens/MonkapLoginWithEmail";
import VerifyPhoneNumber from "./screens/VerifyPhoneNumber";
import Register11 from "./screens/Register11";
import MonkapLoginWithPhone from "./screens/MonkapLoginWithPhone";
import MoNkapHomeScreen2 from "./screens/MoNkapHomeScreen2";
import SplashScreenPhoneVerified from "./screens/SplashScreenPhoneVerified";
import LoadUp2 from "./screens/LoadUp2";
import LoadUp from "./screens/LoadUp";
import DailyTransferAmount from "./screens/DailyTransferAmount";
import DepositsTransfers from "./screens/DepositsTransfers";
import DepositsTransfersPopup from "./screens/DepositsTransfersPopup";
import DepositsTransfers1 from "./screens/DepositsTransfers1";
import EmailVerification from "./screens/EmailVerification";
import EmailAddress from "./screens/EmailAddress";
import EmailAddress1 from "./screens/EmailAddress1";
import PhoneNumber from "./screens/PhoneNumber";
import ManageNjangi from "./screens/ManageNjangi";
import ViewScheduleKupexan83 from "./screens/ViewScheduleKupexan83";
import ViewScheduleKupexan831 from "./screens/ViewScheduleKupexan831";
import NjangiDaily2 from "./screens/NjangiDaily2";
import Home1 from "./components/Home";
import Home from "./components/Home";
import Orange1 from "./components/Orange1";
import Orange from "./components/Orange";
import LinkBank1 from "./components/LinkBank";
import Group from "./components/Group";
import MoMo from "./components/MoMo";
import Profile1 from "./components/Profile1";
import Profile from "./components/Profile";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
function BottomTabsRoot({ navigation }) {
  const [bottomTabItemsNormal] = React.useState([
    <Home />,
    <Orange />,
    <LinkBank1 />,
    <MoMo />,
    <Profile />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <Home1 />,
    <Orange1 />,
    <LinkBank1 />,
    <Group />,
    <Profile1 />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }) => {
        const activeIndex = state.index;
        return (
          <View
            style={{
              width: 360,
              height: 44,
              flexDirection: "row",
            }}
          >
            {bottomTabItemsNormal.map((item, index) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    navigation.navigate({
                      name: state.routes[index].name,
                      merge: true,
                    });
                  }}
                >
                  {activeIndex === index
                    ? bottomTabItemsActive[index] || item
                    : item}
                </Pressable>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen
        name="MoNkapHomeScreen1"
        component={MoNkapHomeScreen1}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="OMoneyRegistration"
        component={OMoneyRegistration}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="LinkBank"
        component={LinkBank}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="MTNSplashScreen"
        component={MTNSplashScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="LinkBankAccount"
        component={LinkBankAccount}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Gentium Book Basic": require("./assets/fonts/Gentium_Book_Basic.ttf"),
    "Gentium Basic": require("./assets/fonts/Gentium_Book_Basic.ttf"),
    Rubik: require("./assets/fonts/Rubik.ttf"),
    "Nunito Sans": require("./assets/fonts/Nunito_Sans.ttf"),
    Poppins: require("./assets/fonts/Poppins.ttf"),
    "SF Pro Text": require("./assets/fonts/Rubik_semibold.ttf"),
  });

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator
              initialRouteName="SplashScreenMoNkap"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
              <Stack.Screen
                name="SplashScreenMoNkap"
                component={SplashScreenMoNkap}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MonkapProfile"
                component={MonkapProfile}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ViewScheduleVeterans"
                component={ViewScheduleVeterans}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ViewScheduleVeterans1"
                component={ViewScheduleVeterans1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NjangiMainDaily1"
                component={NjangiMainDaily1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ViewScheduleMabingo"
                component={ViewScheduleMabingo}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ViewScheduleMabingo1"
                component={ViewScheduleMabingo1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NjangiWeekly"
                component={NjangiWeekly}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NjangiMainDaily3"
                component={NjangiMainDaily3}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NjangiMainDaily4"
                component={NjangiMainDaily4}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AddTargetSavings"
                component={AddTargetSavings}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NjangiMainDaily2"
                component={NjangiMainDaily2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TargetSavingsFirst"
                component={TargetSavingsFirst}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TargetSavingsMultiple"
                component={TargetSavingsMultiple}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TargetSavingsPaymentMethods"
                component={TargetSavingsPaymentMethods}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SaveDaily"
                component={SaveDaily}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SaveWeekly"
                component={SaveWeekly}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SaveMonthly"
                component={SaveMonthly}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SaveIrregularly"
                component={SaveIrregularly}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SavingFrequency"
                component={SavingFrequency}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AddTargetSavings1"
                component={AddTargetSavings1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="StartTargetSavings"
                component={StartTargetSavings}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TransferOthers"
                component={TransferOthers}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TransferMomo"
                component={TransferMomo}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TransferOmoney"
                component={TransferOmoney}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TransferMonkapUser"
                component={TransferMonkapUser}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Deposit"
                component={Deposit}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="OMoneyOnMonkapProfile"
                component={OMoneyOnMonkapProfile}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="OMoneyValidationSuccessful"
                component={OMoneyValidationSuccessful}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="OMoneyValidation"
                component={OMoneyValidation}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="OMCashoutMoneyFrequent"
                component={OMCashoutMoneyFrequent}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SendCashoutRequest"
                component={SendCashoutRequest}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="OMCashoutMoneyScan"
                component={OMCashoutMoneyScan}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="OMoneyRequestMoneyRecent"
                component={OMoneyRequestMoneyRecent}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="OMoneyRequestMoneyFrequent"
                component={OMoneyRequestMoneyFrequent}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TransferFrequent"
                component={TransferFrequent}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TransferCaution"
                component={TransferCaution}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TransferRecent"
                component={TransferRecent}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="OMDepositRequest"
                component={OMDepositRequest}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="OMDepositMoneyFrequent"
                component={OMDepositMoneyFrequent}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="OMDepositMoneyScan"
                component={OMDepositMoneyScan}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="OMDepositMoneyRecent"
                component={OMDepositMoneyRecent}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="OMoneyOnMonkapHomeSeeBalance"
                component={OMoneyOnMonkapHomeSeeBala}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="OMCashoutMoneyRecent"
                component={OMCashoutMoneyRecent}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="OMMTNRechargeSms"
                component={OMMTNRechargeSms}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="OMMTNRechargeData"
                component={OMMTNRechargeData}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="OMRechargeVoice"
                component={OMRechargeVoice}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="OMPay"
                component={OMPay}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="OMPay1"
                component={OMPay1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MomoOnMonkapProfile"
                component={MomoOnMonkapProfile}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MonoValidationSuccessful"
                component={MonoValidationSuccessful}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MomoValidation"
                component={MomoValidation}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MomoRegistration"
                component={MomoRegistration}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CashoutMoneyFrequent"
                component={CashoutMoneyFrequent}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="RequestMoneyFrequent"
                component={RequestMoneyFrequent}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="RequestMoneyRecent"
                component={RequestMoneyRecent}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TransferFrequent1"
                component={TransferFrequent1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TransferCaution1"
                component={TransferCaution1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TransferRecent1"
                component={TransferRecent1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DepositMoneyFrequent"
                component={DepositMoneyFrequent}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SendCashoutRequest1"
                component={SendCashoutRequest1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CashoutMoneyScan"
                component={CashoutMoneyScan}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DepositMoneyRecent"
                component={DepositMoneyRecent}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MomoOnMonkapHomeSeeBalance"
                component={MomoOnMonkapHomeSeeBalanc}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CashoutMoneyRecent"
                component={CashoutMoneyRecent}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MTNRechargeSms"
                component={MTNRechargeSms}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MTNRechargeData"
                component={MTNRechargeData}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MTNRechargeVoice"
                component={MTNRechargeVoice}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MoMoPay"
                component={MoMoPay}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MoMoPay1"
                component={MoMoPay1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NoCard"
                component={NoCard}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NoCard1"
                component={NoCard1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NoCard2"
                component={NoCard2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NoCard3"
                component={NoCard3}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NoCard4"
                component={NoCard4}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NoCard5"
                component={NoCard5}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NoCard6"
                component={NoCard6}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NoCard7"
                component={NoCard7}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NoCard8"
                component={NoCard8}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NoCard9"
                component={NoCard9}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MomoOnMonkapHomeHideBalance"
                component={MomoOnMonkapHomeHideBalan}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="OMoneyOnMonkapHomeHideBalance"
                component={OMoneyOnMonkapHomeHideBal}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="OMoneySplashScreen"
                component={OMoneySplashScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Pay"
                component={Pay}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Pay1"
                component={Pay1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="UsePhone"
                component={UsePhone}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="UsePhone1"
                component={UsePhone1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Help"
                component={Help}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MoNkapHomeScreen"
                component={MoNkapHomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="LinkBanks"
                component={LinkBanks}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Register1"
                component={Register1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DepositeAndTransfer"
                component={DepositeAndTransfer}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DebitCard"
                component={DebitCard}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="BankAccount"
                component={BankAccount}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="InviteFriends"
                component={InviteFriends}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="InviteFriends1"
                component={InviteFriends1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Group9"
                component={GroupScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MonkapLoginWithEmail"
                component={MonkapLoginWithEmail}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="VerifyPhoneNumber"
                component={VerifyPhoneNumber}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Register11"
                component={Register11}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MonkapLoginWithPhone"
                component={MonkapLoginWithPhone}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MoNkapHomeScreen2"
                component={MoNkapHomeScreen2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SplashScreenPhoneVerified"
                component={SplashScreenPhoneVerified}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="LoadUp2"
                component={LoadUp2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="LoadUp"
                component={LoadUp}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DailyTransferAmount"
                component={DailyTransferAmount}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DepositsTransfers"
                component={DepositsTransfers}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DepositsTransfersPopup"
                component={DepositsTransfersPopup}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DepositsTransfers1"
                component={DepositsTransfers1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="EmailVerification"
                component={EmailVerification}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="EmailAddress"
                component={EmailAddress}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="EmailAddress1"
                component={EmailAddress1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PhoneNumber"
                component={PhoneNumber}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ManageNjangi"
                component={ManageNjangi}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ViewScheduleKupexan83"
                component={ViewScheduleKupexan83}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ViewScheduleKupexan831"
                component={ViewScheduleKupexan831}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NjangiDaily2"
                component={NjangiDaily2}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : null}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;
