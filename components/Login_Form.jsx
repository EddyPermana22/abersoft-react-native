import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: { marginTop: 30 },
});

export default function Login_Form(props) {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    setLoading(true);
    Axios({
      method: "POST",
      url: "http://abersoft-test-api.prograami.com/users/signin",
      data: {
        email: email,
        password: password,
      },
    })
      .then(({ data }) => {
        setLoading(false);
        dispatch({
          type: SET_TOKEN,
          token: data.access_token,
        });
      })
      .catch((err) => {
        setLoading(false);
        Alert.alert("Login Error", "Invalid Email / Password!");
      });
  };

  return (
    <>
      <View style={styles.container}>
        {loading ? (
          <>
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" />
              <Text style={styles.loadingText}>Loading...</Text>
            </View>
          </>
        ) : (
          <>
            <Text style={styles.formHeader}>Login</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              placeholderTextColor="#000000"
              keyboardType="email-address"
              value={email}
              onChangeText={(text) => setEmail(text)}
              autoCapitalize="none"
            />
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              placeholderTextColor="#000000"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
            />
            <ActionButton
              displayText="Login"
              options={{ backgroundColor: "#3549fb", textColor: "#FFF" }}
              onPress={() => handleLogin()}
            />
          </>
        )}
      </View>
    </>
  );
}
