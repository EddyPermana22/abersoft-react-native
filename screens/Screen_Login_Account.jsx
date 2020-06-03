import React from "react";
import { KeyboardAvoidingView } from "react-native";

import GradientImageBackground from "../components/Gradient_Image_Background";
import DismissKeyboard from "../components/Dismiss_Keyboard";
import LoginForm from "../components/Login_Form";

export default function Screen_Login_Account(props) {
  return (
    <>
      <GradientImageBackground></GradientImageBackground>
      <DismissKeyboard>
        <KeyboardAvoidingView style={{ backgroundColor: "#fff" }}>
          <LoginForm navigation={props.navigation} />
        </KeyboardAvoidingView>
      </DismissKeyboard>
    </>
  );
}
