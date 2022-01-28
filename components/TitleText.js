import { StyleSheet, Text } from "react-native";
import React from "react";

const TitleText = (props) => {
	return (
		<Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
	);
};

export default TitleText;

const styles = StyleSheet.create({
	text: {
		fontFamily: "poppins-bold",
		fontSize: 18,
	},
});
