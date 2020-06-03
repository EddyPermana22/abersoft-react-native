import React, { useState, useEffect } from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  AsyncStorage,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector, useDispatch } from "react-redux";
import { SET_TOKEN } from "../store/actionTypes/userActionTypes";

//screen
import ScreenOpenLoginOrRegister from "../screens/Screen_Open_Login_or_Register";
import ScreenLoginAccount from "../screens/Screen_Login_Account";
import ScreenOnboarding from "../screens/Screen_Onboarding";

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function mainNavigation(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AsyncStorage.getItem("access_token", (err, access_token) => {
      setLoading(false);
      err
        ? alert(err)
        : access_token
        ? dispatch({
            type: SET_TOKEN,
            token: access_token,
          })
        : null;
    });
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <NavigationContainer>
          <Stack.Navigator>
            {user.token ? (
              <Stack.Screen
                name="Onboarding"
                component={ScreenOnboarding}
                options={{ headerShown: false }}
              />
            ) : (
              <>
                <Stack.Screen
                  name="Home"
                  component={ScreenOpenLoginOrRegister}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Login"
                  component={ScreenLoginAccount}
                  options={{
                    headerTransparent: true,
                    title: "",
                    headerTintColor: "#FFFFFF",
                  }}
                />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}
