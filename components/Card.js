import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Card = (props) => {
	return (
		<View style={{ ...styles.card, ...props.style }}>{props.children}</View>
	);
};

export default Card;

const styles = StyleSheet.create({
	card: {
		shadowColor: "black",
		// shadowRadius: 0,
		shadowOpacity: 0.26,
		backgroundColor: "white",
		elevation: 5,
		padding: 20,
		borderRadius: 10,
	},
});
