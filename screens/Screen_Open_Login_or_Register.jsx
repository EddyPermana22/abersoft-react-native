import React from "react";
import { View } from "react-native";

import GradientImageBackground from "../components/Gradient_Image_Background";
import ActionButton from "../components/Action_Button";

export default function Screen_Open_Login_or_Register(props) {
  return (
    <>
      <GradientImageBackground>
        <View style={{ alignItems: "center", paddingTop: 550 }}>
          <ActionButton
            style={{ width: 267 }}
            displayText="Login"
            onPress={() => props.navigation.navigate("Login")}
          />
        </View>
      </GradientImageBackground>
    </>
  );
}
