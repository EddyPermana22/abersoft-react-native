import React from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

export default function Dismiss_Keyboard(props) {
  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {props.children}
      </TouchableWithoutFeedback>
    </>
  );
}
