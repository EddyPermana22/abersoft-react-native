import React from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import DismissKeyboard from "../components/Dismiss_Keyboard";

export default function Gradient_Image_Background(props) {
  return (
    <>
      <DismissKeyboard>
        <LinearGradient
          colors={["#3549FB", "#4ED2DA"]}
          location={[0.02, 0.74]}
          style={{ flex: 1 }}
        >
          <View
            style={{
              position: "absolute",
              width: 414,
              height: 166,
              left: -157,
              backgroundColor: "#F6F6F6",
              opacity: 0.05,
              transform: [{ rotate: "-51deg" }],
            }}
          ></View>
          {props.children}
        </LinearGradient>
      </DismissKeyboard>
    </>
  );
}
