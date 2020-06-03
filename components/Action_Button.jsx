import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Action_Button(props) {
  const styles = StyleSheet.create({
    button: {
      marginTop: 20,
      backgroundColor: props.options?.backgroundColor || "#FFF",
      borderRadius: 25,
      height: 33,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontFamily: "Roboto",
      color: props.options?.textColor || "#000",
      fontSize: 16,
      fontWeight: "500",
      lineHeight: 19,
    },
  });

  return (
    <>
      <TouchableOpacity
        style={[styles.button, props.style]}
        onPress={props.onPress}
      >
        <Text style={styles.text}>{props.displayText}</Text>
      </TouchableOpacity>
    </>
  );
}
