import React from "react";
import { View, Text, StyleSheet, Image, AsyncStorage } from "react-native";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../store/actionTypes/userActionTypes";

import UndrawImage from "../assets/images/undraw_data_processing.png";
import ActionButton from "../components/Action_Button";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
    backgroundColor: "#FFF",
  },
  image: {
    marginBottom: 40,
  },
  textDescription: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 25,
    lineHeight: 29,
    color: "#000000",
    marginBottom: 28,
    textAlign: "center",
  },
  textLorem: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 12,
    lineHeight: 14,
    color: "#000000",
    textAlign: "center",
  },
  logoutButton: {
    width: 240,
  },
});

export default function Screen_Onboarding(props) {
  const dispatch = useDispatch();
  return (
    <>
      <View style={styles.container}>
        <Image source={UndrawImage} style={styles.image} />
        <Text style={styles.textDescription}>Welcome to the app</Text>
        <Text style={styles.textLorem}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
          scelerisque porttitor turpis viverra lobortis convallis. Libero
          tristique donec turpis elit adipiscing sit faucibus tincidunt. Erat
          porttitor amet, nibh id lorem. Volutpat quam vestibulum egestas ut
          odio odio. Nunc non, feugiat a diam at lacus augue. Sit lacus pharetra
          eget feugiat aliquam enim adipiscing. Purus nec tortor tellus, neque
          montes. Gravida ornare eu viverra libero. Vulputate massa turpis
          posuere nibh dolor pulvinar bibendum. Viverra scelerisque ut dignissim
          at sit s
        </Text>
        <ActionButton
          displayText="Logout"
          onPress={() => {
            AsyncStorage.removeItem("access_token", (err) => {
              err ? alert(err) : dispatch({ type: LOGOUT });
            });
          }}
          options={{ backgroundColor: "#3549fb", textColor: "#FFF" }}
          style={styles.logoutButton}
        />
      </View>
    </>
  );
}
