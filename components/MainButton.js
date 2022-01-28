import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import COLORS from "../constants/colors";

const MainButton = (props) => {
	return (
		<TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
			<View style={styles.button}>
				<Text style={styles.btnText}>{props.children}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default MainButton;

const styles = StyleSheet.create({
	button: {
		backgroundColor: COLORS.primary,
		paddingVertical: 12,
		paddingHorizontal: 30,
		borderRadius: 25,
	},

	btnText: {
		color: "white",
		fontFamily: "poppins",
		fontSize: 18,
	},
});
