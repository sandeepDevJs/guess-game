import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BodyText = (props) => {
	return (
		<Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
	);
};

export default BodyText;

const styles = StyleSheet.create({
	text: {
		fontFamily: "poppins",
	},
});
