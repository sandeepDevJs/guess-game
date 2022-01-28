import { StyleSheet, Text, View } from "react-native";
import React from "react";

import COLORS from "../constants/colors";

const NumberContainer = (props) => {
	return (
		<View style={styles.ctn}>
			<Text style={styles.number}>{props.children}</Text>
		</View>
	);
};

export default NumberContainer;

const styles = StyleSheet.create({
	ctn: {
		borderWidth: 2,
		borderColor: COLORS.accent,
		padding: 10,
		borderRadius: 10,
		marginVertical: 10,
		alignItems: "center",
		justifyContent: "center",
	},

	number: {
		color: COLORS.accent,
		fontSize: 22,
	},
});
