import React from "react";
import { View, Text, TextInput, StyleSheet, AsyncStorage } from "react-native";
import { useDispatch } from "react-redux";
import { SET_TOKEN, LOGIN } from "../store/actionTypes/userActionTypes";

import Axios from "axios";

import ActionButton from "../components/Action_Button";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 51,
    borderTopRightRadius: 51,
    paddingHorizontal: 54,
    paddingVertical: 44,
    top: -50,
  },
  formHeader: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 23,
    lineHeight: 27,
  },
  textInput: {
    height: 40,
    borderBottomColor: "#3549FB",
    borderBottomWidth: 1,
    lineHeight: 19,
    marginBottom: 20,
  },
});

export default function Login_Form(props) {
  const dispatch = useDispatch();
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.formHeader}>Login</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          placeholderTextColor="#000000"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor="#000000"
        />
        <ActionButton
          displayText="Login"
          options={{ backgroundColor: "#3549fb", textColor: "#FFF" }}
          onPress={() => {
            dispatch({
              type: SET_TOKEN,
              token: "asd@mail.com",
            });
          }}
        />
      </View>
    </>
  );
}
